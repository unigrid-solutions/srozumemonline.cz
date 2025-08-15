import { Users, MessageSquare, BookOpen } from "lucide-react";

export default function Why() {
  return (
    <section className="xl:py-16 md:py-12 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
        {[
          {
            icon: Users,
            title: "Publikum na prvním místě",
            text: "Přizpůsobujeme tón, příklady i tempo věku a kontextu. Bez strašení – s důrazem na praxi.",
          },
          {
            icon: BookOpen,
            title: "Postaveno na české realitě",
            text: "Lokální podvody, lokální platformy, místní zákony. Obsah průběžně aktualizujeme.",
          },
          {
            icon: MessageSquare,
            title: "Interaktivní & praktické",
            text: "Kvízy, živé ukázky a Q&A. Dáváme prostor pro diskuzi a konkrétní případy.",
          },
        ].map((w, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white border border-zinc-200"
          >
            <w.icon className="h-6 w-6 text-orange-600" />
            <h3 className="mt-3 font-semibold">{w.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{w.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
