import Image from "next/image";

/**
 * Real Bay & Gather stacked lockup (BAY / & / GATHER / CATERING),
 * supplied as SVG with "Catering" baked into the artwork itself:
 * - bay-gather-logo-blue-catering.svg  → light backgrounds (header)
 * - bay-gather-logo-white-catering.svg → dark backgrounds (footer)
 * No separate "Catering" text is added alongside these — it's already
 * part of the mark.
 * `unoptimized` skips Next's image pipeline (SVGs don't need resizing,
 * and it avoids needing dangerouslyAllowSVG in next.config).
 */

type WordmarkProps = {
  variant?: "header" | "footer";
  className?: string;
};

export default function Wordmark({
  variant = "header",
  className = "",
}: WordmarkProps) {
  if (variant === "footer") {
    return (
      <Image
        src="/bay-gather-logo-white-catering.svg"
        alt="Bay & Gather Catering"
        width={148}
        height={140}
        unoptimized
        className={`h-32 w-auto sm:h-36 ${className}`}
      />
    );
  }

  return (
    <Image
      src="/bay-gather-logo-blue-catering.svg"
      alt="Bay & Gather Catering"
      width={59}
      height={56}
      priority
      unoptimized
      className={`h-14 w-auto sm:h-16 ${className}`}
    />
  );
}
