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
      <body className="min-h-screen antialiased">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(204,255,0,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(204,255,0,0.08),transparent_20%)]" />
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24 lg:py-32 page-reveal animate-fade-in-up">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
