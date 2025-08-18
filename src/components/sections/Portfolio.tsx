import { projects } from "@/content/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Portfolio Highlights
        </h2>

        <p className="mt-3 text-center text-gray-600">
          Here’s a glimpse of projects we’ve worked on. More case studies
          launching soon!
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border p-5 shadow-sm">
              {/* Placeholder thumbnail */}
              <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200" />
              <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.blurb}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.comingSoon && (
                <p className="mt-3 inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs">
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
