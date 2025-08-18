import { testimonials } from "@/content/testimonials";

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">What Clients Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border p-6 text-left shadow-sm"
            >
              <blockquote className="text-gray-700 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-3 text-sm font-medium text-gray-600">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
