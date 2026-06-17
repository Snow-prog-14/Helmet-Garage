import React from "react";
import { MessageCircle, Calendar, Award, Heart, Gem, Eye } from "lucide-react";
import { scrollToSection } from "../utils/helpers";

const CORE_VALUES = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Quality Service",
    desc: "Every machine meets our exacting standard before it leaves.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion for Riders",
    desc: "Riders ourselves, we understand what your machine means.",
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: "High-Quality Products",
    desc: "Only professional-grade coatings and cleaning agents.",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Attention to Detail",
    desc: "The details others miss are where we earn our name.",
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="about-split">
          <div className="media-box">
            <img
              src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=900&h=675&fit=crop&auto=format"
              alt="Workshop"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="location-badge">📍 Rosario, Pasig City</div>
          </div>

          <div className="about-text">
            <div className="section-tag justify-start">
              <span>Who We Are</span>
              <div className="line" />
            </div>
            <h2 className="text-left text-white text-4xl font-bold leading-tight mb-6" style={{ fontFamily: 'Rajdhani', sans-serif }}>
              MORE THAN CLEAN — PASSIONATE CARE FOR YOUR RIDE.
            </h2>
            <p className="text-muted mb-6">
              The Helmet Garage was born from a simple frustration: riders deserving better care for their gear and machines than generic car wash services provide. Located in Catalina Subdivision, we built a specialist studio designed exclusively around motorcycles and their riders.
            </p>
            <p className="text-muted mb-12">
              From graphene ceramic coatings to precision motorwash — everything we do reflects a commitment to craft that you can see and feel every time you ride.
            </p>
            <div className="flex gap-4">
              <button className="btn-primary" onClick={() => scrollToSection("booking")}>
                <Calendar className="w-4 h-4" />
                BOOK YOUR SLOT
              </button>
              <button className="btn-outline" onClick={() => scrollToSection("contact")}>
                <MessageCircle className="w-4 h-4" />
                CONTACT US
              </button>
            </div>
          </div>
        </div>

        <div className="values-grid">
          {CORE_VALUES.map((value) => (
            <div key={value.title} className="value-card">
              <div className="icon">{value.icon}</div>
              <h4 className="text-white font-bold mb-2 uppercase tracking-wide" style={{ fontFamily: 'Rajdhani', sans-serif }}>{value.title}</h4>
              <p className="text-xs text-muted leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
