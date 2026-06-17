import React from "react";
import { Award, Heart, Gem, Eye, Wrench, Shield, Sparkles } from "lucide-react";
import { NavLink, PricingItem, VehicleMatrix, CoreValue, Review } from "../types";

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
  { id: "booking", label: "Book Now" },
  { id: "contact", label: "Contact" },
];

export const BIKE_WASH: PricingItem[] = [
  { name: "Motorwash", price: "₱120" },
  { name: "Motorwash w/ Wax", price: "₱150" },
  { name: "Premium Motorwash", price: "₱200" },
  { name: "Big Bike w/ Wax", price: "₱200" },
  { name: "Big Bike w/ Ceramic", price: "₱250" },
];

export const HELMET_CLEANING: PricingItem[] = [
  { name: "Cleaning Full/Half Face", price: "₱250" },
  { name: "Ceramic Coating w/ Graphene", price: "₱600" },
  { name: "Detailing", price: "₱450" },
  { name: "Package A", price: "₱600", highlight: true },
  { name: "Package B", price: "₱800", highlight: true },
  { name: "Package C", price: "₱1,000", highlight: true },
];

export const SNAP_REPAIR: PricingItem[] = [
  { name: "Double D Ring's", price: "₱100" },
  { name: "Stainless Button", price: "₱150" },
];

export const VEHICLE_MODELS = [
  "Mio / Beat",
  "Raider",
  "Click 125",
  "Click 150 / Sniper",
  "Aerox",
  "NMAX / PCX / ADV",
  "Big Bike",
];

export const VEHICLE_MATRIX: VehicleMatrix = {
  "Mio / Beat": { Detailing: "₱350", Ceramic: "₱600", "Bike Spa": "₱450", "Pkg A": "₱600", "Pkg B": "₱800", "Pkg C": "₱1,000" },
  "Raider": { Detailing: "₱400", Ceramic: "₱700", "Bike Spa": "₱500", "Pkg A": "₱650", "Pkg B": "₱850", "Pkg C": "₱1,050" },
  "Click 125": { Detailing: "₱400", Ceramic: "₱700", "Bike Spa": "₱500", "Pkg A": "₱650", "Pkg B": "₱850", "Pkg C": "₱1,050" },
  "Click 150 / Sniper": { Detailing: "₱450", Ceramic: "₱750", "Bike Spa": "₱550", "Pkg A": "₱700", "Pkg B": "₱900", "Pkg C": "₱1,100" },
  "Aerox": { Detailing: "₱450", Ceramic: "₱750", "Bike Spa": "₱550", "Pkg A": "₱700", "Pkg B": "₱900", "Pkg C": "₱1,100" },
  "NMAX / PCX / ADV": { Detailing: "₱500", Ceramic: "₱850", "Bike Spa": "₱600", "Pkg A": "₱800", "Pkg B": "₱1,000", "Pkg C": "₱1,200" },
  "Big Bike": { Detailing: "₱700", Ceramic: "₱1,100", "Bike Spa": "₱800", "Pkg A": "₱1,000", "Pkg B": "₱1,200", "Pkg C": "₱1,500" },
};

export const MATRIX_COLS = ["Detailing", "Ceramic", "Bike Spa", "Pkg A", "Pkg B", "Pkg C"];

export const CORE_VALUES: CoreValue[] = [
  { icon: React.createElement(Award, { className: "w-6 h-6" }), title: "Quality Service", desc: "We never cut corners — every job meets our exacting standard before it leaves the garage." },
  { icon: React.createElement(Heart, { className: "w-6 h-6" }), title: "Passion for Riders", desc: "Riders ourselves, we understand what your machine means to you and treat it accordingly." },
  { icon: React.createElement(Gem, { className: "w-6 h-6" }), title: "High-Quality Products", desc: "We use only professional-grade ceramic coatings, graphene products, and cleaning agents." },
  { icon: React.createElement(Eye, { className: "w-6 h-6" }), title: "Attention to Detail", desc: "From visor seals to vent channels — the details others miss are where we earn our reputation." },
];

export const REVIEWS: Review[] = [
  { name: "Aldrin M.", bike: "Honda Click 150", rating: 5, text: "Had my helmet detailed and coated — it looked brand new. The graphene ceramic coating is genuinely impressive. Will not trust anyone else.", date: "May 2026", avatar: "AM" },
  { name: "Trisha V.", bike: "Yamaha NMAX", rating: 5, text: "Brought my Shoei for detailing. The team was super professional and the result was stunning. Worth every peso.", date: "April 2026", avatar: "TV" },
  { name: "Carlo B.", bike: "Honda ADV 160", rating: 5, text: "Snap button was broken for months. Fixed in under 20 minutes for only ₱150. Service is fast, honest, and genuinely friendly.", date: "May 2026", avatar: "CB" },
  { name: "Maricel R.", bike: "Yamaha Aerox", rating: 5, text: "The Bike Spa package left my Aerox absolutely gleaming. Interior panels, every nook — done. Booked two more sessions already.", date: "June 2026", avatar: "MR" },
  { name: "Dennis L.", bike: "Kawasaki Z400 (Big Bike)", rating: 5, text: "These guys really know big bikes. Package C for my Z400 was thorough, careful, and the ceramic finish is holding up beautifully.", date: "June 2026", avatar: "DL" },
  { name: "Nica G.", bike: "Suzuki Raider R150", rating: 5, text: "Super convenient location in Pasig. Dropped my bike and helmet, came back to find both looking showroom-fresh. Highly recommended!", date: "June 2026", avatar: "NG" },
];

export const TIME_SLOTS = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

export const GOLD_GRADIENT = "linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)";

export const GOLD_TEXT_STYLE: React.CSSProperties = {
  background: GOLD_GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export const GOLD_BORDER_STYLE: React.CSSProperties = { border: "1px solid #D4AF37" };
export const GOLD_BORDER_SUBTLE_STYLE: React.CSSProperties = { border: "1px solid rgba(212, 175, 55, 0.35)" };
