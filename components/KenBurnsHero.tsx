"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

const IMAGES = [
  "/bay-gather-home-page-01.jpg",
  "/bay-gather-home-page-02.jpg",
  "/bay-gather-home-page-03.jpg",
  "/bay-gather-home-page-04.jpg",
];

const SLIDE_DURATION_MS = 6500;

/**
 * Full-bleed rotating hero with a slow continuous zoom on each photo —
 * the same pattern used on volpino.com.au / sbmm.com.au (stacked hero
 * images, crossfaded, each drifting in slowly rather than sitting static).
 */
export default function KenBurnsHero({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % IMAGES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-near-black">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full w-full animate-kenburns"
            style={{ animationDelay: `${i * 3}s` }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 bg-near-black/45" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream">
        {children}
      </div>
    </section>
  );
}
