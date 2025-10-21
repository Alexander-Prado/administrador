import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kanjwnkodfekmxvvmane.supabase.co'   // <- reemplaza con tu URL de Supabase
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imthbmp3bmtvZGZla214dnZtYW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNTYxMDIsImV4cCI6MjA3NjYzMjEwMn0.MO-At56ZjeK2lnf3hUTHGx2c7FoiUjmmCqiXeeNruOA'           // <- reemplaza con tu clave pública

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
