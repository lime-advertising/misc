"use client";

import Link from "next/link";
import { SITE } from "@/content/site";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur border-b">
      <Container className="h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          <Image
            src="/rtr-logo.png"
            alt="RTR Technologies - WordPress Development"
            width={120}
            height={80}
            className="object-cover"
            priority
            sizes="(max-width: 100px)"
          />
          {/* {SITE.name} */}
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href={SITE.ctas.secondary.href} className="hidden sm:block">
            {/* fallback if you skipped shadcn */}
            <span className="px-3 py-2 rounded border">Request a Quote</span>
          </Link>
          <Button asChild>
            <Link href={SITE.ctas.primary.href}>{SITE.ctas.primary.label}</Link>
          </Button>
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background shadow-xs"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-b bg-background/95 backdrop-blur">
          <Container className="py-4">
            <div className="flex flex-col gap-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 flex items-center gap-3">
                <Button asChild className="flex-1">
                  <Link href={SITE.ctas.primary.href} onClick={() => setOpen(false)}>
                    {SITE.ctas.primary.label}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link href={SITE.ctas.secondary.href} onClick={() => setOpen(false)}>
                    {SITE.ctas.secondary.label}
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
