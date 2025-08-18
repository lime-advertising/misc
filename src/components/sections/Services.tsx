import { services } from "@/content/services";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Our Services
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <Link
                href={s.cta.href}
                className="mt-4 inline-flex rounded-md border px-3 py-2 text-sm hover:bg-gray-50"
              >
                {s.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
