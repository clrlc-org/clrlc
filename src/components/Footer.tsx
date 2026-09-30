import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { XIcon, GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";

const exploreLinks = [
  { name: "About Us", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "Team", href: "/about#team" },
  { name: "Community", href: "/community" },
];

const emailLinks = [
  { label: "Organisation", email: "info@clrlc.org" },
  { label: "Admin", email: "clrlc.center@gmail.com" },
];

const socialLinks = [
  {
    name: "X (Twitter)",
    href: "https://x.com/clrlc_org",
    icon: XIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/clrlc-org",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/center-for-low-resource-languages-and-culture/",
    icon: LinkedinIcon,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Left block: logo + tagline */}
          <div className="space-y-4">
            <Link href="/" className="block relative h-12 w-32">
              <Image
                src="/logo.png"
                alt="CLRLC Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-lg text-gray-300">
              Building inclusive language technologies for low-resource
              languages and cultures.
            </p>
          </div>

          {/* Explore column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Explore</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-lg text-gray-300">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-lg text-gray-300">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </li>

              {emailLinks.map((item) => (
                <li key={item.email} className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-1.5 shrink-0" />
                  <span>
                    {item.label}:{" "}
                    <a
                      href={`mailto:${item.email}`}
                      className="hover:text-white transition-colors"
                    >
                      {item.email}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social icon row */}
        <div className="mt-10">
          <h4 className="text-lg font-semibold mb-4 text-white">
            Connect With Us
          </h4>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-bright text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-md"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-base text-gray-400">
          © {new Date().getFullYear()} CLRLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
