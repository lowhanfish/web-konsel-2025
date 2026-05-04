import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Profil Daerah",
  description: "Ringkasan profil daerah Kabupaten Konawe Selatan.",
  path: "/profil/profil",
});

export default function Page() {
  return (
    <Section title="Profil Daerah" description="Ringkasan profil daerah Kabupaten Konawe Selatan.">
      <Card>
        Kabupaten Konawe Selatan merupakan wilayah strategis dengan fokus pada pelayanan publik, ekonomi lokal, dan pembangunan berkelanjutan.
      </Card>
    </Section>
  );
}
