import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kepegawaian",
  description: "Portal kepegawaian resmi BKPSDM Konawe Selatan.",
  path: "/data-informasi/kepegawaian",
});

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Kepegawaian" description="Portal kepegawaian resmi BKPSDM." />
      <Link href="https://bkpsdm.konaweselatankab.go.id" target="_blank" rel="noreferrer" className="glass inline-flex rounded-2xl px-5 py-3 neon-hover">
        Buka Portal Kepegawaian
      </Link>
    </section>
  );
}
