import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ContactTeaser() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center rounded-3xl border bg-accent p-10">
        <Badge variant="gold">Get Started</Badge>
        <h3 className="mt-3 text-2xl font-semibold">
          Let’s Build Your Growth Engine
        </h3>
        <p className="mt-2 text-muted-foreground">
          Ready to start your project? Get in touch and let’s make it happen.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-md bg-black px-5 py-2 text-white"
          >
            Book a Free Consultation
          </Link>
          <Link href="/contact" className="rounded-md border px-4 py-2">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
