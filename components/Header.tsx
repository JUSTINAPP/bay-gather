import Link from "next/link";
import Wordmark from "./Wordmark";

const NAV_LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-stone/20 bg-cream/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" aria-label="Bay & Gather home">
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
        <Link
          href="/contact"
          className="sm:hidden eyebrow text-xs text-bay-blue"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
