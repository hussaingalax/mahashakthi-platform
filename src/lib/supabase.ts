import { createClient } from "@supabase/supabase-js"

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://cwjngbptwcasfjivsofw.supabase.co/rest/v1/"

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3am5nYnB0d2Nhc2ZqaXZzb2Z3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4Mjk0OTcsImV4cCI6MjA5NjQwNTQ5N30.TTzbEaQlC1xOTuZjeRXzgJX7p8-nvoRkoyT2F1MEcIA"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
