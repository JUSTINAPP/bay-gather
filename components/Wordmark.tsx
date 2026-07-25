import Image from "next/image";

/**
 * Real Bay & Gather logo, "Catering" baked into the artwork itself:
 * - bay-gather-catering-stacked-horizontal-blue.svg → header (wide format,
 *   BAY/&/GATHER mark beside "CATERING", suited to a slim nav bar)
 * - bay-gather-logo-white-catering.svg → footer (full stacked lockup)
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
      src="/bay-gather-catering-stacked-horizontal-blue.svg"
      alt="Bay & Gather Catering"
      width={121}
      height={53}
      priority
      unoptimized
      className={`h-11 w-auto sm:h-12 ${className}`}
    />
  );
}
