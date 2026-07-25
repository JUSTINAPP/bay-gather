import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow text-xs text-coastal-green">{children}</span>
  );
}

const BUTTON_VARIANTS = {
  primary: "bg-bay-blue text-cream hover:bg-near-black",
  secondary: "border border-bay-blue text-bay-blue hover:bg-bay-blue hover:text-cream",
  // For use over hero photography rather than the cream/white background.
  onDark: "bg-cream text-bay-blue hover:bg-white",
  onDarkSecondary:
    "border border-cream text-cream hover:bg-cream hover:text-bay-blue",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof BUTTON_VARIANTS;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 eyebrow text-xs transition-colors";
  return (
    <Link href={href} className={`${base} ${BUTTON_VARIANTS[variant]}`}>
      {children}
    </Link>
  );
}
