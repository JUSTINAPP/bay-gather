import Link from "next/link";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer className="bg-bay-blue text-cream mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14 flex flex-col items-center gap-6 text-center">
        <Wordmark variant="stacked" tone="cream" />
        <p className="font-serif italic text-lg max-w-md">
          &ldquo;Good food. Well run. No fuss.&rdquo;
        </p>
        <nav className="flex flex-wrap justify-center gap-6">
          <Link href="/menu" className="eyebrow text-xs hover:opacity-75">
            Menu
          </Link>
          <Link href="/about" className="eyebrow text-xs hover:opacity-75">
            About
          </Link>
          <Link href="/contact" className="eyebrow text-xs hover:opacity-75">
            Contact
          </Link>
        </nav>
        <p className="eyebrow text-[0.65rem] opacity-70">
          Mornington Peninsula, Victoria &middot; Part of the VSB Group
        </p>
        <p className="text-xs opacity-60">
          &copy; {new Date().getFullYear()} Bay &amp; Gather Catering. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
