import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function buildMetadata(input: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = new URL(input.path ?? "/", siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: input.image ?? "/og-default.png",
          width: 1200,
          height: 630,
          alt: input.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [input.image ?? "/og-default.png"],
    },
  };
}
