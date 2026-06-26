"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import Counter from "@/components/Counter";
import {
  Activity,
  Target,
  Zap,
  Phone,
  ArrowRight,
  ChevronDown,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Building
} from "lucide-react";

// Testimonials data
const TESTIMONIALS = [
  {
    quote: "The transformation in my posture and chronic back pain was immediate. Dr. Raju understands the science of movement like no one else. The studio setup is exceptionally clean and professional.",
    author: "Siddharth K.",
    role: "Architect / Kalyan Nagar",
    rating: 5,
  },
  {
    quote: "EMS training at Dr Pilates has been a game changer for my busy schedule. In just 20 minutes a week, I feel a level of muscle activation I never got in 2 hours at a regular gym. Highly recommended!",
    author: "Priya Sharma",
    role: "Software Director",
    rating: 5,
  },
  {
    quote: "As an athlete recovering from an ACL tear, I was highly skeptical about standard gym trainers. Dr. Govinda Raju's physiotherapy approach combined with reformer pilates was exactly what I needed. Safe and highly accurate.",
    author: "Rohan Das",
    role: "Competitive Tennis Player",
    rating: 5,
  },
];

// FAQs data
const FAQS = [
  {
    q: "What is Reformer Pilates?",
    a: "Reformer Pilates is a full-body conditioning method performed on a specialized carriage machine that uses springs, pulleys, and straps for resistance. Unlike mat pilates, the reformer offers adjustable resistance, providing both deep support for rehabilitation and high-intensity challenge for athletic performance.",
  },
  {
    q: "Who can join Pilates classes?",
    a: "Anyone can join. Because our sessions are supervised by a clinical physical therapist, we cater to all ages, fitness levels, and rehabilitation needs. Whether you are correcting posture, building core strength, or recovering from a spinal injury, we custom-tailor the spring resistance for you.",
  },
  {
    q: "How does EMS training work?",
    a: "Electro Muscle Stimulation (EMS) sends gentle, low-frequency bio-electric impulses directly to your muscle fibers via a technical suit. This triggers deep muscle contractions that are difficult to reach with standard weights. A 20-minute session activates over 90% of your muscle fibers safely and efficiently.",
  },
  {
    q: "Do I need physiotherapy before starting Pilates?",
    a: "Not necessarily, but every client at Dr Pilates starts with a comprehensive physical assessment. If you suffer from active spinal pain, sports injuries, or joint issues, Dr. Govinda Raju will direct a physiotherapy mobilization plan before transitioning you into Reformer work.",
  },
  {
    q: "How do I book a consultation?",
    a: "Booking is simple. Click any 'Book Assessment' or 'Book Consultation' CTA, fill out your contact details, and choose your service of interest. Our clinic coordinators will reach out within 2 hours to confirm your physical audit slot. You can also call us directly or click the WhatsApp widget.",
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="z-10 relative">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
      {/* 1. HERO SECTION */}
      <section className="pt-24 sm:pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <a 
              href="https://www.google.com/maps/search/Dr.+Pilates+Kalyan+Nagar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:border-amber-500/40 text-[10px] font-mono tracking-wider uppercase mb-5 max-w-max transition-all hover:bg-amber-500/15"
            >
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="font-semibold text-foreground">4.9 / 5.0</span>
              <span className="text-muted-text">|</span>
              <span>96+ Google Reviews</span>
            </a>
            <span className="font-mono text-xs text-primary-accent tracking-widest block mb-4 font-semibold uppercase">
              --- CLINICAL PILATES REHABILITATION
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.2] sm:leading-[1.1] text-foreground mb-6">
              Transform Your <br className="hidden sm:inline" />
              Body Through <br className="hidden sm:inline" />
              <span className="font-serif italic font-bold text-primary-accent">Reformer Pilates</span>
            </h1>
            <p className="text-muted-text text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-sans">
              Expert-led Reformer Pilates, EMS Training, and Physiotherapy programs designed to improve posture, mobility, strength, recovery, and overall well-being.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded bg-primary-accent hover:bg-tertiary-accent text-foreground text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg shadow-primary-accent/15"
              >
                Begin Your Assessment
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+918892236442"
                className="px-8 py-3.5 rounded border border-white/[0.08] hover:border-primary-accent/50 text-muted-text hover:text-foreground text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 text-center flex items-center justify-center gap-2 bg-card-bg/25"
              >
                <Phone size={14} />
                Call Studio
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/[0.05] pt-8">
              <div>
                <div className="text-2xl sm:text-3xl text-primary-accent">
                  <Counter value={8} suffix="+" />
                </div>
                <div className="text-[10px] font-mono tracking-widest text-muted-text uppercase mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl text-primary-accent">
                  <Counter value={1000} suffix="+" />
                </div>
                <div className="text-[10px] font-mono tracking-widest text-muted-text uppercase mt-1">
                  Happy Clients
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-mono text-[9px] font-bold text-foreground flex items-center gap-1">
                  <CheckCircle size={10} className="text-emerald-400" /> CLINICAL GRADE
                </span>
                <span className="text-[9px] font-mono text-muted-text uppercase mt-1 tracking-wider leading-none">
                  Merrithew Apparatus
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Studio image card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <GlassCard hoverEffect={false} className="w-full max-w-md p-3 border-white/[0.05]">
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative border border-white/[0.08]">
                <Image
                  src="/images/reformer_studio.png"
                  alt="Luxury Reformer Pilates Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded border-white/[0.05] flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-xs text-foreground">
                      Clinical Studio
                    </h4>
                    <span className="text-[9px] font-mono text-muted-text uppercase tracking-widest block mt-0.5">
                      Kalyan Nagar, Bangalore
                    </span>
                  </div>
                  <Building size={14} className="text-primary-accent" />
                </div>
              </div>
            </GlassCard>
            {/* Ambient decorative glowing backdrops */}
            <div className="absolute -top-12 -right-12 w-60 h-60 bg-primary-accent/5 rounded-full blur-3xl -z-10 animate-glow-pulse" />
          </div>
        </div>
      </section>

      {/* 2. FOUNDER PREVIEW */}
      <section className="py-24 border-t border-white/[0.05] bg-[#0E0E0E]/40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image wrapper */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-80 aspect-[4/5] rounded-xl overflow-hidden border border-white/[0.08] group shadow-2xl">
              <Image
                src="/images/govindRaj.jpg"
                alt="Dr. Govinda Raju S"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
            {/* Glow backdrop */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-accent/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-primary-accent tracking-widest block mb-3 font-semibold uppercase">
              THE FOUNDER
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground mb-6">
              Meet Dr. Govinda Raju S
            </h2>
            <p className="text-muted-text text-sm leading-relaxed mb-6 font-sans">
              With over a decade of clinical experience, Dr. Govinda Raju S has pioneered the integration of physical therapy with the athletic refinement of Reformer Pilates. His philosophy focuses on accuracy, biomechanical integrity, and customized rehab programs that deliver sustainable, long-term physical evolution.
            </p>
            <p className="text-muted-text text-sm leading-relaxed mb-8 font-sans">
              Qualifications include a Bachelor of Physiotherapy, ACE Certified Professional, and licensed practitioner of Advanced Dry Needling. Under his direction, Dr Pilates uses state-of-the-art Merrithew Reformer Pilates equipment designed to move the mind, body, and soul.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-primary-accent hover:text-tertiary-accent transition-colors"
            >
              DISCOVER THE STORY
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. PRECISION PROGRAMS (SERVICES) */}
      <section className="py-24 border-t border-white/[0.05] px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-primary-accent tracking-widest block mb-3 font-semibold uppercase">
              PRECISION PROGRAMS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground mb-4">
              Our Movement Systems
            </h2>
            <p className="text-muted-text text-sm max-w-xl mx-auto font-sans leading-relaxed">
              Our clinical approach combines physiology, musculoskeletal alignment, and exercise science.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Reformer */}
            <GlassCard hoverEffect={true} className="border-white/[0.05] flex flex-col justify-between min-h-[350px]">
              <div>
                <div className="w-10 h-10 rounded bg-primary-accent/15 border border-primary-accent/20 flex items-center justify-center mb-6">
                  <Activity className="text-primary-accent" size={18} />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  Reformer Pilates
                </h3>
                <p className="text-xs text-muted-text leading-relaxed font-sans mb-6">
                  Dynamic resistance training utilizing world-class Merrithew equipment to optimize spinal structure, posture, and core control.
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  <span className="custom-list-item">Posture Alignment</span>
                  <span className="custom-list-item">Core Stabilization</span>
                  <span className="custom-list-item">Joint Mobilization</span>
                </div>
              </div>
              <Link
                href="/services#reformer"
                className="font-mono text-[10px] tracking-widest text-primary-accent hover:text-foreground font-bold transition-colors flex items-center gap-1.5"
              >
                EXPLORE PROGRAM
                <ArrowRight size={10} />
              </Link>
            </GlassCard>

            {/* Card 2: EMS */}
            <GlassCard hoverEffect={true} className="border-white/[0.05] flex flex-col justify-between min-h-[350px]">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded bg-primary-accent/15 border border-primary-accent/20 flex items-center justify-center">
                    <Zap className="text-primary-accent" size={18} />
                  </div>
                  <span className="font-mono text-[8px] tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/25 px-2 py-0.5 rounded uppercase font-bold">
                    BIO-ELECTRIC
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  EMS Training
                </h3>
                <p className="text-xs text-muted-text leading-relaxed font-sans mb-6">
                  20-minute Electro Muscle Stimulation workouts that trigger deep muscle contraction equivalent to 90 minutes of traditional training.
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  <span className="custom-list-item">90% Muscle Activation</span>
                  <span className="custom-list-item">Fat Loss & Conditioning</span>
                  <span className="custom-list-item">Joint-Safe Loading</span>
                </div>
              </div>
              <Link
                href="/services#ems"
                className="font-mono text-[10px] tracking-widest text-primary-accent hover:text-foreground font-bold transition-colors flex items-center gap-1.5"
              >
                EXPLORE PROGRAM
                <ArrowRight size={10} />
              </Link>
            </GlassCard>

            {/* Card 3: Physio */}
            <GlassCard hoverEffect={true} className="border-white/[0.05] flex flex-col justify-between min-h-[350px]">
              <div>
                <div className="w-10 h-10 rounded bg-primary-accent/15 border border-primary-accent/20 flex items-center justify-center mb-6">
                  <Target className="text-primary-accent" size={18} />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  Physiotherapy
                </h3>
                <p className="text-xs text-muted-text leading-relaxed font-sans mb-6">
                  Evidence-based physical treatment and manipulative programs to manage spinal pathologies, sports injuries, and chronic pain.
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  <span className="custom-list-item">Pain Management</span>
                  <span className="custom-list-item">Sports Rehabilitation</span>
                  <span className="custom-list-item">Kinetic Re-education</span>
                </div>
              </div>
              <Link
                href="/services#physiotherapy"
                className="font-mono text-[10px] tracking-widest text-primary-accent hover:text-foreground font-bold transition-colors flex items-center gap-1.5"
              >
                EXPLORE PROGRAM
                <ArrowRight size={10} />
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE DR PILATES */}
      <section className="py-24 border-t border-white/[0.05] bg-[#0E0E0E]/40 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
            <div className="lg:col-span-6">
              <span className="font-mono text-xs text-primary-accent tracking-widest block mb-3 font-semibold uppercase">
                THE DR PILATES EDGE
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground">
                Why Discerning Clients Choose Dr Pilates
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-muted-text text-sm sm:text-base font-sans leading-relaxed">
                Personalized movement planning, certified physiotherapists, and clinical-grade equipment configured for elite core conditioning.
              </p>
            </div>
          </div>

          {/* Grid of 6 features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard hoverEffect={false} className="border-white/[0.05] p-6">
              <span className="font-mono text-[10px] text-primary-accent tracking-widest block mb-3 uppercase font-semibold">
                01 / CLINICAL AUDIT
              </span>
              <h4 className="font-display font-bold text-sm text-foreground mb-2">
                Doctor-Led Assessment
              </h4>
              <p className="text-xs text-muted-text leading-relaxed font-sans">
                Every journey begins with a complete musculoskeletal and joint audit to map your physical structure.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="border-white/[0.05] p-6">
              <span className="font-mono text-[10px] text-primary-accent tracking-widest block mb-3 uppercase font-semibold">
                02 / PREMIUM SETUP
              </span>
              <h4 className="font-display font-bold text-sm text-foreground mb-2">
                Luxury Environment
              </h4>
              <p className="text-xs text-muted-text leading-relaxed font-sans">
                A state-of-the-art wellness space featuring private training rooms and upscale client amenities.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="border-white/[0.05] p-6">
              <span className="font-mono text-[10px] text-primary-accent tracking-widest block mb-3 uppercase font-semibold">
                03 / PERSONAL ATTENTION
              </span>
              <h4 className="font-display font-bold text-sm text-foreground mb-2">
                Private & Semi-Private
              </h4>
              <p className="text-xs text-muted-text leading-relaxed font-sans">
                Focused attention with 1:1 or micro-group configurations to ensure absolute precision and safety.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="border-white/[0.05] p-6">
              <span className="font-mono text-[10px] text-primary-accent tracking-widest block mb-3 uppercase font-semibold">
                04 / ACCREDITED CARE
              </span>
              <h4 className="font-display font-bold text-sm text-foreground mb-2">
                Clinical Trust
              </h4>
              <p className="text-xs text-muted-text leading-relaxed font-sans">
                Bridging the gap between physiotherapy, joint alignment, and physical performance training.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="border-white/[0.05] p-6">
              <span className="font-mono text-[10px] text-primary-accent tracking-widest block mb-3 uppercase font-semibold">
                05 / STATE OF THE ART
              </span>
              <h4 className="font-display font-bold text-sm text-foreground mb-2">
                Advanced Equipment
              </h4>
              <p className="text-xs text-muted-text leading-relaxed font-sans">
                Equipped with professional-grade Merrithew V2 Max Plus reformers and biomechanical apparatus.
              </p>
            </GlassCard>

            <GlassCard hoverEffect={false} className="border-white/[0.05] p-6">
              <span className="font-mono text-[10px] text-primary-accent tracking-widest block mb-3 uppercase font-semibold">
                06 / CLIENT FIRST
              </span>
              <h4 className="font-display font-bold text-sm text-foreground mb-2">
                Flexible Scheduling
              </h4>
              <p className="text-xs text-muted-text leading-relaxed font-sans">
                Convenient morning and evening booking slots, Monday through Saturday, to accommodate busy lifestyles.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 5. PATIENT VOICES (TESTIMONIALS) */}
      <section className="py-24 border-t border-white/[0.05] px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="font-mono text-xs text-primary-accent tracking-widest block mb-4 font-semibold uppercase">
            PATIENT VOICES
          </span>
          
          {/* Star ratings */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-primary-accent text-primary-accent" />
            ))}
          </div>

          <div className="min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-serif italic text-lg sm:text-2xl text-foreground leading-relaxed font-medium mb-8">
                  &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                </p>
                <div className="font-mono text-xs text-primary-accent uppercase tracking-widest font-bold">
                  {TESTIMONIALS[activeTestimonial].author}
                </div>
                <div className="font-sans text-[10px] text-muted-text mt-1">
                  {TESTIMONIALS[activeTestimonial].role}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={handlePrevTestimonial}
              className="p-3 rounded-full border border-white/[0.08] hover:border-primary-accent/50 text-muted-text hover:text-foreground transition-all cursor-pointer bg-card-bg/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="p-3 rounded-full border border-white/[0.08] hover:border-primary-accent/50 text-muted-text hover:text-foreground transition-all cursor-pointer bg-card-bg/10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Google Reviews CTA */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href="https://www.google.com/maps/search/Dr.+Pilates+Kalyan+Nagar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-card-bg/25 hover:border-amber-500/35 hover:bg-amber-500/5 transition-all text-[10px] font-mono tracking-widest text-muted-text hover:text-foreground group cursor-pointer whitespace-nowrap"
            >
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-amber-500 text-amber-500" />
                ))}
              </span>
              <span>96+ GOOGLE REVIEWS</span>
              <ArrowRight size={10} className="text-amber-500 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. COMMON ENQUIRIES (FAQs) */}
      <section className="py-24 border-t border-white/[0.05] bg-[#0E0E0E]/40 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground mb-4">
              Common Enquiries
            </h2>
            <p className="text-muted-text text-xs font-mono tracking-widest uppercase">
              Frequently Asked Questions
            </p>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-white/[0.05] bg-card-bg/20 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-foreground/90 pr-4">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-primary-accent shrink-0"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-muted-text leading-relaxed font-sans border-t border-white/[0.03]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <GlassCard hoverEffect={false} className="border-primary-accent/20 bg-gradient-to-r from-card-bg/80 to-primary-accent/5 p-10 sm:p-14 text-center">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground mb-4">
            Begin Your Physiological <span className="font-serif italic font-bold text-primary-accent">Evolution</span> Today
          </h2>
          <p className="text-muted-text text-sm max-w-xl mx-auto mb-8 font-sans leading-relaxed">
            Reserve a personalized Clinical Assessment with Dr. Govinda Raju S and map your specific path to peak mechanical performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded bg-primary-accent hover:bg-tertiary-accent text-foreground text-xs font-mono font-bold tracking-widest uppercase transition-colors text-center"
            >
              Book Your Assessment
            </Link>
            <a
              href="tel:+918892236442"
              className="px-8 py-3.5 rounded border border-white/[0.08] hover:border-primary-accent/50 text-muted-text hover:text-foreground text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 text-center flex items-center justify-center gap-2 bg-card-bg/20"
            >
              <Phone size={12} />
              Call Studio
            </a>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
