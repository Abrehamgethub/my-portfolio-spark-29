import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per hour per IP

// In-memory store for rate limiting (resets when function cold-starts)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; resetAt?: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  // Clean up expired entries periodically
  if (rateLimitStore.size > 1000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (value.resetAt < now) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!record || record.resetAt < now) {
    // No record or expired - create new window
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    // Rate limit exceeded
    return { allowed: false, resetAt: record.resetAt };
  }

  // Increment counter
  record.count++;
  rateLimitStore.set(ip, record);
  return { allowed: true };
}

// Input validation schema
const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message must be less than 5000 characters"),
});

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Helper function to escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  return text.replace(/[&<>"'/]/g, (char) => htmlEscapeMap[char]);
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Extract client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";

    // Check rate limit
    const rateLimitCheck = checkRateLimit(clientIp);
    if (!rateLimitCheck.allowed) {
      const resetDate = new Date(rateLimitCheck.resetAt!);
      console.warn(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ 
          error: "Too many requests. Please try again later.",
          resetAt: resetDate.toISOString()
        }),
        {
          status: 429,
          headers: { 
            "Content-Type": "application/json",
            "Retry-After": Math.ceil((rateLimitCheck.resetAt! - Date.now()) / 1000).toString(),
            ...corsHeaders 
          },
        }
      );
    }

    const requestData: ContactEmailRequest = await req.json();

    // Validate input data
    const validationResult = contactFormSchema.safeParse(requestData);
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error);
      return new Response(
        JSON.stringify({ 
          error: "Invalid input data", 
          details: validationResult.error.errors 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    console.log("Processing contact form submission from:", email);

    // Initialize Supabase client with service role for database access
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store the contact message in the database using service role
    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert({
        name,
        email,
        subject,
        message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store contact message");
    }

    console.log("Contact message stored successfully");

    // Send both emails for testing: confirmation and notification
    // Note: Both emails temporarily sent to akabrehamkassahun@gmail.com for testing
    // Once you verify your domain at resend.com/domains, change confirmation email to use [email] variable
    const emailResponse = await resend.batch.send([
      // 1. Confirmation email (temporarily sent to your verified email for testing)
      {
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["akabrehamkassahun@gmail.com"], // Temporarily using your verified email for testing
        subject: "Thank you for contacting us!",
        html: `
          <h2>Thank You for Reaching Out!</h2>
          <p>Hi ${escapeHtml(name)},</p>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <hr />
          <p><strong>Your message:</strong></p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
          <hr />
          <p>Best regards,<br>The Team</p>
        `,
      },
      // 2. Notification email to you
      {
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["akabrehamkassahun@gmail.com"],
        subject: `New Contact Form Submission: ${escapeHtml(subject)}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
      },
    ]);

    console.log("Emails sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "An error occurred" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
