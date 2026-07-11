"use client";

import Link from "next/link";
import { Menu, MessageSquare, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCurrent = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);
  const allNavItems = [...navItems, { href: "/contact", label: "Contact" }];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 text-navy shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Primary navigation"
            className="hidden lg:grid lg:grid-cols-5"
          >
            {navItems.map((item) => (
              <Link
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={cn(
                  "file-tab-link flex min-h-16 items-center justify-center px-3 py-2 text-center text-sm font-semibold text-navy/75",
                  isCurrent(item.href) && "file-tab-link--active",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link
              aria-current={isCurrent("/contact") ? "page" : undefined}
              className={cn(
                "file-tab-link inline-flex min-h-16 items-center justify-center gap-2 px-3 py-2 text-center text-sm font-semibold text-navy/75",
                isCurrent("/contact") && "file-tab-link--active",
              )}
              href="/contact"
            >
              <MessageSquare aria-hidden className="h-4 w-4" />
              Contact
            </Link>
          </nav>

          <div className="flex h-16 items-center justify-end lg:hidden">
            <button
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy/10 bg-white/80 text-navy shadow-sm transition hover:border-brown/30 hover:text-brown"
              onClick={() => setIsMenuOpen((open) => !open)}
              type="button"
            >
              {isMenuOpen ? (
                <X aria-hidden className="h-5 w-5" />
              ) : (
                <Menu aria-hidden className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden={!isMenuOpen}
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 overflow-hidden bg-cream lg:hidden",
          "transition-[opacity,transform,visibility] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0",
        )}
        id="mobile-menu"
      >
        <div
          className={cn(
            "flex min-h-[calc(100svh-4rem)] flex-col justify-center px-6 py-10",
            "bg-[radial-gradient(circle_at_18%_16%,rgba(196,154,117,0.22),transparent_22rem),radial-gradient(circle_at_82%_20%,rgba(23,32,51,0.08),transparent_26rem),linear-gradient(180deg,#fff,#fbf7f1)]",
            "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isMenuOpen ? "translate-y-0" : "-translate-y-8",
          )}
        >
          <nav aria-label="Mobile navigation" className="w-full">
            <div className="mx-auto w-full max-w-5xl border-y border-navy/10">
              {allNavItems.map((item, index) => (
                <Link
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className={cn(
                    "mobile-menu-link flex min-h-20 w-full items-center border-b border-navy/10 px-0 text-left text-3xl font-bold text-navy transition last:border-b-0 sm:min-h-24 sm:text-5xl",
                    "hover:text-brown",
                    isCurrent(item.href) && "text-brown",
                    isMenuOpen && "mobile-menu-link--open",
                  )}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ transitionDelay: `${index * 55}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
