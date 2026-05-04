import PageHeader from "@/components/ui/PageHeader";
import PaginatedGrid from "@/components/ui/PaginatedGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Desa",
  description: "Daftar profil kepala desa Kabupaten Konawe Selatan.",
  path: "/profil/pimpinan/desa",
});

const items = Array.from({ length: 12 }, (_, i) => ({
  title: `Kepala Desa ${i + 1}`,
  meta: "Desa",
  description: "Profil kepala desa dan fokus pembangunan desa.",
}));

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Desa" description="Daftar profil kepala desa Kabupaten Konawe Selatan." />
      <PaginatedGrid title="Daftar Kepala Desa" items={items} perPage={6} />
    </section>
  );
}
