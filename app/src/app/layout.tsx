import type { Metadata } from "next";
import { Outfit, Source_Serif_4, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamil Grabowski | Eastern Europe is Ready for Claude",
  description:
    "Product Manager with 15+ years experience launching products across 10 countries. Ready to bring Claude to Eastern Europe.",
  keywords: [
    "Kamil Grabowski",
    "Product Manager",
    "Anthropic",
    "Claude",
    "Eastern Europe",
    "International Expansion",
  ],
  authors: [{ name: "Kamil Grabowski", url: "https://linkedin.com/in/mrkamilgrabowski" }],
  openGraph: {
    title: "Kamil Grabowski | Eastern Europe is Ready for Claude",
    description:
      "Product Manager with 15+ years experience across 10 countries. Ready to bring Claude to Eastern Europe.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamil Grabowski | Eastern Europe is Ready for Claude",
    description:
      "Product Manager with 15+ years experience across 10 countries. Ready to bring Claude to Eastern Europe.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${sourceSerif.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
