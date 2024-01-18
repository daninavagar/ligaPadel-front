
import * as supabase from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabaseClient = supabase.createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      }
})


export const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'google',
    options: {
        redirectTo: 'https://google.com'
      }
})

export async function signInWithOAuth() {


    try {

        const { data, error } = await supabaseClient.auth.signInWithOAuth({
            provider: 'google'
        })
        if (error) throw new Error("Something failed when signing in")
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

export async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw new Error("Something failed when signing out")
}
