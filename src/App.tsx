import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Programs from "./components/Programs";
import Why from "./components/Why";
import ForSchools from "./components/ForSchools";
import Reservation from "./components/Reservation";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

// Jednosouborová React komponenta s Tailwind CSS
// Stránka: Hero → O nás → Programy → Proč my → Pro školy → Rezervace → FAQ → Patička

export default function InternetSafetyLanding() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50">
      {/* Navigace */}
      <Header />

      {/* Hero */}
      <Hero />
      {/* O nás */}
      <AboutUs />

      {/* Programy */}
      <Programs />
      {/* Proč my */}
      <Why />
      {/* Pro školy */}
      <ForSchools />
      {/* Rezervace */}
      <Reservation />

      {/* FAQ */}
      <FAQ />

      {/* Patička */}
      <Footer />
    </main>
  );
}
