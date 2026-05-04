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
    <div className="space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setPage(1);
          }}
          placeholder="Cari..."
          className="w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 outline-none md:w-80"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.map((item) => (
          <article key={item.title} className="glass rounded-2xl p-5 neon-hover">
            <h3 className="font-semibold">{item.title}</h3>
            {item.meta ? <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{item.meta}</p> : null}
            {item.description ? <p className="mt-3 text-sm text-[color:var(--muted)]">{item.description}</p> : null}
          </article>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`rounded-full border px-4 py-2 text-sm neon-hover ${
              page === i + 1 ? "bg-[color:var(--neon)] border-transparent text-black" : "border-[color:var(--border)]"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
