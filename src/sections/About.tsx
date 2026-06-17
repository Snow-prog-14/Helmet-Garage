import React from "react";
import { MapPin, Calendar, MessageCircle } from "lucide-react";
import { SectionLabel, SectionHeading } from "../components/shared/SectionHeadings";
import { CORE_VALUES, GOLD_TEXT_STYLE, GOLD_BORDER_SUBTLE_STYLE } from "../constants/data";
import { Button } from "../components/shared/Button";
import { scrollToSection } from "../utils/helpers";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none bg-[radial-gradient(circle,rgba(201,162,39,0.06)0%,transparent 70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden bg-[#161616] aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=900&h=675&fit=crop&auto=format"
                alt="The Helmet Garage workshop"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top_right,rgba(11,11,11,0.7)0%,transparent 60%)]" />
            </div>
            {/* Gold corner accents */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#c9a227] rounded-tl-md" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#c9a227] rounded-br-md" />
            {/* Location badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2.5 rounded bg-[rgba(11,11,11,0.92)] border border-[#c9a227]">
              <MapPin className="w-4 h-4 text-[#c9a227]" />
              <span className="text-white text-sm font-medium">Rosario, Pasig City</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <h2
              className="font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.02em" }}
            >
              MORE THAN CLEAN —<br />
              <span style={GOLD_TEXT_STYLE}>PASSIONATE CARE</span><br />
              FOR YOUR RIDE.
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-4 text-sm">
              The Helmet Garage was born from a simple frustration: riders deserving better care
              for their gear and machines than generic car wash services provide. Located in
              Catalina Subdivision, Rosario, Pasig City, we built a specialist studio designed
              exclusively around motorcycles and their riders.
            </p>
            <p className="text-foreground/60 leading-relaxed mb-8 text-sm">
              From the graphene ceramic coatings on your helmet to the precision motorwash on
              your fairings — everything we do reflects a commitment to craft that you can see
              and feel every time you ride.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection("booking")}>
                <Calendar className="w-4 h-4" />
                BOOK YOUR SLOT
              </Button>
              <Button outline onClick={() => scrollToSection("contact")}>
                <MessageCircle className="w-4 h-4" />
                CONTACT US
              </Button>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <SectionLabel>Our Foundation</SectionLabel>
          <SectionHeading>
            CORE <span style={GOLD_TEXT_STYLE}>VALUES</span>
          </SectionHeading>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_VALUES.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-card rounded-lg p-6 flex flex-col items-start gap-4 hover:-translate-y-1 transition-all duration-300"
              style={GOLD_BORDER_SUBTLE_STYLE}
            >
              <div className="w-12 h-12 rounded flex items-center justify-center text-[#c9a227] bg-[rgba(201,162,39,0.1)] border border-[rgba(201,162,39,0.25)]">
                {icon}
              </div>
              <div>
                <h4 className="font-bold text-white mb-2" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em" }}>
                  {title}
                </h4>
                <p className="text-foreground/55 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
