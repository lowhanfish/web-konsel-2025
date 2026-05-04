import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Visi",
  description: "Visi pembangunan Kabupaten Konawe Selatan.",
  path: "/profil/visi",
});

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Visi" description="Arah pembangunan jangka menengah daerah." />
      <div className="glass rounded-2xl p-5 neon-hover">
        Mewujudkan Konawe Selatan yang maju, mandiri, dan sejahtera melalui tata kelola pemerintahan yang efektif dan pelayanan publik yang prima.
      </div>
    </section>
  );
}
