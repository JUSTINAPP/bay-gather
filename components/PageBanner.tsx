import Image from "next/image";

export default function PageBanner({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative h-[38vh] min-h-[280px] w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-near-black/35" />
    </div>
  );
}
