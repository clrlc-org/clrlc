"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { HOMEPAGE_GRADIENT } from "@/lib/homepage-theme";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface NavItem {
  name: string;
  href?: string;
  items?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    name: "About",
    href: "/about", // <-- Cleaned up to be a direct link!
  },
  {
    name: "Research",
    href: "/research",
  },
  {
    name: "Langture AI",
    href: "/langture",
  },
  {
    name: "Newsletter",
    href: "/newsletter",
  },
  {
    name: "Community",
    href: "/community",
  },
  {
    name: "Partner With Us",
    href: "/partnerships",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = React.useState(false);

  // On the homepage the menu is gradient until the user scrolls past the hero.
  React.useEffect(() => {
    if (!onHome) return;
    const onScroll = () => {
      const hero = document.getElementById("home-hero");
      const limit = hero ? hero.offsetTop + hero.offsetHeight - 80 : 0;
      setScrolled(window.scrollY > limit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  const gradient = HOMEPAGE_GRADIENT && onHome && !scrolled;

  const isCurrent = (item: NavItem) => {
    if (item.href) return pathname === item.href;
    if (item.items) return item.items.some((sub) => pathname === sub.href);
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2",
        gradient
          ? "bg-gradient-to-r from-[#2E2357] to-[#1F6F86]"
          : "border-b border-slate-200 bg-white",
      )}
    >

      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          className={cn("relative h-12 w-32", gradient && "rounded-xl bg-white px-2")}
        >
          <Image
            src="/logo.png"
            alt="Center for Low-Resource Languages & Cultures (CLRLC)"
            fill
            className="object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href!}
              className={cn(
                "font-sans text-base font-medium transition-colors relative group py-2",
                gradient
                  ? pathname === item.href
                    ? "text-[#5FD0DC] font-semibold"
                    : "text-white hover:text-[#5FD0DC]"
                  : pathname === item.href
                    ? "text-[#1898A8] font-semibold"
                    : "text-[#1A1A1A] hover:text-[#1898A8]",
              )}
            >
              {item.name}
              <span
                className={cn(
                  `absolute bottom-0 left-0 w-full h-0.5 ${gradient ? "bg-[#5FD0DC]" : "bg-[#1898A8]"} scale-x-0 transition-transform origin-right group-hover:origin-left group-hover:scale-x-100`,
                  pathname === item.href ? "scale-x-100" : "",
                )}
              />
            </Link>
          ))}
          <Button
            asChild
            className={cn(
            "rounded-full px-6",
            gradient
              ? "bg-white text-[#2E2357] hover:bg-white/90"
              : "bg-[#1898A8] text-white hover:bg-[#1898A8]/90",
          )}
          >
            <Link href="/contact" className="text-base font-medium">
              Contact Us
            </Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "h-12 w-12 p-0 hover:bg-transparent",
                  gradient ? "text-white" : "text-[#1A1A1A]",
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="fixed inset-0 w-full max-w-none p-0 bg-white border-0"
            >
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <div className="relative h-10 w-28">
                  <Image
                    src="/logo.png"
                    alt="Center for Low-Resource Languages & Cultures (CLRLC)"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <VisuallyHidden.Root>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>
                  Main navigation links for mobile devices.
                </SheetDescription>
              </VisuallyHidden.Root>

              {/* Scrollable nav links */}
              <div className="flex flex-col items-center justify-start overflow-y-auto flex-1 py-16 px-6">
                <nav className="flex flex-col items-center gap-7 w-full">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href!}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "font-sans text-[24px] font-semibold transition-colors block",
                        pathname === item.href
                          ? "text-[#1898A8]"
                          : "text-[#1A1A1A] hover:text-[#1898A8]",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Contact button at bottom */}
              <div className="flex justify-center pb-12 px-6">
                <Button
                  className="rounded-full px-8 py-3 bg-[#1898A8] text-white hover:bg-[#1898A8]/90 font-semibold text-[18px] h-auto"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}