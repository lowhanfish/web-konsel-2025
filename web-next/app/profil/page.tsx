import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Profil",
  description: "Profil singkat Kabupaten Konawe Selatan, demografi, pekerjaan, wisata, dan karakter wilayah.",
  path: "/profil",
});

const points = ["Penduduk dan demografi", "Pekerjaan dan ekonomi", "Wisata dan potensi daerah", "Layanan publik"];

export default function Page() {
  return (
    <Section title="Profil" description="Profil singkat Kabupaten Konawe Selatan.">
      <div className="grid gap-3 md:grid-cols-2">
        {points.map((point) => (
          <Card key={point}>{point}</Card>
        ))}
      </div>
    </Section>
  );
}
