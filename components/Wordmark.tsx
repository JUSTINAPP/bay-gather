/**
 * PLACEHOLDER LOGO
 * -----------------
 * No master logo file (SVG/EPS) was included in the Bay & Gather brand
 * guidelines PDF — only a typographic description of the mark (a single
 * Cormorant Garamond Light Italic ampersand, flanked by "BAY" / "GATHER" /
 * "CATERING" in spaced capitals, framed by thin horizontal rules).
 *
 * This component recreates that description in CSS/type only, as a
 * stand-in so the site has a working header/footer mark. Swap this out
 * for the real SVG the moment VSB Group supplies master artwork — per
 * the guidelines, the approved files should always be used instead of a
 * recreated mark for anything beyond this temporary placeholder.
 */

type WordmarkProps = {
  variant?: "stacked" | "horizontal";
  tone?: "bay-blue" | "cream" | "near-black";
  className?: string;
};

const toneClass: Record<NonNullable<WordmarkProps["tone"]>, string> = {
  "bay-blue": "text-bay-blue",
  cream: "text-cream",
  "near-black": "text-near-black",
};

export default function Wordmark({
  variant = "horizontal",
  tone = "bay-blue",
  className = "",
}: WordmarkProps) {
  const color = toneClass[tone];

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center text-center ${color} ${className}`}>
        <span className="eyebrow text-xs">Bay</span>
        <span className="font-serif italic text-4xl leading-none my-1">&amp;</span>
        <span className="eyebrow text-xs">Gather</span>
        <span className="eyebrow text-[0.65rem] opacity-70 mt-1">Catering</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${color} ${className}`}>
      <span className="eyebrow text-sm">Bay</span>
      <span className="font-serif italic text-3xl leading-none">&amp;</span>
      <span className="flex flex-col leading-none">
        <span className="eyebrow text-sm">Gather</span>
        <span className="eyebrow text-[0.6rem] opacity-70">Catering</span>
      </span>
    </div>
  );
}
