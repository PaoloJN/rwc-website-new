import { createClient } from "@supabase/supabase-js"
import { DEMO_DATA } from "./constants"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const isDemo = !supabaseUrl || !supabaseAnonKey

let supabase: ReturnType<typeof createClient>

if (isDemo) {
  supabase = DEMO_DATA
} else {
  supabase = createClient(supabaseUrl!, supabaseAnonKey!, {
    auth: {
      persistSession: false,
    },
  })
}

export { supabase, isDemo }

