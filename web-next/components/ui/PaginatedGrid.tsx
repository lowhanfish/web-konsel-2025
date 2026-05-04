"use client";

import { useMemo, useState } from "react";

type Item = {
  title: string;
  description?: string;
  meta?: string;
};

export default function PaginatedGrid({
  title,
  items,
  perPage = 8,
}: {
  title: string;
  items: Item[];
  perPage?: number;
}) {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const filtered = useMemo(
    () => items.filter((item) => `${item.title} ${item.description ?? ""}`.toLowerCase().includes(q.toLowerCase())),
    [items, q]
  );
  const total = Math.max(1, Math.ceil(filtered.length / perPage));
  const data = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">{title}</h2>
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setPage(1);
          }}
          placeholder="Cari..."
          className="w-full rounded-3xl border-border bg-card px-6 py-4 text-base outline-none md:w-96 ring-accent/50 focus:ring-4 focus:ring-offset-4 transition-all shadow-lg"
        />
      </div>
      <div className="columns-1 md:columns-2 xl:columns-4 gap-6">
        {data.map((item, index) => (
          <article
            key={item.title}
            className="glass rounded-3xl p-8 neon-hover mb-6 break-inside-avoid hover:shadow-2xl transition-all duration-500 animate-fade-in-up [counter-increment:item]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-xl font-bold mb-3 line-clamp-2">{item.title}</h3>
            {item.meta ? <p className="text-xs uppercase tracking-widest font-medium text-muted mb-4">{item.meta}</p> : null}
            {item.description ? <p className="text-base leading-relaxed text-muted">{item.description}</p> : null}
          </article>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`rounded-full border px-4 py-2 text-sm neon-hover ${page === i + 1 ? "bg-[--neon] border-transparent text-black" : "border-[--border]"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
