import Image from "next/image";

/**
 * Real Bay & Gather logo:
 * - bay-gather-header-logo-02.svg → header (wide "BAY & GATHER" lockup,
 *   no "Catering" text — suited to a slim nav bar)
 * - bay-gather-logo-white-catering.svg → footer (full stacked lockup,
 *   includes "Catering")
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
      src="/bay-gather-header-logo-02.svg"
      alt="Bay & Gather"
      width={173}
      height={40}
      priority
      unoptimized
      className={`h-9 w-auto sm:h-10 ${className}`}
    />
  );
}
