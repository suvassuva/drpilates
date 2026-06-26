"use client";

import React, { useActionState } from "react";
import { submitContactForm, FormResponse } from "@/app/actions/contact";
import GlassCard from "@/components/GlassCard";
import { Phone, MapPin, Clock, Compass, Send, CheckCircle, AlertTriangle, ShieldCheck, UserCheck, BrainCircuit } from "lucide-react";


const INITIAL_STATE: FormResponse = {
  success: false,
};

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, INITIAL_STATE);

  const phoneUrl = "tel:+918892236442";
  const whatsappUrl = "https://wa.me/918892236442?text=Hello%20Dr%20Pilates,%20I%20would%20like%20to%20book%20a%20clinical%20assessment.";
  const mapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Dr+Pilates+Kalyan+Nagar+Starbucks";

  return (
    <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto z-10 relative">
      {/* Page Header */}
      <div className="mb-12 text-left">
        <span className="font-mono text-[10px] tracking-widest text-primary-accent uppercase block mb-3 font-semibold">
          --- CONTACT US
        </span>
        <h1 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-foreground mb-4">
          Let&apos;s Begin Your <span className="font-serif italic font-bold text-primary-accent">Clinical Journey.</span>
        </h1>
        <p className="text-muted-text text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
          Connect with our clinical specialists to tailor a Pilates program that aligns with your rehabilitation goals or peak performance aspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Side: Contact Form */}
        <div className="lg:col-span-7">
          <GlassCard hoverEffect={false} className="h-full border-white/[0.05]">
            <form action={formAction} className="flex flex-col gap-6">
              {/* Form Response Banner */}
              {state.success && (
                <div className="p-4 rounded bg-emerald-950/40 border border-emerald-500/30 flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-emerald-200 text-xs font-sans leading-relaxed">{state.message}</p>
                </div>
              )}
              {!state.success && state.message && (
                <div className="p-4 rounded bg-rose-950/40 border border-rose-500/30 flex items-start gap-3">
                  <AlertTriangle className="text-rose-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-rose-200 text-xs font-sans leading-relaxed">{state.message}</p>
                </div>
              )}

              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-mono text-[10px] tracking-widest uppercase text-foreground/80 mb-2 font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="custom-input"
                  disabled={isPending}
                />
                {state.errors?.name && (
                  <p className="text-rose-400 text-[10px] font-mono mt-1 tracking-wide">{state.errors.name}</p>
                )}
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block font-mono text-[10px] tracking-widest uppercase text-foreground/80 mb-2 font-bold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+91 88922 36442"
                    className="custom-input"
                    disabled={isPending}
                  />
                  {state.errors?.phone && (
                    <p className="text-rose-400 text-[10px] font-mono mt-1 tracking-wide">{state.errors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[10px] tracking-widest uppercase text-foreground/80 mb-2 font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="custom-input"
                    disabled={isPending}
                  />
                  {state.errors?.email && (
                    <p className="text-rose-400 text-[10px] font-mono mt-1 tracking-wide">{state.errors.email}</p>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block font-mono text-[10px] tracking-widest uppercase text-foreground/80 mb-2 font-bold">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="custom-input appearance-none bg-[#1A1A1A] cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`, backgroundPosition: 'right 16px center', backgroundRepeat: 'no-repeat' }}
                  disabled={isPending}
                >
                  <option value="">Select a Program</option>
                  <option value="reformer">Clinical Pilates (Rehab)</option>
                  <option value="fitness">Reformer Fitness (Athletic)</option>
                  <option value="ems">EMS Training</option>
                  <option value="physio">Physiotherapy Assessment</option>
                </select>
                {state.errors?.service && (
                  <p className="text-rose-400 text-[10px] font-mono mt-1 tracking-wide">{state.errors.service}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-[10px] tracking-widest uppercase text-foreground/80 mb-2 font-bold">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your physical goals or clinical requirements..."
                  className="custom-input resize-none"
                  disabled={isPending}
                />
                {state.errors?.message && (
                  <p className="text-rose-400 text-[10px] font-mono mt-1 tracking-wide">{state.errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-3.5 mt-2 rounded bg-primary-accent hover:bg-tertiary-accent text-foreground text-xs font-mono font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
                    SUBMITTING...
                  </>
                ) : (
                  <>
                    SUBMIT INQUIRY
                    <Send size={12} />
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </div>

        {/* Right Side: Details & Google Maps */}
        <div id="locations" className="lg:col-span-5 flex flex-col gap-6">
          {/* Studio Info Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Kalyan Nagar Address */}
            <GlassCard hoverEffect={false} className="border-white/[0.05]">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary-accent" size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm tracking-wide text-primary-accent mb-2">
                    Kalyan Nagar
                  </h4>
                  <p className="text-muted-text text-xs leading-relaxed font-sans">
                    3rd Floor, Y4 Heights Building,<br />
                    6th Main Rd, Above Starbucks Coffee,<br />
                    HRBR Layout 2nd Block, Kalyan Nagar,<br />
                    Bengaluru, Karnataka 560043
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Doddagubbi Address */}
            <GlassCard hoverEffect={false} className="border-white/[0.05]">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary-accent" size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm tracking-wide text-primary-accent mb-2">
                    Doddagubbi
                  </h4>
                  <p className="text-muted-text text-xs leading-relaxed font-sans">
                    ANR Arcade, 2nd Floor,<br />
                    Doddagubbi Main Road,<br />
                    Opposite Medi Derma Hospital,<br />
                    Near Legacy School,<br />
                    Bengaluru, Karnataka 560077
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Working Hours */}
            <GlassCard hoverEffect={false} className="border-white/[0.05]">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center shrink-0">
                  <Clock className="text-primary-accent" size={16} />
                </div>
                <div className="w-full">
                  <h4 className="font-display font-bold text-sm tracking-wide text-foreground mb-2">
                    Working Hours
                  </h4>
                  <div className="flex flex-col gap-1.5 text-xs text-muted-text font-mono">
                    <div className="flex justify-between">
                      <span>Mon - Fri:</span>
                      <span className="text-foreground">6:00 AM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="text-foreground">7:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-primary-accent font-semibold">By Appt Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Quick Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <a
              href={phoneUrl}
              className="py-3 rounded border border-white/[0.08] hover:border-primary-accent/50 text-center font-mono text-[10px] tracking-wider text-muted-text hover:text-foreground flex flex-col items-center justify-center gap-1.5 bg-card-bg/20 transition-all duration-300"
            >
              <Phone size={14} className="text-primary-accent" />
              CALL NOW
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="py-3 rounded border border-white/[0.08] hover:border-primary-accent/50 text-center font-mono text-[10px] tracking-wider text-muted-text hover:text-foreground flex flex-col items-center justify-center gap-1.5 bg-card-bg/20 transition-all duration-300"
            >
              <Compass size={14} className="text-emerald-400" />
              WHATSAPP
            </a>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className="py-3 rounded border border-white/[0.08] hover:border-primary-accent/50 text-center font-mono text-[10px] tracking-wider text-muted-text hover:text-foreground flex flex-col items-center justify-center gap-1.5 bg-card-bg/20 transition-all duration-300"
            >
              <Compass size={14} className="text-primary-accent" />
              DIRECTIONS
            </a>
          </div>

          {/* Google Map dark grey container */}
          <div className="rounded-xl overflow-hidden border border-white/[0.08] h-60 w-full relative grayscale invert contrast-125 brightness-[0.7] opacity-80 hover:opacity-100 transition-opacity duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0543781254397!2d77.64099437593673!3d13.019438113545624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172bf42cd1ef%3A0xc0688f8d08596767!2sStarbucks%20Coffee!5e0!3m2!1sen!2sin!4v1719321456241!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr Pilates Kalyan Nagar Location Map"
            />
          </div>
        </div>
      </div>

      {/* Brand Attributes Badges */}
      <div className="mt-16 border-t border-white/[0.05] pt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-white/[0.03] bg-card-bg/10">
          <div className="w-10 h-10 rounded-full bg-primary-accent/5 border border-primary-accent/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="text-primary-accent" size={20} />
          </div>
          <div>
            <h5 className="font-mono text-xs font-bold tracking-widest text-foreground uppercase">
              Clinical Grade Equipment
            </h5>
            <p className="text-[11px] text-muted-text mt-1 font-sans">
              State-of-the-art Merrithew Reformers for safe, clinical-precision resistance.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-white/[0.03] bg-card-bg/10">
          <div className="w-10 h-10 rounded-full bg-primary-accent/5 border border-primary-accent/20 flex items-center justify-center shrink-0">
            <UserCheck className="text-primary-accent" size={20} />
          </div>
          <div>
            <h5 className="font-mono text-xs font-bold tracking-widest text-foreground uppercase">
              Certified Physicians
            </h5>
            <p className="text-[11px] text-muted-text mt-1 font-sans">
              Programs formulated and supervised by licensed rehabilitation doctors.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-white/[0.03] bg-card-bg/10">
          <div className="w-10 h-10 rounded-full bg-primary-accent/5 border border-primary-accent/20 flex items-center justify-center shrink-0">
            <BrainCircuit className="text-primary-accent" size={20} />
          </div>
          <div>
            <h5 className="font-mono text-xs font-bold tracking-widest text-foreground uppercase">
              Evidence-Based Method
            </h5>
            <p className="text-[11px] text-muted-text mt-1 font-sans">
              Exercise science integrated with musculoskeletal physiotherapy guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
