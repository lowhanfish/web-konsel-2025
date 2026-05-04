import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pengumuman",
  description: "Pengumuman resmi Pemerintah Kabupaten Konawe Selatan.",
  path: "/agenda-pengumuman/pengumuman",
});

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

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Pengumuman" description="Informasi dan pengumuman resmi." />
      <div className="grid gap-4">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/agenda-pengumuman/pengumuman/${item.slug}`}
            className="glass group flex items-center gap-4 rounded-2xl px-6 py-4 md:px-12 md:py-6 neon-hover"
          >
            <div className="w-16 shrink-0 md:w-20">
              <Image src="/image/pdf.png" alt="PDF" width={120} height={120} className="h-16 w-16 object-contain md:h-20 md:w-20" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-base font-semibold md:text-lg">{item.title}</h2>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                <span>{item.publishedBy}</span>
                <span>•</span>
                <span>{item.publishedAt}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
