"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Gauge,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Counter from "@/components/ui/Counter";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-silver-soft">
      <Container>
        {/* Content grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: Features & CTA */}
          <div className="lg:col-span-7">
            {/* Intro moved into left column */}
            <div className="max-w-3xl text-left">
              <Badge variant="silver">About RTR Technologies</Badge>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
                Your WordPress Growth Partner
              </h2>
              <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--brand-gold-start)] to-[var(--brand-silver-end)]" />
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We design, build, and optimize modern WordPress websites with SEO
                and analytics at the core. Beyond visuals, we focus on performance,
                accessibility, and measurable results.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border bg-card/50 backdrop-blur px-4 py-4 flex items-start gap-3">
                <span className="inline-flex size-10 aspect-square items-center justify-center rounded-full bg-green-600/15 text-green-500">
                  <CheckCircle2 className="size-5" />
                </span>
                <div>
                  <p className="font-medium">SEO-first development</p>
                  <p className="text-sm text-muted-foreground">
                    Semantic markup, clean IA, and performance budgets baked
                    in from day one.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border bg-card/50 backdrop-blur px-4 py-4 flex items-start gap-3">
                <span className="inline-flex size-10 aspect-square items-center justify-center rounded-full bg-blue-600/15 text-blue-500">
                  <ShieldCheck className="size-5" />
                </span>
                <div>
                  <p className="font-medium">Reliable & scalable builds</p>
                  <p className="text-sm text-muted-foreground">
                    Secure, maintainable, and flexible WordPress implementations
                    aligned to your roadmap.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border bg-card/50 backdrop-blur px-4 py-4 flex items-start gap-3">
                <span className="inline-flex size-10 aspect-square items-center justify-center rounded-full bg-emerald-600/15 text-emerald-500">
                  <TrendingUp className="size-5" />
                </span>
                <div>
                  <p className="font-medium">Analytics that inform action</p>
                  <p className="text-sm text-muted-foreground">
                    GA4 events, funnels, and dashboards to guide ongoing optimization.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border bg-card/50 backdrop-blur px-4 py-4 flex items-start gap-3">
                <span className="inline-flex size-10 aspect-square items-center justify-center rounded-full bg-purple-600/15 text-purple-500">
                  <Gauge className="size-5" />
                </span>
                <div>
                  <p className="font-medium">Performance & accessibility</p>
                  <p className="text-sm text-muted-foreground">
                    Lighthouse-driven budgets and a11y best practices for fast, inclusive sites.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>

          {/* Right: Visual + Stats */}
          <div className="lg:col-span-5 grid gap-6">
            {/* Visual */}
            <div className="relative overflow-hidden rounded-2xl border shadow-sm">
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-white/10 to-white/0 dark:from-white/5 dark:to-white/0" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(255,215,0,0.08),transparent)]" />
              <div className="absolute bottom-3 left-3 text-xs text-muted-foreground">
                Recent builds are optimized for speed, accessibility, and SEO.
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="text-center bg-card/60 backdrop-blur">
                <CardHeader>
                  <Gauge className="mx-auto size-5 text-purple-500" />
                  <CardTitle className="text-2xl">
                    <Counter value={90} suffix="+" />
                  </CardTitle>
                  <CardDescription>Perf. score (avg)</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center bg-card/60 backdrop-blur">
                <CardHeader>
                  <TrendingUp className="mx-auto size-5 text-emerald-500" />
                  <CardTitle className="text-2xl">
                    <Counter value={30} suffix="+" />
                  </CardTitle>
                  <CardDescription>Projects delivered</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center bg-card/60 backdrop-blur">
                <CardHeader>
                  <ShieldCheck className="mx-auto size-5 text-blue-500" />
                  <CardTitle className="text-2xl">
                    <Counter value={5} suffix="+" />
                  </CardTitle>
                  <CardDescription>Experience</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
