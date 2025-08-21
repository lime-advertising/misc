import { services } from "@/content/services";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Badge variant="gold">Services</Badge>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Our Services</h2>
        </div>

        <div className="mt-10 grid auto-rows-[1fr] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border p-5 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 h-full flex flex-col hover-glare"
            >
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-auto pt-4">
                <Link
                  href={s.cta.href}
                  className="inline-flex self-start rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                >
                  {s.cta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
