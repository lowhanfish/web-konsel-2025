import Link from "next/link";
import { quickLinks } from "@/data/site";

export default function Footer() {
  const links = quickLinks.slice(0, 4);

  return (
    <footer className="mt-12 border-t border-[--border] bg-[--card]/45 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[--muted]">Pemkab Konawe Selatan</p>
          <h2 className="text-2xl font-semibold">Portal resmi pemerintahan daerah</h2>
          <p className="max-w-2xl text-sm text-[--muted]">
            Sistem informasi yang dirancang untuk publik, pelayanan, dan transparansi pemerintah Kabupaten Konawe Selatan.
          </p>
          <div className="grid gap-2 text-sm text-[--muted]">
            <p>Alamat: Andoolo, Kabupaten Konawe Selatan, Sulawesi Tenggara</p>
            <p>Email: info@konaweselatankab.go.id</p>
            <p>Telepon: (0401) xxxx xxxx</p>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[--muted]">Tautan Cepat</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {links.map((item) => (
              <Link key={item.title} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} className="rounded-2xl border border-[--border] px-4 py-3 text-sm neon-hover">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[--muted]">Sosial & Layanan</p>
          <div className="grid gap-3">
            <Link href="/berita" className="rounded-2xl border border-[--border] px-4 py-3 text-sm neon-hover">Berita Daerah</Link>
            <Link href="/gallery/foto" className="rounded-2xl border border-[--border] px-4 py-3 text-sm neon-hover">Galeri Foto</Link>
            <Link href="/data-informasi/ipkd" className="rounded-2xl border border-[--border] px-4 py-3 text-sm neon-hover">IPKD</Link>
          </div>
          <div className="mt-4 rounded-2xl border border-[--border] p-4 text-sm text-[--muted]">
            <p className="font-medium text-[--fg]">Jam layanan:</p>
            <p>Senin - Jumat, 08.00 - 16.00 WITA</p>
            <p className="mt-2">Untuk informasi publik dan layanan digital resmi.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-[--border] px-4 py-4 text-center text-xs text-[--muted]">
        © 2026 Pemerintah Kabupaten Konawe Selatan. All rights reserved.
      </div>
    </footer>
  );
}
