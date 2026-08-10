import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pakbenefits.com";

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
  verification: {
    google: "QWAtW6sHuXeM2iC5X3CcSWev0PC2XGqHFD3XNi3I9LY",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Welfare Desk Pakistan",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description: "Independent, privacy-first guides to BISP, 8171, Ehsaas, Taleemi Wazaif, and public-service updates in Pakistan.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Welfare Desk Pakistan",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
