import { ShieldCheck, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-xl grid place-content-center text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="font-semibold">S rozumem online</span>
          </div>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 max-w-sm">
            Praktické přednášky o bezpečnosti na internetu a základní
            kybernetické bezpečnosti pro školy a veřejnost.
          </p>
        </div>
        <div>
          <p className="font-semibold">Kontakt</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex gap-2 items-center">
              <Mail className="h-4 w-4" /> info@srozumemonline.cz
            </li>
            <li className="flex gap-2 items-center">
              <Phone className="h-4 w-4" /> +420 733 348 366
            </li>
            <li className="flex gap-2 items-center">
              <Globe className="h-4 w-4" /> Česká republika
            </li>
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
      <div className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} S rozumem online. Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
