import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Data Sektoral",
  description: "Portal data sektoral resmi Kabupaten Konawe Selatan.",
  path: "/data-informasi/data-sektoral",
});

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Data Sektoral" description="Portal data sektoral resmi pemerintah daerah." />
      <Link href="https://data.konaweselatankab.go.id" target="_blank" rel="noreferrer" className="glass inline-flex rounded-2xl px-5 py-3 neon-hover">
        Buka Portal Data Sektoral
      </Link>
    </section>
  );
}
