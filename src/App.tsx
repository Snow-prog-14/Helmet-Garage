import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', model: '', service: '', date: '', time: '', notes: ''
  });

  const [contactData, setContactData] = useState({
    name: '', phone: '', message: ''
  });

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
      
      {/* 1. FIXED HEADER NAVIGATION */}
      <header className="main-header">
        <div className="header-logo">
          <div className="logo-badge">🛡️</div>
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
        <div className="hero-content">
          <h1 className="hero-headline">
            <span className="gold-text">PROTECT.</span><br />RIDE.
          </h1>
          <p className="hero-subtext">Premium Detailing and Care for Your Ride.</p>
          <div className="hero-actions">
            <a href="#booking" className="btn-primary">BOOK YOUR SLOT TODAY! ➔</a>
            <a href="#services" className="btn-outline">VIEW SERVICES ➔</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item"><strong>100%</strong> <span>Premium Products</span></div>
            <div className="stat-item"><strong>4.9★</strong> <span>Customer Rating</span></div>
            <div className="stat-item"><strong>ALL BRANDS</strong> <span>Bikes Accepted</span></div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section id="services" className="services-section">
        <div className="section-title-wrap">
          <span className="section-tag">WHAT WE OFFER</span>
          <h2>OUR PREMIUM TIER SERVICES</h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="card-icon">🔧</div>
            <h3>Bike Wash</h3>
            <p>Complete multi-stage cleaning using specialized dynamic foam layers.</p>
            <ul>
              <li>Premium Motorwash</li>
              <li>Wax & Matte Finish Sealants</li>
              <li>Big Bike Specialist Treatment</li>
            </ul>
            <a href="#pricing" className="card-link">SEE FULL PRICING ➔</a>
          </div>
          <div className="service-card">
            <div className="card-icon">🪖</div>
            <h3>Helmet Cleaning</h3>
            <p>Deep interior and exterior decontamination treatment for premium headgear.</p>
            <ul>
              <li>Full & Half Face deep clean</li>
              <li>Graphene Ceramic Coating</li>
              <li>Premium Protection Tiers</li>
            </ul>
            <a href="#pricing" className="card-link">SEE FULL PRICING ➔</a>
          </div>
          <div className="service-card">
            <div className="card-icon">✨</div>
            <h3>Repairs & Add-Ons</h3>
            <p>Hardware replacements and premium detailing aesthetic modifications.</p>
            <ul>
              <li>Stainless Snap Buttons</li>
              <li>Double D-Ring Replacements</li>
              <li>Premium Decal Interventions</li>
            </ul>
            <a href="#pricing" className="card-link">SEE FULL PRICING ➔</a>
          </div>
        </div>
        <div className="addon-banner">
          <span className="addon-title">ADD-ON SERVICE: Removal & Installation of Decals with Premium Wash</span>
          <span className="addon-price">₱800</span>
        </div>
      </section>

      {/* 4. TRANSPARENT PRICING & VEHICLE MATRIX */}
      <section id="pricing" className="pricing-section">
        <div className="section-title-wrap">
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
            <div className="menu-item"><span>Cleaning Full/Half Face</span><span className="gold-price">₱250</span></div>
            <div className="menu-item"><span>Ceramic Coating w/ Graphene</span><span className="gold-price">₱600</span></div>
            <div className="menu-item"><span>Detailing</span><span className="gold-price">₱450</span></div>
            <div className="menu-item"><span>Package A</span><span className="gold-price">₱600</span></div>
            <div className="menu-item"><span>Package B</span><span className="gold-price">₱800</span></div>
            <div className="menu-item"><span>Package C</span><span className="gold-price">₱1,000</span></div>
          </div>
          <div className="price-list-box">
            <h3>SNAP BUTTON REPAIR</h3>
            <div className="menu-item"><span>Double D Ring's</span><span className="gold-price">₱100</span></div>
            <div className="menu-item"><span>Stainless Button</span><span className="gold-price">₱150</span></div>
          </div>
        </div>

        <div className="matrix-wrapper">
          <h3>VEHICLE PRICING MATRIX</h3>
          <div className="table-responsive">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th>MODEL</th>
                  <th>DETAILING</th>
                  <th>CERAMIC</th>
                  <th>BIKE SPA</th>
                  <th>PKG A</th>
                  <th>PKG B</th>
                  <th>PKG C</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Mio / Beat</td><td>₱350</td><td>₱600</td><td>₱450</td><td>₱600</td><td>₱800</td><td>₱1,000</td></tr>
                <tr><td>Raider</td><td>₱400</td><td>₱700</td><td>₱500</td><td>₱650</td><td>₱850</td><td>₱1,050</td></tr>
                <tr><td>Click 125</td><td>₱400</td><td>₱700</td><td>₱500</td><td>₱650</td><td>₱850</td><td>₱1,050</td></tr>
                <tr><td>Click 150 / Sniper</td><td>₱450</td><td>₱800</td><td>₱550</td><td>₱700</td><td>₱900</td><td>₱1,100</td></tr>
                <tr><td>Aerox</td><td>₱500</td><td>₱900</td><td>₱600</td><td>₱750</td><td>₱950</td><td>₱1,150</td></tr>
                <tr><td>NMAX / PCX / ADV</td><td>₱600</td><td>₱1,100</td><td>₱700</td><td>₱850</td><td>₱1,050</td><td>₱1,250</td></tr>
                <tr className="premium-row"><td>Big Bike <span className="premium-badge">PREMIUM</span></td><td>₱1,000</td><td>₱2,000</td><td>₱1,200</td><td>₱1,500</td><td>₱1,800</td><td>₱2,200</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="center-cta-wrap">
          <a href="#booking" className="btn-primary">BOOK YOUR SLOT TODAY! ➔</a>
        </div>
      </section>

      {/* 5. ABOUT US */}
      <section id="about" className="about-section">
        <div className="about-split">
          <div className="about-image-side">
            <div className="placeholder-art">🏍️</div>
            <div className="image-badge">📍 Rosario, Pasig City</div>
          </div>
          <div className="about-text-side">
            <span className="section-tag">WHO WE ARE</span>
            <h2>MORE THAN CLEAN — PASSIONATE CARE FOR YOUR RIDE.</h2>
            <p>At The Helmet Garage, we approach every motorcycle and helmet with master craftsmanship attention. We protect your investments with top-tier product configurations.</p>
            <div className="about-actions">
              <a href="#booking" className="btn-primary">BOOK YOUR SLOT</a>
              <a href="#contact" className="btn-outline">CONTACT US</a>
            </div>
          </div>
        </div>
        <div className="core-values-grid">
          <div className="value-card"><h4>Quality Service</h4><p>No shortcuts taken on cleaning surfaces.</p></div>
          <div className="value-card"><h4>Passion for Riders</h4><p>Built by riders, tailored exactly for riders.</p></div>
          <div className="value-card"><h4>High-Quality Products</h4><p>Premium chemicals and authentic parts only.</p></div>
          <div className="value-card"><h4>Attention to Detail</h4><p>Every corner is inspected closely.</p></div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="testimonials-header">
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
            <p className="review-text">"Best helmet detailing shop within Pasig. They made my old cracked shell finish shine like it brand new from box again!"</p>
            <span className="review-author">Aldrin M. — Honda Click 150</span>
          </div>
          <div className="review-card">
            <div className="card-stars">★★★★★</div>
            <p className="review-text">"The premium motorwash removes grease layers perfectly. Highly recommend their Graphene coating upgrades."</p>
            <span className="review-author">Christian G. — Yamaha NMAX</span>
          </div>
          <div className="review-card">
            <div className="card-stars">★★★★★</div>
            <p className="review-text">"Fixed my standard helmet strap buttons in less than 15 minutes. High-quality stainless steel rivets used."</p>
            <span className="review-author">Jovito S. — Kawasaki Ninja</span>
          </div>
        </div>
      </section>

      {/* 7. APPOINTMENT BOOKING FORM */}
      <section id="booking" className="booking-section">
        <div className="booking-split">
          <div className="booking-info-side">
            <span className="section-tag">SCHEDULE YOUR SLOT</span>
            <h2>APPOINTMENT INTAKE</h2>
            <div className="info-item">🗓️ <strong>HOURS:</strong> Mon - Sat 8:00 AM - 5:00 PM</div>
            <div className="info-item">📍 <strong>ADDRESS:</strong> 14 Catalina Subd, Rosario, Pasig City</div>
            <div className="info-item">📞 <strong>PHONE:</strong> 0939 405 0469</div>
            <div className="info-item">🚗 <strong>WAZE:</strong> "The Helmet Garage Pasig"</div>
          </div>
          <div className="booking-form-side">
            <h3>YOUR DETAILS</h3>
            <form onSubmit={handleBookingSubmit} className="main-form">
              <div className="form-group"><label>NAME *</label><input type="text" placeholder="Juan Dela Cruz" required /></div>
              <div className="form-group"><label>PHONE NUMBER *</label><input type="text" placeholder="09XXXXXXXXX" required /></div>
              <div className="form-group"><label>MOTORCYCLE MODEL *</label><input type="text" placeholder="e.g. Aerox 155" required /></div>
              <div className="form-group">
                <label>SERVICE TIERS *</label>
                <select required>
                  <option value="">Select a tier...</option>
                  <option value="wash">Premium Motorwash</option>
                  <option value="helmet">Helmet Detailing Package</option>
                  <option value="ceramic">Ceramic Coating Matrix Treatment</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group"><label>DATE *</label><input type="date" required /></div>
                <div className="form-group"><label>TIME *</label><input type="time" required /></div>
              </div>
              <button type="submit" className="form-submit-btn">CONFIRM MY BOOKING ➔</button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. GET IN TOUCH SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-split">
          <div className="contact-info-block">
            <h2>GET IN <span className="gold-text">TOUCH</span></h2>
            <p>Have specific build adjustments or specialized detailing questions? Drop us a prompt message line directly below.</p>
            <div className="contact-details-stack">
              <p><strong>ADDRESS:</strong> 14 Catalina Subdivision, Rosario, Pasig City 1609</p>
              <p><strong>PHONE / GCASH:</strong> 09394050469</p>
              <p><strong>FACEBOOK PAGE:</strong> The Helmet Garage</p>
              <p><strong>WAZE DIRECTIONS:</strong> Search "The Helmet Garage Pasig"</p>
            </div>
          </div>
          <div className="contact-form-block">
            <form onSubmit={handleContactSubmit} className="message-form">
              <div className="form-group"><label>YOUR NAME *</label><input type="text" required /></div>
              <div className="form-group"><label>PHONE NUMBER *</label><input type="text" required /></div>
              <div className="form-group"><label>MESSAGE *</label><textarea rows="4" required></textarea></div>
              <button type="submit" className="message-submit-btn">SEND MESSAGE ➔</button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. MASTER INTEGRATED FOOTER */}
      <footer className="main-footer">
        <div className="map-placeholder-box">
          <p>🗺️ 14 Catalina Subdivision Pin Map View • (Waze: The Helmet Garage Pasig)</p>
        </div>
        <div className="footer-columns">
          <div className="footer-column brand-col">
            <h3>THE HELMET GARAGE</h3>
            <p>Premium detailing structural maintenance for core motorcycle riders and helmet gear.</p>
          </div>
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <a href="#home">Home</a><a href="#services">Services</a><a href="#pricing">Pricing</a>
          </div>
          <div className="footer-column">
            <h4>SERVICES TIER</h4>
            <a href="#services">Bike Washing</a><a href="#services">Helmet Spa</a><a href="#services">Snap Buttons</a>
          </div>
          <div className="footer-column">
            <h4>CONTACT INFO</h4>
            <p>Rosario, Pasig City</p>
            <p>0939 405 0469</p>
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