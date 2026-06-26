"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import { Heart, Check, BookmarkCheck, Activity } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 px-6 max-w-7xl mx-auto z-10 relative">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Biography Details */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-primary-accent tracking-widest block mb-3 font-semibold">
              THE FOUNDER
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-foreground mb-6">
              About <br className="hidden sm:inline" />
              <span className="font-serif italic font-bold text-primary-accent">Dr. Govinda Raju S.</span>
            </h1>
            <p className="text-muted-text text-sm sm:text-base leading-relaxed mb-8 font-sans">
              Blending clinical expertise with an artist&apos;s eye for movement, Dr. Govinda Raju S. has redefined Pilates to bridge the gap between performance medical discipline and athletic refinement. Over his decade-long career, he has combined physiotherapy, Pilates, and EMS training to develop personalized protocols that restore posture, build core strength, and support sustainable physical longevity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded border border-white/[0.05] bg-card-bg/25 font-mono text-[10px] tracking-widest text-foreground">
                <BookmarkCheck size={12} className="text-primary-accent" />
                CLINICAL PRACTICE: 10+ YEARS CLINICAL
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded border border-white/[0.05] bg-card-bg/25 font-mono text-[10px] tracking-widest text-foreground">
                <BookmarkCheck size={12} className="text-primary-accent" />
                INTEGRATIVE METHOD: REHAB & ATHLETICS
              </div>
            </div>
          </div>

          {/* Right: Portrait Image with glowing border */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-80 aspect-[4/5] rounded-xl p-[2px] bg-gradient-to-tr from-primary-accent via-tertiary-accent/20 to-transparent shadow-2xl shadow-primary-accent/10 group">
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-accent to-transparent blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-background">
                <Image
                  src="/images/founder.png"
                  alt="Dr. Govinda Raju S Portrait"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  priority
                />
                {/* Visual Label overlay */}
                <div className="absolute bottom-4 left-4 right-4 py-2 px-4 glass-panel rounded border-white/[0.05] text-center">
                  <span className="font-serif italic text-xs tracking-wider text-primary-accent font-bold">
                    Precision in Motion.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section id="scientific-basis" className="mb-24 border-t border-white/[0.05] pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Left Bio Details */}
          <div className="lg:col-span-6">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground mb-6">
              A Journey of Clinical Evolution
            </h2>
            <div className="text-muted-text text-sm leading-relaxed flex flex-col gap-4 font-sans">
              <p>
                Dr. Govinda Raju S. did not begin his journey in simple fitness gyms. As a licensed physical therapist (Bachelor of Physiotherapy), his early years were spent in orthopedic clinical settings, treating structural spine pathologies and complex joint injuries.
              </p>
              <p>
                He soon realized that traditional gym training lacks biomechanical accuracy, often exacerbating structural stress. He turned to Reformer Pilates and EMS technology—not as general workouts, but as medical rehabilitation tools designed to activate correct neuromuscular pathways and restore structural integrity.
              </p>
              <p>
                Certified by the American Council on Exercise (ACE) and licensed in Advanced Dry Needling and manual therapy, Dr. Raju curates customized movements that safely push the human body to its peak physiological expression.
              </p>
            </div>
          </div>

          {/* Right Core Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <GlassCard hoverEffect={false} className="border-white/[0.05]">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center shrink-0">
                  <Heart className="text-primary-accent" size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-2">
                    Philosophy of Focus
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed font-sans">
                    Fitness is 80% clinical execution and 20% physical effort. Our studio focuses on safe, natural, and symmetrical movements to permanently correct long-standing posture imbalances.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard hoverEffect={false} className="border-white/[0.05]">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded bg-primary-accent/10 border border-primary-accent/20 flex items-center justify-center shrink-0">
                  <Activity className="text-primary-accent" size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-2">
                    Scientific Rigor
                  </h4>
                  <p className="text-xs text-muted-text leading-relaxed font-sans">
                    Every client program is data-driven. We use initial clinical assessment audits that measure joint range of motion, core recruitment metrics, and kinetic compensations before scheduling.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Big Quote Card */}
        <div className="relative py-10 px-8 sm:px-16 border-l-2 border-primary-accent bg-card-bg/10 rounded-r-xl max-w-4xl mx-auto mt-16">
          <span className="font-serif text-5xl text-primary-accent/20 absolute top-4 left-4 pointer-events-none">
            “
          </span>
          <p className="font-serif italic text-lg sm:text-2xl text-foreground/90 leading-relaxed font-semibold relative z-10">
            The body is a symphony of mechanics. My role is to tune it to perfection, ensuring every movement serves both physical function and athletic form.
          </p>
          <div className="mt-4 font-mono text-[10px] tracking-widest text-primary-accent font-bold">
            — DR. GOVINDA RAJU S, FOUNDER
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="mb-24 border-t border-white/[0.05] pt-16">
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-foreground">
            Our Purpose
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Mission */}
          <GlassCard hoverEffect={false} className="border-white/[0.05] p-8 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[9px] tracking-widest text-primary-accent uppercase font-bold block mb-4">
                MISSION
              </span>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                To help people move better, feel stronger, and live a life unhindered by physical limitations.
              </h3>
            </div>
            <p className="text-xs text-muted-text leading-relaxed font-sans">
              We deliver a computerized physical experience, ensuring clients establish a lifetime of healthy physical intelligence.
            </p>
          </GlassCard>

          {/* Card 2: Custom Approach Highlight */}
          <div className="rounded-xl overflow-hidden border border-primary-accent/20 relative h-full min-h-[250px] group flex flex-col justify-end p-8 bg-gradient-to-t from-background via-card-bg/60 to-primary-accent/5">
            <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 group-hover:opacity-40 transition-opacity duration-700" style={{ backgroundImage: `url('/images/reformer_studio.png')` }} />
            <div className="relative z-10">
              <span className="text-3xl sm:text-4xl font-serif italic text-primary-accent font-bold block mb-1">
                100%
              </span>
              <h4 className="font-display font-bold text-sm text-foreground uppercase tracking-wider mb-2">
                Customized Approach
              </h4>
              <p className="text-xs text-muted-text font-sans leading-relaxed">
                Zero generic plans. Programs are built for your specific spine, hips, and musculoskeletal structural alignment.
              </p>
            </div>
          </div>

          {/* Card 3: Vision */}
          <GlassCard hoverEffect={false} className="border-white/[0.05] p-8 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[9px] tracking-widest text-primary-accent uppercase font-bold block mb-4">
                VISION
              </span>
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                To become Bangalore&apos;s most trusted destination for clinical movement therapy.
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[10px] font-mono text-muted-text uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><Check size={10} className="text-primary-accent" /> TRUST</span>
              <span className="flex items-center gap-1.5"><Check size={10} className="text-primary-accent" /> WELLNESS</span>
              <span className="flex items-center gap-1.5"><Check size={10} className="text-primary-accent" /> ACCURACY</span>
              <span className="flex items-center gap-1.5"><Check size={10} className="text-primary-accent" /> MEDICINE</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Global Certifications Block */}
      <section className="mb-16 border-t border-white/[0.05] pt-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <span className="font-mono text-xs text-primary-accent tracking-widest block mb-2 font-semibold">
              CREDENTIALS
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-foreground">
              Clinical Certifications & Excellence
            </h2>
          </div>
          <span className="font-mono text-[10px] tracking-wider text-muted-text uppercase border border-white/[0.08] px-3 py-1 rounded">
            Verified Practitioner
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cert 1 */}
          <GlassCard hoverEffect={true} className="border-white/[0.05]">
            <span className="font-mono text-[9px] tracking-widest text-primary-accent font-bold block mb-4">
              ORTHOPEDICS & SPORTS
            </span>
            <h3 className="font-display font-bold text-base text-foreground mb-2">
              Master of Physiotherapy
            </h3>
            <p className="text-xs text-muted-text leading-relaxed font-sans mb-4">
              Specialized expertise in orthopedic rehabilitation, spinal pathomechanics, and physical sports injury recovery.
            </p>
            <div className="border-t border-white/[0.05] pt-3 flex justify-between font-mono text-[9px] text-muted-text">
              <span>INSTITUTION:</span>
              <span className="text-foreground">RAMAIAH UNIVERSITY</span>
            </div>
          </GlassCard>

          {/* Cert 2 */}
          <GlassCard hoverEffect={true} className="border-white/[0.05]">
            <span className="font-mono text-[9px] tracking-widest text-primary-accent font-bold block mb-4">
              COMPREHENSIVE APPARATUS
            </span>
            <h3 className="font-display font-bold text-base text-foreground mb-2">
              Certified Pilates Master
            </h3>
            <p className="text-xs text-muted-text leading-relaxed font-sans mb-4">
              Certified in Merrithew / Stott Pilates methods covering Reformer, Cadillac, Stability Chair, and Barrels.
            </p>
            <div className="border-t border-white/[0.05] pt-3 flex justify-between font-mono text-[9px] text-muted-text">
              <span>INSTITUTION:</span>
              <span className="text-foreground">STOTT PILATES INT.</span>
            </div>
          </GlassCard>

          {/* Cert 3 */}
          <GlassCard hoverEffect={true} className="border-white/[0.05]">
            <span className="font-mono text-[9px] tracking-widest text-primary-accent font-bold block mb-4">
              MANUAL REHABILITATION
            </span>
            <h3 className="font-display font-bold text-base text-foreground mb-2">
              Manual Therapy Expert
            </h3>
            <p className="text-xs text-muted-text leading-relaxed font-sans mb-4">
              Licensed in Advanced Dry Needling, Kinesio Taping, and clinical physical manipulative joints mobilization techniques.
            </p>
            <div className="border-t border-white/[0.05] pt-3 flex justify-between font-mono text-[9px] text-muted-text">
              <span>INSTITUTION:</span>
              <span className="text-foreground">MULLIGAN CONCEPT</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20">
        <GlassCard hoverEffect={false} className="border-primary-accent/20 bg-gradient-to-r from-card-bg/80 to-primary-accent/5 p-10 sm:p-14 text-center">
          <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-foreground mb-4">
            Experience the Difference of Clinical Pilates
          </h3>
          <p className="text-muted-text text-sm leading-relaxed max-w-xl mx-auto mb-8 font-sans">
            Join Dr. Govinda Raju S. for a personalized physical audit and chart your course to effortless movement.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded bg-primary-accent hover:bg-tertiary-accent text-foreground text-xs font-mono font-bold tracking-widest uppercase transition-colors"
          >
            Book Your Assessment
          </Link>
        </GlassCard>
      </section>
    </div>
  );
}
