import PageHeader from "@/components/ui/PageHeader";
import PaginatedGrid from "@/components/ui/PaginatedGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Camat",
  description: "Daftar profil camat Kabupaten Konawe Selatan.",
  path: "/profil/pimpinan/camat",
});

const items = Array.from({ length: 12 }, (_, i) => ({
  title: `Camat ${i + 1}`,
  meta: "Kecamatan",
  description: "Profil camat dan wilayah kerja kecamatan.",
}));

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Camat" description="Daftar profil camat Kabupaten Konawe Selatan." />
      <PaginatedGrid title="Daftar Camat" items={items} perPage={6} />
    </section>
  );
}
