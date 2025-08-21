import Header from "@/components/layout/Header";
import PageBanner from "@/components/sections/PageBanner";
import Container from "@/components/layout/Container";
import { services } from "@/content/services";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceAbstract from "@/components/illustrations/ServiceAbstract";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, LayoutDashboard, Code2, Rocket } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <PageBanner title="Services" />
      

      {/* Services grid */}
      <section className="py-14 md:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 auto-rows-[1fr]">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 h-full flex flex-col hover-glare"
              >
                {/* Illustration */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border bg-silver-soft">
                  <ServiceAbstract className="absolute inset-0 h-full w-full" />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

                <div className="mt-auto pt-4">
                  <Button asChild>
                    <Link href="/contact">Get in touch</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our process */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center">
            <Badge variant="silver">Our Process</Badge>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">How we work</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-5 bg-card/50 backdrop-blur">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-yellow-500/15 text-yellow-500">
                  <Lightbulb className="size-5" />
                </span>
                <div>
                  <p className="font-medium">1. Discover & plan</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Goals, audiences, IA, and success metrics. We align on scope and a clear timeline.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border p-5 bg-card/50 backdrop-blur">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-500">
                  <LayoutDashboard className="size-5" />
                </span>
                <div>
                  <p className="font-medium">2. Design & content</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sitemap, wireframes, and UI components with content guidance and SEO best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border p-5 bg-card/50 backdrop-blur">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                  <Code2 className="size-5" />
                </span>
                <div>
                  <p className="font-medium">3. Build & integrate</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Clean, scalable WordPress builds with performance budgets, a11y, and GA4 events.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border p-5 bg-card/50 backdrop-blur">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-purple-500/15 text-purple-500">
                  <Rocket className="size-5" />
                </span>
                <div>
                  <p className="font-medium">4. Launch & grow</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Deploy, monitor, and iterate with analytics. Ongoing improvements via retainers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
