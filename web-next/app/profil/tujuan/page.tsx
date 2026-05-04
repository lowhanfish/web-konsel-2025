import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tujuan",
  description: "Tujuan pembangunan Kabupaten Konawe Selatan.",
  path: "/profil/tujuan",
});

const items = [
  "Meningkatnya kualitas hidup masyarakat.",
  "Meningkatnya akses dan kualitas layanan publik.",
  "Meningkatnya daya saing ekonomi daerah.",
];

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Tujuan" description="Tujuan RPJMD Kabupaten Konawe Selatan." />
      <div className="grid gap-3">
        {items.map((item, index) => (
          <div key={item} className="glass rounded-2xl p-5 neon-hover">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Tujuan {index + 1}</span>
            <p className="mt-2">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
