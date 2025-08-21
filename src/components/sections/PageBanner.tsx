"use client";

import Container from "@/components/layout/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";

function toTitleCase(segment: string) {
  return segment
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export default function PageBanner({ title }: { title: string }) {
  const pathname = usePathname();
  const parts = (pathname || "/")
    .split("/")
    .filter(Boolean);

  const crumbs = [
    { label: "Home", href: "/" },
    ...parts.map((seg, i) => {
      const href = "/" + parts.slice(0, i + 1).join("/");
      return { label: toTitleCase(seg), href };
    }),
  ];

  return (
    <section className="relative py-10 md:py-14 bg-silver-soft">
      <Container>
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1.5">
            {crumbs.map((c, i) => (
              <li key={c.href} className="inline-flex items-center">
                {i > 0 && <span className="mx-1.5 opacity-60">/</span>}
                {i < crumbs.length - 1 ? (
                  <Link href={c.href} className="hover:text-foreground">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-foreground">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h1>
      </Container>
    </section>
  );
}

