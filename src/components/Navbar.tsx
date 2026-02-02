"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Mission", href: "/mission" },
  { name: "Research", href: "/research" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
  { name: "Community", href: "/community" },
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
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo Placeholder */}
          <div
            className={cn(
              "h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl",
              !scrolled && pathname === "/"
                ? "bg-white text-primary shadow-lg"
                : "",
            )}
          >
            C
          </div>
          <span
            className={cn(
              "text-xl font-bold tracking-tight font-heading",
              !scrolled && pathname === "/"
                ? "text-slate-900"
                : "text-slate-900",
            )}
          >
            CLRLC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group py-2",
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
          ))}
          <Button
            asChild
            className={cn(
              "rounded-full px-6",
              !scrolled && pathname === "/"
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-primary text-white",
            )}
          >
            <Link href="/contact">Get Involved</Link>
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
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-white font-bold text-lg">
                    C
                  </div>
                  <span className="text-lg font-bold font-heading text-slate-900">
                    CLRLC
                  </span>
                </div>
                {/* Close button is automatically rendered by SheetContent */}
              </div>

              <VisuallyHidden.Root>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>
                  Main navigation links for mobile devices.
                </SheetDescription>
              </VisuallyHidden.Root>

              <div className="flex-1 overflow-y-auto py-6 px-6">
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium px-4 py-3 rounded-lg transition-colors",
                        pathname === item.href
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="p-6 border-t bg-slate-50">
                <Button
                  className="w-full rounded-full h-12 text-base shadow-md"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Get Involved</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
