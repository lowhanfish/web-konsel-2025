export type ProfileDetail = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  sections: { title: string; body: string }[];
};

export const profileDetails: ProfileDetail[] = [
  {
    slug: "bupati",
    title: "Bupati",
    summary: "Profil lengkap Bupati Konawe Selatan.",
    image: "/image/bupati.png",
    sections: [
      { title: "Keluarga", body: "Informasi keluarga inti dan latar belakang sosial." },
      { title: "Riwayat pendidikan", body: "Perjalanan pendidikan formal dan informal." },
      { title: "Pengalaman organisasi", body: "Keterlibatan dalam organisasi sosial dan pemerintahan." },
      { title: "Perjalanan jabatan", body: "Rekam jejak jabatan dan kepemimpinan." },
    ],
  },
  {
    slug: "wakil-bupati",
    title: "Wakil Bupati",
    summary: "Profil lengkap Wakil Bupati Konawe Selatan.",
    image: "/image/wakil.png",
    sections: [
      { title: "Keluarga", body: "Informasi keluarga inti dan latar belakang sosial." },
      { title: "Riwayat pendidikan", body: "Perjalanan pendidikan formal dan informal." },
      { title: "Pengalaman organisasi", body: "Keterlibatan dalam organisasi sosial dan pemerintahan." },
      { title: "Peran koordinasi", body: "Peran dalam mendukung agenda pembangunan daerah." },
    ],
  },
  {
    slug: "sekretaris-daerah",
    title: "Sekretaris Daerah",
    summary: "Profil lengkap Sekretaris Daerah Konawe Selatan.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    sections: [
      { title: "Keluarga", body: "Informasi keluarga inti dan latar belakang sosial." },
      { title: "Riwayat pendidikan", body: "Perjalanan pendidikan formal dan informal." },
      { title: "Pengalaman organisasi", body: "Keterlibatan dalam organisasi sosial dan pemerintahan." },
      { title: "Tugas koordinasi", body: "Sinkronisasi administrasi lintas perangkat daerah." },
    ],
  },
];

export const profileCollections = {
  kepalaOpd: [
    { title: "Dinas Kominfo", meta: "OPD", description: "Digitalisasi, komunikasi publik, dan persandian." },
    { title: "Dinas Kesehatan", meta: "OPD", description: "Layanan kesehatan dan penguatan fasilitas kesehatan." },
    { title: "Dinas Pendidikan", meta: "OPD", description: "Pendidikan dasar dan pengembangan SDM." },
    { title: "Dinas PU", meta: "OPD", description: "Infrastruktur jalan, jembatan, dan sarana publik." },
    { title: "Dinas Sosial", meta: "OPD", description: "Perlindungan sosial dan layanan kesejahteraan." },
    { title: "Dinas Pertanian", meta: "OPD", description: "Ketahanan pangan dan pengembangan sektor pertanian." },
    { title: "Dinas Pariwisata", meta: "OPD", description: "Promosi destinasi dan ekonomi kreatif." },
    { title: "Dinas Perhubungan", meta: "OPD", description: "Transportasi, keselamatan, dan konektivitas." },
  ],
  camat: Array.from({ length: 12 }, (_, i) => ({
    title: `Camat ${i + 1}`,
    meta: "Kecamatan",
    description: "Profil camat dan wilayah kerja kecamatan.",
  })),
  lurah: Array.from({ length: 10 }, (_, i) => ({
    title: `Lurah ${i + 1}`,
    meta: "Kelurahan",
    description: "Profil lurah dan wilayah kelurahan.",
  })),
  desa: Array.from({ length: 12 }, (_, i) => ({
    title: `Kepala Desa ${i + 1}`,
    meta: "Desa",
    description: "Profil kepala desa dan fokus pembangunan desa.",
  })),
};
