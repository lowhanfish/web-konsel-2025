"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/ui/PageHeader";

const items = Array.from({ length: 24 }, (_, i) => ({
  title: `Berita Pemerintah ${i + 1}`,
  category: i % 2 === 0 ? "Pemda" : "Pelayanan",
  summary: "Ringkasan berita resmi untuk warga Konawe Selatan.",
}));

export default function BeritaClient() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const filtered = useMemo(
    () => items.filter((item) => item.title.toLowerCase().includes(q.toLowerCase())),
    [q]
  );
  const per = 8;
  const data = filtered.slice((page - 1) * per, page * per);
  const total = Math.max(1, Math.ceil(filtered.length / per));

  return (
    <section className="space-y-6">
      <PageHeader
        eyebrow="Informasi publik"
        title="Berita"
        description="Daftar berita resmi dari Pemerintah Kabupaten Konawe Selatan."
      />

      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setPage(1);
        }}
        placeholder="Cari berita..."
        className="w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 outline-none"
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.map((item) => (
          <article key={item.title} className="glass rounded-2xl p-5 neon-hover">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{item.category}</span>
            <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{item.summary}</p>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`rounded-full border px-4 py-2 text-sm neon-hover ${
              page === i + 1 ? "bg-[color:var(--neon)] text-black border-transparent" : "border-[color:var(--border)]"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
