"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SITE } from "@/content/site";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {SITE.tagline}
        </motion.h1>

        <motion.p
          className="mt-5 text-lg text-gray-600"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {SITE.description}
        </motion.p>

        <motion.div
          className="mt-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Button asChild size="lg">
            <Link href={SITE.ctas.primary.href}>{SITE.ctas.primary.label}</Link>
          </Button>
          <Link
            href={SITE.ctas.secondary.href}
            className="px-4 py-2.5 rounded border text-sm md:text-base"
          >
            {SITE.ctas.secondary.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
