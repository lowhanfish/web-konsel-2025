import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sejarah",
  description: "Sejarah pembentukan Kabupaten Konawe Selatan.",
  path: "/profil/sejarah",
});

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Sejarah" description="Sejarah pembentukan Kabupaten Konawe Selatan." />
      <div className="glass rounded-2xl p-5 neon-hover">
        Kabupaten Konawe Selatan terbentuk melalui proses pemekaran daerah untuk memperkuat pelayanan pemerintahan, pembangunan, dan pemberdayaan masyarakat.
      </div>
    </section>
  );
}
