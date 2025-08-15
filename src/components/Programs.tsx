import { ChevronRight, CheckCircle2 } from "lucide-react";

export default function Programs() {
  return (
    <section
      id="programy"
      className="xl:py-16 md:py-12 py-10 bg-white dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Programy
            </h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Věkově přizpůsobené přednášky pro školy, instituce i širokou
              veřejnost.
            </p>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              badge: "Veřejnost / školy",
              title: "Kyberbezpečnost na každý den",
              points: [
                "Jak se chránit před phishingem",
                "Máte silné heslo? A mohla bych ho vidět?",
                "AI: Dobrý sluha, špatný pán",
              ],
            },
            {
              badge: "Připravujeme",
              title: "Digitální stopa",
              points: [
                "Sociální sítě",
                "Podvody & hoaxy",
                "Ochrana osobních údajů na webu",
              ],
            },
            {
              badge: "Připravujeme",
              title: "Online bezpečnost v praxi",
              points: [
                "Jak poznat falešné e-shopy",
                "Bezpečné nakupování a platby",
                "Ochrana peněz online",
              ],
            },
          ].map((p, i) => (
            <article
              key={i}
              className="relative rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 p-6 hover:shadow-sm dark:hover:bg-zinc-800/50 transition duration-300"
            >
              <span
                className={`inline-flex text-[11px] uppercase tracking-wide font-semibold rounded-full px-2 py-1 ${
                  p.badge === "Připravujeme"
                    ? "text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600"
                    : "text-orange-700 dark:text-orange-300 bg-orange-50 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700"
                }`}
              >
                {p.badge}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-white">
                {p.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    {pt}
                  </li>
                ))}

                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  A mnhoho dalšího!
                </li>
              </ul>
              <a
                href="#rezervace"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-orange-700 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300"
              >
                Chci tento program <ChevronRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
