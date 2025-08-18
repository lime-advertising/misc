"use client";

import Link from "next/link";
import { SITE } from "@/content/site";
import { Button } from "@/components/ui/button"; // if you added shadcn
// If you skipped shadcn, replace Button with a <Link> and Tailwind classes

const nav = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          {SITE.name}
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href={SITE.ctas.secondary.href} className="hidden sm:block">
            {/* fallback if you skipped shadcn */}
            <span className="px-3 py-2 rounded border">Request a Quote</span>
          </Link>
          <Button asChild>
            <Link href={SITE.ctas.primary.href}>{SITE.ctas.primary.label}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
