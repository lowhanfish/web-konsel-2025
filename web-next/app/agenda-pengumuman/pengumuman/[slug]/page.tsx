import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

const items = [
  {
    slug: "lowongan-pelayanan",
    title: "Pengumuman lowongan kegiatan pelayanan",
    publishedBy: "Bagian Umum",
    publishedAt: "4 Mei 2026",
  },
  {
    slug: "jadwal-konsultasi-publik",
    title: "Jadwal rapat konsultasi publik",
    publishedBy: "Bappeda",
    publishedAt: "3 Mei 2026",
  },
  {
    slug: "dokumen-diterbitkan",
    title: "Informasi dokumen yang telah diterbitkan",
    publishedBy: "Diskominfo",
    publishedAt: "2 Mei 2026",
  },
];

export function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = items.find((entry) => entry.slug === params.slug);
  if (!item) return buildMetadata({ title: "Pengumuman", description: "Pengumuman resmi pemerintah daerah.", path: "/agenda-pengumuman/pengumuman" });

  return buildMetadata({
    title: item.title,
    description: `${item.title} - ${item.publishedBy} - ${item.publishedAt}`,
    path: `/agenda-pengumuman/pengumuman/${item.slug}`,
    image: "/image/pdf.png",
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const item = items.find((entry) => entry.slug === params.slug);
  if (!item) notFound();

  return (
    <section className="space-y-6">
      <PageHeader title={item.title} description="Detail pengumuman resmi." />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass overflow-hidden rounded-3xl p-6 neon-hover">
          <div className="rounded-3xl border border-[color:var(--border)] bg-black/10 p-4">
            <Image src="/image/pdf.png" alt="PDF" width={500} height={500} className="mx-auto h-44 w-44 object-contain md:h-64 md:w-64" />
          </div>
          <div className="mt-4 rounded-2xl bg-black/10 p-4 text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">
            Preview dokumen resmi
          </div>
        </div>
        <div className="glass rounded-3xl p-6 md:p-8 neon-hover">
          <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted)]">Published By</p>
          <h2 className="mt-2 text-2xl font-semibold">{item.publishedBy}</h2>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[color:var(--muted)]">Published At</p>
          <p className="mt-2 text-base">{item.publishedAt}</p>
          <div className="mt-8 rounded-2xl border border-[color:var(--border)] p-4 text-sm text-[color:var(--muted)]">
            Dokumen pengumuman dapat diunduh atau ditampilkan sesuai kebutuhan layanan publik.
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/agenda-pengumuman/pengumuman" className="rounded-full border border-[color:var(--border)] px-5 py-3 text-sm neon-hover">
              Kembali ke daftar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
