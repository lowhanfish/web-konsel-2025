import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery",
  description: "Infografis, foto, dan video resmi Pemerintah Kabupaten Konawe Selatan.",
  path: "/gallery",
});

const items = [
  { title: "Infografis", href: "/gallery/infografis" },
  { title: "Foto", href: "/gallery/foto" },
  { title: "Video", href: "/gallery/video" },
];

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Gallery" description="Kumpulan infografis, foto, dan video resmi." />
      <div className="grid gap-3 md:grid-cols-3">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="glass rounded-2xl p-5 neon-hover">
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
