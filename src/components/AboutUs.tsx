import {
  ShieldCheck,
  Smartphone,
  GlobeLock,
  LaptopMinimal,
} from "lucide-react";
export default function AboutUs() {
  return (
    <section id="about" className="xl:py-16 md:py-12 py-10 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Kdo jsme
          </h2>
          <p className="mt-4 text-zinc-700">
            Spojujeme zkušenosti z IT a kyberbezpečnosti se vzděláváním.
            Zaměřujeme se na to, co je pro běžné uživatele opravdu důležité:{" "}
            <strong>rozpoznání hrozby</strong> a <strong>klidná reakce.</strong>
          </p>
          <div className="mt-6 flex items-center gap-6 justify-center lg:justify-start">
            <div className="text-sm">
              <img
                src="img/brtnik_lite.jpeg"
                alt="Vláďa"
                className="w-36 h-[166px] rounded-xl object-cover border-1 border-white shadow-sm mb-1"
              />
              <span>Vladislav Bouška</span>
              <br />
              <span className="text-zinc-600">Lektor kyberbezpečnosti</span>
            </div>
            <div className="text-sm">
              <img
                src="img/kubenzi.jpeg"
                alt="Kuba"
                className="w-36 h-[166px] rounded-xl object-cover border-1 border-white shadow-sm mb-1"
              />
              <span>Jakub Englický</span>
              <br />
              <span className="text-zinc-600">IT specialista a lektor</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: Smartphone,
              title: "Hygiena smartphonů",
              text: "Aktualizace, oprávnění, zálohy – jednoduchý checklist, který zvládne každý.",
            },
            {
              icon: GlobeLock,
              title: "Bezpečnější sociální sítě",
              text: "Soukromí, sdílení, zprávy a hlášení nevhodného chování.",
            },
            {
              icon: LaptopMinimal,
              title: "Phishing a podvody",
              text: "Jak poznat varovné signály v e‑mailech, zprávách a na webech – na živých příkladech.",
            },
            {
              icon: ShieldCheck,
              title: "Hesla & MFA",
              text: "Správci hesel, heslové fráze a dvoufaktor – srozumitelně a prakticky.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-zinc-200 bg-white hover:shadow-sm transition"
            >
              <c.icon className="h-6 w-6 text-orange-600" />
              <h3 className="mt-3 font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
