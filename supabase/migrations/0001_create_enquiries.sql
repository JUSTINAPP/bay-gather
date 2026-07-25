-- Enquiries submitted via the /contact form.
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  event_type text,
  event_date date,
  guest_count integer,
  message text
);

alter table public.enquiries enable row level security;

-- Writes only happen via the server (service role key), which bypasses
-- RLS, so no insert policy is needed for anon/authenticated roles.
-- Add a policy here if you later want an admin dashboard to read these
-- rows directly from the client.
