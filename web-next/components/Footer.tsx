import Link from "next/link";
import { quickLinks } from "@/data/site";

export default function Footer() {
  const links = quickLinks.slice(0, 4);

  return (
    <footer className="mt-12 border-t border-[--border] bg-(--card)]/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:py-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[--muted]">Pemkab Konawe Selatan</p>
          <h2 className=" text-2xl font-semibold">Portal resmi pemerintahan daerah</h2>
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
          <div className="grid gap-2 sm:grid-cols-2">
            {links.map((item) => (
              <Link key={item.title} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} className="rounded-2xl border border-[--border] px-4 py-3 text-sm neon-hover">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[--muted]">Sosial & Layanan</p>
          <div className="grid gap-3 sm:gap-4">
            <Link href="/berita" className="group rounded-2xl border border-[--border] px-4 py-3 text-sm transition-all hover:shadow-lg neon-hover sm:rounded-3xl sm:px-6 sm:py-4 sm:text-base">Berita Daerah</Link>
            <Link href="/gallery/foto" className="group rounded-2xl border border-[--border] px-4 py-3 text-sm transition-all hover:shadow-lg neon-hover sm:rounded-3xl sm:px-6 sm:py-4 sm:text-base">Galeri Foto</Link>
            <Link href="/data-informasi/ipkd" className="group rounded-2xl border border-[--border] px-4 py-3 text-sm transition-all hover:shadow-lg neon-hover sm:rounded-3xl sm:px-6 sm:py-4 sm:text-base">IPKD</Link>
            <div className="mt-6 rounded-3xl border border-[--border] bg-[color:var(--card)]/55 p-6 pt-6">
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <p className="mb-4 text-sm text-[color:var(--muted)]">Dapatkan update terbaru dari Pemkab Konawe Selatan</p>
              <div className="flex gap-2">
                <input placeholder="Email Anda" className="flex-1 rounded-2xl border border-[--border] bg-transparent px-3 py-2.5 text-sm focus:ring-2 focus:ring-[color:var(--accent)]/40" />
                <button className="whitespace-nowrap rounded-2xl bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-slate-900 neon-hover">Berlangganan</button>
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-2xl border border-[--border] p-3 text-sm text-[color:var(--muted)]">
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
