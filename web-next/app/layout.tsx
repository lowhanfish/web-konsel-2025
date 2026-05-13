import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: { title: siteConfig.name, description: siteConfig.description, url: siteConfig.url, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/image/box1.jpg" fetchPriority="high" />
      </head>
      <body className="min-h-screen antialiased">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_5%,rgba(214,174,93,0.18),transparent_30%),radial-gradient(circle_at_90%_0%,rgba(28,83,122,0.18),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.5),transparent_45%)]" />
        <Navbar />

        <main className="mx-auto max-w-7xl px-6 py-3 page-reveal md:px-8 md:py-20 lg:py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
