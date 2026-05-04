import PageHeader from "@/components/ui/PageHeader";
import PaginatedGrid from "@/components/ui/PaginatedGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Lurah",
  description: "Daftar profil lurah Kabupaten Konawe Selatan.",
  path: "/profil/pimpinan/lurah",
});

const items = Array.from({ length: 10 }, (_, i) => ({
  title: `Lurah ${i + 1}`,
  meta: "Kelurahan",
  description: "Profil lurah dan wilayah kelurahan.",
}));

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Lurah" description="Daftar profil lurah Kabupaten Konawe Selatan." />
      <PaginatedGrid title="Daftar Lurah" items={items} perPage={5} />
    </section>
  );
}
