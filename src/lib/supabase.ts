import { createClient } from '@supabase/supabase-js'

// For development, we'll skip Supabase integration temporarily
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

export interface ContactMessage {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
}