# Bay & Gather Catering — website

Next.js (App Router) + TypeScript + Tailwind v4, with a Supabase-backed
contact form. Built from the Bay & Gather brand guidelines (June 2026).

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** — brand tokens (colours + fonts) defined in
  `app/globals.css` via `@theme inline`, no `tailwind.config.ts` needed
- **Fonts** — Cormorant Garamond (serif, headings) + Jost (sans, body),
  loaded via `next/font/google`
- **Supabase** — optional, only used to store contact-form enquiries
- **Vercel** — target deploy platform

## Status / what still needs doing

- **Logo**: the brand guidelines PDF describes the mark (a Cormorant
  Garamond ampersand between "BAY" and "GATHER") but includes no actual
  SVG/EPS logo file. `components/Wordmark.tsx` is a type-only stand-in —
  swap it for the real files the moment VSB Group supplies them.
- **Copy**: all page copy is placeholder, written in the brand's tone of
  voice, ready to be replaced with final copy/menus/photos.
- **Contact details**: the email/phone on the Contact page are
  placeholders — update in `app/contact/page.tsx`.
- **Images**: no photography yet — pages currently rely on colour/type
  only. Add real imagery per the brand guide's photography direction
  (real food, real light, minimal styling) when available.

## Brand tokens (from the guidelines)

| Name | Hex |
|---|---|
| Deep Bay Blue | `#1B3A5C` |
| Weathered Stone | `#7A7470` |
| Sandstone | `#C4A882` |
| Coastal Green | `#4A7C6F` |
| Warm Cream | `#F7F5F1` |
| Near Black | `#1A1714` |

Available as Tailwind utilities: `bg-bay-blue`, `text-stone`, `bg-sandstone`,
`text-coastal-green`, `bg-cream`, `text-near-black`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Supabase (contact form)

The contact form posts to `/api/contact`. Without Supabase configured it
still works — it just logs the enquiry server-side instead of storing it,
so local dev works out of the box.

To wire up storage:

1. Create a Supabase project.
2. Run the migration in `supabase/migrations/0001_create_enquiries.sql`
   (via the Supabase SQL editor, or `supabase db push` if using the CLI).
3. Copy `.env.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only — never expose to the client)
4. Add the same three env vars in Vercel project settings before deploying.

## Deploy

Push to GitHub, then import the repo in Vercel. Add the Supabase env vars
in Vercel's Project Settings → Environment Variables before the first
production build if you want enquiries stored.
