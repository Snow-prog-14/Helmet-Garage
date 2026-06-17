import React from "react";
import { Clock, MapPin, Phone, Navigation, ArrowRight } from "lucide-react";

export const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-tag justify-start">
          <span>Appointments</span>
          <div className="line" />
        </div>
        <h2 className="text-left text-white text-5xl font-bold mb-12" style={{ fontFamily: 'Rajdhani', sans-serif }}>
          SCHEDULE YOUR SLOT
        </h2>

        <div className="booking-split">
          <div className="info-stack">
            <div className="info-item">
              <Clock className="icon w-6 h-6" />
              <div>
                <h5 className="text-white font-bold mb-1 uppercase text-sm">Operational Hours</h5>
                <p className="text-muted text-sm leading-relaxed">Mon – Sat: 8:00 AM – 5:00 PM<br />Sunday: By Appointment Only</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="icon w-6 h-6" />
              <div>
                <h5 className="text-white font-bold mb-1 uppercase text-sm">Workshop Address</h5>
                <p className="text-muted text-sm leading-relaxed">14 Catalina Subdivision, Rosario<br />Pasig City, Metro Manila 1609</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="icon w-6 h-6" />
              <div>
                <h5 className="text-white font-bold mb-1 uppercase text-sm">Phone Contact</h5>
                <p className="text-muted text-sm leading-relaxed">0939 405 0469 (Main Line)<br />Available on GCash</p>
              </div>
            </div>
            <div className="info-item">
              <Navigation className="icon w-6 h-6" />
              <div>
                <h5 className="text-white font-bold mb-1 uppercase text-sm">Direct Navigation</h5>
                <a href="#" className="text-[var(--gold)] text-sm font-bold hover:underline">OPEN IN WAZE APP ➔</a>
              </div>
            </div>
          </div>

          <div className="form-block">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-lg" style={{ fontFamily: 'Rajdhani', sans-serif }}>Your Details</h4>
            <form className="form-grid">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-muted uppercase font-bold tracking-widest">Full Name</label>
                <input type="text" placeholder="John Doe" className="bg-[#0b0b0b] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-muted uppercase font-bold tracking-widest">Contact Number</label>
                <input type="text" placeholder="09XX XXX XXXX" className="bg-[#0b0b0b] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors" />
              </div>
              <div className="flex flex-col gap-2 full-col">
                <label className="text-[10px] text-muted uppercase font-bold tracking-widest">Vehicle Model</label>
                <input type="text" placeholder="e.g. Yamaha NMAX / Honda Click" className="bg-[#0b0b0b] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors" />
              </div>
              <div className="flex flex-col gap-2 full-col">
                <label className="text-[10px] text-muted uppercase font-bold tracking-widest">Service Selection</label>
                <select className="bg-[#0b0b0b] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] appearance-none cursor-pointer">
                  <option>Select a Service...</option>
                  <option>Bike Wash (Motorwash)</option>
                  <option>Helmet Cleaning & Detailing</option>
                  <option>Premium Ceramic Coating</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-muted uppercase font-bold tracking-widest">Preferred Date</label>
                <input type="date" className="bg-[#0b0b0b] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-muted uppercase font-bold tracking-widest">Preferred Time</label>
                <select className="bg-[#0b0b0b] border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] appearance-none cursor-pointer">
                  <option>Select Time...</option>
                  <option>8:00 AM</option>
                  <option>10:00 AM</option>
                  <option>1:00 PM</option>
                  <option>3:00 PM</option>
                </select>
              </div>
              <button type="submit" className="btn-primary full-col mt-4 py-4">
                CONFIRM APPOINTMENT ➔
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
