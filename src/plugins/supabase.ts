import { createClient } from "@supabase/supabase-js";

const supabaseUrl = /*process.env.REACT_APP_PUBLIC_SUPABASE_URL ||*/ 'https://cswthhgqgqtashimoimz.supabase.co'
const supabaseAnonKey = /*process.env.REACT_APP_PUBLIC_SUPABASE_ANON_KEY ||*/ 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzd3RoaGdxZ3F0YXNoaW1vaW16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTczODA3MDUsImV4cCI6MjAxMjk1NjcwNX0.b7fZEHONC4da-PqigmDkVZ4fO_lew9HStlkz833y3SE'


const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase