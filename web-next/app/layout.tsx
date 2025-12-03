import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


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
      <body
        className="antialiased bg-background text-foreground"
      >
        <Navbar mode="light" />
        {children}
      </body>
    </html>
  );
}
