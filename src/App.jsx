import { useState, useEffect } from "react";
import {
  Menu, X, Phone, Mail, MapPin, Star, Wrench, Shield,
  CheckCircle, Calendar, ArrowRight, Clock, Award,
  ChevronRight, Sparkles, Heart, Gem, Eye, Facebook,
  Navigation, MessageCircle,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
  { id: "booking", label: "Book Now" },
  { id: "contact", label: "Contact" },
];

const BIKE_WASH = [
  { name: "Motorwash", price: "₱120" },
  { name: "Motorwash w/ Wax", price: "₱150" },
  { name: "Premium Motorwash", price: "₱200" },
  { name: "Big Bike w/ Wax", price: "₱200" },
  { name: "Big Bike w/ Ceramic", price: "₱250" },
];

const HELMET_CLEANING = [
  { name: "Cleaning Full/Half Face", price: "₱250" },
  { name: "Ceramic Coating w/ Graphene", price: "₱600" },
  { name: "Detailing", price: "₱450" },
  { name: "Package A", price: "₱600", highlight: true },
  { name: "Package B", price: "₱800", highlight: true },
  { name: "Package C", price: "₱1,000", highlight: true },
];

const SNAP_REPAIR = [
  { name: "Double D Ring's", price: "₱100" },
  { name: "Stainless Button", price: "₱150" },
];

const VEHICLE_MODELS = [
  "Mio / Beat",
  "Raider",
  "Click 125",
  "Click 150 / Sniper",
  "Aerox",
  "NMAX / PCX / ADV",
  "Big Bike",
];

const VEHICLE_MATRIX: Record<string, Record<string, string>> = {
  "Mio / Beat":          { Detailing: "₱350", Ceramic: "₱600", "Bike Spa": "₱450", "Pkg A": "₱600",   "Pkg B": "₱800",   "Pkg C": "₱1,000" },
  "Raider":              { Detailing: "₱400", Ceramic: "₱700", "Bike Spa": "₱500", "Pkg A": "₱650",   "Pkg B": "₱850",   "Pkg C": "₱1,050" },
  "Click 125":           { Detailing: "₱400", Ceramic: "₱700", "Bike Spa": "₱500", "Pkg A": "₱650",   "Pkg B": "₱850",   "Pkg C": "₱1,050" },
  "Click 150 / Sniper":  { Detailing: "₱450", Ceramic: "₱750", "Bike Spa": "₱550", "Pkg A": "₱700",   "Pkg B": "₱900",   "Pkg C": "₱1,100" },
  "Aerox":               { Detailing: "₱450", Ceramic: "₱750", "Bike Spa": "₱550", "Pkg A": "₱700",   "Pkg B": "₱900",   "Pkg C": "₱1,100" },
  "NMAX / PCX / ADV":    { Detailing: "₱500", Ceramic: "₱850", "Bike Spa": "₱600", "Pkg A": "₱800",   "Pkg B": "₱1,000", "Pkg C": "₱1,200" },
  "Big Bike":            { Detailing: "₱700", Ceramic: "₱1,100","Bike Spa": "₱800", "Pkg A": "₱1,000", "Pkg B": "₱1,200", "Pkg C": "₱1,500" },
};

const MATRIX_COLS = ["Detailing", "Ceramic", "Bike Spa", "Pkg A", "Pkg B", "Pkg C"];

const CORE_VALUES = [
  { icon: <Award className="w-6 h-6" />, title: "Quality Service", desc: "We never cut corners — every job meets our exacting standard before it leaves the garage." },
  { icon: <Heart className="w-6 h-6" />, title: "Passion for Riders", desc: "Riders ourselves, we understand what your machine means to you and treat it accordingly." },
  { icon: <Gem className="w-6 h-6" />, title: "High-Quality Products", desc: "We use only professional-grade ceramic coatings, graphene products, and cleaning agents." },
  { icon: <Eye className="w-6 h-6" />, title: "Attention to Detail", desc: "From visor seals to vent channels — the details others miss are where we earn our reputation." },
];

const REVIEWS = [
  { name: "Aldrin M.", bike: "Honda Click 150", rating: 5, text: "Had my helmet detailed and coated — it looked brand new. The graphene ceramic coating is genuinely impressive. Will not trust anyone else.", date: "May 2026", avatar: "AM" },
  { name: "Trisha V.", bike: "Yamaha NMAX", rating: 5, text: "Brought my Shoei for detailing. The team was super professional and the result was stunning. Worth every peso.", date: "April 2026", avatar: "TV" },
  { name: "Carlo B.", bike: "Honda ADV 160", rating: 5, text: "Snap button was broken for months. Fixed in under 20 minutes for only ₱150. Service is fast, honest, and genuinely friendly.", date: "May 2026", avatar: "CB" },
  { name: "Maricel R.", bike: "Yamaha Aerox", rating: 5, text: "The Bike Spa package left my Aerox absolutely gleaming. Interior panels, every nook — done. Booked two more sessions already.", date: "June 2026", avatar: "MR" },
  { name: "Dennis L.", bike: "Kawasaki Z400 (Big Bike)", rating: 5, text: "These guys really know big bikes. Package C for my Z400 was thorough, careful, and the ceramic finish is holding up beautifully.", date: "June 2026", avatar: "DL" },
  { name: "Nica G.", bike: "Suzuki Raider R150", rating: 5, text: "Super convenient location in Pasig. Dropped my bike and helmet, came back to find both looking showroom-fresh. Highly recommended!", date: "June 2026", avatar: "NG" },
];

const TIME_SLOTS = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-[#c9a227] text-[#c9a227]" : "text-[#3a3020]"}`} />
      ))}
    </div>
  );
}

// Gold gradient style objects
const goldGrad = "linear-gradient(135deg, #c9a227 0%, #e8c547 50%, #c9a227 100%)";
const goldText = { background: goldGrad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } as React.CSSProperties;
const goldBorder = { border: "1px solid #c9a227" } as React.CSSProperties;
const goldBorderSubtle = { border: "1px solid rgba(201,162,39,0.35)" } as React.CSSProperties;

function GoldButton({ children, onClick, size = "md", outline = false }: {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  outline?: boolean;
}) {
  const sizes = { sm: "px-5 py-2 text-sm", md: "px-7 py-3 text-base", lg: "px-9 py-4 text-lg" };
  if (outline) {
    return (
      <button
        onClick={onClick}
        style={{ ...goldBorder, fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.08em" }}
        className={`${sizes[size]} font-bold text-[#c9a227] rounded hover:bg-[#c9a227]/10 transition-all duration-200 inline-flex items-center gap-2 group`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      style={{ background: goldGrad, fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.08em" }}
      className={`${sizes[size]} font-bold text-[#0b0b0b] rounded hover:brightness-110 transition-all duration-200 inline-flex items-center gap-2 group shadow-lg shadow-[#c9a227]/20`}
    >
      {children}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#c9a227]" />
      <span className="text-[#c9a227] text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
        {children}
      </span>
      <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#c9a227]" />
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-bold text-white text-center leading-tight"
      style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.02em" }}
    >
      {children}
    </h2>
  );
}

// ─── PRICING CARD ─────────────────────────────────────────────────────────────

function PricingCard({ title, items, icon }: {
  title: string;
  items: { name: string; price: string; highlight?: boolean }[];
  icon: React.ReactNode;
}) {
  return (
    <div
      className="bg-card rounded-lg overflow-hidden flex flex-col"
      style={goldBorderSubtle}
    >
      {/* Card header */}
      <div className="px-6 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.15) 0%, rgba(232,197,71,0.05) 100%)", borderBottom: "1px solid rgba(201,162,39,0.25)" }}>
        <div className="text-[#c9a227]">{icon}</div>
        <h3 className="font-bold text-white text-lg tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em" }}>
          {title}
        </h3>
      </div>
      {/* Items */}
      <div className="flex-1 divide-y" style={{ borderColor: "rgba(201,162,39,0.1)" }}>
        {items.map((item) => (
          <div
            key={item.name}
            className={`flex items-center justify-between px-6 py-3.5 transition-colors ${item.highlight ? "bg-[#c9a227]/5 hover:bg-[#c9a227]/10" : "hover:bg-white/3"}`}
          >
            <span className={`text-sm font-medium ${item.highlight ? "text-[#e8c547]" : "text-foreground/80"}`}>
              {item.name}
            </span>
            <span
              className="text-sm font-bold tabular-nums"
              style={item.highlight ? goldText : undefined}
            >
              {!item.highlight ? (
                <span className="text-[#c9a227]">{item.price}</span>
              ) : item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", email: "", bike: "", service: "", date: "", time: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", phone: "", message: "" });
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Roboto', sans-serif" }}>

      {/* ── NAV ──────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0b0b0b]/96 backdrop-blur-md shadow-xl shadow-black/50" : "bg-transparent"
        }`}
        style={{ borderBottom: scrolled ? "1px solid rgba(201,162,39,0.2)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 shadow-md shadow-[#c9a227]/30" style={{ background: goldGrad }}>
                <Shield className="w-5 h-5 text-[#0b0b0b]" />
              </div>
              <div>
                <div className="font-bold text-white leading-none tracking-widest text-base uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  The Helmet Garage
                </div>
                <div className="text-[10px] tracking-widest leading-none uppercase" style={{ color: "#c9a227" }}>
                  Premium Detailing
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-2 text-sm font-medium tracking-wide rounded transition-all ${
                    activeSection === link.id ? "text-[#c9a227]" : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em" }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:block">
              <GoldButton size="sm" onClick={() => scrollTo("booking")}>
                <Calendar className="w-4 h-4" />
                BOOK YOUR SLOT
              </GoldButton>
            </div>

            <button className="lg:hidden p-2 text-foreground/60 hover:text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#161616]" style={{ borderTop: "1px solid rgba(201,162,39,0.2)" }}>
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { scrollTo(link.id); setMenuOpen(false); }}
                  className="text-left px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-white/5 rounded transition-colors"
                  style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em" }}
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-3 pt-3" style={{ borderTop: "1px solid rgba(201,162,39,0.15)" }}>
                <GoldButton size="sm" onClick={() => { scrollTo("booking"); setMenuOpen(false); }}>
                  <Calendar className="w-4 h-4" />
                  BOOK YOUR SLOT TODAY!
                </GoldButton>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#080808]">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&auto=format"
            alt="Premium motorcycle detail on dark background"
            className="w-full h-full object-cover opacity-20"
          />
          {/* Dark marble radial overlays */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,162,39,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,162,39,0.04) 0%, transparent 50%)" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/70" />
        </div>

        {/* Gold accent line left */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-48 rounded-r" style={{ background: goldGrad }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-36 md:py-0">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded" style={{ border: "1px solid rgba(201,162,39,0.4)", background: "rgba(201,162,39,0.06)" }}>
              <Sparkles className="w-3.5 h-3.5 text-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Pasig City's Premier Motorcycle Detailing
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-bold leading-none mb-5"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(4rem, 12vw, 9rem)", letterSpacing: "0.01em" }}
            >
              <span className="block text-white">CLEAN.</span>
              <span className="block" style={goldText}>PROTECT.</span>
              <span className="block text-white">RIDE.</span>
            </h1>

            <p className="text-foreground/70 text-xl md:text-2xl font-light mb-10 max-w-xl leading-relaxed">
              Premium Detailing and Care for Your Ride.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <GoldButton size="lg" onClick={() => scrollTo("booking")}>
                <Calendar className="w-5 h-5" />
                BOOK YOUR SLOT TODAY!
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </GoldButton>
              <GoldButton size="lg" outline onClick={() => scrollTo("services")}>
                VIEW SERVICES
                <ChevronRight className="w-4 h-4" />
              </GoldButton>
            </div>

            {/* Stats */}
            <div className="mt-16 flex flex-wrap gap-10">
              {[
                { val: "100%", label: "Premium Products" },
                { val: "4.9★", label: "Customer Rating" },
                { val: "All Brands", label: "Bikes Accepted" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold" style={{ fontFamily: "'Rajdhani', sans-serif", ...goldText }}>
                    {val}
                  </div>
                  <div className="text-xs text-foreground/50 uppercase tracking-wider mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0b0b] to-transparent" />
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <SectionLabel>Our Services</SectionLabel>
            <SectionHeading>
              WHAT WE <span style={goldText}>OFFER</span>
            </SectionHeading>
            <p className="text-foreground/55 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              From quick motorwash to full ceramic coating — everything your bike and helmet deserve,
              done right here in Pasig City.
            </p>
          </div>

          {/* Service overview cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {[
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Bike Wash",
                desc: "Standard motorwash to premium ceramic-protected full wash. Quick turnaround, spotless results.",
                items: ["Motorwash from ₱120", "Wax & Ceramic options", "Big Bike specialist"],
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Helmet Cleaning",
                desc: "Deep clean, graphene ceramic coating, and full detailing packages for all helmet types.",
                items: ["Full & Half Face cleaning", "Graphene Ceramic ₱600", "Packages A, B & C"],
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Repairs & Add-Ons",
                desc: "Snap button repair, D-ring replacement, and decal removal with premium wash.",
                items: ["Stainless Button ₱150", "Double D Ring ₱100", "Decal Removal ₱800"],
              },
            ].map(({ icon, title, desc, items }) => (
              <div
                key={title}
                className="bg-card rounded-lg p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300 group"
                style={goldBorderSubtle}
              >
                <div className="w-14 h-14 rounded flex items-center justify-center text-[#c9a227] flex-shrink-0" style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.25)" }}>
                  {icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em" }}>
                    {title}
                  </h3>
                  <p className="text-foreground/55 text-sm leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-1 h-1 rounded-full bg-[#c9a227] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => scrollTo("pricing")}
                  className="mt-auto text-xs text-[#c9a227] hover:text-[#e8c547] transition-colors flex items-center gap-1 font-medium"
                  style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em" }}
                >
                  SEE FULL PRICING <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Add-on banner */}
          <div
            className="rounded-lg px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.12) 0%, rgba(232,197,71,0.04) 100%)", border: "1px solid #c9a227" }}
          >
            <div className="flex items-center gap-4">
              <Sparkles className="w-6 h-6 text-[#c9a227] flex-shrink-0" />
              <div>
                <div className="text-xs text-[#c9a227] font-bold tracking-widest uppercase mb-0.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>Add-On Service</div>
                <div className="text-white font-medium">Removal &amp; Installation of Decals with Premium Wash</div>
              </div>
            </div>
            <div className="text-2xl font-bold flex-shrink-0" style={{ fontFamily: "'Rajdhani', sans-serif", ...goldText }}>₱800</div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section id="pricing" className="py-24 md:py-32 bg-secondary/40 relative">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(201,162,39,0.2)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(201,162,39,0.2)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <SectionLabel>Price List</SectionLabel>
            <SectionHeading>
              TRANSPARENT <span style={goldText}>PRICING</span>
            </SectionHeading>
            <p className="text-foreground/55 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              No hidden fees. Every peso listed is every peso you pay. Walk in or book ahead.
            </p>
          </div>

          {/* Service pricing cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            <PricingCard
              title="Bike Wash"
              icon={<Wrench className="w-5 h-5" />}
              items={BIKE_WASH}
            />
            <PricingCard
              title="Helmet Cleaning"
              icon={<Shield className="w-5 h-5" />}
              items={HELMET_CLEANING}
            />
            <PricingCard
              title="Snap Button Repair"
              icon={<Sparkles className="w-5 h-5" />}
              items={SNAP_REPAIR}
            />
          </div>

          {/* Vehicle pricing matrix */}
          <div className="bg-card rounded-lg overflow-hidden" style={goldBorderSubtle}>
            {/* Header */}
            <div className="px-6 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg, rgba(201,162,39,0.15) 0%, rgba(232,197,71,0.05) 100%)", borderBottom: "1px solid rgba(201,162,39,0.25)" }}>
              <Award className="w-5 h-5 text-[#c9a227]" />
              <h3 className="font-bold text-white text-lg tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em" }}>
                Vehicle Pricing Matrix
              </h3>
              <span className="ml-auto text-xs text-foreground/40 hidden sm:block">All prices in Philippine Peso (₱)</span>
            </div>

            {/* Responsive table wrapper */}
            <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(201,162,39,0.2)", background: "rgba(201,162,39,0.05)" }}>
                    <th className="text-left px-5 py-3 text-[#c9a227] font-bold text-xs tracking-widest uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                      Model
                    </th>
                    {MATRIX_COLS.map((col) => (
                      <th key={col} className="text-center px-4 py-3 text-[#c9a227] font-bold text-xs tracking-widest uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {VEHICLE_MODELS.map((model, idx) => (
                    <tr
                      key={model}
                      className="transition-colors hover:bg-[#c9a227]/5"
                      style={{ borderBottom: idx < VEHICLE_MODELS.length - 1 ? "1px solid rgba(201,162,39,0.1)" : "none" }}
                    >
                      <td className="px-5 py-3.5 font-semibold text-foreground/90 whitespace-nowrap" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.02em" }}>
                        {model === "Big Bike" ? (
                          <span className="flex items-center gap-1.5">
                            {model}
                            <span className="text-[10px] px-1.5 py-0.5 rounded text-[#c9a227] font-bold tracking-widest" style={{ background: "rgba(201,162,39,0.15)", border: "1px solid rgba(201,162,39,0.3)" }}>
                              PREMIUM
                            </span>
                          </span>
                        ) : model}
                      </td>
                      {MATRIX_COLS.map((col) => (
                        <td key={col} className="px-4 py-3.5 text-center font-medium tabular-nums text-[#c9a227]">
                          {VEHICLE_MATRIX[model]?.[col] ?? "—"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 text-center">
            <GoldButton size="lg" onClick={() => scrollTo("booking")}>
              <Calendar className="w-5 h-5" />
              BOOK YOUR SLOT TODAY!
              <ArrowRight className="w-4 h-4" />
            </GoldButton>
          </div>
        </div>
      </section>

      {/* ── ABOUT / CORE VALUES ──────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden bg-[#161616] aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=900&h=675&fit=crop&auto=format"
                  alt="The Helmet Garage workshop — premium motorcycle detailing studio"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top right, rgba(11,11,11,0.7) 0%, transparent 60%)" }} />
              </div>
              {/* Gold corner accent */}
              <div className="absolute -top-3 -left-3 w-20 h-20" style={{ borderTop: "2px solid #c9a227", borderLeft: "2px solid #c9a227", borderRadius: "6px 0 0 0" }} />
              <div className="absolute -bottom-3 -right-3 w-20 h-20" style={{ borderBottom: "2px solid #c9a227", borderRight: "2px solid #c9a227", borderRadius: "0 0 6px 0" }} />
              {/* Location badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2.5 rounded" style={{ background: "rgba(11,11,11,0.92)", border: "1px solid #c9a227" }}>
                <MapPin className="w-4 h-4 text-[#c9a227]" />
                <span className="text-white text-sm font-medium">Rosario, Pasig City</span>
              </div>
            </div>

            {/* Text */}
            <div>
              <SectionLabel>Who We Are</SectionLabel>
              <h2
                className="font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.02em" }}
              >
                MORE THAN CLEAN —<br />
                <span style={goldText}>PASSIONATE CARE</span><br />
                FOR YOUR RIDE.
              </h2>
              <p className="text-foreground/60 leading-relaxed mb-4 text-sm">
                The Helmet Garage was born from a simple frustration: riders deserving better care
                for their gear and machines than generic car wash services provide. Located in
                Catalina Subdivision, Rosario, Pasig City, we built a specialist studio designed
                exclusively around motorcycles and their riders.
              </p>
              <p className="text-foreground/60 leading-relaxed mb-8 text-sm">
                From the graphene ceramic coatings on your helmet to the precision motorwash on
                your fairings — everything we do reflects a commitment to craft that you can see
                and feel every time you ride.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <GoldButton onClick={() => scrollTo("booking")}>
                  <Calendar className="w-4 h-4" />
                  BOOK YOUR SLOT
                </GoldButton>
                <GoldButton outline onClick={() => scrollTo("contact")}>
                  <MessageCircle className="w-4 h-4" />
                  CONTACT US
                </GoldButton>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <SectionLabel>Our Foundation</SectionLabel>
            <SectionHeading>
              CORE <span style={goldText}>VALUES</span>
            </SectionHeading>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-card rounded-lg p-6 flex flex-col items-start gap-4 hover:-translate-y-1 transition-all duration-300"
                style={goldBorderSubtle}
              >
                <div className="w-12 h-12 rounded flex items-center justify-center text-[#c9a227]" style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.25)" }}>
                  {icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em" }}>
                    {title}
                  </h4>
                  <p className="text-foreground/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-secondary/40 relative">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(201,162,39,0.2)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(201,162,39,0.2)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <SectionLabel>Testimonials</SectionLabel>
              <SectionHeading>
                WHAT RIDERS <span style={goldText}>SAY</span>
              </SectionHeading>
            </div>
            <div className="flex items-center gap-4 bg-card rounded-lg px-5 py-4 self-start" style={goldBorderSubtle}>
              <div>
                <div className="text-3xl font-bold" style={{ fontFamily: "'Rajdhani', sans-serif", ...goldText }}>4.9</div>
                <StarRating rating={5} />
              </div>
              <div>
                <div className="text-foreground/50 text-xs uppercase tracking-wider">Overall Rating</div>
                <div className="text-white font-semibold text-sm">Facebook · Google</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="bg-card rounded-lg p-6 flex flex-col hover:border-[#c9a227]/50 transition-all duration-300 hover:-translate-y-0.5"
                style={goldBorderSubtle}
              >
                <StarRating rating={r.rating} />
                <p className="text-foreground/65 text-sm leading-relaxed mt-4 mb-5 flex-1 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(201,162,39,0.15)" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#0b0b0b] text-xs font-bold flex-shrink-0" style={{ background: goldGrad }}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{r.name}</div>
                    <div className="text-xs text-foreground/45">{r.bike} · {r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ──────────────────────────────────────────── */}
      <section id="booking" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.05) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Info */}
            <div className="lg:col-span-2">
              <SectionLabel>Appointments</SectionLabel>
              <h2
                className="font-bold text-white leading-tight mb-5"
                style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.02em" }}
              >
                SCHEDULE YOUR <span style={goldText}>SLOT</span>
              </h2>
              <p className="text-foreground/55 text-sm leading-relaxed mb-8">
                Book ahead to guarantee your preferred time. We confirm every booking within the hour.
                Walk-ins welcome, subject to availability.
              </p>

              <div className="space-y-5">
                {[
                  { icon: <Clock className="w-5 h-5" />, label: "Hours", val: "Mon – Sat: 8:00 AM – 5:00 PM\nSunday: By appointment" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Address", val: "14 Catalina Subdivision\nRosario, Pasig City 1609" },
                  { icon: <Phone className="w-5 h-5" />, label: "Phone / GCash", val: "09394050469" },
                  { icon: <Navigation className="w-5 h-5" />, label: "Waze", val: "Search \"The Helmet Garage Pasig\"" },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 rounded flex items-center justify-center text-[#c9a227] flex-shrink-0" style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.25)" }}>
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs text-[#c9a227] font-bold uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{label}</div>
                      <div className="text-foreground/75 text-sm whitespace-pre-line">{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-card rounded-lg p-7 md:p-9" style={goldBorder}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.4)" }}>
                    <CheckCircle className="w-8 h-8 text-[#c9a227]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    SLOT RESERVED!
                  </h3>
                  <p className="text-foreground/60 text-sm mb-2">
                    Thanks, <span className="text-[#c9a227] font-medium">{bookingForm.name}</span>! Your request for{" "}
                    <span className="text-[#c9a227] font-medium">{bookingForm.date}</span> at{" "}
                    <span className="text-[#c9a227] font-medium">{bookingForm.time}</span> has been received.
                  </p>
                  <p className="text-foreground/45 text-xs mb-8">We will confirm via phone/GCash: 09394050469</p>
                  <button onClick={() => setSubmitted(false)} className="text-sm text-foreground/40 hover:text-[#c9a227] transition-colors">
                    Book another slot
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em" }}>
                    YOUR DETAILS
                  </h3>

                  {/* Fields */}
                  {[
                    { label: "Full Name *", key: "name", type: "text", placeholder: "Juan dela Cruz", required: true },
                    { label: "Phone Number *", key: "phone", type: "tel", placeholder: "09XXXXXXXXX", required: true },
                    { label: "Email (optional)", key: "email", type: "email", placeholder: "juan@email.com", required: false },
                    { label: "Motorcycle Model *", key: "bike", type: "text", placeholder: "e.g. Yamaha NMAX 2023", required: true },
                  ].map(({ label, key, type, placeholder, required }) => (
                    <div key={key} className="mb-4">
                      <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider block mb-1.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        {label}
                      </label>
                      <input
                        required={required}
                        type={type}
                        value={bookingForm[key as keyof typeof bookingForm]}
                        onChange={(e) => setBookingForm({ ...bookingForm, [key]: e.target.value })}
                        placeholder={placeholder}
                        className="w-full bg-input-background rounded px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none transition-colors"
                        style={{ border: "1px solid rgba(201,162,39,0.25)", focusRingColor: "#c9a227" } as React.CSSProperties}
                        onFocus={(e) => { e.target.style.borderColor = "#c9a227"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(201,162,39,0.25)"; }}
                      />
                    </div>
                  ))}

                  <div className="mb-4">
                    <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider block mb-1.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                      Service Needed *
                    </label>
                    <select
                      required
                      value={bookingForm.service}
                      onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                      className="w-full bg-input-background rounded px-4 py-2.5 text-sm text-foreground focus:outline-none transition-colors appearance-none"
                      style={{ border: "1px solid rgba(201,162,39,0.25)" }}
                    >
                      <option value="" disabled>Select a service…</option>
                      <optgroup label="Bike Wash">
                        {BIKE_WASH.map((s) => <option key={s.name} value={s.name}>{s.name} — {s.price}</option>)}
                      </optgroup>
                      <optgroup label="Helmet Cleaning">
                        {HELMET_CLEANING.map((s) => <option key={s.name} value={s.name}>{s.name} — {s.price}</option>)}
                      </optgroup>
                      <optgroup label="Snap Button Repair">
                        {SNAP_REPAIR.map((s) => <option key={s.name} value={s.name}>{s.name} — {s.price}</option>)}
                      </optgroup>
                      <option value="Decal Removal & Premium Wash — ₱800">Decal Removal &amp; Premium Wash — ₱800</option>
                      <option value="Other / Not sure">Other / Not sure</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider block mb-1.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        Preferred Date *
                      </label>
                      <input
                        required type="date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full bg-input-background rounded px-4 py-2.5 text-sm text-foreground focus:outline-none"
                        style={{ border: "1px solid rgba(201,162,39,0.25)" }}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider block mb-1.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        Preferred Time *
                      </label>
                      <select
                        required
                        value={bookingForm.time}
                        onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                        className="w-full bg-input-background rounded px-4 py-2.5 text-sm text-foreground focus:outline-none appearance-none"
                        style={{ border: "1px solid rgba(201,162,39,0.25)" }}
                      >
                        <option value="" disabled>Select…</option>
                        {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider block mb-1.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                      Additional Notes
                    </label>
                    <textarea
                      rows={3}
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                      placeholder="Any special requests or details about your bike/helmet…"
                      className="w-full bg-input-background rounded px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none resize-none"
                      style={{ border: "1px solid rgba(201,162,39,0.25)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-bold rounded transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#c9a227]/20 hover:brightness-110"
                    style={{ background: goldGrad, color: "#0b0b0b", fontFamily: "'Rajdhani', sans-serif", fontSize: "1rem", letterSpacing: "0.08em" }}
                  >
                    <Calendar className="w-5 h-5" />
                    CONFIRM MY BOOKING
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 bg-secondary/40 relative">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(201,162,39,0.2)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <SectionLabel>Find Us</SectionLabel>
              <h2
                className="font-bold text-white leading-tight mb-5"
                style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.02em" }}
              >
                GET IN <span style={goldText}>TOUCH</span>
              </h2>
              <p className="text-foreground/55 text-sm leading-relaxed mb-10">
                Have questions about a service or want a quick quote? Message us on Facebook or give us a call.
                We're always happy to help fellow riders.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { icon: <MapPin className="w-5 h-5" />, label: "Address", val: "14 Catalina Subdivision, Rosario\nPasig City 1609" },
                  { icon: <Phone className="w-5 h-5" />, label: "Phone / GCash", val: "09394050469" },
                  { icon: <Facebook className="w-5 h-5" />, label: "Facebook Page", val: "The Helmet Garage" },
                  { icon: <Navigation className="w-5 h-5" />, label: "Waze", val: "Search \"The Helmet Garage Pasig\"" },
                  { icon: <Clock className="w-5 h-5" />, label: "Operating Hours", val: "Mon – Sat  8:00 AM – 5:00 PM\nSunday by appointment" },
                ].map(({ icon, label, val }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 rounded flex items-center justify-center text-[#c9a227] flex-shrink-0" style={{ background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.25)" }}>
                      {icon}
                    </div>
                    <div>
                      <div className="text-xs text-[#c9a227] font-bold uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{label}</div>
                      <div className="text-foreground/75 text-sm whitespace-pre-line">{val}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-lg overflow-hidden relative h-44 bg-[#161616]" style={{ border: "1px solid rgba(201,162,39,0.25)" }}>
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=300&fit=crop&auto=format"
                  alt="Map location"
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ background: goldGrad }}>
                    <MapPin className="w-5 h-5 text-[#0b0b0b]" />
                  </div>
                  <span className="text-white text-sm font-semibold">14 Catalina Subdivision, Pasig City</span>
                  <span className="text-foreground/50 text-xs mt-1">Waze: "The Helmet Garage Pasig"</span>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-card rounded-lg p-7 md:p-9 self-start" style={goldBorder}>
              {contactSent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.4)" }}>
                    <CheckCircle className="w-7 h-7 text-[#c9a227]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    MESSAGE SENT!
                  </h3>
                  <p className="text-foreground/55 text-sm">We'll reach out within one business day.</p>
                  <button onClick={() => setContactSent(false)} className="mt-6 text-sm text-foreground/40 hover:text-[#c9a227] transition-colors">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setContactSent(true); }}>
                  <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em" }}>
                    SEND US A MESSAGE
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: "Your Name *", key: "name", placeholder: "Juan dela Cruz" },
                      { label: "Phone Number *", key: "phone", placeholder: "09XXXXXXXXX" },
                    ].map(({ label, key, placeholder }) => (
                      <div key={key}>
                        <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider block mb-1.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                          {label}
                        </label>
                        <input
                          required
                          value={contactForm[key as keyof typeof contactForm]}
                          onChange={(e) => setContactForm({ ...contactForm, [key]: e.target.value })}
                          placeholder={placeholder}
                          className="w-full bg-input-background rounded px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none"
                          style={{ border: "1px solid rgba(201,162,39,0.25)" }}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider block mb-1.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        Message *
                      </label>
                      <textarea
                        required rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Ask about a service, get a quote, or just say hello…"
                        className="w-full bg-input-background rounded px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none resize-none"
                        style={{ border: "1px solid rgba(201,162,39,0.25)" }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 font-bold rounded transition-all duration-200 flex items-center justify-center gap-2 hover:brightness-110"
                      style={{ background: goldGrad, color: "#0b0b0b", fontFamily: "'Rajdhani', sans-serif", fontSize: "1rem", letterSpacing: "0.08em" }}
                    >
                      SEND MESSAGE <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-[#080808] pt-16 pb-8" style={{ borderTop: "1px solid rgba(201,162,39,0.25)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded flex items-center justify-center" style={{ background: goldGrad }}>
                  <Shield className="w-5 h-5 text-[#0b0b0b]" />
                </div>
                <div>
                  <div className="font-bold text-white text-base uppercase tracking-widest leading-none" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    The Helmet Garage
                  </div>
                  <div className="text-[10px] tracking-widest leading-none uppercase mt-0.5" style={{ color: "#c9a227" }}>
                    Premium Detailing · Pasig City
                  </div>
                </div>
              </div>
              <p className="text-foreground/45 text-xs leading-relaxed mb-5">
                Premium motorcycle and helmet detailing in Rosario, Pasig City. Clean. Protect. Ride.
              </p>
              {/* Social */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium text-[#c9a227] transition-colors hover:bg-[#c9a227]/10"
                style={{ border: "1px solid rgba(201,162,39,0.35)", fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.06em" }}
              >
                <Facebook className="w-4 h-4" />
                The Helmet Garage
              </a>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-foreground/50 text-sm hover:text-[#c9a227] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Services
              </h4>
              <ul className="space-y-2">
                {["Bike Wash", "Helmet Cleaning", "Ceramic Coating w/ Graphene", "Bike Spa Packages", "Snap Button Repair", "Decal Removal"].map((s) => (
                  <li key={s}>
                    <button onClick={() => scrollTo("services")} className="text-foreground/50 text-sm hover:text-[#c9a227] transition-colors text-left">
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Contact
              </h4>
              <div className="space-y-3 mb-6">
                {[
                  { icon: <MapPin className="w-4 h-4" />, val: "14 Catalina Subdivision\nRosario, Pasig City 1609" },
                  { icon: <Phone className="w-4 h-4" />, val: "09394050469\n(also GCash)" },
                  { icon: <Navigation className="w-4 h-4" />, val: "Waze: The Helmet Garage Pasig" },
                ].map(({ icon, val }) => (
                  <div key={val} className="flex gap-2.5 items-start">
                    <div className="text-[#c9a227] mt-0.5 flex-shrink-0">{icon}</div>
                    <div className="text-foreground/50 text-xs whitespace-pre-line leading-relaxed">{val}</div>
                  </div>
                ))}
              </div>
              <GoldButton size="sm" onClick={() => scrollTo("booking")}>
                <Calendar className="w-3.5 h-3.5" />
                BOOK NOW
              </GoldButton>
            </div>
          </div>

          {/* Core values strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 py-6" style={{ borderTop: "1px solid rgba(201,162,39,0.15)", borderBottom: "1px solid rgba(201,162,39,0.15)" }}>
            {CORE_VALUES.map(({ icon, title }) => (
              <div key={title} className="flex items-center gap-2.5">
                <div className="text-[#c9a227] flex-shrink-0">{icon}</div>
                <span className="text-foreground/50 text-xs font-medium">{title}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-foreground/30 text-xs">
              © 2026 The Helmet Garage · Rosario, Pasig City · All rights reserved.
            </p>
            <p className="text-foreground/30 text-xs italic">Clean. Protect. Ride.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
