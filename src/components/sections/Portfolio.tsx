import { projects } from "@/content/projects";
import { Badge, type badgeVariants } from "@/components/ui/badge";
import type { VariantProps } from "class-variance-authority";

type Props = {
  badgeVariant?: VariantProps<typeof badgeVariants>["variant"]; // 'gold' | 'silver' | etc.
};

export default function Portfolio({ badgeVariant = "gold" }: Props) {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Badge variant={badgeVariant}>Portfolio</Badge>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Portfolio Highlights</h2>
        </div>

        <p className="mt-3 text-center text-muted-foreground">
          Here’s a glimpse of projects we’ve worked on. More case studies
          launching soon!
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 hover-glare"
            >
              {/* Placeholder thumbnail */}
              <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-muted to-muted/80 dark:from-white/5 dark:to-white/10" />
              <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border px-2 py-1 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.comingSoon && (
                <p className="mt-3 inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs">
                  Coming Soon
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
