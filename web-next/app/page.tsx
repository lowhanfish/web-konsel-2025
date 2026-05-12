import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/ui/HeroCarousel";
import TopBannerCarousel from "@/components/ui/TopBannerCarousel";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { dashboardSummary, quickLinks } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import TextHeader from "@/components/ui/TextHeader";


export const metadata = buildMetadata({
  title: "Dashboard",
  description: "Beranda resmi Pemerintah Kabupaten Konawe Selatan dengan berita, pimpinan, galeri, dan tautan layanan.",
  path: "/",
});

export default function DashboardPage() {
  return (
    <section className="space-y-8 md:space-y-9">
      {/* <TopBannerCarousel /> */}
      <TextHeader />

      <HeroCarousel
        primaryHref="/berita"
        primaryLabel="Lihat Berita"
        secondaryHref="/gallery/foto"
        secondaryLabel="Galeri Publik"
        slides={[
          {
            eyebrow: "Pemerintah Kabupaten Konawe Selatan",
            title: "Website resmi pemerintahan yang modern, cepat, dan mudah diakses.",
            description: "Portal utama untuk berita, profil daerah, data informasi, agenda, dan galeri publik dengan pendekatan SEO-first dan desain glossy neon.",
            image: { src: "/image/box1.jpg", alt: "Visual utama Pemerintah Kabupaten Konawe Selatan" },
          },
          {
            eyebrow: "Layanan Publik",
            title: "Informasi daerah dan layanan pemerintah dalam tampilan yang dinamis.",
            description: "Carousel visual yang menonjolkan identitas pemerintah daerah dan atmosfer Konawe Selatan.",
            image: { src: "/image/box4.jpeg", alt: "Visual layanan publik Konawe Selatan" },
          },
          {
            eyebrow: "Pelayanan Publik",
            title: "Informasi daerah, layanan, dan dokumentasi publik dalam satu portal resmi.",
            description: "Tampilan dinamis yang menonjolkan identitas pemerintahan dan keindahan Konawe Selatan.",
            image: { src: "/image/kantor1.jpeg", alt: "Kantor Pemerintah Kabupaten Konawe Selatan" },
          },
          {
            eyebrow: "Konawe Selatan",
            title: "Visual daerah dengan nuansa landscape yang lebih luas dan sinematik.",
            description: "Menampilkan wajah Konawe Selatan dengan komposisi yang lebih dramatis.",
            image: { src: "/image/box3.jpg", alt: "Landscape Konawe Selatan" },
          },
        ]}
      />

      <div className="mx-auto grid max-w-4xl justify-items-center gap-3 md:grid-cols-3">
        {dashboardSummary.leaders.map((leader) => (
          <Card
            key={leader.name}
            className="group mx-auto w-full max-w-none overflow-hidden p-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(245,224,29,0.18)] md:max-w-56 lg:max-w-54"
          >
            <div className="relative aspect-4/5 overflow-hidden md:aspect-3/4">
              <Image src={leader.image} alt={leader.name} fill sizes="(min-width: 1024px) 14rem, (min-width: 768px) 14rem, 100vw" className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent transition duration-300 group-hover:from-black/15" />
            </div>
            <div className="px-3 pb-3 pt-2 md:px-3 md:pb-3 md:pt-2">
              <p className="text-xs uppercase tracking-[0.18em] text-(--muted)">{leader.role}</p>
              <h2 className="mt-1 text-sm font-semibold leading-tight md:text-[15px] md:leading-snug">{leader.name}</h2>
            </div>
          </Card>
        ))}
      </div>

      <Section eyebrow="Berita" title="5 Berita Terbaru" description="Ringkasan headline terbaru dari kanal pemerintah daerah.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch">
          {dashboardSummary.news.map((item, index) => (
            <Card
              key={item.title}
              className="group relative flex h-full flex-col overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,224,29,0.16),transparent_45%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative h-28 w-full overflow-hidden rounded-xl">
                <Image src={item.image} alt={item.title} fill sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <span className="mt-4 text-xs uppercase tracking-[0.2em] text-(--muted)">{item.category}</span>
              <h3
                className="mt-3 text-base font-semibold leading-6 transition duration-300 group-hover:text-(--accent)"
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
              <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-xs text-(--muted)">
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
              <Image src={item.src} alt={item.title} width={1200} height={800} sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw" className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-(--muted)">{item.type}</p>
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
              <Image src={item.src} alt={item.title} width={1200} height={800} sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw" className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-(--muted)">{item.type}</p>
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
