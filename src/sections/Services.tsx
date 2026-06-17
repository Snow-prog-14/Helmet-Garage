import React from "react";
import { Wrench, Shield, Sparkles, ChevronRight, Check } from "lucide-react";
import { scrollToSection } from "../utils/helpers";

const SERVICES_DATA = [
  {
    id: "bike-wash",
    icon: <Wrench className="w-8 h-8" />,
    title: "Bike Wash",
    summary: "Standard motorwash to premium ceramic-protected full wash. Quick turnaround, spotless results.",
    checklist: ["Motorwash from ₱120", "Wax & Ceramic options", "Big Bike specialist", "Degreasing included"],
  },
  {
    id: "helmet-cleaning",
    icon: <Shield className="w-8 h-8" />,
    title: "Helmet Cleaning",
    summary: "Deep clean, graphene ceramic coating, and full detailing packages for all helmet types.",
    checklist: ["Full & Half Face cleaning", "Graphene Ceramic ₱600", "Anti-fog treatment", "Interior sanitization"],
  },
  {
    id: "repairs-add-ons",
    icon: <Sparkles className="w-8 h-8" />,
    title: "Repairs & Add-Ons",
    summary: "Snap button repair, D-ring replacement, and decal removal with premium wash.",
    checklist: ["Stainless Button ₱150", "Double D Ring ₱100", "Decal Removal ₱800", "Visor replacement"],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-tag">
          <div className="line" />
          <span>Our Offerings</span>
          <div className="line" />
        </div>
        <h2 className="section-heading">Premium Services</h2>

        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="service-card">
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.checklist.map((item, idx) => (
                  <li key={idx}>
                    <Check className="w-3 h-3 text-[var(--gold)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToSection("pricing")}
                className="service-link"
              >
                SEE FULL PRICING <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="isolated-banner">
          <div className="label">ADD-ON SERVICE: Removal & Installation of Decals with Premium Wash</div>
          <div className="price">₱800</div>
        </div>
      </div>
    </section>
  );
};
