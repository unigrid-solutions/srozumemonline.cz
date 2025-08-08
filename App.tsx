import React, { useState } from "react";
import { ShieldCheck, School, Users, CalendarDays, MessageSquare, ChevronRight, Mail, Phone, Globe, Play, ExternalLink, BookOpen, Lock, Smartphone, GlobeLock, LaptopMinimal, CheckCircle2 } from "lucide-react";

// NOTE: This is a single-file React component using Tailwind CSS.
// It is designed as a marketing + booking single page for a Czech-localized project.
// Replace brand name, copy, and links as needed. All text is in EN for now as requested.
// Image areas use SVG/gradient placeholders so you can launch without photography.
// Sections: Hero → About → Programs → Why Us → For Schools → Booking → FAQ → Footer


export default function InternetSafetyLanding() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-9 w-9 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-xl grid place-content-center text-white shadow-md shadow-orange-500/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-lg">S rozumem online</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#programs" className="hover:text-orange-600">Programs</a>
            <a href="#schools" className="hover:text-orange-600">For Schools</a>
            <a href="#booking" className="hover:text-orange-600">Book Us</a>
            <a href="#faq" className="hover:text-orange-600">FAQ</a>
          </nav>
          <a href="#booking" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition shadow-sm">
            <CalendarDays className="h-4 w-4" />
            Book a presentation
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
              Internet safety & basic cybersecurity
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Practical talks that make your online life <span className="text-orange-600">safer</span>.
            </h1>
            <p className="mt-4 text-zinc-700 text-lg">
              We visit schools, libraries and public institutions across the Czech Republic to teach simple, effective habits against the most common online risks.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#booking" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-700 transition">
                <CalendarDays className="h-5 w-5" /> Book a date
              </a>
              <a href="#programs" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-50 transition">
                <Play className="h-5 w-5" /> See programs
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-zinc-600">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600"/> 60–90 min sessions</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600"/> Age‑adapted content</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600"/> Czech localization</div>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 border border-zinc-200 overflow-hidden shadow-sm">
              <div className="absolute inset-0 grid place-content-center">
                <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                  <rect x="35" y="35" width="170" height="170" rx="18" className="fill-white"/>
                  <path d="M35 120h170" className="stroke-zinc-300" strokeWidth="2"/>
                  <path d="M120 35v170" className="stroke-zinc-300" strokeWidth="2"/>
                  <path d="M80 150h80" className="stroke-orange-500" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M70 95h100" className="stroke-zinc-300" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-orange-600 text-white grid place-content-center"><Lock className="h-5 w-5"/></div>
              <div>
                <p className="font-medium">Hands-on demos</p>
                <p className="text-sm text-zinc-600">Passwords, phishing, oversharing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Who we are</h2>
            <p className="mt-4 text-zinc-700">
              We are two practitioners who blend IT expertise and education experience. Our talks focus on what actually matters for everyday users: recognizing threats, setting devices right, and reacting calmly when something goes wrong.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-orange-500 to-rose-500"/>
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-sky-500 to-violet-500"/>
              <p className="text-sm text-zinc-600">Portrait placeholders – drop your photos later.</p>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { icon: Smartphone, title: "Smartphone hygiene", text: "Updates, permissions, backups – the simple checklist everyone can follow." },
              { icon: GlobeLock, title: "Safer social media", text: "Privacy settings, oversharing, DMs and reporting abusive behavior." },
              { icon: LaptopMinimal, title: "Phishing & scams", text: "Spotting red flags in emails, messages and websites with live examples." },
              { icon: ShieldCheck, title: "Passwords & MFA", text: "Managers, passphrases and 2‑factor authentication – explained clearly." },
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

      {/* Programs */}
      <section id="programs" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Programs</h2>
              <p className="mt-2 text-zinc-700">Age‑adapted sessions for schools and the general public.</p>
            </div>
            <a href="#booking" className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-800">Book now <ChevronRight className="h-4 w-4"/></a>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              badge: "Grades 1–5",
              title: "First steps online",
              points: ["What is private?","Kindness & reporting","Simple device rules"],
            },{
              badge: "Grades 6–9",
              title: "Your digital footprint",
              points: ["Social networks","Scams & hoaxes","Photos & consent"],
            },{
              badge: "High school / Public",
              title: "Everyday cybersecurity",
              points: ["Passwords & MFA","Phishing drills","Protecting your money"],
            }].map((p, i) => (
              <article key={i} className="relative rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-6 hover:shadow-sm transition">
                <span className="inline-flex text-[11px] uppercase tracking-wide font-semibold text-orange-700 bg-orange-50 border border-orange-200 rounded-full px-2 py-1">{p.badge}</span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0"/>{pt}</li>
                  ))}
                </ul>
                <a href="#booking" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-800">Request this program <ChevronRight className="h-4 w-4"/></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          {[{
            icon: Users,
            title: "Audience‑first",
            text: "We adapt tone, examples and tempo to age and context. No fear‑mongering, just practical sense.",
          },{
            icon: BookOpen,
            title: "Built on Czech reality",
            text: "Local scams, local platforms, local laws. Content is updated continuously.",
          },{
            icon: MessageSquare,
            title: "Interactive & hands‑on",
            text: "Quizzes, live demos, and Q&A. We leave room for discussion and specific cases.",
          }].map((w, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-zinc-200">
              <w.icon className="h-6 w-6 text-orange-600"/>
              <h3 className="mt-3 font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Schools */}
      <section id="schools" className="py-16 bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">For schools & institutions</h2>
            <ul className="mt-4 space-y-3 text-zinc-700">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0"/> 60–90 min per class/audience (max ~100)</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0"/> We bring our own AV if needed</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0"/> Materials for parents & staff</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0"/> Invoice & simple contracting</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#booking" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-700 transition">
                <School className="h-5 w-5"/> Check availability
              </a>
              <a href="#faq" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-zinc-200 hover:bg-zinc-50 transition">
                <ExternalLink className="h-5 w-5"/> Read FAQ
              </a>
            </div>
          </div>

          {/* Pricing card (simple) */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-orange-700">Pricing</p>
            <h3 className="mt-1 text-3xl font-extrabold tracking-tight">From 5 000 Kč / session</h3>
            <p className="mt-2 text-sm text-zinc-600">Final price depends on audience size, travel, and format. Ask for a tailored quote.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5"/> Discount for multiple sessions in one day</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5"/> Non‑profit & municipal rates available</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5"/> Free pre‑call to plan objectives</li>
            </ul>
            <a href="#booking" className="mt-6 inline-flex items-center justify-center w-full gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-700 transition">
              <CalendarDays className="h-5 w-5"/> Request quote
            </a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Book a presentation</h2>
              <p className="mt-2 text-zinc-700">Tell us who you are and your ideal dates. We’ll get back within one business day.</p>
              <div className="mt-6 p-5 rounded-2xl border border-emerald-200 bg-emerald-50/60 text-emerald-900 text-sm">
                <p className="font-medium">Privacy notice</p>
                <p className="mt-1">We use your details only to handle your request. No newsletters, no sharing with third parties.</p>
              </div>
            </div>

            <form onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Institution / Organization</label>
                  <input required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="ZŠ Rakovník / Municipal Library"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">Contact person</label>
                  <input required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="Full name"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="you@example.cz"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">Phone</label>
                  <input type="tel" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="+420"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium">Preferred date(s)</label>
                  <input type="text" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="e.g. Any Tuesday in October"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium">Audience & size</label>
                  <input type="text" className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="e.g. Grades 6–9, ~60 students"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2" placeholder="Goals, topics of interest, AV availability…"/>
                </div>
                {/* Honeypot */}
                <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
              </div>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 text-white font-medium hover:bg-orange-700 transition">
                <CalendarDays className="h-5 w-5"/> Send request
              </button>
              {submitted && (
                <p className="mt-3 text-sm text-emerald-700">Thank you! We\'ll reply shortly.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Frequently asked questions</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[{
              q: "Do you travel outside larger cities?",
              a: "Yes. We cover the entire Czech Republic. Travel cost is included in the quote.",
            },{
              q: "Can we combine multiple sessions in a day?",
              a: "Absolutely. It\'s common to run 2–4 sessions back‑to‑back per venue.",
            },{
              q: "Do you provide materials after the talk?",
              a: "Yes, we send a short recap PDF and links to recommended resources.",
            },{
              q: "What AV do you need?",
              a: "HDMI/USB‑C projector or TV and a microphone for larger rooms. We can bring our own if needed.",
            }].map((f,i)=>(
              <div key={i} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="font-medium">{f.q}</p>
                <p className="mt-2 text-sm text-zinc-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-xl grid place-content-center text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="font-semibold">S rozumem online</span>
            </div>
            <p className="mt-3 text-sm text-zinc-600 max-w-sm">
              Practical internet safety and basic cybersecurity talks for Czech schools and the public.
            </p>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2 items-center"><Mail className="h-4 w-4"/> info@srozumem.online</li>
              <li className="flex gap-2 items-center"><Phone className="h-4 w-4"/> +420 000 000 000</li>
              <li className="flex gap-2 items-center"><Globe className="h-4 w-4"/> Czech Republic</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>Company details</li>
              <li>Privacy policy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-zinc-500">© {new Date().getFullYear()} S rozumem online. All rights reserved.</div>
      </footer>
    </main>
  );
}
