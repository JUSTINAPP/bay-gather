import Image from "next/image";

/**
 * Real Bay & Gather logo (supplied by Jonas — public/bay-gaher-logo.jpg),
 * paired with a "Catering" wordmark since the supplied artwork is just
 * the BAY / & / GATHER mark on its own.
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
        <div className="overflow-hidden rounded-2xl bg-cream p-3">
          <Image
            src="/bay-gaher-logo.jpg"
            alt="Bay & Gather"
            width={96}
            height={96}
            className="h-24 w-24 object-contain"
          />
        </div>
        <span className="eyebrow text-xs text-cream">Catering</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/bay-gaher-logo.jpg"
        alt="Bay & Gather"
        width={48}
        height={48}
        priority
        className="h-11 w-11 object-contain sm:h-12 sm:w-12"
      />
      <span className="eyebrow text-sm text-bay-blue">Catering</span>
    </div>
  );
}
