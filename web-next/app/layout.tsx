import type { Metadata } from "next";
import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Load fonts at module scope (required by next/font)
const lato = Lato({ variable: "--font-lato", subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["400", "700"] });


// RUJUKAN : https://www.shell.com/investors/why-invest-in-shell.html

export const metadata: Metadata = {
  title: "KAB. KONAWE SELATAN",
  description: "Website Resmi Pemerintah Daerah Kab. Konawe Selatan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${roboto.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
