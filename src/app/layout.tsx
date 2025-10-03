import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A is for Anarchy",
  description: "An ABC book for aspiring anarchists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <nav>
        <Link href="/">Anarchy</Link>
        <Link href="/annotated">Annotated</Link>
        <Link href="/art">Art</Link>
        <Link href="/about">About</Link>
        <Link href="/author">Author</Link>
      </nav>
        {children}
      <footer>
        <p>
          <a href="https://aisforanarchy.com">A is for Anarchy</a> including both the titular work and this sites' content © 2025 by Conor Hoehn is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
          <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" className="creative-commons-img" />
          <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" className="creative-commons-img" />
          <img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" className="creative-commons-img" />
        </p>
        <p>
          <Link href="https://github.com/hyphaeworkshops/AisForAnarchy">Source Code is similarly available.</Link>
        </p>
      </footer>
      </body>
    </html>
  );
}
