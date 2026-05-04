export const siteConfig = {
  name: "Pemkab Konawe Selatan",
  description: "Website resmi Pemerintah Kabupaten Konawe Selatan",
  url: "https://konaweselatankab.go.id",
};

export type MenuItem = {
  title: string;
  href: string;
  external?: boolean;
  description?: string;
  children?: MenuItem[];
};

export const menu: MenuItem[] = [
  { title: "Dashboard", href: "/" },
  { title: "Berita", href: "/berita" },
  {
    title: "Profil",
    href: "/profil",
    children: [
      { title: "Profil", href: "/profil/profil", description: "Ringkasan profil daerah" },
      { title: "Sejarah", href: "/profil/sejarah", description: "Sejarah terbentuknya kabupaten" },
      {
        title: "Pimpinan",
        href: "/profil/pimpinan",
        description: "Daftar pimpinan dari bupati sampai desa",
        children: [
          { title: "Bupati", href: "/profil/pimpinan/bupati" },
          { title: "Wakil Bupati", href: "/profil/pimpinan/wakil-bupati" },
          { title: "Sekretaris Daerah", href: "/profil/pimpinan/sekretaris-daerah" },
          { title: "Kepala OPD", href: "/profil/pimpinan/kepala-opd" },
          { title: "Camat", href: "/profil/pimpinan/camat" },
          { title: "Lurah", href: "/profil/pimpinan/lurah" },
          { title: "Desa", href: "/profil/pimpinan/desa" },
        ],
      },
      { title: "Visi", href: "/profil/visi" },
      { title: "Misi", href: "/profil/misi" },
      { title: "Tujuan", href: "/profil/tujuan" },
      { title: "Sasaran", href: "/profil/sasaran" },
      { title: "OPD", href: "/profil/opd" },
    ],
  },
  {
    title: "Data & Informasi",
    href: "/data-informasi",
    children: [
    { title: "JDIH", href: "/data-informasi/jdih", external: true, description: "Portal produk hukum" },
    { title: "IPKD", href: "/data-informasi/ipkd", description: "Viewer PDF indikator kinerja" },
    { title: "Data Sektoral", href: "/data-informasi/data-sektoral", external: true, description: "Portal data sektoral" },
    { title: "Kepegawaian", href: "/data-informasi/kepegawaian", external: true, description: "BKPSDM Konawe Selatan" },
    { title: "Peta Digital", href: "/data-informasi/peta-digital", external: true, description: "WebGIS resmi" },
    ],
  },
  {
    title: "Agenda/Pengumuman",
    href: "/agenda-pengumuman",
    children: [
      { title: "Agenda", href: "/agenda-pengumuman/agenda", description: "Agenda pimpinan daerah" },
      { title: "Pengumuman", href: "/agenda-pengumuman/pengumuman", description: "Informasi dan pengumuman resmi" },
    ],
  },
  { title: "Subdomain", href: "/subdomain" },
  {
    title: "Gallery",
    href: "/gallery",
    children: [
      { title: "Infografis", href: "/gallery/infografis" },
      { title: "Foto", href: "/gallery/foto" },
      { title: "Video", href: "/gallery/video" },
    ],
  },
];

export const directExternalRoutes = new Map<string, string>([
  ["/data-informasi/jdih", "https://jdih.konaweselatankab.go.id"],
  ["/data-informasi/data-sektoral", "https://data.konaweselatankab.go.id"],
  ["/data-informasi/kepegawaian", "https://bkpsdm.konaweselatankab.go.id"],
  ["/data-informasi/peta-digital", "http://webgis.konaweselatankab.go.id"],
]);

export const quickLinks = [
  { title: "Kemendagri", href: "https://www.kemendagri.go.id", external: true },
  { title: "KemenPAN-RB", href: "https://www.menpan.go.id", external: true },
  { title: "KPK", href: "https://www.kpk.go.id", external: true },
  { title: "Prov. Sultra", href: "https://sultra.go.id", external: true },
  { title: "Lapor SP4N", href: "https://www.lapor.go.id", external: true },
  { title: "LPSE", href: "https://lpse.konaweselatankab.go.id", external: true },
  { title: "BPS", href: "https://konawe.selatankab.bps.go.id", external: true },
  { title: "BPJS Kesehatan", href: "https://www.bpjs-kesehatan.go.id", external: true },
];

export const dashboardSummary = {
  heroImages: [
    {
      title: "Modern Government",
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
      caption: "Pelayanan publik terpadu dan tata kelola modern",
    },
    {
      title: "Nature Landscapes",
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80",
      caption: "Pesona alam Konawe Selatan sebagai identitas visual daerah",
    },
  ],
  news: [
    {
      title: "Pemerintah dorong layanan digital terpadu",
      category: "Pemda",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      publishedBy: "Humas Pemkab Konsel",
      publishedAt: "4 Mei 2026",
    },
    {
      title: "Percepatan infrastruktur jalan antar wilayah",
      category: "Pembangunan",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      publishedBy: "Dinas PUPR",
      publishedAt: "3 Mei 2026",
    },
    {
      title: "Gerakan bersih pantai dan lingkungan",
      category: "Lingkungan",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
      publishedBy: "DLH Konawe Selatan",
      publishedAt: "2 Mei 2026",
    },
    {
      title: "Konsel siapkan agenda pelayanan publik",
      category: "Pelayanan",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      publishedBy: "Bagian Organisasi",
      publishedAt: "1 Mei 2026",
    },
    {
      title: "Optimalisasi data sektoral lintas OPD",
      category: "Data",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      publishedBy: "Diskominfo",
      publishedAt: "30 April 2026",
    },
  ],
  leaders: [
    { name: "Irham Kalenggo, S.Sos., M.Si.", role: "Bupati", note: "Pimpinan daerah dan arah pembangunan", image: "/image/bupati.png" },
    { name: "H. Wahyu Ade Pratama Imran", role: "Wakil Bupati", note: "Koordinasi program dan pendampingan kebijakan", image: "/image/wakil.png" },
    { name: "H. Ichsan Porosi, ST., MTP", role: "Sekretaris Daerah", note: "Administrasi pemerintahan dan sinkronisasi OPD", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" },
  ],
  media: [
    { type: "Foto", title: "Kegiatan pelayanan publik", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" },
    { type: "Foto", title: "Rapat koordinasi daerah", src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" },
    { type: "Foto", title: "Pelayanan langsung ke masyarakat", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" },
  ],
  videos: [
    { type: "Video", title: "Sosialisasi program daerah", src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80" },
    { type: "Video", title: "Pemaparan capaian kinerja", src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" },
  ],
};

export const profileCardDetails = [
  {
    title: "Bupati",
    subtitle: "Pimpinan daerah",
    summary: "Arah kebijakan, kepemimpinan eksekutif, dan representasi pemerintahan kabupaten.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Wakil Bupati",
    subtitle: "Koordinator program",
    summary: "Pendamping pelaksanaan program strategis dan koordinasi lintas OPD.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sekretaris Daerah",
    subtitle: "Administrasi pemerintahan",
    summary: "Sinkronisasi tata kelola administrasi dan pelaksanaan kebijakan daerah.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
];

export const governmentThemes = [
  {
    title: "Modern Government",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Nature Landscapes",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80",
  },
];
