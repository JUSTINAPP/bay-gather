"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const EVENT_TYPES = [
  "Wedding",
  "Private event",
  "Corporate function",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl text-bay-blue mb-2">Thanks — got it.</h2>
        <p className="text-stone">
          We&apos;ll be in touch shortly to talk through your event.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 max-w-xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Phone" name="phone" type="tel" />
        <div>
          <label className="eyebrow text-xs block mb-2" htmlFor="eventType">
            Event type
          </label>
          <select
            id="eventType"
            name="eventType"
            className="w-full border border-stone/30 bg-white rounded-md px-3 py-2 text-sm"
          >
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Event date" name="eventDate" type="date" />
        <Field label="Guest count" name="guestCount" type="number" min="1" />
      </div>
      <div>
        <label className="eyebrow text-xs block mb-2" htmlFor="message">
          Tell us about your event
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full border border-stone/30 bg-white rounded-md px-3 py-2 text-sm"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full px-7 py-3 eyebrow text-xs bg-bay-blue text-cream hover:bg-near-black transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <div>
      <label className="eyebrow text-xs block mb-2" htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        className="w-full border border-stone/30 bg-white rounded-md px-3 py-2 text-sm"
      />
    </div>
  );
}
