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
      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[26rem] overflow-hidden">
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
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/25" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,224,29,0.16),transparent_35%)]" />
              <div className="relative flex h-full flex-col justify-end p-6 text-white md:p-10">
                {slide.eyebrow ? <p className="text-xs uppercase tracking-[0.3em] text-white/70">{slide.eyebrow}</p> : null}
                <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">{slide.title}</h1>
                {slide.description ? <p className="mt-4 max-w-3xl text-white/80">{slide.description}</p> : null}
                <div className="mt-6 flex flex-wrap gap-3">
                  {primaryHref && primaryLabel ? (
                    <Link href={primaryHref} className="rounded-full bg-[--neon] px-5 py-3 font-semibold text-black neon-hover">
                      {primaryLabel}
                    </Link>
                  ) : null}
                  {secondaryHref && secondaryLabel ? (
                    <Link href={secondaryHref} className="rounded-full border border-white/30 px-5 py-3 neon-hover">
                      {secondaryLabel}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden grid gap-3 p-4 md:p-5 lg:grid">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setIndex(slideIndex)}
              className={`overflow-hidden rounded-3xl border text-left transition duration-300 ${slideIndex === index ? "border-[--neon] shadow-[0_0_0_1px_rgba(245,224,29,.55)]" : "border-[--border]"
                }`}
            >
              <div className="flex items-center gap-3 p-3">
                <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-2xl">
                  <Image src={slide.image.src} alt={slide.image.alt} fill sizes="80px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  {slide.eyebrow ? <p className="text-[10px] uppercase tracking-[0.28em] text-[--muted]">{slide.eyebrow}</p> : null}
                  <p className="mt-1 truncate text-sm font-medium">{slide.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 border-t border-[--border] bg-black/10 px-4 py-3">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setIndex(slideIndex)}
            className={`h-2.5 rounded-full transition-all duration-300 ${slideIndex === index ? "w-10 bg-[--neon]" : "w-2.5 bg-white/40"
              }`}
            aria-label={`Slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </Card>
  );
}
