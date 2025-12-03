import type { Metadata } from "next";
import { Lato, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Load fonts at module scope (required by next/font)
const lato = Lato({ variable: "--font-lato", subsets: ["latin"], weight: ["400", "700"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400", "700"] });


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
  const setInitialColorScheme = `(function() {
    try {
      var theme = localStorage.getItem('theme');
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (theme === 'dark' || (theme === null && prefersDark)) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      // ignore
    }
  })();`;

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-background text-foreground`}>
        {/* Inline script that runs before React hydration to avoid server/client mismatch for theme */}
        <script dangerouslySetInnerHTML={{ __html: setInitialColorScheme }} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
