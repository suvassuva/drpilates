"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import { Activity, Target, Zap, Heart, Shield, RefreshCw, Layers, Award } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto z-10 relative">
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Clinical Reformer Pilates & Physical Movement Therapy",
            "provider": [
              {
                "@type": "LocalBusiness",
                "name": "Dr Pilates - Kalyan Nagar",
                "image": "https://drpilates.in/images/reformer_studio.png",
                "telephone": "+91 88922 36442",
                "priceRange": "$$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "3rd Floor, Y4 Heights Building, 6th Main Rd, Above Starbucks Coffee, HRBR Layout 2nd Block, Kalyan Nagar",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "postalCode": "560043",
                  "addressCountry": "IN"
                }
              },
              {
                "@type": "LocalBusiness",
                "name": "Dr Pilates - Doddagubbi",
                "image": "https://drpilates.in/images/reformer_studio.png",
                "telephone": "+91 88922 36442",
                "priceRange": "$$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "ANR Arcade, 2nd floor, Doddagubbi Main Road, Opposite Medi Derma Hospital, Near Legacy School",
                  "addressLocality": "Bengaluru",
                  "addressRegion": "Karnataka",
                  "postalCode": "560077",
                  "addressCountry": "IN"
                }
              }
            ],
            "description": "Premium clinical Reformer Pilates training, high-efficiency Electro Muscle Stimulation (EMS) workouts, and orthopedic physiotherapy rehabilitation plans designed by Dr. Govinda Raju S."
          })
        }}
      />
      {/* Page Header */}
      <div className="text-center mb-20">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-accent/15 border border-primary-accent/30 text-[10px] font-mono tracking-widest text-primary-accent uppercase mb-4">
          <Award size={10} /> CLINICAL EXCELLENCE
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-foreground mb-4">
          Precision-Driven <span className="font-serif italic font-bold text-primary-accent">Movement Systems</span>
        </h1>
        <p className="text-muted-text text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
          Where science and clinical physical intelligence intersect. Explore our curated therapeutic and performance programs.
        </p>
      </div>

      {/* Service 1: Clinical Reformer */}
      <section id="reformer" className="mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Details */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-primary-accent tracking-widest block mb-2 font-semibold">
              01 / CLINICAL REFORMER
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground mb-6">
              Merrithew Reformer Systems
            </h2>
            <p className="text-muted-text text-sm leading-relaxed mb-8 font-sans">
              Our signature program utilizes high-performance apparatus to provide resistance and support, focusing on structural alignment, core activation, and spinal decompression.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <Shield className="text-primary-accent" size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">
                    Posture Restoration
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed font-sans">
                    Corrects spinal chains and imbalances through segmental centric loading and joint de-compression.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <Layers className="text-primary-accent" size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">
                    Core Optimization
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed font-sans">
                    Activating deep stabilizing musculature (transversus abdominis, multifidus) beyond superficial layers.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <Activity className="text-primary-accent" size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">
                    Muscular Longevity
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed font-sans">
                    Developing lean, powerful muscle fibers while maintaining joint integrity and globally restoring flexibility.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <RefreshCw className="text-primary-accent" size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">
                    Neuromuscular Logic
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed font-sans">
                    Refining the brain-body connection for improved spatial awareness and organic, fluid movement patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Collage */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/[0.08] relative group">
              <Image
                src="/images/reformer_studio.png"
                alt="Luxury Merrithew Reformer studio setup at Dr Pilates"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-lg border-white/[0.05]">
                <span className="font-mono text-[9px] tracking-widest text-primary-accent uppercase font-bold block mb-1">
                  STUDIO APPARATUS
                </span>
                <h4 className="font-display font-bold text-sm text-foreground">
                  Merrithew V2 Max Plus™ Reformer
                </h4>
              </div>
            </div>
            {/* Soft decorative glow */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary-accent/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Service 2: EMS Training */}
      <section id="ems" className="mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Premium Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/[0.08] relative group">
              <Image
                src="/images/ems.png"
                alt="Bio-Electronic EMS suit and console training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-lg border-white/[0.05]">
                <span className="font-mono text-[9px] tracking-widest text-emerald-400 uppercase font-bold block mb-1">
                  BIO-ELECTRIC DEVICE
                </span>
                <h4 className="font-display font-bold text-sm text-foreground">
                  Electro Muscle Stimulation (EMS)
                </h4>
              </div>
            </div>
            {/* Soft decorative glow */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Details */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="font-mono text-xs text-primary-accent tracking-widest block mb-2 font-semibold">
              02 / BIO-ELECTRONIC STIMULATION
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground mb-6">
              Electro Muscle Stimulation (EMS)
            </h2>
            <p className="text-muted-text text-sm leading-relaxed mb-8 font-sans">
              Maximize physiological efficiency. A 20-minute session that delivers the impact of 90 minutes of traditional weight training through targeted impulse technology, activating 90% of muscle fibers.
            </p>

            <div className="flex flex-col gap-6">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="text-primary-accent" size={14} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">
                    +90% Muscle Activation
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed font-sans">
                    Stimulating deep agonists and antagonists muscle groups simultaneously with medical-grade electric impulses.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="text-primary-accent" size={14} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">
                    Accelerated Metabolic Rate
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed font-sans">
                    Optimizes fat burning and EPOC (excess post-exercise oxygen consumption) response for up to 48 hours post conditioning.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="text-primary-accent" size={14} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">
                    Joint-Safe Hypertrophy
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed font-sans">
                    Achieves muscle contraction and growth without the mechanical stress and compression of heavy weights on joints.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 font-mono text-[10px] tracking-widest text-primary-accent font-semibold">
              ▲ FDA CLEARANCE TECHNOLOGY
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Physiotherapy / Advanced Therapeutics */}
      <section id="physiotherapy" className="mb-16">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary-accent tracking-widest block mb-2 font-semibold">
            03 / CLINICAL THERAPEUTICS
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-foreground mb-4">
            Advanced <span className="font-serif italic font-bold text-primary-accent">Therapeutics</span>
          </h2>
          <p className="text-muted-text text-sm leading-relaxed max-w-xl mx-auto font-sans">
            Evidence-based clinical intervention for restorative physical health, chronic pain relief, and athletic rehabilitation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <GlassCard hoverEffect={true} className="border-white/[0.05] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-[9px] tracking-widest bg-primary-accent/10 text-primary-accent px-2 py-0.5 rounded border border-primary-accent/20">
                  DR-DIRECTED
                </span>
                <span className="font-mono text-[9px] tracking-widest bg-white/5 text-muted-text px-2 py-0.5 rounded border border-white/[0.05]">
                  SPINAL
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">
                Structural Spinal Care
              </h3>
              <p className="text-xs text-muted-text leading-relaxed font-sans mb-6">
                Specialized decompression and mobilization protocols for chronic lower back pain, neck strain, herniated discs, and scoliosis posture correction.
              </p>
            </div>
            <div className="font-mono text-[10px] tracking-widest text-primary-accent font-bold">
              PHYSIOTHERAPY
            </div>
          </GlassCard>

          {/* Card 2 */}
          <GlassCard hoverEffect={true} className="border-white/[0.05] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-[9px] tracking-widest bg-primary-accent/10 text-primary-accent px-2 py-0.5 rounded border border-primary-accent/20">
                  ATHLETIC REHAB
                </span>
                <span className="font-mono text-[9px] tracking-widest bg-white/5 text-muted-text px-2 py-0.5 rounded border border-white/[0.05]">
                  1-ON-1
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">
                Sports Traumatology
              </h3>
              <p className="text-xs text-muted-text leading-relaxed font-sans mb-6">
                Clinical recovery protocols for joint sprains, ligament tears (ACL, meniscus), tendonitis, and shoulder impingement, assuring safe return to sport.
              </p>
            </div>
            <div className="font-mono text-[10px] tracking-widest text-primary-accent font-bold">
              PHYSIOTHERAPY
            </div>
          </GlassCard>

          {/* Card 3 */}
          <GlassCard hoverEffect={true} className="border-white/[0.05] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-[9px] tracking-widest bg-primary-accent/10 text-primary-accent px-2 py-0.5 rounded border border-primary-accent/20">
                  PAIN BLOCK
                </span>
                <span className="font-mono text-[9px] tracking-widest bg-white/5 text-muted-text px-2 py-0.5 rounded border border-white/[0.05]">
                  THERAPIST-LED
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">
                Kinetic Re-education
              </h3>
              <p className="text-xs text-muted-text leading-relaxed font-sans mb-6">
                Manual therapy (dry needling, myofascial release) combined with movement re-patterning to resolve long-standing postural compensation.
              </p>
            </div>
            <div className="font-mono text-[10px] tracking-widest text-primary-accent font-bold">
              PHYSIOTHERAPY
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="mt-24">
        <GlassCard hoverEffect={false} className="border-primary-accent/20 bg-gradient-to-r from-card-bg/80 to-primary-accent/5 p-10 sm:p-14 text-center">
          <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-foreground mb-4">
            Elevate Your Physical Intelligence.
          </h3>
          <p className="text-muted-text text-sm leading-relaxed max-w-xl mx-auto mb-8 font-sans">
            Your journey to peak performance begins with a data-driven clinical analysis and physical audit by our expert licensed practitioners.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded bg-primary-accent hover:bg-tertiary-accent text-foreground text-xs font-mono font-bold tracking-widest uppercase transition-colors"
          >
            Book Your Personalized Assessment Today
          </Link>
        </GlassCard>
      </section>
    </div>
  );
}
