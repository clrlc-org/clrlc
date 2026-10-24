import type { Metadata } from "next";

export const SITE_DESCRIPTION =
  "Center for Low-Resource Languages and Cultures (CLRLC) is a language research AI organisation dedicated to advancing research and innovation for low-resource languages.";

export function pageMetadata(
  title: string,
  path: string,
  description: string = SITE_DESCRIPTION,
): Metadata {
  const image = { url: "/logo.jpg", width: 800, height: 600, alt: "CLRLC Logo" };
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.clrlc.org${path}`,
      siteName: "Center for Low-Resource Languages & Cultures (CLRLC)",
      images: [image],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.jpg"],
      site: "@clrlc_org",
      creator: "@clrlc_org",
    },
  };
}
