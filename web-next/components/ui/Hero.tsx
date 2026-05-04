"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Hero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  textBackground,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  textBackground?: {
    src: string;
    alt: string;
  };
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const next = Math.min(window.scrollY * 0.06, 20);
      setOffset(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <Card className="relative overflow-hidden p-0">
        {textBackground ? (
          <>
            <Image
              src={textBackground.src}
              alt={textBackground.alt}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover opacity-35"
              priority
              style={{ transform: `scale(1.1) translateY(${offset * 0.55}px)`, transition: "transform 120ms linear" }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/78 via-black/55 to-black/25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,224,29,0.16),transparent_32%)]" />
          </>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,224,29,0.16),transparent_32%)]" />
        )}
        <div className="relative space-y-5 p-6 text-white md:p-10">
          {eyebrow ? <p className="text-xs uppercase tracking-[0.3em] text-white/70">{eyebrow}</p> : null}
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
          {description ? <p className="max-w-3xl text-white/80">{description}</p> : null}
          <div className="flex flex-wrap gap-3">
            {primaryHref && primaryLabel ? (
              <Link href={primaryHref} className="group rounded-3xl bg-gradient-to-r from-accent to-neon px-8 py-4 font-bold text-black shadow-2xl neon-hover hover:shadow-glow-lg hover:scale-105 transition-all duration-300">
                <span className="bg-gradient-to-r from-black/20 to-transparent bg-clip-text pb-px -mb-px">{primaryLabel}</span>
              </Link>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="rounded-3xl border-2 border-border/50 bg-card/30 px-8 py-4 backdrop-blur-sm neon-hover hover:border-accent hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </Card>

      {image ? (
        <Card className="overflow-hidden p-0">
          <div className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-full w-full object-cover"
              style={{ transform: `scale(1.06) translateY(${offset * -0.12}px)`, transition: "transform 120ms linear" }}
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
          </div>
          {image.caption ? (
            <div className="p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[--muted]">{image.caption}</p>
            </div>
          ) : null}
        </Card>
      ) : null}
    </div>
  );
}

