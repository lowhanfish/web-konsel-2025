import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Wakil Bupati",
  description: "Profil lengkap Wakil Bupati Konawe Selatan.",
  path: "/profil/pimpinan/wakil-bupati",
});

const sections = ["Keluarga", "Riwayat pendidikan", "Pengalaman organisasi", "Peran koordinasi"];

export default function Page() {
  return (
    <section className="space-y-6">
      <PageHeader title="Wakil Bupati" description="Profil lengkap Wakil Bupati Konawe Selatan." />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="overflow-hidden rounded-3xl glass neon-hover">
          <Image src="/image/wakil.png" alt="Wakil Bupati Konawe Selatan" width={1400} height={1000} sizes="(min-width: 1024px) 40vw, 100vw" className="h-full w-full object-cover" />
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
