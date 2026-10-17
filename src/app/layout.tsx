import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CLRLC | Center for Low-Resource Languages & Cultures",
    template: "%s | CLRLC",
  },
  description:
    "CLRLC is a global community advancing AI for low-resource languages through community-led data, cultural benchmarks and inclusive language models.",
  metadataBase: new URL("https://www.clrlc.org"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "CLRLC | Center for Low-Resource Languages & Cultures",
    description:
      "CLRLC is a global community advancing AI for low-resource languages through community-led data, cultural benchmarks and inclusive language models.",
    url: "https://www.clrlc.org",
    siteName: "CLRLC",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "CLRLC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLRLC | Center for Low-Resource Languages & Cultures",
    description:
      "CLRLC is a global community advancing AI for low-resource languages through community-led data, cultural benchmarks and inclusive language models.",
    images: ["/logo.jpg"],
    site: "@clrlc_org",
    creator: "@clrlc_org",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CLRLC",
    alternateName: [
      "Center for Low-Resource Languages & Cultures",
      "Center for Low-Resource Languages and Cultures",
    ],
    url: "https://www.clrlc.org",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CLRLC",
    alternateName: "Center for Low-Resource Languages and Cultures",
    url: "https://www.clrlc.org",
    logo: "https://www.clrlc.org/logo.png",
    sameAs: [
      "https://x.com/clrlc_org",
      "https://www.linkedin.com/company/center-for-low-resource-languages-and-culture/",
      "https://github.com/clrlc-org",
    ],
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfairDisplay.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased text-foreground bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
