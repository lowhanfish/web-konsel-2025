import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Agenda",
  description: "Agenda pimpinan daerah Kabupaten Konawe Selatan.",
  path: "/agenda-pengumuman/agenda",
});

const items = [
  "Rapat koordinasi lintas OPD",
  "Kunjungan kerja lapangan",
  "Pelayanan publik terpadu",
  "Monitoring program prioritas",
];

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Agenda" description="Agenda pimpinan daerah." />
      <div className="grid gap-3">
        {items.map((item) => (
          <div key={item} className="glass rounded-2xl p-5 neon-hover">{item}</div>
        ))}
      </div>
    </section>
  );
}
