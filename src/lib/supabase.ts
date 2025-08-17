import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface ContactMessage {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
}