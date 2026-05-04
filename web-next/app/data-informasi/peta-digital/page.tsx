import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Peta Digital",
  description: "Portal webGIS resmi Kabupaten Konawe Selatan.",
  path: "/data-informasi/peta-digital",
});

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Peta Digital" description="Akses ke portal webGIS pemerintah daerah." />
      <Link href="http://webgis.konaweselatankab.go.id" target="_blank" rel="noreferrer" className="glass inline-flex rounded-2xl px-5 py-3 neon-hover">
        Buka Peta Digital
      </Link>
    </section>
  );
}
