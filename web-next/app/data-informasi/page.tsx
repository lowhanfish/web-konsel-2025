import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data & Informasi",
  description: "Pusat layanan data, dokumen, dan portal eksternal Pemerintah Kabupaten Konawe Selatan.",
  path: "/data-informasi",
});

const items = ["JDIH", "IPKD", "Data Sektoral", "Kepegawaian", "Peta Digital"];

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Data & Informasi" description="Pusat layanan data, dokumen, dan portal eksternal." />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div key={item} className="glass rounded-2xl p-5 neon-hover">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
