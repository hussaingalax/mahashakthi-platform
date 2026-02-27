import { createClient } from "@supabase/supabase-js"

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://zorilulohlswghkfjuio.supabase.co"

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvcmlsdWxvaGxzd2doa2ZqdWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0OTIwNjQsImV4cCI6MjA4NDA2ODA2NH0.s3GnrI9Yh41qqZb-qzDIwBiYzd8H3v-BqLT6mbzVh90"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
