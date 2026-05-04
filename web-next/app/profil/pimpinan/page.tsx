import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { profileDetails } from "@/data/profiles";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pimpinan",
  description: "Daftar pimpinan Kabupaten Konawe Selatan dari Bupati hingga desa.",
  path: "/profil/pimpinan",
});

export default function Page() {
  return (
    <Section
      title="Pimpinan"
      description="Daftar pimpinan Kabupaten Konawe Selatan dari Bupati hingga desa."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {profileDetails.map((item) => (
          <Link key={item.slug} href={`/profil/pimpinan/${item.slug}`}>
            <Card className="h-full p-0 overflow-hidden">
              <Image src={item.image} alt={item.title} width={1600} height={1200} className="h-56 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{item.title}</p>
                <p className="mt-3 text-sm text-[color:var(--muted)]">{item.summary}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
