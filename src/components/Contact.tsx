import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Youtube } from "lucide-react";
import { supabase, type ContactMessage } from "@/lib/supabase";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const contactData: ContactMessage = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      if (supabase) {
        const { error } = await supabase
          .from('contact_messages')
          .insert([contactData]);

        if (error) throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-hero-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to work on new IT projects and creative collaborations. 
                Whether you need network administration, customer support solutions, team leadership, 
                or video editing and motion graphics for digital campaigns, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">akabrehamkassahun@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+251 911 906 140</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Abrehamgethub"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-hero-gradient hover:text-white transition-all duration-300 shadow-soft hover:shadow-medium"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abreham-techsupport/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-hero-gradient hover:text-white transition-all duration-300 shadow-soft hover:shadow-medium"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.behance.net/abrehamkassahun"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Behance"
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-hero-gradient hover:text-white transition-all duration-300 shadow-soft hover:shadow-medium"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M6.5 4.5c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v15c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2v-15zM8.5 6v12h7V6h-7z"/>
                    <circle cx="12" cy="9" r="1.5"/>
                    <path d="M10 12.5h4v1h-4z"/>
                    <path d="M10 14.5h4v1h-4z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@abrehamkassahun917/playlists"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-hero-gradient hover:text-white transition-all duration-300 shadow-soft hover:shadow-medium"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card-gradient shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-background/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    className="bg-background/50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-background/50"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-hero-gradient hover:shadow-medium transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;