import { ShieldCheck, CalendarDays, Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Při načtení komponenty zkontroluje uložené nastavení nebo systémové preference
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) {
      const darkMode = JSON.parse(saved);
      setIsDark(darkMode);
      document.documentElement.classList.toggle("dark", darkMode);
    } else {
      // Pokud není uloženo, použije systémové nastavení
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
          <div className="h-9 w-9 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-xl grid place-content-center text-white shadow-md shadow-orange-500/20">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight sm:text-lg text-md text-zinc-900 dark:text-white">
            S rozumem online
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#programy"
            className="hover:text-orange-600 text-zinc-900 dark:text-zinc-100 dark:hover:text-orange-400 transition duration-300"
          >
            Programy
          </a>
          <a
            href="#skoly"
            className="hover:text-orange-600 text-zinc-900 dark:text-zinc-100 dark:hover:text-orange-400 transition duration-300"
          >
            Pro školy
          </a>
          <a
            href="#rezervace"
            className="hover:text-orange-600 text-zinc-900 dark:text-zinc-100 dark:hover:text-orange-400 transition duration-300"
          >
            Rezervace
          </a>
          <a
            href="#faq"
            className="hover:text-orange-600 text-zinc-900 dark:text-zinc-100 dark:hover:text-orange-400 transition duration-300"
          >
            Časté dotazy
          </a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition duration-300"
            aria-label="Přepnout dark mode"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Desktop CTA Button */}
          <a
            href="#rezervace"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-orange-600 dark:bg-orange-500 text-white text-xs sm:text-sm font-medium hover:bg-orange-700 dark:hover:bg-orange-600 transition duration-300 shadow-sm"
          >
            <CalendarDays className="h-4 w-4" />
            Rezervovat přednášku
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition duration-300"
            aria-label="Otevřít menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed top-[0px] left-[0px] inset-0 bg-black/50 h-[100vh] w-full"
          onClick={closeMobileMenu}
        />

        {/* Menu Panel */}
        <div
          className={`fixed top-0 h-full w-80 max-w-[85vw] bg-white dark:bg-zinc-900 shadow-xl transition-right duration-300 ease-out ${
            isMobileMenuOpen ? "right-0" : "right-[-100%]"
          }`}
        >
          <nav className="px-6 py-6 space-y-1 bg-zinc-100 dark:bg-zinc-800">
            {/* Close button */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-semibold text-zinc-900 dark:text-white">
                Menu
              </span>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition duration-200"
                aria-label="Zavřít menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <a
              href="#programy"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition duration-200"
            >
              Programy
            </a>
            <a
              href="#skoly"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition duration-200"
            >
              Pro školy
            </a>
            <a
              href="#rezervace"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition duration-200"
            >
              Rezervace
            </a>
            <a
              href="#faq"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-lg transition duration-200"
            >
              Časté dotazy
            </a>

            {/* Mobile CTA Button */}
            <div className="pt-6">
              <a
                href="#rezervace"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-orange-600 dark:bg-orange-500 text-white text-sm font-medium hover:bg-orange-700 dark:hover:bg-orange-600 transition duration-200 shadow-sm"
              >
                <CalendarDays className="h-4 w-4" />
                Rezervovat přednášku
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
