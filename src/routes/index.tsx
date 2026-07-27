import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Download, Shield, IndianRupee, Headphones, Route as RouteIcon,
  BadgeCheck, Sparkles, Car, Users, Luggage, Mountain, MapPin, Clock,
  Compass, HeartHandshake, Wallet, CalendarCheck, Phone, Mail, Instagram,
  Facebook, MessageCircle, Star, PlayCircle, Map, Hotel, ShieldCheck,
  BookOpen, ClipboardCheck, Sunrise, ChevronRight,
} from "lucide-react";

import heroImg from "@/assets/hero-nepal.jpg";
import ebookImg from "@/assets/ebook-mockup.png";
import pkgPokhara from "@/assets/pkg-pokhara.jpg";
import pkgKathmandu from "@/assets/pkg-kathmandu.jpg";
import pkgCombo from "@/assets/pkg-combo.jpg";
import pkgMuktinath from "@/assets/pkg-muktinath.jpg";
import pkgLumbini from "@/assets/pkg-lumbini.jpg";
import pkgCustom from "@/assets/pkg-custom.jpg";
import fleetInnova from "@/assets/fleet-innova.jpg";
import fleetErtiga from "@/assets/fleet-ertiga.jpg";
import fleetAura from "@/assets/fleet-aura.jpg";
import tFamily from "@/assets/testimonial-family.jpg";
import tCouple from "@/assets/testimonial-couple.jpg";
import tSenior from "@/assets/testimonial-senior.jpg";

import { Navbar } from "@/components/landing/Navbar";
import { LeadForm } from "@/components/landing/LeadForm";
import { FAQ } from "@/components/landing/FAQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Himavan Journeys — Premium Nepal Road Trips for Indian Travelers" },
      {
        name: "description",
        content:
          "Private Nepal road trips from Lucknow, Delhi, Varanasi and Gorakhpur. Handpicked hotels, comfortable vehicles, custom itineraries. Download the free 2026 Nepal Road Trip Guide.",
      },
      { property: "og:title", content: "Himavan Journeys — Premium Nepal Road Trips" },
      {
        property: "og:description",
        content:
          "Discover Nepal like never before. Private road trips, handpicked hotels and personalized itineraries for Indian families, couples and pilgrims.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Himavan Journeys",
          description:
            "Premium Nepal road trip experiences for Indian travelers — private fleet, curated hotels, custom itineraries.",
          areaServed: "Nepal",
          priceRange: "₹₹",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1284",
          },
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustBar />
      <LeadMagnet />
      <Problems />
      <WhyUs />
      <Packages />
      <Fleet />
      <Journey />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.35);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 -z-10 scale-110"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.1)` }}
      >
        <img
          src={heroImg}
          alt="Himalayan peaks at golden hour in Nepal"
          width={1920}
          height={1200}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background" />
        <div className="absolute inset-0 radial-glow opacity-70" />
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-40 sm:px-6 lg:px-8 lg:pb-28 lg:pt-48">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
            Nepal Road Trips · 2026 Season Open
          </div>
          <h1 className="mt-6 text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[92px]">
            Discover Nepal
            <br />
            <span className="gradient-text italic">like never before.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Private road trips, handpicked hotels, comfortable vehicles and
            personalised itineraries — designed for Indian families, couples and
            pilgrims travelling from Lucknow, Delhi, Varanasi and Gorakhpur.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="#lead-magnet"
              className="group inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-7 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" />
              Download FREE Nepal Guide
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 rounded-full glass-strong px-7 py-4 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
            >
              Plan My Trip
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-6">
            <Stat value="1,200+" label="Happy Travelers" />
            <Stat value="4.9★" label="Google Rating" />
            <Stat value="7 yrs" label="On Nepal Routes" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1">
          <div className="h-2 w-1 rounded-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl sm:text-3xl font-medium tracking-tight">{value}</div>
      <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  const items = [
    { icon: BadgeCheck, label: "Verified Travelers" },
    { icon: ShieldCheck, label: "Professional Drivers" },
    { icon: IndianRupee, label: "Transparent Pricing" },
    { icon: Headphones, label: "24×7 Support" },
    { icon: RouteIcon, label: "Custom Itineraries" },
  ];
  return (
    <section className="border-y border-white/5 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon className="h-4 w-4 text-accent" />
              <span className="tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LEAD MAGNET ---------------- */
function LeadMagnet() {
  const includes = [
    { icon: Map, label: "India–Nepal Border Guide" },
    { icon: Wallet, label: "Budget Planner" },
    { icon: ClipboardCheck, label: "Packing Checklist" },
    { icon: Hotel, label: "Best Hotels by City" },
    { icon: IndianRupee, label: "Currency & UPI Guide" },
    { icon: Shield, label: "Safety Tips" },
    { icon: BookOpen, label: "Travel Documents" },
    { icon: Sunrise, label: "Sample 7-Day Itinerary" },
  ];
  return (
    <section id="lead-magnet" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 radial-glow opacity-70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Free Download · 68 pages
            </div>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              The Ultimate <span className="gradient-text italic">Nepal Road Trip</span> Guide
              for Indian Travelers
              <span className="block text-lg sm:text-xl mt-3 font-sans not-italic text-muted-foreground tracking-normal">
                2026 Edition
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground max-w-xl">
              Everything a first-time Indian traveler needs — border crossing, budgets,
              routes, hotels, food, pilgrimage stops and hidden gems — written by our
              team who's been on these roads for seven years.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {includes.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 rounded-xl glass px-4 py-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg gradient-primary text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-primary/40 via-secondary/20 to-transparent blur-3xl" />
            <div className="grid lg:grid-cols-[1fr,1.2fr] items-center gap-8">
              <div className="animate-float mx-auto max-w-[280px] lg:max-w-none">
                <img
                  src={ebookImg}
                  alt="Nepal Road Trip Guide 2026 hardcover"
                  width={1200}
                  height={1408}
                  className="h-auto w-full drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-start-1 lg:row-start-1 lg:col-span-2">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEMS ---------------- */
function Problems() {
  const items = [
    { title: "Confused about border crossing?", body: "Which document works, what's the process, how long does it take — we handle it end-to-end." },
    { title: "Worried about safe hotels?", body: "Every hotel personally audited for cleanliness, heaters, hot water and Indian food." },
    { title: "Nervous about mountain driving?", body: "Trained Indian-Nepali drivers who know every curve, every viewpoint, every tea stop." },
    { title: "Anxious about hidden costs?", body: "One transparent price. Toll, permits, driver stay, taxes — everything included." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">The Nepal Anxiety</div>
          <h2 className="mt-3 text-4xl sm:text-5xl leading-tight">
            Planning Nepal from India shouldn't feel <span className="italic gradient-text">stressful.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most travelers give up because of a hundred small unknowns. We've been solving
            them quietly for seven years.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-3xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="h-10 w-10 rounded-xl gradient-primary opacity-90 group-hover:opacity-100 transition" />
              <h3 className="mt-5 text-lg font-medium tracking-tight font-sans">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    { icon: Car, title: "Private Fleet", body: "Own vehicles, sanitised, maintained monthly. No third-party surprises." },
    { icon: Hotel, title: "Verified Hotels", body: "Handpicked 3★ to boutique properties across Pokhara, Kathmandu & Muktinath." },
    { icon: IndianRupee, title: "Transparent Pricing", body: "One flat cost. GST invoice. Zero last-minute add-ons." },
    { icon: ShieldCheck, title: "Experienced Drivers", body: "7+ years on Nepal routes, Hindi-speaking, first-aid trained." },
    { icon: CalendarCheck, title: "Flexible Plans", body: "Change your dates or itinerary up to 15 days before, free of cost." },
    { icon: Headphones, title: "24×7 Support", body: "A real person on WhatsApp — from the moment you land to the day you return." },
    { icon: Compass, title: "Custom Itinerary", body: "Built around your pace — temples, adventure, honeymoon, senior-friendly." },
    { icon: HeartHandshake, title: "Local Expertise", body: "Nepali partners, Indian sensibilities. Food, timings, prayers — sorted." },
  ];
  return (
    <section className="py-24 sm:py-32 bg-surface/30 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">Why Himavan</div>
          <h2 className="mt-3 text-4xl sm:text-5xl">The premium Nepal experience, quietly done well.</h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl glass p-6 hover:bg-white/[0.06] transition">
              <span className="grid h-11 w-11 place-items-center rounded-xl gradient-primary shadow-glow">
                <Icon className="h-5 w-5 text-white" />
              </span>
              <h3 className="mt-5 font-sans text-base font-semibold tracking-tight">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PACKAGES ---------------- */
function Packages() {
  const pkgs = [
    { img: pkgPokhara, name: "Pokhara Escape", duration: "5 Days · 4 Nights", price: "from ₹28,900", highlights: ["Phewa Lake sunrise", "Sarangkot viewpoint", "World Peace Pagoda", "Paragliding add-on"] },
    { img: pkgKathmandu, name: "Kathmandu Explorer", duration: "4 Days · 3 Nights", price: "from ₹24,500", highlights: ["Pashupatinath darshan", "Boudhanath stupa", "Durbar Square heritage", "Thamel food walk"] },
    { img: pkgCombo, name: "Pokhara + Kathmandu", duration: "7 Days · 6 Nights", price: "from ₹42,900", highlights: ["Both cities covered", "Scenic mountain drive", "Boutique lakefront stay", "Adventure + culture mix"] },
    { img: pkgMuktinath, name: "Muktinath Yatra", duration: "8 Days · 7 Nights", price: "from ₹49,500", highlights: ["Sacred darshan", "108 water taps ritual", "Jomsom via Kali Gandaki", "Oxygen support included"] },
    { img: pkgLumbini, name: "Lumbini Tour", duration: "3 Days · 2 Nights", price: "from ₹18,900", highlights: ["Buddha's birthplace", "Maya Devi temple", "World monasteries walk", "Sarnath connect from Varanasi"] },
    { img: pkgCustom, name: "Custom Nepal Tour", duration: "You decide", price: "tailor-made", highlights: ["Your dates, your pace", "Honeymoon or family", "Multi-city combos", "Personal trip designer"] },
  ];
  return (
    <section id="packages" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Signature Journeys</div>
            <h2 className="mt-3 text-4xl sm:text-5xl">Six ways to <span className="italic gradient-text">fall for Nepal.</span></h2>
          </div>
          <a href="#lead-magnet" className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            Get all itineraries in the guide <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pkgs.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-3xl glass shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-[11px] font-medium tracking-wide">
                  {p.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-sans text-xl font-semibold tracking-tight">{p.name}</h3>
                  <span className="whitespace-nowrap text-sm text-accent">{p.price}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href="#lead-magnet"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  View Details <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FLEET ---------------- */
function Fleet() {
  const vehicles = [
    { img: fleetInnova, name: "Toyota Innova Crysta", capacity: "6 + 1", luggage: "5 large bags", comfort: "Premium", use: "Families & groups of 5–6" },
    { img: fleetErtiga, name: "Maruti Ertiga", capacity: "6 + 1", luggage: "4 large bags", comfort: "Comfortable", use: "Small families, budget-smart" },
    { img: fleetAura, name: "Hyundai Aura", capacity: "4 + 1", luggage: "3 bags", comfort: "Sedan comfort", use: "Couples & solo travelers" },
  ];
  return (
    <section id="fleet" className="py-24 sm:py-32 bg-surface/30 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">Our Fleet</div>
          <h2 className="mt-3 text-4xl sm:text-5xl">Comfort that matches the view outside.</h2>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {vehicles.map((v) => (
            <div key={v.name} className="rounded-3xl glass overflow-hidden hover:-translate-y-1 transition-all duration-500">
              <div className="relative aspect-[5/3] overflow-hidden bg-surface">
                <img src={v.img} alt={v.name} width={1200} height={800} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-sans text-lg font-semibold tracking-tight">{v.name}</h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Spec icon={Users} label="Capacity" value={v.capacity} />
                  <Spec icon={Luggage} label="Luggage" value={v.luggage} />
                  <Spec icon={Sparkles} label="Comfort" value={v.comfort} />
                  <Spec icon={MapPin} label="Best for" value={v.use} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spec({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
        <Icon className="h-3 w-3" /> {label}
      </div>
      <div className="mt-1 text-sm">{value}</div>
    </div>
  );
}

/* ---------------- JOURNEY ---------------- */
function Journey() {
  const days = [
    { day: "Day 1", title: "Arrival in Nepal", body: "Pickup from your city. Cross Sonauli / Raxaul border with our driver handling every formality. Overnight at a lakeside boutique property in Pokhara." },
    { day: "Day 2", title: "Pokhara — Lakes & Sky", body: "Sunrise at Sarangkot, boating on Phewa Lake, World Peace Pagoda, and an optional paragliding session over the Annapurnas." },
    { day: "Day 3", title: "Drive to Kathmandu", body: "A cinematic 6-hour scenic drive along the Trishuli river. Evening walk through Thamel and a heritage Newari dinner." },
    { day: "Day 4", title: "Kathmandu Sightseeing", body: "Pashupatinath aarti, Boudhanath stupa parikrama, Swayambhunath and Durbar Square with a private local guide." },
    { day: "Day 5", title: "Return with Memories", body: "Unhurried breakfast, a stop for souvenirs, and a comfortable drop back to your home city with a signed trip journal." },
  ];
  return (
    <section id="journey" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">A Sample Journey</div>
          <h2 className="mt-3 text-4xl sm:text-5xl">Five days that stay with you <span className="italic gradient-text">forever.</span></h2>
        </div>

        <ol className="relative mt-16 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent/60 to-transparent md:left-1/2" />
          {days.map((d, i) => (
            <li key={d.day} className={`relative mb-12 md:mb-16 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"}`}>
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full gradient-primary shadow-glow ring-4 ring-background">
                  <Mountain className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent">{d.day}</div>
                <h3 className="mt-2 font-sans text-2xl font-semibold tracking-tight">{d.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md md:ml-auto">
                  {d.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const reviews = [
    { img: tFamily, name: "The Agarwal Family", city: "Lucknow", stars: 5,
      text: "Every small detail was taken care of — from oxygen for my father at Muktinath to Jain food at every meal. This is not a taxi service, this is hospitality." },
    { img: tCouple, name: "Priya & Rohan", city: "Delhi", stars: 5,
      text: "Our honeymoon in Pokhara felt like a slow luxury film. The lakeside hotel, the sunrise at Sarangkot, the personal notes — Himavan gets it." },
    { img: tSenior, name: "Mr. & Mrs. Tripathi", city: "Varanasi", stars: 5,
      text: "At 62, I was hesitant. The driver was like a son, the pace was perfect, and Muktinath darshan was the most peaceful day of my life." },
  ];
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-surface/30 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Traveler Stories</div>
            <h2 className="mt-3 text-4xl sm:text-5xl">1,200+ families. Same feeling.</h2>
          </div>
          <div className="flex items-center gap-3 rounded-full glass px-4 py-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4.9 on Google · 1,284 reviews</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-3xl glass p-6 flex flex-col">
              <div className="flex items-center gap-3">
                <img src={r.img} alt={r.name} width={800} height={800} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div className="min-w-0">
                  <div className="font-medium text-sm truncate">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.city}</div>
                </div>
                <div className="ml-auto flex">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-foreground/90 flex-1">
                "{r.text}"
              </blockquote>
            </figure>
          ))}
        </div>

        {/* Video testimonial placeholder */}
        <div className="mt-10 relative overflow-hidden rounded-3xl glass p-1">
          <div className="relative aspect-[16/6] rounded-[22px] overflow-hidden">
            <img src={pkgCombo} alt="Video testimonial cover" width={1200} height={900} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <button className="absolute inset-0 grid place-items-center group" aria-label="Play video testimonial">
              <span className="grid h-20 w-20 place-items-center rounded-full gradient-primary shadow-glow transition-transform group-hover:scale-110">
                <PlayCircle className="h-9 w-9 text-white" />
              </span>
            </button>
            <div className="absolute bottom-6 left-6 sm:left-10">
              <div className="text-xs uppercase tracking-widest text-accent">Watch</div>
              <div className="mt-1 font-sans text-lg sm:text-2xl font-medium">"The trip we didn't want to end."</div>
              <div className="text-sm text-muted-foreground">The Sharma Family · 9 days across Nepal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ SECTION WRAPPER ---------------- */
function FAQSection() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">Answered</div>
          <h2 className="mt-3 text-4xl sm:text-5xl">Everything you were <span className="italic gradient-text">wondering.</span></h2>
        </div>
        <div className="mt-14">
          <FAQ />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="" aria-hidden width={1920} height={1200} loading="lazy" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 radial-glow opacity-90" />
      </div>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
          Ready to explore <span className="italic gradient-text">Nepal?</span>
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          Download your FREE 2026 Nepal Road Trip Guide and start planning with the
          confidence of 1,200+ Indian families before you.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#lead-magnet"
            className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-8 py-4 text-sm font-semibold text-white shadow-glow hover:scale-[1.03] transition-transform"
          >
            <Download className="h-4 w-4" /> Download Guide
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full glass-strong px-8 py-4 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-accent" /> Talk to a Travel Expert
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl gradient-primary shadow-glow">
                <Mountain className="h-5 w-5 text-white" strokeWidth={2.4} />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-tight">SRT TRAVELS</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Nepal Road Trips</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
              India's most trusted Nepal road-trip specialist. Private fleet,
              handpicked hotels, personal itineraries.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" links={["About Us", "Packages", "Fleet", "Journey", "Testimonials"]} />
          <FooterCol title="Resources" links={["Free Nepal Guide", "Blog", "Border Guide", "Budget Planner", "Packing Checklist"]} />
          <div>
            <div className="text-sm font-semibold tracking-tight">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 8574748157</li>
              <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-accent" /> WhatsApp 24×7</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> sameeransari.nhgkp@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Surajkund, Gorakhpur · India</li>
              <li>
                <a href="#" className="inline-flex items-center gap-1.5 text-foreground hover:text-accent">
                  <Map className="h-4 w-4" /> View on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Developed by · ASIF ANSARI🙂</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold tracking-tight">{title}</div>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}><a href="#" className="hover:text-foreground transition-colors">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- FLOATING WHATSAPP ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918574748157"
      target="_blank" rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-3 rounded-full gradient-primary px-4 py-3 shadow-glow hover:scale-105 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15">
        <MessageCircle className="h-4 w-4 text-white" />
      </span>
      <span className="hidden sm:block text-sm font-medium text-white pr-1">Chat with us</span>
    </a>
  );
}
