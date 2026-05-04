import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { profileDetails } from "@/data/profiles";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return profileDetails.map((profile) => ({ slug: profile.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const profile = profileDetails.find((item) => item.slug === params.slug);
  if (!profile) return buildMetadata({ title: "Pimpinan", description: "Profil pimpinan daerah.", path: "/profil/pimpinan" });

  return buildMetadata({
    title: profile.title,
    description: profile.summary,
    path: `/profil/pimpinan/${profile.slug}`,
    image: profile.image,
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const profile = profileDetails.find((item) => item.slug === params.slug);
  if (!profile) notFound();

  return (
    <Section title={profile.title} description={profile.summary}>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="overflow-hidden p-0">
          <Image src={profile.image} alt={profile.title} width={1600} height={1200} className="h-full w-full object-cover" />
        </Card>
        <div className="grid gap-4 md:grid-cols-2">
          {profile.sections.map((section) => (
            <Card key={section.title}>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{section.title}</p>
              <p className="mt-3 text-sm text-[color:var(--muted)]">{section.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
