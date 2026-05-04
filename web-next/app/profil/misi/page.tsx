import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Misi",
  description: "Misi pembangunan Kabupaten Konawe Selatan.",
  path: "/profil/misi",
});

const items = [
  "Meningkatkan kualitas pelayanan publik.",
  "Memperkuat tata kelola pemerintahan yang efektif.",
  "Mendorong ekonomi daerah dan pemerataan pembangunan.",
  "Mengembangkan sumber daya manusia yang unggul.",
];

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Misi" description="Arah kerja strategis RPJMD." />
      <div className="grid gap-3">
        {items.map((item, index) => (
          <div key={item} className="glass rounded-2xl p-5 neon-hover">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">Misi {index + 1}</span>
            <p className="mt-2">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
