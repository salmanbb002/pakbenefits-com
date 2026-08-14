import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pakbenefits.com";
const siteName = "Live Govt Schemes & Ehsaas Programs";
const defaultTitle = "Pakistan Government Schemes, BISP 8171 & Ehsaas Guides";
const defaultDescription =
  "Independent guides to Pakistan government schemes, BISP 8171 eligibility and payments, Ehsaas programmes, Taleemi Wazaif, youth loans, and official links.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: { default: defaultTitle, template: `%s | ${siteName}` },
  description: defaultDescription,
  authors: [{ name: "Live Govt Schemes Editorial Team", url: "/about-us/" }],
  creator: siteName,
  publisher: siteName,
  category: "Government welfare and public-service information",
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "en_PK",
    images: [{ url: "/images/hero-support.jpg", width: 1600, height: 1000, alt: "Public service guidance in Pakistan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: "/images/hero-support.jpg", alt: "Public service guidance in Pakistan" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "QWAtW6sHuXeM2iC5X3CcSWev0PC2XGqHFD3XNi3I9LY",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  alternateName: "PakBenefits",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/icon.svg`,
  },
  description: defaultDescription,
  knowsAbout: [
    "Pakistan government schemes",
    "Benazir Income Support Programme (BISP)",
    "8171 eligibility and payment checks",
    "Ehsaas programmes",
    "Benazir Taleemi Wazaif",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  alternateName: "PakBenefits",
  url: siteUrl,
  description: defaultDescription,
  inLanguage: "en-PK",
  publisher: { "@id": `${siteUrl}/#organization` },
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
