import React from "react";
import { Toaster } from "sonner";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Pricing } from "./sections/Pricing";
import { About } from "./sections/About";
import { Reviews } from "./sections/Reviews";
import { Booking } from "./sections/Booking";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-foreground selection:bg-[#c9a227] selection:text-[#0b0b0b]">
      {/* Notifications */}
      <Toaster position="top-center" richColors theme="dark" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Reviews />
        <Booking />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
