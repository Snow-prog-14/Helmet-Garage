import React from "react";

export interface NavLink {
  id: string;
  label: string;
}

export interface PricingItem {
  name: string;
  price: string;
  highlight?: boolean;
}

export interface VehicleMatrix {
  [model: string]: {
    [service: string]: string;
  };
}

export interface CoreValue {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export interface Review {
  name: string;
  bike: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  bike: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}
