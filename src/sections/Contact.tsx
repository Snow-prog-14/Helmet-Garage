import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Facebook, Navigation, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { SectionLabel } from "../components/shared/SectionHeadings";
import { GOLD_TEXT_STYLE, GOLD_BORDER_STYLE, GOLD_GRADIENT } from "../constants/data";
import { Input } from "../components/shared/Input";
import { Textarea } from "../components/shared/Textarea";
import { Button } from "../components/shared/Button";
import { ContactFormData } from "../types";
import { toast } from "sonner";

export const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact Data:", data);
    setIsLoading(false);
    setIsSent(true);
    toast.success("Message sent successfully!");
  };

  const handleReset = () => {
    reset();
    setIsSent(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/40 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[rgba(201,162,39,0.2)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <SectionLabel>Find Us</SectionLabel>
            <h2
              className="font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.02em" }}
            >
              GET IN <span style={GOLD_TEXT_STYLE}>TOUCH</span>
            </h2>
            <p className="text-foreground/55 text-sm leading-relaxed mb-10">
              Have questions about a service or want a quick quote? Message us on Facebook or give us a call.
              We're always happy to help fellow riders.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: <MapPin className="w-5 h-5" />, label: "Address", val: "14 Catalina Subdivision, Rosario\nPasig City 1609" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone / GCash", val: "09394050469" },
                { icon: <Facebook className="w-5 h-5" />, label: "Facebook Page", val: "The Helmet Garage" },
                { icon: <Navigation className="w-5 h-5" />, label: "Waze", val: "Search \"The Helmet Garage Pasig\"" },
                { icon: <Clock className="w-5 h-5" />, label: "Operating Hours", val: "Mon – Sat  8:00 AM – 5:00 PM\nSunday by appointment" },
              ].map(({ icon, label, val }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 rounded flex items-center justify-center text-[var(--gold)] flex-shrink-0 bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.25)]">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-[var(--gold)] font-bold uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{label}</div>
                    <div className="text-foreground/75 text-sm whitespace-pre-line">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-card rounded-lg p-7 md:p-9 self-start" style={GOLD_BORDER_STYLE}>
            {isSent ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 bg-[rgba(201,162,39,0.12)] border border-[rgba(201,162,39,0.4)]">
                  <CheckCircle className="w-7 h-7 text-[#c9a227]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  MESSAGE SENT!
                </h3>
                <p className="text-foreground/55 text-sm">We'll reach out within one business day.</p>
                <button onClick={handleReset} className="mt-6 text-sm text-foreground/40 hover:text-[#c9a227] transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em" }}>
                  SEND US A MESSAGE
                </h3>
                <div className="space-y-4">
                  <Input 
                    label="Your Name *" 
                    placeholder="Juan dela Cruz" 
                    error={errors.name?.message}
                    {...register("name", { required: "Name is required" })}
                  />
                  <Input 
                    label="Phone Number *" 
                    placeholder="09XXXXXXXXX" 
                    error={errors.phone?.message}
                    {...register("phone", { 
                      required: "Phone number is required",
                      pattern: { value: /^[0-9]{11}$/, message: "Please enter a valid 11-digit number" }
                    })}
                  />
                  <Textarea 
                    label="Message *" 
                    rows={5} 
                    placeholder="Ask about a service, get a quote, or just say hello…" 
                    error={errors.message?.message}
                    {...register("message", { required: "Message is required" })}
                  />
                  <Button
                    type="submit"
                    loading={isLoading}
                    className="w-full py-3.5"
                  >
                    SEND MESSAGE <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
