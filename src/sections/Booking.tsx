import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Clock, MapPin, Phone, Navigation, CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { SectionLabel } from "../components/shared/SectionHeadings";
import { 
  BIKE_WASH, HELMET_CLEANING, SNAP_REPAIR, TIME_SLOTS, 
  GOLD_TEXT_STYLE, GOLD_BORDER_STYLE, GOLD_GRADIENT 
} from "../constants/data";
import { Input } from "../components/shared/Input";
import { Select } from "../components/shared/Select";
import { Textarea } from "../components/shared/Textarea";
import { Button } from "../components/shared/Button";
import { BookingFormData } from "../types";
import { toast } from "sonner";

export const Booking: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<BookingFormData>();
  const userName = watch("name");
  const bookingDate = watch("date");
  const bookingTime = watch("time");

  const onSubmit = async (data: BookingFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Booking Data:", data);
    setIsLoading(false);
    setIsSubmitted(true);
    toast.success("Booking request sent successfully!");
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
  };

  return (
    <section id="booking" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,162,39,0.05)0%,transparent 60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info */}
          <div className="lg:col-span-2">
            <SectionLabel>Appointments</SectionLabel>
            <h2
              className="font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "0.02em" }}
            >
              SCHEDULE YOUR <span style={GOLD_TEXT_STYLE}>SLOT</span>
            </h2>
            <p className="text-foreground/55 text-sm leading-relaxed mb-8">
              Book ahead to guarantee your preferred time. We confirm every booking within the hour.
              Walk-ins welcome, subject to availability.
            </p>

            <div className="space-y-5">
              {[
                { icon: <Clock className="w-5 h-5" />, label: "Hours", val: "Mon – Sat: 8:00 AM – 5:00 PM\nSunday: By appointment" },
                { icon: <MapPin className="w-5 h-5" />, label: "Address", val: "14 Catalina Subdivision\nRosario, Pasig City 1609" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone / GCash", val: "09394050469" },
                { icon: <Navigation className="w-5 h-5" />, label: "Waze", val: "Search \"The Helmet Garage Pasig\"" },
              ].map(({ icon, label, val }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 rounded flex items-center justify-center text-[#c9a227] flex-shrink-0 bg-[rgba(201,162,39,0.1)] border border-[rgba(201,162,39,0.25)]">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#c9a227] font-bold uppercase tracking-wider mb-0.5" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{label}</div>
                    <div className="text-foreground/75 text-sm whitespace-pre-line">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-card rounded-lg p-7 md:p-9" style={GOLD_BORDER_STYLE}>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-[rgba(201,162,39,0.12)] border border-[rgba(201,162,39,0.4)]">
                  <CheckCircle className="w-8 h-8 text-[#c9a227]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  SLOT RESERVED!
                </h3>
                <p className="text-foreground/60 text-sm mb-2">
                  Thanks, <span className="text-[#c9a227] font-medium">{userName}</span>! Your request for{" "}
                  <span className="text-[#c9a227] font-medium">{bookingDate}</span> at{" "}
                  <span className="text-[#c9a227] font-medium">{bookingTime}</span> has been received.
                </p>
                <p className="text-foreground/45 text-xs mb-8">We will confirm via phone/GCash: 09394050469</p>
                <button onClick={handleReset} className="text-sm text-foreground/40 hover:text-[#c9a227] transition-colors">
                  Book another slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.04em" }}>
                  YOUR DETAILS
                </h3>

                <div className="grid md:grid-cols-2 gap-x-4">
                  <Input 
                    label="Full Name *" 
                    placeholder="Juan dela Cruz" 
                    error={errors.name?.message}
                    {...register("name", { required: "Full name is required" })}
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
                </div>

                <div className="grid md:grid-cols-2 gap-x-4">
                  <Input 
                    label="Email (optional)" 
                    type="email" 
                    placeholder="juan@email.com" 
                    error={errors.email?.message}
                    {...register("email")}
                  />
                  <Input 
                    label="Motorcycle Model *" 
                    placeholder="e.g. Yamaha NMAX 2023" 
                    error={errors.bike?.message}
                    {...register("bike", { required: "Motorcycle model is required" })}
                  />
                </div>

                <Select 
                  label="Service Needed *" 
                  error={errors.service?.message}
                  {...register("service", { required: "Please select a service" })}
                >
                  <option value="" disabled>Select a service…</option>
                  <optgroup label="Bike Wash">
                    {BIKE_WASH.map((s) => <option key={s.name} value={s.name}>{s.name} — {s.price}</option>)}
                  </optgroup>
                  <optgroup label="Helmet Cleaning">
                    {HELMET_CLEANING.map((s) => <option key={s.name} value={s.name}>{s.name} — {s.price}</option>)}
                  </optgroup>
                  <optgroup label="Snap Button Repair">
                    {SNAP_REPAIR.map((s) => <option key={s.name} value={s.name}>{s.name} — {s.price}</option>)}
                  </optgroup>
                  <option value="Decal Removal & Premium Wash — ₱800">Decal Removal &amp; Premium Wash — ₱800</option>
                  <option value="Other / Not sure">Other / Not sure</option>
                </Select>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <Input 
                    label="Preferred Date *" 
                    type="date" 
                    error={errors.date?.message}
                    {...register("date", { required: "Date is required" })}
                  />
                  <Select 
                    label="Preferred Time *" 
                    error={errors.time?.message}
                    {...register("time", { required: "Time is required" })}
                  >
                    <option value="" disabled>Select…</option>
                    {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </Select>
                </div>

                <Textarea 
                  label="Additional Notes" 
                  rows={3} 
                  placeholder="Any special requests or details about your bike/helmet…" 
                  {...register("notes")}
                />

                <Button
                  type="submit"
                  loading={isLoading}
                  className="w-full py-4 text-base"
                >
                  <Calendar className="w-5 h-5" />
                  CONFIRM MY BOOKING
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
