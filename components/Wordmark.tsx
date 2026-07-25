import Image from "next/image";

/**
 * Real Bay & Gather horizontal lockup, supplied as SVG:
 * - bay-gather-logo-blue.svg  → light backgrounds (header)
 * - bay-gather-logo-white.svg → dark backgrounds (footer)
 * Neither includes the word "Catering", so it's set alongside as type.
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
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <Image
          src="/bay-gather-logo-white.svg"
          alt="Bay & Gather"
          width={190}
          height={56}
          unoptimized
          className="h-12 w-auto sm:h-14"
        />
        <span className="eyebrow text-xs text-cream">Catering</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/bay-gather-logo-blue.svg"
        alt="Bay & Gather"
        width={148}
        height={44}
        priority
        unoptimized
        className="h-9 w-auto sm:h-10"
      />
      <span className="eyebrow text-sm text-bay-blue">Catering</span>
    </div>
  );
}
