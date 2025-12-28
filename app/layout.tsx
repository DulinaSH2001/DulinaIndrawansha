import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import FilmOverlay from "@/components/FilmOverlay/FilmOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dulina | Full Stack Developer",
  description: "Creative Full Stack Developer crafting beautiful, performant digital experiences with modern technologies. Passionate about clean code and innovative solutions.",
  keywords: ["developer", "portfolio", "full stack", "react", "next.js", "typescript", "web development"],
  authors: [{ name: "Dulina" }],
  openGraph: {
    title: "Dulina | Full Stack Developer",
    description: "Creative Full Stack Developer crafting beautiful, performant digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulina | Full Stack Developer",
    description: "Creative Full Stack Developer crafting beautiful, performant digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <FilmOverlay />
        {children}
      </body>
    </html>
  );
}

