import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://welfare-desk-pakistan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Welfare Desk Pakistan — Public Scheme Guides", template: "%s | Welfare Desk Pakistan" },
  description: "Independent, privacy-first guides to BISP, 8171, Taleemi Wazaif, youth programmes, and public-service updates in Pakistan.",
  openGraph: {
    title: "Welfare Desk Pakistan",
    description: "Clear public-programme guides with direct official links.",
    type: "website",
    locale: "en_PK",
    images: [{ url: "/images/hero-support.jpg", width: 1600, height: 1000, alt: "Public service guidance in Pakistan" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
