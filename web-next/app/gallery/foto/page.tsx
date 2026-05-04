import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import FotoClient from "./foto-client";

export const metadata: Metadata = buildMetadata({
  title: "Foto",
  description: "Galeri foto resmi Pemerintah Kabupaten Konawe Selatan.",
  path: "/gallery/foto",
});

export default function Page() {
  return <FotoClient />;
}
