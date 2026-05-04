import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pengumuman",
  description: "Pengumuman resmi Pemerintah Kabupaten Konawe Selatan.",
  path: "/agenda-pengumuman/pengumuman",
});

const items = [
  "Pengumuman lowongan kegiatan pelayanan",
  "Jadwal rapat konsultasi publik",
  "Informasi dokumen yang telah diterbitkan",
];

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Pengumuman" description="Informasi dan pengumuman resmi." />
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item} className="glass rounded-2xl p-5 neon-hover">{item}</div>
        ))}
      </div>
    </section>
  );
}
