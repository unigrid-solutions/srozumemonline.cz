export default function FAQ() {
  return (
    <section
      id="faq"
      className="xl:py-16 md:py-12 py-10 bg-white dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Často kladené dotazy
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            {
              q: "Je možné přijet i mimo větší města?",
              a: "Ano. Působíme po celé České republice. Cestovní náklady jsou součástí nabídky.",
            },
            {
              q: "Lze spojit více bloků v jednom dni?",
              a: "Určitě. Běžně realizujeme 2–4 bloky za sebou na jednom místě.",
            },
            {
              q: "Dostaneme materiály po přednášce?",
              a: "Ano, zasíláme krátké shrnutí v PDF a odkazy na doporučené zdroje. Na žádost můžeme poskytnout i tištěné materiály.",
            },
            {
              q: "Jakou techniku potřebujete?",
              a: "Projektor/TV s HDMI/USB‑C a u větších sálů mikrofon. V případě potřeby techniku přivezeme.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 p-5"
            >
              <p className="font-medium">{f.q}</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
