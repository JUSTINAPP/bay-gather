import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client. Uses the service role key so it can write
 * to tables regardless of RLS policy — never import this from client
 * components, only from Route Handlers / Server Actions.
 */
export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
