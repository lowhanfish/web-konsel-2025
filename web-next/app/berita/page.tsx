import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import BeritaClient from "./berita-client";

export const metadata: Metadata = buildMetadata({
  title: "Berita",
  description: "Daftar berita resmi Pemerintah Kabupaten Konawe Selatan dengan pencarian dan paginasi.",
  path: "/berita",
});

export default function BeritaPage() {
  return <BeritaClient />;
}
