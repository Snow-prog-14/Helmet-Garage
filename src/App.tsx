import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // 1. FUTURISTIC SCROLL OBSERVER
    const observerOptions = { threshold: 0.15 };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Track all reveal targets
    const targets = document.querySelectorAll(".scroll-reveal, .slide-left, .slide-right, .service-card, .value-card, .review-card, .price-list-box, .matrix-wrapper");
    targets.forEach(el => revealObserver.observe(el));

    // 2. PARALLAX HERO EFFECT
    const handleHeroParallax = () => {
      const heroBg = document.querySelector(".hero-bg-parallax");
      if (heroBg) {
        const scrolled = window.pageYOffset;
        heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleHeroParallax);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", handleHeroParallax);
    };
  }, []);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted successfully!');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="site-wrapper">
      
      {/* 1. MAIN NAVIGATION HEADER */}
      <header className="main-header">
        <div className="header-logo">
          <img src="/logo.jpg" alt="The Helmet Garage Logo" className="brand-logo-img" />
          <div className="logo-text">
            <span className="brand-title">THE HELMET GARAGE</span>
            <span className="brand-subtitle">PREMIUM DETAILING</span>
          </div>
        </div>
        <nav className="header-nav">
          <a href="#home" className="nav-link active">HOME</a>
          <a href="#services" className="nav-link">SERVICES</a>
          <a href="#pricing" className="nav-link">PRICING</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#booking" className="nav-link">BOOK NOW</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </nav>
        <div className="header-cta">
          <a href="#booking" className="book-slot-btn">BOOK YOUR SLOT</a>
        </div>
      </header>

      {/* 2. HERO BANNER SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-bg-parallax"></div>
        <div className="hero-content">
          <h1 className="hero-headline scroll-reveal">
            <span className="gold-text">PROTECT.</span><br />RIDE.
          </h1>
          <p className="hero-subtext scroll-reveal">Premium Detailing and Care for Your Ride. Pasig City's high-tech detailing specialist.</p>
          <div className="hero-actions scroll-reveal">
            <a href="#booking" className="btn-primary glitch-btn">BOOK YOUR SLOT TODAY!</a>
            <a href="#services" className="btn-outline">VIEW SERVICES</a>
          </div>
          <div className="hero-stats scroll-reveal">
            <div className="stat-item"><strong>100%</strong> <span>Premium Products</span></div>
            <div className="stat-item"><strong>4.9★</strong> <span>Customer Rating</span></div>
            <div className="stat-item"><strong>ALL BRANDS</strong> <span>Bikes Accepted</span></div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID SECTION */}
      <section id="services" className="services-section">
        <div className="section-title-wrap scroll-reveal">
          <span className="section-tag">WHAT WE OFFER</span>
          <h2>OUR PREMIUM TIER SERVICES</h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="card-icon-frame"><span className="vector-icon-wash"></span></div>
            <h3>Bike Wash</h3>
            <p>Standard motorwash to premium ceramic-protected full wash. Quick turnaround, spotless results.</p>
            <ul>
              <li>Motorwash from ₱120</li>
              <li>Wax & Ceramic options</li>
              <li>Big Bike specialist</li>
            </ul>
            <a href="#pricing" className="card-link">SEE FULL PRICING ➔</a>
          </div>
          <div className="service-card">
            <div className="card-icon-frame"><span className="vector-icon-helmet"></span></div>
            <h3>Helmet Cleaning</h3>
            <p>Deep clean, graphene ceramic coating, and full detailing packages for all helmet types.</p>
            <ul>
              <li>Full & Half Face cleaning</li>
              <li>Graphene Ceramic ₱600</li>
              <li>Packages A, B & C</li>
            </ul>
            <a href="#pricing" className="card-link">SEE FULL PRICING ➔</a>
          </div>
          <div className="service-card">
            <div className="card-icon-frame"><span className="vector-icon-repair"></span></div>
            <h3>Repairs & Add-Ons</h3>
            <p>Snap button repair, D-ring replacement, and decal removal with premium wash.</p>
            <ul>
              <li>Stainless Button ₱150</li>
              <li>Double D Ring ₱100</li>
              <li>Decal Removal ₱800</li>
            </ul>
            <a href="#pricing" className="card-link">SEE FULL PRICING ➔</a>
          </div>
        </div>
        <div className="addon-banner scroll-reveal">
          <span className="addon-title">ADD-ON SERVICE: Removal & Installation of Decals with Premium Wash</span>
          <span className="addon-price">₱800</span>
        </div>
      </section>

      {/* 4. TRANSPARENT PRICING & VEHICLE MATRICES */}
      <section id="pricing" className="pricing-section">
        <div className="section-title-wrap scroll-reveal">
          <span className="section-tag">PRICE LIST</span>
          <h2>TRANSPARENT PRICING</h2>
        </div>

        <div className="price-lists-container">
          <div className="price-list-box">
            <h3>BIKE WASH</h3>
            <div className="menu-item"><span>Motorwash</span><span className="gold-price">₱120</span></div>
            <div className="menu-item"><span>Motorwash w/ Wax</span><span className="gold-price">₱150</span></div>
            <div className="menu-item"><span>Premium Motorwash</span><span className="gold-price">₱200</span></div>
            <div className="menu-item"><span>Big Bike w/ Wax</span><span className="gold-price">₱200</span></div>
            <div className="menu-item"><span>Big Bike w/ Ceramic</span><span className="gold-price">₱250</span></div>
          </div>
          <div className="price-list-box">
            <h3>HELMET CLEANING</h3>
            <div className="menu-item"><span>Cleaning (Full/Half Face)</span><span className="gold-price">₱250</span></div>
            <div className="menu-item"><span>Ceramic Coating w/ Graphene</span><span className="gold-price">₱600</span></div>
            <div className="menu-item"><span>Detailing</span><span className="gold-price">₱450</span></div>
            <div className="menu-item"><span>Package A</span><span className="gold-price">₱600</span></div>
            <div className="menu-item"><span>Package B</span><span className="gold-price">₱800</span></div>
            <div className="menu-item"><span>Package C</span><span className="gold-price">₱1,000</span></div>
          </div>
          <div className="price-list-box">
            <h3>SNAP BUTTON REPAIR</h3>
            <div className="menu-item"><span>For Double D Ring's Helmet</span><span className="gold-price">₱100</span></div>
            <div className="menu-item"><span>Stainless Button</span><span className="gold-price">₱150</span></div>
          </div>
        </div>

        <div className="matrix-wrapper scroll-reveal">
          <h3>VEHICLE SERVICE PRICING MATRIX</h3>
          <div className="table-responsive">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th>MOTORCYCLE MODEL</th>
                  <th>DETAILING</th>
                  <th>CERAMIC</th>
                  <th>BIKE SPA</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Mio Sporty / Honda Beat</td><td>₱900</td><td>₱1,000</td><td>₱1,200</td></tr>
                <tr><td>Raider</td><td>₱1,000</td><td>₱1,100</td><td>₱1,300</td></tr>
                <tr><td>Click 125</td><td>₱1,200</td><td>₱1,300</td><td>₱1,500</td></tr>
                <tr><td>Click 150 / Sniper</td><td>₱1,300</td><td>₱1,400</td><td>₱1,600</td></tr>
                <tr><td>Aerox</td><td>₱1,400</td><td>₱1,500</td><td>₱1,700</td></tr>
                <tr><td>NMAX / PCX / ADV</td><td>₱1,600</td><td>₱1,700</td><td>₱1,900</td></tr>
                <tr className="premium-row"><td>Big Bike <span className="premium-badge">PREMIUM Tier</span></td><td>₱1,500</td><td>₱2,500</td><td>₱2,500</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="center-cta-wrap scroll-reveal">
          <a href="#booking" className="btn-primary">BOOK YOUR SLOT TODAY!</a>
        </div>
      </section>

      {/* 5. ABOUT US SECTION */}
      <section id="about" className="about-section">
        <div className="about-split">
          <div className="about-image-side slide-left">
            <div className="image-overlay-box">
              <span className="location-pin-indicator">📍 Rosario, Pasig City</span>
            </div>
          </div>
          <div className="about-text-side slide-right">
            <span className="section-tag">WHO WE ARE</span>
            <h2>MORE THAN CLEAN — PASSIONATE CARE FOR YOUR RIDE.</h2>
            <p>The Helmet Garage was born from a simple frustration: riders deserving better care for their gear and machines than generic car wash services provide.</p>
            <p>From graphene ceramic coatings to precision motorwash — everything we do reflects a commitment to craft that you can see and feel every time you ride.</p>
            <div className="about-actions">
              <a href="#booking" className="btn-primary">BOOK YOUR SLOT</a>
              <a href="#contact" className="btn-outline">CONTACT US</a>
            </div>
          </div>
        </div>
        
        <div className="core-values-heading scroll-reveal">
          <span className="section-tag">OUR FOUNDATION</span>
          <h3>CORE VALUES</h3>
        </div>
        <div className="core-values-grid">
          <div className="value-card">
            <h4>Quality Service</h4>
            <p>Every job meets our exacting standard before it leaves the garage.</p>
          </div>
          <div className="value-card">
            <h4>Passion for Riders</h4>
            <p>Riders ourselves, we understand what your machine means to you.</p>
          </div>
          <div className="value-card">
            <h4>High-Quality Products</h4>
            <p>We use only professional-grade ceramic coatings and cleaning agents.</p>
          </div>
          <div className="value-card">
            <h4>Attention to Detail</h4>
            <p>The details others miss are where we earn our reputation.</p>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="testimonials-header scroll-reveal">
          <h2>WHAT RIDERS <span className="gold-text">SAY</span></h2>
          <div className="rating-summary-card">
            <span className="big-rating">4.9</span>
            <div className="rating-meta">
              <span className="stars-row">★★★★★</span>
              <span className="rating-labels">OVERALL RATING • Facebook / Google</span>
            </div>
          </div>
        </div>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="card-stars">★★★★★</div>
            <p className="review-text">"Had my helmet detailed and coated — it looked brand new. The graphene ceramic coating is genuinely impressive."</p>
            <div className="author-meta-block">
              <span className="review-author">Aldrin M.</span>
              <span className="author-bike">Honda Click 150 • May 2026</span>
            </div>
          </div>
          <div className="review-card">
            <div className="card-stars">★★★★★</div>
            <p className="review-text">"Brought my Shoei for detailing. The team was super professional and the result was stunning. Worth every peso."</p>
            <div className="author-meta-block">
              <span className="review-author">Trisha V.</span>
              <span className="author-bike">Yamaha NMAX • April 2026</span>
            </div>
          </div>
          <div className="review-card">
            <div className="card-stars">★★★★★</div>
            <p className="review-text">"Snap button was broken for months. Fixed in under 20 minutes for only ₱150. Service is fast and honest."</p>
            <div className="author-meta-block">
              <span className="review-author">Carlo B.</span>
              <span className="author-bike">Honda ADV 160 • May 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. APPOINTMENT BOOKING FORM */}
      <section id="booking" className="booking-section">
        <div className="booking-split scroll-reveal">
          <div className="booking-info-side">
            <span className="section-tag">APPOINTMENTS</span>
            <h2>SCHEDULE YOUR <span className="gold-text">SLOT</span></h2>
            <p className="booking-desc-text">Book ahead to guarantee your preferred time. We confirm every booking within the hour.</p>
            <div className="info-stack">
              <div className="info-stack-item">
                <strong>HOURS</strong>
                <span>Mon – Sat: 8:00 AM – 5:00 PM</span>
              </div>
              <div className="info-stack-item">
                <strong>ADDRESS</strong>
                <span>14 Catalina Subdivision, Rosario, Pasig City 1609</span>
              </div>
              <div className="info-stack-item">
                <strong>PHONE</strong>
                <span>09394050469</span>
              </div>
              <div className="info-stack-item">
                <strong>WAZE</strong>
                <span>Search "The Helmet Garage Pasig"</span>
              </div>
            </div>
          </div>
          <div className="booking-form-side">
            <h3>YOUR DETAILS</h3>
            <form onSubmit={handleBookingSubmit} className="main-form">
              <div className="form-group"><label>FULL NAME *</label><input type="text" placeholder="Juan dela Cruz" required /></div>
              <div className="form-group"><label>PHONE NUMBER *</label><input type="text" placeholder="09XXXXXXXXX" required /></div>
              <div className="form-group"><label>MOTORCYCLE MODEL *</label><input type="text" placeholder="e.g. Yamaha NMAX 2023" required /></div>
              <div className="form-row">
                <div className="form-group"><label>DATE *</label><input type="date" required /></div>
                <div className="form-group"><label>TIME *</label><input type="time" required /></div>
              </div>
              <button type="submit" className="form-submit-btn">CONFIRM MY BOOKING</button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. GET IN TOUCH SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-split">
          <div className="contact-info-block slide-left">
            <span className="section-tag">FIND US</span>
            <h2>GET IN <span className="gold-text">TOUCH</span></h2>
            <p>Message us on Facebook or give us a call. We're always happy to help fellow riders.</p>
            <div className="contact-details-stack">
              <div className="contact-meta-row"><strong>ADDRESS:</strong> 14 Catalina Subdivision, Rosario, Pasig City</div>
              <div className="contact-meta-row"><strong>PHONE / GCASH:</strong> 09394050469</div>
              <div className="contact-meta-row"><strong>WAZE:</strong> Search "The Helmet Garage Pasig"</div>
            </div>
          </div>
          <div className="contact-form-block slide-right">
            <h3>SEND US A MESSAGE</h3>
            <form onSubmit={handleContactSubmit} className="message-form">
              <div className="form-group"><label>YOUR NAME *</label><input type="text" placeholder="Juan dela Cruz" required /></div>
              <div className="form-group"><label>MESSAGE *</label><textarea rows="4" placeholder="Ask about a service or get a quote..." required></textarea></div>
              <button type="submit" className="message-submit-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. MASTER INTEGRATED FOOTER */}
      <footer className="main-footer">
        <div className="map-placeholder-box">
          <div className="map-graphic-pin"></div>
          <p className="map-text">14 Catalina Subdivision, Pasig City • Waze: "The Helmet Garage Pasig"</p>
        </div>
        <div className="footer-columns">
          <div className="footer-column brand-col">
            <div className="footer-logo-block">
              <img src="/logo.jpg" alt="The Helmet Garage" className="footer-logo-img" />
              <h3>THE HELMET GARAGE</h3>
            </div>
            <p className="footer-tagline">Premium motorcycle and helmet detailing in Rosario, Pasig City. Clean. Protect. Ride.</p>
          </div>
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <a href="#home">Home</a><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#about">About</a>
          </div>
          <div className="footer-column">
            <h4>SERVICES</h4>
            <a href="#services">Bike Wash</a><a href="#services">Helmet Cleaning</a><a href="#services">Ceramic Coating</a>
          </div>
          <div className="footer-column">
            <h4>CONTACT</h4>
            <p>14 Catalina Subdivision Rosario, Pasig City</p>
            <p className="gold-text">09394050469</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 The Helmet Garage. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
