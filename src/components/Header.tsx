import { ShieldCheck, CalendarDays } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
          <div className="h-9 w-9 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-xl grid place-content-center text-white shadow-md shadow-orange-500/20">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight sm:text-lg text-md">
            S rozumem online
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#programy"
            className="hover:text-orange-600 text-zinc-900 transition duration-300"
          >
            Programy
          </a>
          <a
            href="#skoly"
            className="hover:text-orange-600 text-zinc-900 transition duration-300"
          >
            Pro školy
          </a>
          <a
            href="#rezervace"
            className="hover:text-orange-600 text-zinc-900 transition duration-300"
          >
            Rezervace
          </a>
          <a
            href="#faq"
            className="hover:text-orange-600 text-zinc-900 transition duration-300"
          >
            Časté dotazy
          </a>
        </nav>
        <a
          href="#rezervace"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-orange-600 text-white text-xs sm:text-sm font-medium hover:bg-orange-700 transition duration-300 shadow-sm"
        >
          <CalendarDays className="h-4 w-4" />
          Rezervovat přednášku
        </a>
      </div>
    </header>
  );
}
