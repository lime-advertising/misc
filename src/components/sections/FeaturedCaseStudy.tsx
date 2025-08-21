"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FeaturedCaseStudy() {
  return (
    <section className="py-16 md:py-24 bg-silver-soft">
      <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <Badge variant="silver">Case Study</Badge>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Featured Case Study</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            A modern, SEO-ready WordPress build with clear IA, fast performance,
            and GA4 event tracking. Designed to convert and easy to maintain.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <motion.div
            whileHover={{ rotateX: 3, rotateY: -3, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative"
          >
            <div
              className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border shadow-sm"
              style={{
                maskImage:
                  "radial-gradient(120% 120% at 50% 20%, black 70%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(120% 120% at 50% 20%, black 70%, transparent 100%)",
              }}
            >
              <Image
                src="/hero-image.webp"
                alt="Featured project preview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
