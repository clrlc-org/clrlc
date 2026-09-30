import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Center for Low-Resource Languages & Cultures (CLRLC)",
  description:
    "Advancing the representation of low-resource languages and cultures in Artificial Intelligence.",
  metadataBase: new URL("https://clrlc.org"),
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
    title: "Center for Low-Resource Languages & Cultures (CLRLC)",
    description:
      "Advancing the representation of low-resource languages and cultures in Artificial Intelligence.",
    url: "https://clrlc.org",
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
    title: "Center for Low-Resource Languages & Cultures (CLRLC)",
    description:
      "Advancing the representation of low-resource languages and cultures in Artificial Intelligence.",
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
    alternateName: "Center for Low-Resource Languages and Cultures",
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full`}
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
