import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { scrollToSection } from "../utils/helpers";
import { BIKE_WASH, HELMET_CLEANING, SNAP_REPAIR, VEHICLE_MODELS, VEHICLE_MATRIX, MATRIX_COLS } from "../constants/data";

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="section-tag">
          <div className="line" />
          <span>Price List</span>
          <div className="line" />
        </div>
        <h2 className="section-heading text-white">Transparent Pricing</h2>

        <div className="pricing-lists">
          <div className="price-menu">
            <h4>Bike Wash</h4>
            {BIKE_WASH.map((item) => (
              <div key={item.name} className="price-item">
                <span>{item.name}</span>
                <span className="item-price">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="price-menu">
            <h4>Helmet Cleaning</h4>
            {HELMET_CLEANING.map((item) => (
              <div key={item.name} className="price-item">
                <span>{item.name}</span>
                <span className="item-price">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="price-menu">
            <h4>Snap Button Repair</h4>
            {SNAP_REPAIR.map((item) => (
              <div key={item.name} className="price-item">
                <span>{item.name}</span>
                <span className="item-price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section-tag pt-12">
          <div className="line" />
          <span>Vehicle Options</span>
          <div className="line" />
        </div>
        <h3 className="text-2xl font-bold text-center mb-8 uppercase tracking-widest" style={{ fontFamily: 'Rajdhani', sans-serif }}>Vehicle Pricing Matrix</h3>
        
        <div className="matrix-container">
          <table className="matrix-table">
            <thead>
              <tr>
                <th>MODEL</th>
                {MATRIX_COLS.map((col) => (
                  <th key={col}>{col.toUpperCase()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {VEHICLE_MODELS.map((model) => (
                <tr key={model}>
                  <td className="font-bold text-left pl-6">
                    {model}
                    {model === "Big Bike" && <span className="premium-badge">PREMIUM</span>}
                  </td>
                  {MATRIX_COLS.map((col) => (
                    <td key={col}>{VEHICLE_MATRIX[model][col] || "—"}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-12">
          <button className="btn-primary" onClick={() => scrollToSection("booking")}>
            <Calendar className="w-5 h-5" />
            BOOK YOUR SLOT TODAY! ➔
          </button>
        </div>
      </div>
    </section>
  );
};
