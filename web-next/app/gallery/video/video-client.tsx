"use client";

import PageHeader from "@/components/ui/PageHeader";
import PaginatedGrid from "@/components/ui/PaginatedGrid";

const items = [
  { title: "Sosialisasi program daerah", meta: "YouTube", description: "Video kegiatan pemerintahan dan layanan publik." },
  { title: "Pemaparan capaian kinerja", meta: "YouTube", description: "Dokumentasi capaian dan agenda daerah." },
  { title: "Rapat koordinasi pembangunan", meta: "YouTube", description: "Koordinasi lintas perangkat daerah." },
  { title: "Pelayanan masyarakat terpadu", meta: "YouTube", description: "Rekaman layanan publik di lapangan." },
  { title: "Informasi kebijakan daerah", meta: "YouTube", description: "Penjelasan program prioritas pemerintah." },
  { title: "Agenda kepemimpinan daerah", meta: "YouTube", description: "Video agenda resmi pimpinan daerah." },
  { title: "Potensi wisata dan alam", meta: "YouTube", description: "Visual alam dan potensi destinasi Konawe Selatan." },
  { title: "Dokumentasi smart government", meta: "YouTube", description: "Transformasi layanan pemerintahan digital." },
  { title: "Forum konsultasi publik", meta: "YouTube", description: "Interaksi pemerintah dengan masyarakat." },
  { title: "Program penguatan desa", meta: "YouTube", description: "Dukungan pembangunan tingkat desa." },
];

export default function VideoClient() {
  return (
    <section className="space-y-6">
      <PageHeader title="Video" description="Galeri video YouTube resmi dengan pencarian dan paginasi." />
      <PaginatedGrid title="Video Terbaru" items={items} perPage={6} />
      <div className="grid gap-4 md:grid-cols-2">
        {["https://www.youtube.com/embed/dQw4w9WgXcQ", "https://www.youtube.com/embed/9bZkp7q19f0"].map((src) => (
          <iframe key={src} className="aspect-video w-full rounded-2xl border border-[color:var(--border)]" src={src} allowFullScreen />
        ))}
      </div>
    </section>
  );
}
