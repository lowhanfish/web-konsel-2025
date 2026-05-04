import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "JDIH",
  description: "Portal JDIH resmi Pemerintah Kabupaten Konawe Selatan.",
  path: "/data-informasi/jdih",
});

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="JDIH" description="Portal JDIH resmi pemerintah daerah." />
      <Link href="https://jdih.konaweselatankab.go.id" target="_blank" rel="noreferrer" className="glass inline-flex rounded-2xl px-5 py-3 neon-hover">
        Buka Portal JDIH
      </Link>
    </section>
  );
}
