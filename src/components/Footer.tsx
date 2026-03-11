import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              Advancing the representation of low-resource languages and
              cultures in AI.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links</h4>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="hover:text-white transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>
                <Link
                  href="/community"
                  className="hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <a
                  href="https://x.com/clrlc_org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/clrlc-org"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/center-for-low-resource-languages-and-culture/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Get in Touch
                </Link>
              </li>

              <li>
                <span>Organisation Email Address:</span>
                <a href="mailto:info@clrlc.org">
                  <br /> info@clrlc.org
                </a>
              </li>

              <li>
                <span>Admin Email Address: </span>
                <a href="mailto:clrlc.center@gmail.com">
                  <br /> clrlc.center@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-base text-gray-400">
          © {new Date().getFullYear()} Center for Low-Resource Languages and
          Cultures. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
