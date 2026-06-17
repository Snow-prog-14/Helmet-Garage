import React, { useState, useEffect } from "react";
import { 
  Shield, Calendar, Star, MapPin, Phone, 
  Facebook, Navigation, Clock, Instagram, Mail, 
  Wrench, Sparkles, Check, ArrowRight, Award, Heart, Gem, Eye
} from "lucide-react";
import "./App.css";

// ─── REVIEWS DATA ────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  { name: "Aldrin M.", bike: "Honda Click 150 · May 2026", avatar: "AM", text: "Had my helmet detailed and coated — it looked brand new. The graphene ceramic coating is genuinely impressive. Will not trust anyone else." },
  { name: "Trisha V.", bike: "Yamaha NMAX · April 2026", avatar: "TV", text: "Brought my Shoei for detailing. The team was super professional and the result was stunning. Worth every peso." },
  { name: "Carlo B.", bike: "Honda ADV 160 · May 2026", avatar: "CB", text: "Snap button was broken for months. Fixed in under 20 minutes for only ₱150. Service is fast, honest, and friendly." },
];

// ─── MAIN APP COMPONENT ───────────────────────────────────────────────────────

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
  };

  return (
    <div className="app-root">
      
      {/* 1. PERMANENTLY UNIFIED HEADER */}
      <header className={`unified-nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-left" onClick={() => scrollTo("home")}>
          <div className="logo-badge">
            <Shield size={22} color="#0B0B0B" />
          </div>
          <div className="logo-titles">
            <span className="brand-name">THE HELMET GARAGE</span>
            <span className="brand-tagline">PREMIUM DETAILING</span>
          </div>
        </div>

        <nav className="navbar-center">
          {["home", "services", "pricing", "about", "booking", "contact"].map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="nav-anchor">
              {link}
            </button>
          ))}
        </nav>

        <div className="header-right">
          <button className="btn-book" onClick={() => scrollTo("booking")}>
            📅 BOOK YOUR SLOT
          </button>
        </div>
      </header>

      {/* 2. HERO BLOCK */}
      <section id="home" className="hero">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920" className="hero-bg" alt="Hero" />
        <div className="hero-content">
          <h1 className="hero-h1">
            <span className="text-gold">PROTECT.</span>
            <span>RIDE.</span>
          </h1>
          <p className="hero-desc">Pasig City's specialized studio for museum-grade motorcycle finishing and premium gear detailing.</p>
          <div className="hero-btns">
            <button className="btn-hero-filled" onClick={() => scrollTo("booking")}>BOOK YOUR SLOT TODAY! ➔</button>
            <button className="btn-hero-outline" onClick={() => scrollTo("services")}>VIEW SERVICES ➔</button>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS SECTION */}
      <section id="reviews" className="reviews-section">
        <div className="container">
          <div className="reviews-header">
            <h2 className="reviews-title">WHAT RIDERS <span className="text-gold">SAY</span></h2>
            
            <div className="rating-summary-card">
              <div className="rating-big-num">4.9</div>
              <div className="rating-label">OVERALL RATING</div>
              <div className="star-row" style={{ justifyContent: 'center', margin: '4px 0' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="star-gold" />)}
              </div>
              <div className="rating-badges">Facebook • Google</div>
            </div>
          </div>

          <div className="reviews-grid">
            {TESTIMONIALS.map((r, i) => (
              <div key={i} className="testimonial-card">
                <div className="star-row">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} className="star-gold" />)}
                </div>
                <p className="testimonial-body">"{r.text}"</p>
                <div className="testimonial-user">
                  <div className="user-name">{r.name}</div>
                  <div className="user-bike">{r.bike}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GET IN TOUCH CONTACT BLOCK */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-asymmetric-grid">
            
            {/* Left Column: Information Directory */}
            <div className="contact-info-col">
              <h2>GET IN <span className="text-gold">TOUCH</span></h2>
              <p className="contact-intro">Have questions about our detailing services? Reach out to our specialists or visit our Pasig studio.</p>
              
              <div className="directory-list">
                <div>
                  <div className="dir-block-label">ADDRESS</div>
                  <div className="dir-block-value">14 Catalina Subdivision, Rosario, Pasig City 1609</div>
                </div>
                <div>
                  <div className="dir-block-label">PHONE / GCASH</div>
                  <div className="dir-block-value">09394050469</div>
                </div>
                <div>
                  <div className="dir-block-label">FACEBOOK PAGE</div>
                  <div className="dir-block-value">The Helmet Garage</div>
                </div>
                <div>
                  <div className="dir-block-label">WAZE DIRECTIONS</div>
                  <div className="dir-block-value">Search "The Helmet Garage Pasig"</div>
                </div>
                <div>
                  <div className="dir-block-label">OPERATING HOURS</div>
                  <div className="dir-block-value">Mon - Sat 8:00 AM - 5:00 PM<br/>Sunday by appointment</div>
                </div>
              </div>
            </div>

            {/* Right Column: Form Panel */}
            <div className="form-panel-card">
              <h3>SEND US A MESSAGE</h3>
              <form className="stacked-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-input-group">
                  <label>YOUR NAME *</label>
                  <input type="text" className="form-field-flat" placeholder="Juan dela Cruz" />
                </div>
                <div className="form-input-group">
                  <label>PHONE NUMBER *</label>
                  <input type="text" className="form-field-flat" placeholder="09XXXXXXXXX" />
                </div>
                <div className="form-input-group">
                  <label>MESSAGE *</label>
                  <textarea className="form-field-flat" rows={6} placeholder="Ask about a service or get a quote..."></textarea>
                </div>
                <button className="btn-submit-massive">SEND MESSAGE ➔</button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="footer-master-block" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 0' }}>
        <div className="container">
           <div className="bottom-copyright-bar" style={{ border: 'none', paddingTop: 0 }}>
              <span className="copyright-text">© 2026 THE HELMET GARAGE. ALL RIGHTS RESERVED.</span>
              <div className="social-icons-row">
                <Instagram size={18} className="social-icon-link" />
                <Facebook size={18} className="social-icon-link" />
                <Mail size={18} className="social-icon-link" />
              </div>
           </div>
        </div>
      </footer>

    </div>
  );
}
