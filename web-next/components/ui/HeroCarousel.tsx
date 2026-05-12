"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "./Card";

type Slide = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
  };
};

export default function HeroCarousel({
  slides,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  slides: Slide[];
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <Card className="overflow-hidden p-0">
      <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="relative min-h-[16.5rem] overflow-hidden md:min-h-[19rem] lg:min-h-[21rem]">
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out ${slideIndex === index ? "opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 translate-y-3 scale-[1.02]"
                }`}
            >
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className={`object-cover transition duration-[1400ms] ease-out ${slideIndex === index ? "scale-105" : "scale-110"}`}
                priority={slideIndex === 0}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
              <div className="relative flex h-full flex-col justify-end p-5 text-white md:p-8">
                {slide.eyebrow ? <p className="text-xs uppercase tracking-[0.3em] text-white/70">{slide.eyebrow}</p> : null}
                <h1 className="mt-2 max-w-3xl font-[var(--font-serif)] text-2xl font-semibold tracking-tight md:text-4xl">{slide.title}</h1>
                {slide.description ? <p className="mt-3 max-w-2xl text-sm text-white/85 md:text-base">{slide.description}</p> : null}
                <div className="mt-5 flex flex-wrap gap-3">
                  {primaryHref && primaryLabel ? (
                    <Link href={primaryHref} className="rounded-full bg-[color:var(--accent)] px-5 py-3 font-semibold text-black neon-hover">
                      {primaryLabel}
                    </Link>
                  ) : null}
                  {secondaryHref && secondaryLabel ? (
                    <Link href={secondaryHref} className="rounded-full border border-white/35 px-5 py-3 neon-hover">
                      {secondaryLabel}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden grid gap-2.5 p-3 md:p-4 lg:grid">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setIndex(slideIndex)}
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${slideIndex === index ? "border-[color:var(--accent)] bg-[color:var(--card)]/70" : "border-[color:var(--border)] bg-transparent hover:border-[color:var(--accent)]/70"
                }`}
            >
              <div className="flex items-center gap-3 p-3.5">
                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image src={slide.image.src} alt={slide.image.alt} fill sizes="112px" className="object-cover" loading="eager" />
                </div>
                <div className="min-w-0 flex-1">
                  {slide.eyebrow ? <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">{slide.eyebrow}</p> : null}
                  <p className="mt-1 line-clamp-2 text-left text-sm font-semibold text-[color:var(--fg)]">{slide.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 border-t border-[--border] bg-[color:var(--card)]/40 px-4 py-2.5">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setIndex(slideIndex)}
            className={`h-2.5 rounded-full transition-all duration-300 ${slideIndex === index ? "w-10 bg-[color:var(--accent)]" : "w-2.5 bg-white/40"
              }`}
            aria-label={`Slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </Card>
  );
}
