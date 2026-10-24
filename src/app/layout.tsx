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

const SITE_DESCRIPTION =
  "Center for Low-Resource Languages and Cultures (CLRLC) is a language research AI organisation dedicated to advancing research and innovation for low-resource languages.";

export const metadata: Metadata = {
  title: "Center for Low-Resource Languages & Cultures (CLRLC)",
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://www.clrlc.org"),
  verification: {
    google: "Xf8_zGKt2vftH6UNjRV4y6qyqKjwfa_PVzjDoD9Hzxc",
  },
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
    description: SITE_DESCRIPTION,
    url: "https://www.clrlc.org",
    siteName: "Center for Low-Resource Languages & Cultures (CLRLC)",
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
    description: SITE_DESCRIPTION,
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
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfairDisplay.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased text-foreground bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
