import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import VideoClient from "./video-client";

export const metadata: Metadata = buildMetadata({
  title: "Video",
  description: "Galeri video YouTube resmi Pemerintah Kabupaten Konawe Selatan.",
  path: "/gallery/video",
});

export default function Page() {
  return <VideoClient />;
}
