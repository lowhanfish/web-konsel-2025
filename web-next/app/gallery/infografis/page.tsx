import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Infografis",
  description: "Daftar infografis resmi Pemerintah Kabupaten Konawe Selatan.",
  path: "/gallery/infografis",
});

const items = Array.from({ length: 8 }, (_, i) => `Infografis ${i + 1}`);

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Infografis" description="Daftar infografis resmi pemerintah daerah." />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="glass rounded-2xl p-5 neon-hover">{item}</div>
        ))}
      </div>
    </section>
  );
}
