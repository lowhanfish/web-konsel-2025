"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import PageHeader from "@/components/ui/PageHeader";

const imgs = [
    { title: "Kegiatan pelayanan publik 1", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80", category: "Modern Government" },
    { title: "Kegiatan pelayanan publik 2", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80", category: "Modern Government" },
    { title: "Kegiatan pelayanan publik 3", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80", category: "Modern Government" },
    { title: "Kegiatan pelayanan publik 4", src: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80", category: "Modern Government" },
    { title: "Landscape Konawe Selatan 1", src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80", category: "Nature Landscapes" },
    { title: "Landscape Konawe Selatan 2", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80", category: "Nature Landscapes" },
    { title: "Landscape Konawe Selatan 3", src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80", category: "Nature Landscapes" },
    { title: "Landscape Konawe Selatan 4", src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80", category: "Nature Landscapes" },
    { title: "Landscape Konawe Selatan 5", src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80", category: "Nature Landscapes" },
    { title: "Landscape Konawe Selatan 6", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80", category: "Nature Landscapes" },
    { title: "Landscape Konawe Selatan 7", src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", category: "Nature Landscapes" },
    { title: "Landscape Konawe Selatan 8", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", category: "Nature Landscapes" },
];

export default function FotoClient() {
    const [idx, setIdx] = useState<number | null>(null);
    const [q, setQ] = useState("");
    const [page, setPage] = useState(1);
    const per = 8;

    const filtered = useMemo(
        () => imgs.filter((item) => `${item.title} ${item.category}`.toLowerCase().includes(q.toLowerCase())),
        [q]
    );
    const total = Math.max(1, Math.ceil(filtered.length / per));
    const data = filtered.slice((page - 1) * per, page * per);
    const current = idx !== null ? filtered[idx] : null;

    return (
        <section className="space-y-6 animate-fade-in-up">
            <PageHeader eyebrow="Galeri" title="Galeri Foto" description="Klik foto untuk membuka modal interaktif dengan navigasi next/prev." />
            <input
                value={q}
                onChange={(e) => {
                    setQ(e.target.value);
                    setPage(1);
                    setIdx(null);
                }}
                placeholder="Cari foto..."
                className="w-full rounded-3xl border-border bg-card/50 px-6 py-4 outline-none ring-accent/50 focus:ring-2"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.map((item, i) => {
                    const absoluteIndex = (page - 1) * per + i;
                    return (
                        <button key={item.title} onClick={() => setIdx(absoluteIndex)} className="group overflow-hidden rounded-3xl glass neon-hover text-left hover:shadow-2xl transition-all duration-500">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={1200}
                                    height={800}
                                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-xs uppercase tracking-widest font-medium text-muted">{item.category}</p>
                                <h3 className="mt-3 font-semibold text-foreground line-clamp-2">{item.title}</h3>
                            </div>
                        </button>
                    );
                })}
            </div>
            <div className="flex flex-wrap gap-2">
                {Array.from({ length: total }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setPage(i + 1);
                            setIdx(null);
                        }}
                        className={`rounded-full border px-4 py-2 text-sm neon-hover ${page === i + 1 ? "bg-[--neon] border-transparent text-black" : "border-[--border]"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
            {current ? (
                <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4" onClick={() => setIdx(null)}>
                    <div className="w-full max-w-5xl rounded-3xl glass p-4" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between gap-3 pb-3">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-[--muted]">{current.category}</p>
                                <h3 className="text-xl font-semibold">{current.title}</h3>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="rounded-full border-[--border] px-4 py-2 text-sm neon-hover"
                                    onClick={() => setIdx((value) => (value === null ? value : Math.max(0, value - 1)))}
                                    disabled={idx === 0}
                                >
                                    Prev
                                </button>
                                <button
                                    className="rounded-full border-[--border] px-4 py-2 text-sm neon-hover"
                                    onClick={() => setIdx((value) => (value === null ? value : Math.min(filtered.length - 1, value + 1)))}
                                    disabled={idx === filtered.length - 1}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                        <Image src={current.src} alt={current.title} width={1600} height={1000} className="w-full rounded-2xl object-cover" />
                    </div>
                </div>
            ) : null}
        </section>
    );
}

