"use client";

import Link from "next/link";
import { SITE } from "@/content/site";
import Container from "@/components/layout/Container";
import { Linkedin, Instagram, Palette, Dribbble } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const showCTA = !pathname?.startsWith("/contact");
  return (
    <footer className="mt-16 border-t">
      <Container className={`text-sm text-muted-foreground ${showCTA ? "pt-24 pb-12" : "py-12"}`}>
        {showCTA && (
          <div className="relative z-10 -mt-[180px] mb-14">
            <div className="mx-auto max-w-4xl rounded-2xl border bg-accent p-8 md:p-10 text-center shadow-lg">
              <p className="text-2xl md:text-3xl font-semibold text-foreground">
                Let’s Build Your Growth Engine
              </p>
              <p className="mt-3 text-base md:text-lg text-muted-foreground">
                Ready to start your project? Get in touch and let’s make it happen.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild>
                  <Link href={SITE.ctas.primary.href}>{SITE.ctas.primary.label}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={SITE.ctas.secondary.href}>{SITE.ctas.secondary.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
        <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-base font-medium text-foreground">
              Stay in the loop
            </p>
            <p className="mt-1">Monthly tips on SEO and WordPress performance.</p>
            <form
              className="mt-4 flex gap-2"
              action="/api/subscribe"
              method="post"
            >
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="max-w-xs"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          <div className="flex items-center justify-start md:justify-end gap-3">
            <Link href={SITE.social.linkedin} aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent">
              <Linkedin className="size-4" />
            </Link>
            <Link href={SITE.social.instagram} aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent">
              <Instagram className="size-4" />
            </Link>
            <Link href={SITE.social.behance} aria-label="Behance" className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent">
              <Palette className="size-4" />
            </Link>
            <Link href={SITE.social.dribbble} aria-label="Dribbble" className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent">
              <Dribbble className="size-4" />
            </Link>
          </div>
        </div>
        <div className="mt-8 mx-auto max-w-4xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>
            <span className="text-xs">Email:</span> {SITE.email}
          </p>
        </div>
      </Container>
    </footer>
  );
}
