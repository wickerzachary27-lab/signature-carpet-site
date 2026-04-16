import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Signature Carpet Cleaning | Eugene, OR — 25+ Years of Trusted Service",
  description:
    "Eugene's premier carpet, upholstery, and floor cleaning specialists. Trusted by 2,000+ rental units and major institutions. Hot-water extraction for deep, lasting clean. Call (541) 342-5326.",
  keywords: [
    "carpet cleaning Eugene OR",
    "upholstery cleaning Eugene",
    "carpet repair Eugene",
    "commercial carpet cleaning Lane County",
    "rental property carpet cleaning Springfield OR",
  ],
  openGraph: {
    title: "Signature Carpet Cleaning | Eugene, OR",
    description:
      "Don't replace it — renew it. Eugene's trusted carpet cleaning specialists for 25+ years.",
    url: "https://sigcarpet.com",
    siteName: "Signature Carpet Cleaning",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
