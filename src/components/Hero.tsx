import { CalendarDays, Play, Lock, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden dark:bg-zinc-900">
      <div className="absolute -top-40 -right-40 h-80 w-80 bg-gradient-to-br from-orange-500/20 to-rose-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 bg-gradient-to-tr from-sky-500/20 to-violet-500/20 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-14 xl:py-24 grid lg:grid-cols-2 lg:gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-orange-600" />
            Bezpečnost na internetu & základní kybernetická bezpečnost
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Praktické přednášky, díky kterým budete{" "}
            <span className="text-blue-600 dark:text-blue-400">online</span>{" "}
            více v{" "}
            <span className="text-orange-600 dark:text-orange-400">
              bezpečí
            </span>
            .
          </h1>
          <p className="mt-4 text-zinc-700 dark:text-zinc-200 sm:text-lg text-base">
            Navštěvujeme školy, knihovny a veřejné instituce po celé ČR a učíme
            jednoduché, účinné návyky proti nejčastějším online rizikům.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#rezervace"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 dark:bg-orange-500 text-white font-medium hover:bg-orange-700 dark:hover:bg-orange-600 transition duration-300 text-sm sm:text-base"
            >
              <CalendarDays className="h-5 w-5" /> Rezervovat termín
            </a>
            <a
              href="#programy"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800  transition duration-300 text-sm sm:text-base"
            >
              <Play className="h-5 w-5" /> Zobrazit programy
            </a>
          </div>
          <div className="sm:my-6 lg:mb-0 my-5 flex  sm:gap-4 gap-2 text-sm text-zinc-600 dark:text-zinc-300">
            <div className="flex gap-2 flex-col sm:flex-row text-center sm:text-left">
              <CheckCircle2 className="h-4 w-4 sm:mt-0.5 text-emerald-600 dark:text-emerald-400 inline-block mx-auto" />{" "}
              90-120min bloky
            </div>
            <div className="flex gap-2 flex-col sm:flex-row text-center sm:text-left">
              <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 dark:text-emerald-300 inline-block mx-auto" />{" "}
              Vhodné pro všechny{" "}
              <br className="inline-block sm:hidden lg:inline-block"></br>
              věkové kategorie
            </div>
            <div className="flex gap-2 flex-col sm:flex-row text-center sm:text-left">
              <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 dark:text-emerald-300 inline-block mx-auto" />{" "}
              Plná česká lokalizace
            </div>
          </div>
        </div>

        {/* Vizuální placeholder */}
        <div className="relative">
          <div className="lg:aspect-[4/3] aspect-video rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-sm">
            <div className="absolute inset-0 grid place-content-center">
              <img
                src="img/demo.jpeg"
                alt="Placeholder"
                className="h-full w-full rounded-xl object-cover absolute"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 sm:-left-6 -left-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl sm:p-4 p-2.5 shadow-sm flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-orange-600 dark:bg-orange-500 text-white grid place-content-center">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium text-sm sm:text-base">
                Praktické ukázky
              </p>
              <p className="sm:text-sm text-xs text-zinc-600 dark:text-zinc-300">
                Hesla, phishing, sdílení informací
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
