import { School, CalendarDays, ExternalLink, CheckCircle2 } from "lucide-react";

export default function ForSchools() {
  return (
    <section
      id="skoly"
      className="xl:pb-16 md:pb-12 sm:pt-4 pt-2 pb-10 bg-gradient-to-b from-zinc-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Pro školy a instituce
          </h2>
          <ul className="mt-4 space-y-3 text-zinc-700">
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />{" "}
              90-120 min na třídu / publikum
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" /> V
              případě potřeby přivezeme vlastní AV techniku
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />{" "}
              Materiály pro rodiče i zaměstnance
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />{" "}
              Faktura a jednoduchá administrativa
            </li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href="#rezervace"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-700 transition text-sm sm:text-md"
            >
              <School className="h-5 w-5" /> Ověřit termín
            </a>
            <a
              href="#faq"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-50 transition text-sm sm:text-md"
            >
              <ExternalLink className="h-5 w-5" /> Přečíst FAQ
            </a>
          </div>
        </div>

        {/* Ceník */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-orange-700">Ceník</p>
          <h3 className="mt-1 text-3xl font-extrabold tracking-tight">
            Od 9 999 Kč / blok
          </h3>
          <p className="mt-2 text-sm text-zinc-600">
            Finální cena závisí na velikosti publika, dopravě a formátu.
            Požádejte o nabídku na míru.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" /> Sleva
              při více blocích v jeden den
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" /> Sleva
              při dlouhodobé spolupráci
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />{" "}
              Úvodní konzultace zdarma
            </li>
          </ul>
          <a
            href="#rezervace"
            className="mt-6 inline-flex items-center justify-center w-full gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-700 transition text-sm sm:text-md"
          >
            <CalendarDays className="h-5 w-5" /> Požádejte o nabídku na míru
          </a>
        </div>
      </div>
    </section>
  );
}
