import { CalendarDays } from "lucide-react";
import { useState } from "react";

// Reservation komponenta s dark mode
export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="rezervace" className="xl:py-16 md:py-12 py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Rezervovat přednášku
            </h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-200">
              Napište nám, kdo jste a jaké termíny preferujete. Ozveme se do 1
              pracovního dne.
            </p>
            <div className="mt-6 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-700 bg-emerald-50/60 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-50 text-sm">
              <p className="font-medium">Informace o soukromí</p>
              <p className="mt-1">
                Vaše údaje používáme pouze k vyřízení poptávky. Žádné
                newslettery, žádné předávání třetím stranám.
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 shadow-sm"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  Instituce / Organizace
                </label>
                <input
                  required
                  className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                  placeholder="ZŠ Rakovník / Městská knihovna"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Kontaktní osoba
                </label>
                <input
                  required
                  className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-600 px-3 py-2"
                  placeholder="Jméno a příjmení"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">E‑mail</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-600 px-3 py-2"
                  placeholder="vy@example.cz"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Telefon</label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-600 px-3 py-2"
                  placeholder="+420"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">
                  Preferované datum(a)
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-600 px-3 py-2"
                  placeholder="např. libovolné úterý v říjnu"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">
                  Publikum & velikost
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-600 px-3 py-2"
                  placeholder="např. 6.–9. třída, ~60 žáků"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium">Zpráva</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-zinc-300 dark:border-zinc-600 px-3 py-2"
                  placeholder="Cíle, zájmová témata, AV technika…"
                />
              </div>
              {/* Honeypot */}
              <input
                type="text"
                name="company"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 dark:bg-orange-500 text-white font-medium hover:bg-orange-700 dark:hover:bg-orange-200 transition duration-300 text-sm sm:text-md cursor-pointer"
            >
              <CalendarDays className="h-5 w-5" /> Odeslat poptávku
            </button>
            {submitted && (
              <p className="mt-3 text-sm text-emerald-700 dark:text-emerald-200">
                Děkujeme! Brzy se ozveme.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
