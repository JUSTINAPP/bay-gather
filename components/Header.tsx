"use client";

import Link from "next/link";
import { useState } from "react";
import Wordmark from "./Wordmark";

const NAV_LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="border-b border-stone/20 bg-cream/95 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            aria-label="Bay & Gather home"
            onClick={() => setOpen(false)}
          >
            <Wordmark variant="header" />
          </Link>

          <nav className="hidden sm:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow text-xs text-near-black hover:text-bay-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 sm:hidden">
            <Link href="/contact" className="eyebrow text-xs text-bay-blue">
              Enquire
            </Link>
            {/* Thin-line hamburger, morphs into a close (x) icon when open */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-6 w-6 flex-col items-center justify-center gap-[5px] cursor-pointer"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span
                className={`block h-px w-5 bg-bay-blue transition-transform origin-center ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-bay-blue transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-bay-blue transition-transform origin-center ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-width mobile drawer, slides under the sticky header */}
      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col overflow-y-auto bg-cream px-8 pt-4 pb-8 sm:hidden transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="eyebrow text-sm text-near-black hover:text-bay-blue transition-colors py-4 border-b border-stone/20"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-6 rounded-full bg-bay-blue px-7 py-3 text-center eyebrow text-xs text-cream hover:bg-near-black transition-colors"
        >
          Enquire about your event
        </Link>
      </div>
    </>
  );
}
