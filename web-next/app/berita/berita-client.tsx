"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";

const items = Array.from({ length: 24 }, (_, i) => ({
  title: `Berita Pemerintah ${i + 1}`,
  category: i % 2 === 0 ? "Pemda" : "Pelayanan",
  summary: "Ringkasan berita resmi untuk warga Konawe Selatan.",
  publishedBy: i % 2 === 0 ? "Humas Pemkab Konsel" : "Diskominfo",
  publishedAt: `4 Mei 2026`,
  image: [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  ][i % 4],
}));

export default function BeritaClient() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("Semua");
  const [sort, setSort] = useState<"baru" | "lama">("baru");
  const filtered = useMemo(
    () =>
      items.filter((item) => {
        const matchesQuery = item.title.toLowerCase().includes(q.toLowerCase());
        const matchesCategory = category === "Semua" || item.category === category;
        return matchesQuery && matchesCategory;
      }),
    [q, category]
  );
  const sorted = useMemo(() => {
    const copy = [...filtered];
    return sort === "baru" ? copy : copy.reverse();
  }, [filtered, sort]);
  const per = 8;
  const data = sorted.slice((page - 1) * per, page * per);
  const total = Math.max(1, Math.ceil(sorted.length / per));

  return (
    <section className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <PageHeader
            eyebrow="Informasi publik"
            title="Berita"
            description="Daftar berita resmi dari Pemerintah Kabupaten Konawe Selatan."
          />
          <div className="flex flex-wrap gap-2 text-xs">
            {["Semua", "Pemda", "Pembangunan", "Pelayanan", "Data"].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setCategory(tag);
                  setPage(1);
                }}
                className={`rounded-full px-3 py-1 font-medium ${category === tag ? "bg-[--neon] text-black" : "border border-[--border]"
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-5 neon-hover">
          <p className="text-xs uppercase tracking-[0.3em] text-[--muted]">Highlight</p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight">
            Informasi terbaru, visual kuat, dan susunan kartu yang lebih editorial.
          </h2>
          <p className="mt-3 text-sm text-[--muted]">
            Konten berita disusun agar terasa seperti portal resmi yang hidup, bukan daftar statis biasa.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSort("baru")}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs ${sort === "baru" ? "bg-[--neon] text-black border-transparent" : "border-[--border]"
                }`}
            >
              <FaSortAmountDown /> Terbaru
            </button>
            <button
              type="button"
              onClick={() => setSort("lama")}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs ${sort === "lama" ? "bg-[--neon] text-black border-transparent" : "border-[--border]"
                }`}
            >
              <FaSortAmountUp /> Terdahulu
            </button>
          </div>
        </div>
      </div>

      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setPage(1);
        }}
        placeholder="Cari berita..."
        className="w-full rounded-2xl border-[--border] bg-transparent px-4 py-3 outline-none"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.map((item) => (
          <article key={item.title} className="glass overflow-hidden rounded-3xl p-0 neon-hover">
            <div className="relative">
              <Image src={item.image} alt={item.title} width={1200} height={800} className="h-44 w-full object-cover" />
              <div className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white">
                {item.category}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[--muted]">
                <span>{item.publishedBy}</span>
                <span>•</span>
                <span>{item.publishedAt}</span>
              </div>
              <h2
                className="mt-3 text-lg font-semibold leading-snug"
                title={item.title}
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-[--muted]">{item.summary}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`rounded-full border px-4 py-2 text-sm neon-hover ${page === i + 1 ? "bg-[--neon] text-black border-transparent" : "border-[--border]"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section >
  );
}
