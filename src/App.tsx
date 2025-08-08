import React, { useState } from "react";
import { ShieldCheck, School, Users, CalendarDays, MessageSquare, ChevronRight, Mail, Phone, Globe, Play, ExternalLink, BookOpen, Lock, Smartphone, GlobeLock, LaptopMinimal, CheckCircle2 } from "lucide-react";

// Jednosouborová React komponenta s Tailwind CSS
// Stránka: Hero → O nás → Programy → Proč my → Pro školy → Rezervace → FAQ → Patička

export default function InternetSafetyLanding() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Navigace */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-9 w-9 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-xl grid place-content-center text-white shadow-md shadow-orange-500/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-lg">S rozumem online</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#programy" className="hover:text-orange-600">Programy</a>
            <a href="#skoly" className="hover:text-orange-600">Pro školy</a>
            <a href="#rezervace" className="hover:text-orange-600">Rezervace</a>
            <a href="#faq" className="hover:text-orange-600">Časté dotazy</a>
          </nav>
          <a href="#rezervace" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition shadow-sm">
            <CalendarDays className="h-4 w-4" />
            Rezervovat přednášku
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 bg-gradient-to-br from-orange-500/20 to-rose-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 bg-gradient-to-tr from-sky-500/20 to-violet-500/20 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-zinc-200 px-3 py-1 text-xs text-zinc-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-600" />
              Bezpečnost na internetu & základní kybernetická bezpečnost
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Praktické přednášky, díky kterým bude <span className="text-blue-600">online</span> více v <span className="text-orange-600">bezpečí</span>.
            </h1>
            <p className="mt-4 text-zinc-700 text-lg">
              Navštěvujeme školy, knihovny a veřejné instituce po celé ČR a učíme jednoduché, účinné návyky proti nejčastějším online rizikům.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#rezervace" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-700 transition">
                <CalendarDays className="h-5 w-5" /> Rezervovat termín
              </a>
              <a href="#programy" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-50 transition">
                <Play className="h-5 w-5" /> Zobrazit programy
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-zinc-600">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600"/> 90-120min bloky</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600"/> Vhodné pro všechny <br></br>věkové kategorie</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600"/> Plná česká lokalizace</div>
            </div>
          </div>

          {/* Vizuální placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 border border-zinc-200 overflow-hidden shadow-sm">
              <div className="absolute inset-0 grid place-content-center">
                <img src="img/demo.jpeg" alt="Placeholder" className="h-full w-full rounded-xl object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-orange-600 text-white grid place-content-center"><Lock className="h-5 w-5"/></div>
              <div>
                <p className="font-medium">Praktické ukázky</p>
                <p className="text-sm text-zinc-600">Hesla, phishing, sdílení informací</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O nás */}
      <section id="about" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Kdo jsme</h2>
            <p className="mt-4 text-zinc-700">
              Spojujeme zkušenosti z IT a kyberbezpečnosti se vzděláváním. Zaměřujeme se na to, co je pro běžné uživatele opravdu důležité: rozpoznání hrozby a klidná reakce.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div>
                <img src="img/brtnik_lite.jpeg" alt="Vláďa" className="h-36 w-36 rounded-xl object-cover border-2 border-white shadow-sm" />
                <span>Vladislav Bouška<br></br>Lektor kyberbezpečnosti</span>
              </div>
              <div>
                <img src="img/kubenzi.jpeg" alt="Kuba" className="h-36 w-36 rounded-xl object-cover border-2 border-white shadow-sm" />
                <span>Jakub Englický<br></br>IT specialista a lektor</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Smartphone, title: "Hygiena smartphonů", text: "Aktualizace, oprávnění, zálohy – jednoduchý checklist, který zvládne každý." },
              { icon: GlobeLock, title: "Bezpečnější sociální sítě", text: "Soukromí, sdílení, zprávy a hlášení nevhodného chování." },
              { icon: LaptopMinimal, title: "Phishing a podvody", text: "Jak poznat varovné signály v e‑mailech, zprávách a na webech – na živých příkladech." },
              { icon: ShieldCheck, title: "Hesla & MFA", text: "Správci hesel, heslové fráze a dvoufaktor – srozumitelně a prakticky." },
            ].map((c, i) => (
              <div key={i} className="p-5 rounded-2xl border border-zinc-200 bg-white hover:shadow-sm transition">
                <c.icon className="h-6 w-6 text-orange-600" />
                <h3 className="mt-3 font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programy */}
      <section id="programy" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Programy</h2>
              <p className="mt-2 text-zinc-700">Věkově přizpůsobené bloky pro školy i širokou veřejnost.</p>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              badge: "Veřejnost / školy",
              title: "Kyberbezpečnost na každý den",
              points: ["Jak se chránit před phishingem","Máte silné heslo? A mohla bych ho vidět?","AI: Dobrý sluha, špatný pán"],
            },{
              badge: "Připravujeme",
              title: "Digitální stopa",
              points: ["Sociální sítě","Podvody & hoaxy","Ochrana osobních údajů na webu"],
            },{
              badge: "Připravujeme",
              title: "Online bezpečnost v praxi",
              points: ["Jak poznat falešné e-shopy","Bezpečné nakupování a platby","Ochrana peněz online"],
            }].map((p, i) => (
              <article key={i} className="relative rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-6 hover:shadow-sm transition">
                <span className="inline-flex text-[11px] uppercase tracking-wide font-semibold text-orange-700 bg-orange-50 border border-orange-200 rounded-full px-2 py-1">{p.badge}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0"/>{pt}</li>
                  ))}
                </ul>
                <a href="#rezervace" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-800">Chci tento program <ChevronRight className="h-4 w-4"/></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Proč my */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          {[{
            icon: Users,
            title: "Publikum na prvním místě",
            text: "Přizpůsobujeme tón, příklady i tempo věku a kontextu. Bez strašení – s důrazem na praxi.",
          },{
            icon: BookOpen,
            title: "Postaveno na české realitě",
            text: "Lokální podvody, lokální platformy, místní zákony. Obsah průběžně aktualizujeme.",
          },{
            icon: MessageSquare,
            title: "Interaktivní & praktické",
            text: "Kvízy, živé ukázky a Q&A. Dáváme prostor pro diskuzi a konkrétní případy.",
          }].map((w, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-zinc-200">
              <w.icon className="h-6 w-6 text-orange-600"/>
              <h3 className="mt-3 font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pro školy */}
      <section id="skoly" className="py-16 bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Pro školy a instituce</h2>
            <ul className="mt-4 space-y-3 text-zinc-700">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0"/> 90-120 min na třídu / publikum</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0"/> V případě potřeby přivezeme vlastní AV techniku</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0"/> Materiály pro rodiče i zaměstnance</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0"/> Faktura a jednoduchá administrativa</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#rezervace" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-700 transition">
                <School className="h-5 w-5"/> Ověřit termín
              </a>
              <a href="#faq" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-50 transition">
                <ExternalLink className="h-5 w-5"/> Přečíst FAQ
              </a>
            </div>
          </div>

          {/* Ceník */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-orange-700">Ceník</p>
            <h3 className="mt-1 text-3xl font-extrabold tracking-tight">Od 9 999 Kč / blok</h3>
            <p className="mt-2 text-sm text-zinc-600">Finální cena závisí na velikosti publika, dopravě a formátu. Požádejte o nabídku na míru.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5"/> Sleva při více blocích v jeden den</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5"/> Sleva při dlouhodobé spolupráci</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5"/> Úvodní konzultace zdarma</li>
            </ul>
            <a href="#rezervace" className="mt-6 inline-flex items-center justify-center w-full gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-700 transition">
              <CalendarDays className="h-5 w-5"/> Požádejte o nabídku na míru
            </a>
          </div>
        </div>
      </section>

      {/* Rezervace */}
      <section id="rezervace" className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Rezervovat přednášku</h2>
              <p className="mt-2 text-zinc-700">Napište nám, kdo jste a jaké termíny preferujete. Ozveme se do 1 pracovního dne.</p>
              <div className="mt-6 p-5 rounded-2xl border border-emerald-200 bg-emerald-50/60 text-emerald-900 text-sm">
                <p className="font-medium">Informace o soukromí</p>
                <p className="mt-1">Vaše údaje používáme pouze k vyřízení poptávky. Žádné newslettery, žádné předávání třetím stranám.</p>
              </div>
            </div>

            <form onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Instituce / Organizace</label>
                  <input required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="ZŠ Rakovník / Městská knihovna"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">Kontaktní osoba</label>
                  <input required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="Jméno a příjmení"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">E‑mail</label>
                  <input type="email" required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="vy@example.cz"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">Telefon</label>
                  <input type="tel" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="+420"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium">Preferované datum(a)</label>
                  <input type="text" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="např. libovolné úterý v říjnu"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium">Publikum & velikost</label>
                  <input type="text" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="např. 6.–9. třída, ~60 žáků"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium">Zpráva</label>
                  <textarea rows={4} className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="Cíle, zájmová témata, AV technika…"/>
                </div>
                {/* Honeypot */}
                <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
              </div>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-700 transition">
                <CalendarDays className="h-5 w-5"/> Odeslat poptávku
              </button>
              {submitted && (
                <p className="mt-3 text-sm text-emerald-700">Děkujeme! Brzy se ozveme.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Často kladené dotazy</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[{
              q: "Je možné přijet i mimo větší města?",
              a: "Ano. Působíme po celé České republice. Cestovní náklady jsou součástí nabídky.",
            },{
              q: "Lze spojit více bloků v jednom dni?",
              a: "Určitě. Běžně realizujeme 2–4 bloky za sebou na jednom místě.",
            },{
              q: "Dostaneme materiály po přednášce?",
              a: "Ano, zasíláme krátké shrnutí v PDF a odkazy na doporučené zdroje. Na žádost můžeme poskytnout i tištěné materiály.",
            },{
              q: "Jakou techniku potřebujete?",
              a: "Projektor/TV s HDMI/USB‑C a u větších sálů mikrofon. V případě potřeby techniku přivezeme.",
            }].map((f,i)=>(
              <div key={i} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="font-medium">{f.q}</p>
                <p className="mt-2 text-sm text-zinc-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patička */}
      <footer className="py-10 border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-xl grid place-content-center text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="font-semibold">S rozumem online</span>
            </div>
            <p className="mt-3 text-sm text-zinc-600 max-w-sm">
              Praktické přednášky o bezpečnosti na internetu a základní kybernetické bezpečnosti pro školy a veřejnost.
            </p>
          </div>
          <div>
            <p className="font-semibold">Kontakt</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2 items-center"><Mail className="h-4 w-4"/> info@srozumemonline.cz</li>
              <li className="flex gap-2 items-center"><Phone className="h-4 w-4"/> +420 733 348 366</li>
              <li className="flex gap-2 items-center"><Globe className="h-4 w-4"/> Česká republika</li>
            </ul>
          </div>
          {/* <div>
            <p className="font-semibold">Právní</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>Údaje o společnosti</li>
              <li>Zásady ochrany osobních údajů</li>
              <li>Soubory cookie</li>
            </ul>
          </div> */}
        </div>
        <div className="mt-8 text-center text-xs text-zinc-500">© {new Date().getFullYear()} S rozumem online. Všechna práva vyhrazena.</div>
      </footer>
    </main>
  );
}
