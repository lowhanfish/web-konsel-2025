import PageHeader from "@/components/ui/PageHeader";
import PaginatedGrid from "@/components/ui/PaginatedGrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kepala OPD",
  description: "Daftar profil kepala OPD Kabupaten Konawe Selatan.",
  path: "/profil/pimpinan/kepala-opd",
});

const items = [
  { title: "Dinas Kominfo", meta: "OPD", description: "Digitalisasi, komunikasi publik, dan persandian." },
  { title: "Dinas Kesehatan", meta: "OPD", description: "Layanan kesehatan dan penguatan fasilitas kesehatan." },
  { title: "Dinas Pendidikan", meta: "OPD", description: "Pendidikan dasar dan pengembangan SDM." },
  { title: "Dinas PU", meta: "OPD", description: "Infrastruktur jalan, jembatan, dan sarana publik." },
  { title: "Dinas Sosial", meta: "OPD", description: "Perlindungan sosial dan layanan kesejahteraan." },
  { title: "Dinas Pertanian", meta: "OPD", description: "Ketahanan pangan dan pengembangan sektor pertanian." },
  { title: "Dinas Pariwisata", meta: "OPD", description: "Promosi destinasi dan ekonomi kreatif." },
  { title: "Dinas Perhubungan", meta: "OPD", description: "Transportasi, keselamatan, dan konektivitas." },
];

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Kepala OPD" description="Daftar profil kepala OPD Kabupaten Konawe Selatan." />
      <PaginatedGrid title="Daftar Kepala OPD" items={items} perPage={4} />
    </section>
  );
}
