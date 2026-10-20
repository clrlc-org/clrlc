import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact Us", "/contact");

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
