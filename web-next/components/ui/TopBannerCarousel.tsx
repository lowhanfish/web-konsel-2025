"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const topBanners = [
  { src: "/image/bn1.jpeg", alt: "Banner Konawe Selatan" },
  { src: "/image/bn1.jpeg", alt: "Banner Konawe Selatan" },
  { src: "/image/bn1.jpeg", alt: "Banner Konawe Selatan" },
  // { src: "/image/header.png", alt: "Header Pemerintah Konawe Selatan" },
  // { src: "/image/bg3.jpg", alt: "Panorama Konawe Selatan" },
];

export default function TopBannerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % topBanners.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-white/95 bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-950 md:rounded-3xl md:p-4">
      <div className="relative aspect-[1476/559] w-full overflow-hidden rounded-xl ring-1 ring-black/5 dark:ring-white/10 md:rounded-2xl">
        {topBanners.map((banner, idx) => (
          <div
            key={`${banner.src}-${idx}`}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <Image src={banner.src} alt={banner.alt} fill priority={idx === 0} className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
