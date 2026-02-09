"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
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
    items: [
      { name: "About CLRLC", href: "/about" },
      { name: "Mission", href: "/mission" },
      { name: "Team", href: "/team" },
    ],
  },
  {
    name: "What We Do",
    items: [
      { name: "Programs & Initiatives", href: "/programs" },
      { name: "Research", href: "/research" },
      { name: "Events", href: "/events" },
    ],
  },
  {
    name: "Community",
    items: [
      { name: "Community Overview", href: "/community" },
      { name: "Gallery", href: "/gallery" },
      { name: "Partners & Sponsorship", href: "/partners" },
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isCurrent = (item: NavItem) => {
    if (item.href) return pathname === item.href;
    if (item.items) return item.items.some((sub) => pathname === sub.href);
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || pathname !== "/"
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="relative h-12 w-32">
          <Image
            src="/logo.png"
            alt="CLRLC Logo"
            fill
            className="object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            if (item.items) {
              return (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger
                    className={cn(
                      "flex items-center gap-1 text-lg font-medium transition-colors hover:text-primary outline-none focus:text-primary",
                      !scrolled && pathname === "/"
                        ? "text-slate-600 hover:text-slate-900"
                        : "text-slate-600 hover:text-primary",
                      isCurrent(item) ? "text-primary font-semibold" : "",
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[200px]">
                    {item.items.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild>
                        <Link
                          href={subItem.href}
                          className={cn(
                            "cursor-pointer w-full",
                            pathname === subItem.href &&
                              "text-primary font-medium",
                          )}
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary relative group py-2",
                  !scrolled && pathname === "/"
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-600 hover:text-primary",
                  pathname === item.href ? "text-primary font-semibold" : "",
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform origin-right group-hover:origin-left group-hover:scale-x-100",
                    pathname === item.href ? "scale-x-100" : "",
                  )}
                />
              </Link>
            );
          })}
          <Button
            asChild
            className={cn(
              "rounded-full px-6",
              !scrolled && pathname === "/"
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-primary text-white",
            )}
          >
            <Link href="/contact" className="text-lg">
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
                size="icon"
                className={cn(
                  !scrolled && pathname === "/" ? "text-slate-900" : "",
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] flex flex-col gap-0 px-0"
            >
              <div className="p-6 border-b flex items-center justify-between">
                <div className="relative h-10 w-28">
                  <Image
                    src="/logo.png"
                    alt="CLRLC Logo"
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

              <div className="flex-1 overflow-y-auto py-6 px-6">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <div key={item.name} className="space-y-3">
                      <div className="text-lg font-bold text-slate-400 uppercase tracking-wider">
                        {item.name}
                      </div>
                      {item.items ? (
                        <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-100">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "text-2xl font-medium transition-colors block py-1",
                                pathname === subItem.href
                                  ? "text-primary font-semibold"
                                  : "text-slate-600 hover:text-slate-900",
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={item.href!}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-2xl font-medium block py-1",
                            pathname === item.href
                              ? "text-primary font-semibold"
                              : "text-slate-600 hover:text-slate-900",
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="p-6 border-t bg-slate-50">
                <Button
                  className="w-full rounded-full h-12 text-base shadow-md"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact" className="text-xl">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
