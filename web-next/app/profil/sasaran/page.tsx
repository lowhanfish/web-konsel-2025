import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sasaran",
  description: "Sasaran pembangunan Kabupaten Konawe Selatan.",
  path: "/profil/sasaran",
});

const items = [
  "Meningkatnya indeks kepuasan masyarakat.",
  "Meningkatnya akuntabilitas kinerja perangkat daerah.",
  "Meningkatnya pemerataan pembangunan antar wilayah.",
];

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Sasaran" description="Sasaran strategis RPJMD." />
      <div className="grid gap-3">
        {items.map((item, index) => (
          <div key={item} className="glass rounded-2xl p-5 neon-hover">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Sasaran {index + 1}</span>
            <p className="mt-2">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
