import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Brain, Heart, Compass, Target, Sparkles, ShieldCheck, Clock,
  Users, User, UsersRound, CalendarDays, MessageCircle,
  Instagram, Linkedin, Mail, Phone, ArrowRight, Check, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroMind from "@/assets/hero-mind.jpg";
import therapist from "@/assets/therapist.jpg";
import swirlTexture from "@/assets/swirl-texture.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Psyche Beings — Navigating the Masterpiece of Your Mind" },
      {
        name: "description",
        content:
          "Premium therapy that feels like a creative healing journey. Book sessions with a registered clinical psychologist. Mental health is self-care.",
      },
      { property: "og:title", content: "Psyche Beings — Therapy as Self-Care" },
      {
        property: "og:description",
        content: "One step towards yourself. Compassionate therapy across India.",
      },
      { property: "og:image", content: heroMind },
      { name: "twitter:image", content: heroMind },
    ],
  }),
});

/* ---------------- Nav ---------------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="glass rounded-full px-5 py-3 flex items-center justify-between shadow-card">
          <a href="#top" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-gradient-cta grid place-items-center shadow-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-serif text-lg text-foreground">Psyche Beings</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#process" className="hover:text-foreground transition">Process</a>
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#assessment" className="hover:text-foreground transition">Self-Assessment</a>
          </div>
          <Button size="sm" className="rounded-full bg-gradient-cta text-primary-foreground hover:opacity-95">
            Book Session
          </Button>
        </nav>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply animate-drift pointer-events-none"
        style={{ backgroundImage: `url(${swirlTexture})`, backgroundSize: "cover" }}
      />
      <div aria-hidden className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/40 blur-3xl animate-shimmer" />
      <div aria-hidden className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-secondary/60 blur-3xl animate-shimmer" />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-7">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 bg-white/70 backdrop-blur text-primary border border-white/80">
            <Sparkles className="h-3.5 w-3.5 mr-1.5" /> Mental health is self-care
          </Badge>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground text-balance">
            Navigating the <em className="text-primary not-italic">Masterpiece</em> of Your Mind
          </h1>
          <p className="font-serif italic text-xl text-muted-foreground">One step towards yourself.</p>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg text-pretty leading-relaxed">
            Therapy isn't a treatment, it's a return. A quiet space to soften, untangle, and meet yourself
            with kindness — guided by a registered clinical psychologist.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="rounded-full bg-gradient-cta text-primary-foreground shadow-glow hover:opacity-95 px-7">
              Book a Session <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-white/60 backdrop-blur border-primary/20 hover:bg-white/80 px-7">
              Learn More
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> 100% Confidential</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-gold" /> 5000+ hours</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-cta opacity-20 blur-3xl rounded-full" aria-hidden />
          <div className="relative rounded-[2rem] overflow-hidden shadow-glow ring-1 ring-white/60 animate-float-slow">
            <img src={heroMind} alt="Artistic silhouette of a mind blooming into starlight" className="w-full h-auto" width={1280} height={1280} />
          </div>
          <div className="hidden md:block absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-card max-w-[200px]">
            <p className="font-serif italic text-sm text-foreground leading-snug">
              "Healing begins the moment you choose to listen inward."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const stats = [
    { value: "5000+", label: "Therapy Hours" },
    { value: "15", label: "Interns Mentored" },
    { value: "50+", label: "Clients Across India" },
  ];
  const credentials = ["MA Clinical Psychology", "PDCP", "MSME Registered"];
  const journey = [
    { year: "2015", text: "Began clinical training at premier institutions across India." },
    { year: "2018", text: "Completed MA in Clinical Psychology and PDCP certification." },
    { year: "2021", text: "Founded Psyche Beings — therapy reframed as creative self-care." },
    { year: "Today", text: "Guiding clients through CBT, DBT, MET and SMART frameworks." },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">About</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">
            The Journey Behind Psyche Beings
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-cta opacity-15 blur-2xl rounded-3xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden shadow-soft ring-1 ring-border">
                <img src={therapist} alt="Portrait of the lead therapist" className="w-full h-auto" loading="lazy" width={896} height={1152} />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {credentials.map((c) => (
                <Badge key={c} className="rounded-full bg-secondary text-secondary-foreground border-0 px-3 py-1">
                  <Check className="h-3 w-3 mr-1" /> {c}
                </Badge>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I built Psyche Beings as a sanctuary — a place where therapy feels less like a clinic and more like
              a conversation with someone who truly sees you. Every session is rooted in evidence-based practice,
              wrapped in warmth, patience, and the belief that healing is creative work.
            </p>

            <ol className="relative border-l border-border pl-6 space-y-6">
              {journey.map((j) => (
                <li key={j.year} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gradient-cta ring-4 ring-background" />
                  <p className="font-serif text-xl text-primary">{j.year}</p>
                  <p className="text-muted-foreground">{j.text}</p>
                </li>
              ))}
            </ol>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((s) => (
                <Card key={s.label} className="rounded-2xl p-5 text-center shadow-card border-border/60 bg-card">
                  <p className="font-serif text-3xl md:text-4xl text-primary">{s.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { icon: Heart, title: "Getting to Know You", text: "A gentle introduction. We talk at your pace — no pressure, no scripts." },
    { icon: Compass, title: "Understanding Your World", text: "We explore what you're carrying, with curiosity and zero judgment." },
    { icon: Sparkles, title: "Building Your Healing Path", text: "Together we shape a roadmap that feels honest, doable, and yours." },
  ];
  return (
    <section id="process" className="relative py-24 md:py-32 bg-gradient-sky">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">First Session</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Your First Step</h2>
          <p className="mt-4 text-muted-foreground">
            A 60-minute conversation, fully confidential. No labels, no rush — just space to begin.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <Card key={s.title} className="group glass rounded-3xl p-7 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-5">
                <span className="font-serif text-5xl text-primary/20">0{i + 1}</span>
                <span className="h-12 w-12 rounded-2xl bg-gradient-cta grid place-items-center shadow-soft">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 60-minute session</span>
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Strict confidentiality</span>
          <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> Online or in-person</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Methods ---------------- */
function Methods() {
  const methods = [
    { icon: Brain, name: "CBT", title: "Managing Thoughts", text: "Reshape unhelpful thinking patterns with cognitive behavioral therapy." },
    { icon: Heart, name: "DBT", title: "Emotional Balance", text: "Learn to ride emotional waves with dialectical behavior skills." },
    { icon: Sparkles, name: "MET", title: "Inner Motivation", text: "Discover what genuinely moves you forward, on your terms." },
    { icon: Target, name: "SMART", title: "Goals That Stick", text: "Translate insight into a roadmap that's specific and gentle." },
  ];
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">The Toolkit</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">How We Work Together</h2>
          <p className="mt-4 text-muted-foreground">
            Evidence-based methods, woven softly. We choose what fits you — never the other way around.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methods.map((m) => (
            <Card key={m.name} className="group rounded-3xl p-6 border-border/60 bg-card shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 hover:border-primary/30">
              <div className="h-14 w-14 rounded-2xl bg-secondary grid place-items-center mb-5 group-hover:bg-gradient-cta transition-all duration-500">
                <m.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition" />
              </div>
              <p className="font-serif text-sm uppercase tracking-widest text-primary mb-1">{m.name}</p>
              <h3 className="font-serif text-2xl text-foreground mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    { icon: User, title: "Individual Therapy", desc: "One-on-one space for personal growth, anxiety, depression and self-discovery.", featured: false },
    { icon: Heart, title: "Couple Therapy", desc: "Rebuild communication, intimacy and trust — together, with a calm guide.", featured: true },
    { icon: UsersRound, title: "Group Therapy", desc: "Shared healing in a small, carefully held circle of fellow travelers.", featured: false },
  ];
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-sky">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Services</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Transparent, Honest Pricing</h2>
          <p className="mt-4 text-muted-foreground">No hidden fees. Cancel anytime up to 24 hours before your session.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card
              key={s.title}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                s.featured
                  ? "bg-gradient-cta text-primary-foreground shadow-glow border-0 md:scale-105"
                  : "bg-card shadow-card border-border/60 hover:shadow-soft"
              }`}
            >
              {s.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-gold-foreground border-0 rounded-full px-3 py-1">
                  Most Chosen
                </Badge>
              )}
              <s.icon className={`h-8 w-8 mb-4 ${s.featured ? "text-primary-foreground" : "text-primary"}`} />
              <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
              <p className={`text-sm mb-6 leading-relaxed ${s.featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                {s.desc}
              </p>
              <div className="mb-6">
                <span className="font-serif text-5xl">₹1000</span>
                <span className={`text-sm ml-1 ${s.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>/ session</span>
              </div>
              <ul className="space-y-2.5 text-sm mb-8">
                {["60-minute session", "Online or offline", "Easy 24h cancellation", "Fully confidential"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full ${
                  s.featured
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-gradient-cta text-primary-foreground hover:opacity-95"
                }`}
              >
                Book {s.title.split(" ")[0]}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Assessment ---------------- */
function Assessment() {
  const tests = [
    { name: "Anxiety Test", color: "from-sky-200 to-blue-200", value: 0 },
    { name: "Depression Test", color: "from-indigo-200 to-blue-200", value: 0 },
    { name: "Stress Test", color: "from-blue-200 to-cyan-200", value: 0 },
  ];
  return (
    <section id="assessment" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Free Assessments</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Understand Yourself Better</h2>
          <p className="mt-4 text-muted-foreground">
            Short, science-backed self-assessments. Private, free, and a gentle place to begin.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {tests.map((t) => (
            <Card key={t.name} className="rounded-3xl p-7 bg-card shadow-card border-border/60 hover:shadow-glow transition-all duration-500 hover:-translate-y-1 group">
              <div className={`h-32 -mx-7 -mt-7 mb-5 rounded-t-3xl bg-gradient-to-br ${t.color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url(${swirlTexture})`, backgroundSize: "cover" }} />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-5">~3 minutes · 100% private</p>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden mb-5">
                <div className="h-full w-0 bg-gradient-cta group-hover:w-full transition-all duration-1000" />
              </div>
              <Button variant="outline" className="w-full rounded-full border-primary/20 hover:bg-secondary">
                Take Free Assessment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Booking ---------------- */
function Booking() {
  const [day, setDay] = useState(2);
  const [slot, setSlot] = useState("11:00 AM");
  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return { i, day: d.toLocaleDateString("en-US", { weekday: "short" }), date: d.getDate() };
  });
  const slots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"];

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-gradient-hero overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${swirlTexture})`, backgroundSize: "cover" }} />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">Booking</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Schedule Your Session</h2>
          <p className="mt-4 text-muted-foreground">Choose a time that feels right. We'll confirm via WhatsApp within minutes.</p>
        </div>

        <Card className="glass rounded-[2rem] p-6 md:p-10 shadow-glow border-white/60">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" /> Pick a date
              </p>
              <div className="grid grid-cols-7 gap-2">
                {days.map((d) => (
                  <button
                    key={d.i}
                    onClick={() => setDay(d.i)}
                    className={`rounded-2xl py-3 text-center transition-all ${
                      day === d.i
                        ? "bg-gradient-cta text-primary-foreground shadow-soft"
                        : "bg-white/60 hover:bg-white text-foreground"
                    }`}
                  >
                    <p className="text-[10px] uppercase tracking-wider opacity-80">{d.day}</p>
                    <p className="font-serif text-xl">{d.date}</p>
                  </button>
                ))}
              </div>

              <p className="font-serif text-xl text-foreground mt-8 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" /> Pick a time
              </p>
              <div className="grid grid-cols-3 gap-2">
                {slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSlot(s)}
                    className={`rounded-full py-2.5 text-sm transition ${
                      slot === s ? "bg-primary text-primary-foreground" : "bg-white/60 hover:bg-white text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/70 rounded-3xl p-6 flex flex-col">
              <p className="text-sm uppercase tracking-widest text-primary mb-3">Summary</p>
              <h3 className="font-serif text-3xl text-foreground mb-1">Individual Therapy</h3>
              <p className="text-muted-foreground mb-6">60 min · ₹1000</p>

              <div className="space-y-3 text-sm border-t border-border pt-4">
                <div className="flex justify-between"><span className="text-muted-foreground">Date</span><span className="text-foreground font-medium">{days[day].day}, {days[day].date}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Time</span><span className="text-foreground font-medium">{slot}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Mode</span><span className="text-foreground font-medium">Online (Video)</span></div>
              </div>

              <div className="mt-6 rounded-2xl bg-secondary/60 p-4 text-sm text-secondary-foreground">
                <p className="font-medium mb-1">Working Hours</p>
                <p className="text-muted-foreground">Mon–Fri: 10 AM – 10 PM</p>
                <p className="text-muted-foreground">Sat–Sun: 9 AM – 6 PM</p>
              </div>

              <div className="mt-auto pt-6 space-y-2">
                <Button className="w-full rounded-full bg-gradient-cta text-primary-foreground hover:opacity-95 h-11">
                  Confirm via Calendly
                </Button>
                <Button variant="outline" className="w-full rounded-full bg-white border-primary/20 h-11">
                  <MessageCircle className="h-4 w-4 mr-2" /> Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground py-16 overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `url(${swirlTexture})`, backgroundSize: "cover" }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="font-serif italic text-2xl md:text-3xl text-balance">
            "Professional support is not weakness. It is self-care."
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 pb-10 border-b border-primary-foreground/15">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-8 w-8 rounded-full bg-gradient-gold grid place-items-center">
                <Sparkles className="h-4 w-4 text-gold-foreground" />
              </span>
              <span className="font-serif text-lg">Psyche Beings</span>
            </div>
            <p className="text-sm text-primary-foreground/70">A sanctuary for the mind. Online therapy across India.</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest mb-3 text-primary-foreground/60">Contact</p>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@psychebeings.in</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98XXX 12345</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest mb-3 text-primary-foreground/60">Hours</p>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              <li>Mon–Fri · 10 AM – 10 PM</li>
              <li>Sat–Sun · 9 AM – 6 PM</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest mb-3 text-primary-foreground/60">Connect</p>
            <div className="flex gap-3">
              <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 grid place-items-center transition"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 grid place-items-center transition"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 grid place-items-center transition"><MessageCircle className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Psyche Beings. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary-foreground transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Process />
      <Methods />
      <Services />
      <Assessment />
      <Booking />
      <Footer />
    </main>
  );
}
