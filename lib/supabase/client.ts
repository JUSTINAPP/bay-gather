import { createClient } from "@supabase/supabase-js";

/**
 * Browser-safe Supabase client (anon key only). Not used yet — the
 * contact form posts to /api/contact instead — but here for when the
 * site needs client-side reads (e.g. a public menu managed in Supabase).
 */
export function getSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("Supabase env vars are not set.");
  }

  return createClient(url, anonKey);
}
