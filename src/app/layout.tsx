import type { Metadata } from "next";
import { Nunito, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${montserrat.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans antialiased text-foreground bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
