import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.name !== "string" || typeof body.email !== "string") {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const enquiry = {
    name: body.name,
    email: body.email,
    phone: body.phone ?? null,
    event_type: body.eventType ?? null,
    event_date: body.eventDate || null,
    guest_count: body.guestCount ? Number(body.guestCount) : null,
    message: body.message ?? null,
  };

  const supabase = getSupabaseServerClient();

  if (!supabase) {
    // Supabase isn't configured yet — log so nothing is silently lost
    // during local development, but don't fail the request.
    console.warn(
      "[contact] Supabase env vars not set — enquiry logged only:",
      enquiry
    );
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("enquiries").insert(enquiry);

  if (error) {
    console.error("[contact] Supabase insert failed:", error);
    return NextResponse.json(
      { error: "Could not save your enquiry. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, stored: true });
}
