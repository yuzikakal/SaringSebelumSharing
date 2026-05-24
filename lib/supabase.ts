import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

// TAMBAHKAN OPTIONS INI
export const supabase = createClient(supabaseUrl, supabaseKey, {
  db: {
    schema: 'public'
  },
  auth: {
    persistSession: false, // Karena ini form publik tanpa login, kita matikan session agar tidak bentrok dengan RLS
    autoRefreshToken: false,
  }
})