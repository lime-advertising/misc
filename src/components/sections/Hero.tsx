"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Brand gradient background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-25"
             style={{
               background:
                 "radial-gradient(closest-side, var(--brand-gold-start), transparent 70%)",
             }}
        />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-20"
             style={{
               background:
                 "radial-gradient(closest-side, var(--brand-silver-start), transparent 70%)",
             }}
        />
      </div>
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left Column - Content */}
        <div className="flex items-center py-20 lg:py-0">
          <div className="w-full px-4 md:pl-[max(1rem,calc((100vw-80rem)/2+0rem))]">
            <div className="max-w-xl">
              <Badge variant="gold">{SITE.name}</Badge>
              <motion.h1
                className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {SITE.tagline}
              </motion.h1>

              <motion.p
                className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {SITE.description}
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button asChild size="lg" className="text-base px-8 py-3">
                  <Link href={SITE.ctas.primary.href}>
                    {SITE.ctas.primary.label}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base px-8 py-3"
                >
                  <Link href={SITE.ctas.secondary.href}>
                    {SITE.ctas.secondary.label}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative h-64 lg:h-full w-full">
            <Image
              src="/hero-image.webp"
              alt="RTR Technologies - WordPress Development"
              fill
              className="object-cover will-change-transform"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay for better text contrast on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
