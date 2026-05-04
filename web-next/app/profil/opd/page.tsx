import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "OPD",
  description: "Daftar organisasi perangkat daerah Kabupaten Konawe Selatan.",
  path: "/profil/opd",
});

const items = [
  { title: "Dinas Kominfo", href: "https://diskominfo.konaweselatankab.go.id" },
  { title: "BKPSDM", href: "https://bkpsdm.konaweselatankab.go.id" },
  { title: "Bappeda", href: "#" },
  { title: "Dinas Kesehatan", href: "#" },
];

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="OPD" description="Daftar organisasi perangkat daerah dan portal resminya." />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <Link key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="glass rounded-2xl p-5 neon-hover">
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
