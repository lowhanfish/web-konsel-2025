import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/ui/Hero";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { dashboardSummary, quickLinks } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dashboard",
  description: "Beranda resmi Pemerintah Kabupaten Konawe Selatan dengan berita, pimpinan, galeri, dan tautan layanan.",
  path: "/",
});

export default function DashboardPage() {
  return (
    <section className="space-y-10">
      <Hero
        eyebrow="Pemerintah Kabupaten Konawe Selatan"
        title="Website resmi pemerintahan yang modern, cepat, dan mudah diakses."
        description="Portal utama untuk berita, profil daerah, data informasi, agenda, dan galeri publik dengan pendekatan SEO-first dan desain glossy neon."
        primaryHref="/berita"
        primaryLabel="Lihat Berita"
        secondaryHref="/gallery/foto"
        secondaryLabel="Galeri Publik"
        image={{
          src: "/image/box1.jpg",
          alt: "Visual utama Pemerintah Kabupaten Konawe Selatan",
          caption: "Landscape visual utama Kabupaten Konawe Selatan",
        }}
        textBackground={{
          src: "/image/kantor1.jpeg",
          alt: "Kantor Pemerintah Kabupaten Konawe Selatan",
        }}
      />

      <div className="grid gap-4 md:grid-cols-3">
        {dashboardSummary.leaders.map((leader) => (
          <Card key={leader.name} className="overflow-hidden p-0">
            <Image src={leader.image} alt={leader.name} width={1200} height={900} className="h-52 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{leader.role}</p>
              <h2 className="mt-2 text-xl font-semibold">{leader.name}</h2>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{leader.note}</p>
            </div>
          </Card>
        ))}
      </div>

      <Section eyebrow="Berita" title="5 Berita Terbaru" description="Ringkasan headline terbaru dari kanal pemerintah daerah.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {dashboardSummary.news.map((item, index) => (
            <Card key={item.title}>
              <Image src={item.image} alt={item.title} width={1200} height={800} className="mb-4 h-28 w-full rounded-xl object-cover" />
              <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{item.category}</span>
              <h3
                className="mt-3 text-base font-semibold leading-6"
                title={item.title}
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {index + 1}. {item.title}
              </h3>
              <div className="mt-4 flex items-center justify-between gap-3 text-xs text-[color:var(--muted)]">
                <span>{item.publishedBy}</span>
                <span>{item.publishedAt}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Media" title="Foto Terbaru" description="Dokumentasi visual kegiatan dan alam Konawe Selatan.">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {dashboardSummary.media.map((item) => (
            <Card key={item.title} className="group overflow-hidden p-0">
              <Image src={item.src} alt={item.title} width={1200} height={800} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{item.type}</p>
                <h3 className="mt-2 text-sm font-medium">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Media" title="Video Terbaru" description="Cuplikan video program dan agenda resmi.">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
          {dashboardSummary.videos.map((item) => (
            <Card key={item.title} className="group overflow-hidden p-0">
              <Image src={item.src} alt={item.title} width={1200} height={800} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">{item.type}</p>
                <h3 className="mt-2 text-sm font-medium">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Link Terkait" title="Akses cepat ke layanan eksternal" description="Tautan penting untuk pelayanan, data, dan sistem pemerintahan.">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="glass rounded-2xl px-4 py-4 font-medium neon-hover"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </Section>
    </section>
  );
}
