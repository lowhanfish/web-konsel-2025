import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bupati",
  description: "Profil lengkap Bupati Konawe Selatan.",
  path: "/profil/pimpinan/bupati",
});

const sections = ["Keluarga", "Riwayat pendidikan", "Pengalaman organisasi", "Perjalanan jabatan"];

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Bupati" description="Profil lengkap Bupati Konawe Selatan." />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="overflow-hidden rounded-3xl glass neon-hover">
          <Image src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1400&q=80" alt="Bupati Konawe Selatan" width={1400} height={1000} className="h-full w-full object-cover" />
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {sections.map((item) => (
            <div key={item} className="glass rounded-2xl p-5 neon-hover">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
