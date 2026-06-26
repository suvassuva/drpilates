"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  Bell, 
  Calendar, 
  Clock, 
  CalendarPlus, 
  ClipboardList, 
  TrendingUp, 
  Heart, 
  Droplet, 
  Award,
  ChevronRight,
  Sparkles,
  ArrowLeft
} from "lucide-react";
import GlassCard from "@/components/GlassCard";

function PortalDashboard() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get("tab");
  
  const activeTab = tabParam === "profile" ? "profile" : tabParam === "progress" ? "progress" : "home";
  const [bellActive, setBellActive] = useState(true);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-foreground font-sans relative pb-28">
      {/* Top Application-like Header */}
      <header className="sticky top-0 z-40 bg-[#0B0B0B]/85 backdrop-blur-md border-b border-white/[0.05] py-4 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <ArrowLeft size={16} className="text-muted-text group-hover:text-primary-accent transition-colors" />
          <Image
            src="/images/dr pilates.png"
            alt="Dr Pilates"
            width={100}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <button 
          onClick={() => setBellActive(false)}
          className="relative p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <Bell size={18} className="text-foreground" />
          {bellActive && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary-accent animate-pulse" />
          )}
        </button>
      </header>

      {/* Main Content Area */}
      <main className="max-w-md mx-auto px-6 pt-6 flex flex-col gap-6">
        {activeTab === "home" && (
          <>
            {/* Greeting Header */}
            <div>
              <span className="font-mono text-[9px] font-bold tracking-widest text-primary-accent uppercase">
                Medical Wellness Portal
              </span>
              <h2 className="font-display font-extrabold text-2xl tracking-tight text-foreground mt-1">
                Good Morning, Sarah
              </h2>
            </div>

            {/* Next Session Card */}
            <GlassCard hoverEffect={false} className="border-primary-accent/15 bg-primary-accent/[0.02] p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-accent/5 rounded-full blur-2xl -z-10" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] tracking-widest text-muted-text font-bold uppercase">
                  Next Session
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-primary-accent/15 text-primary-accent border border-primary-accent/30 font-mono text-[8px] font-bold tracking-wider uppercase">
                  Confirmed
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-foreground leading-tight mb-3">
                Reformer Pilates with Dr. Raju
              </h3>

              <div className="flex flex-wrap gap-4 text-xs text-muted-text font-mono mb-4 border-b border-white/[0.05] pb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-primary-accent" />
                  <span>Today, Oct 24</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-primary-accent" />
                  <span>10:00 AM</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/[0.1]">
                  <Image
                    src="/images/dr_ananya.png"
                    alt="Dr. Ananya"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="block font-mono text-[8px] tracking-widest text-primary-accent uppercase font-bold">
                    Attending Physician
                  </span>
                  <span className="text-xs text-foreground font-semibold">
                    Dr. Ananya Raju, DPT
                  </span>
                </div>
              </div>
            </GlassCard>

            {/* Quick Actions (2 Columns) */}
            <div className="grid grid-cols-2 gap-4">
              <Link 
                href="/contact"
                className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl bg-primary-accent hover:bg-tertiary-accent text-foreground transition-all shadow-lg shadow-primary-accent/10 cursor-pointer text-center"
              >
                <CalendarPlus size={20} />
                <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
                  Book Session
                </span>
              </Link>
              <button 
                onClick={() => router.push("/portal?tab=progress")}
                className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl border border-white/[0.08] bg-card-bg/25 hover:bg-white/[0.02] text-muted-text hover:text-foreground transition-all cursor-pointer text-center"
              >
                <ClipboardList size={20} className="text-primary-accent" />
                <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
                  View Plan
                </span>
              </button>
            </div>

            {/* Short Progress Preview */}
            <GlassCard 
              hoverEffect={true} 
              onClick={() => router.push("/portal?tab=progress")}
              className="border-white/[0.05] p-4 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <TrendingUp size={14} />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-semibold text-foreground">Weekly Progress</h4>
                  <p className="text-[10px] text-muted-text">3 of 5 sessions completed</p>
                </div>
              </div>
              <ChevronRight size={14} className="text-muted-text" />
            </GlassCard>
          </>
        )}

        {activeTab === "progress" && (
          <>
            {/* Progress Section Header */}
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-[9px] font-bold tracking-widest text-primary-accent uppercase">
                  Health Metrics
                </span>
                <h2 className="font-display font-extrabold text-2xl tracking-tight text-foreground mt-1">
                  Weekly Progress
                </h2>
              </div>
              <span className="font-mono text-[9px] tracking-widest text-primary-accent font-bold uppercase hover:underline cursor-pointer flex items-center gap-1">
                Full Report <ChevronRight size={10} />
              </span>
            </div>

            {/* Circular Progress Widget */}
            <GlassCard hoverEffect={false} className="border-white/[0.05] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[8px] tracking-widest text-muted-text uppercase block font-bold mb-1">
                    Sessions Completed
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-extrabold text-3xl text-foreground">03</span>
                    <span className="text-muted-text text-sm">/ 05</span>
                  </div>
                </div>
                
                {/* Circular indicator */}
                <div className="relative w-14 h-14">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-white/[0.05]"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-primary-accent"
                      strokeWidth="3.5"
                      strokeDasharray="60, 100"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold text-foreground">
                    60%
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Active Minutes Card */}
            <GlassCard hoverEffect={false} className="border-white/[0.05] p-5 flex items-center justify-between">
              <div>
                <span className="font-mono text-[8px] tracking-widest text-muted-text uppercase block font-bold mb-1">
                  Active Minutes
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-3xl text-foreground">185</span>
                  <span className="text-muted-text text-[10px] font-mono tracking-widest uppercase font-bold">Mins</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-accent/5 border border-primary-accent/25 flex items-center justify-center text-primary-accent">
                <TrendingUp size={16} />
              </div>
            </GlassCard>

            {/* Core Stability Index */}
            <GlassCard hoverEffect={false} className="border-white/[0.05] p-5 flex flex-col gap-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[8px] tracking-widest text-muted-text uppercase font-bold">
                    Core Stability Index
                  </span>
                  <span className="font-mono text-[10px] font-bold text-primary-accent">82%</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="h-full bg-primary-accent rounded-full" style={{ width: "82%" }} />
                </div>
              </div>
              <p className="text-[11px] text-muted-text italic font-sans leading-relaxed border-t border-white/[0.03] pt-3">
                &ldquo;Your clinical results show a 6% improvement in spinal alignment since last month.&rdquo;
              </p>
            </GlassCard>

            {/* Micro Metrics Row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="border border-white/[0.05] rounded-lg bg-card-bg/10 p-3 text-center">
                <div className="flex justify-center text-rose-500 mb-1.5">
                  <Heart size={14} className="animate-pulse" />
                </div>
                <span className="block font-mono text-[8px] tracking-wider text-muted-text uppercase font-semibold">
                  Heart Rate
                </span>
                <span className="text-xs font-semibold text-foreground mt-0.5 block">
                  62 <span className="text-[8px] text-muted-text font-mono">BPM</span>
                </span>
              </div>
              <div className="border border-white/[0.05] rounded-lg bg-card-bg/10 p-3 text-center">
                <div className="flex justify-center text-amber-500 mb-1.5">
                  <Sparkles size={14} />
                </div>
                <span className="block font-mono text-[8px] tracking-wider text-muted-text uppercase font-semibold">
                  Recovery
                </span>
                <span className="text-xs font-semibold text-foreground mt-0.5 block">
                  Good
                </span>
              </div>
              <div className="border border-white/[0.05] rounded-lg bg-card-bg/10 p-3 text-center">
                <div className="flex justify-center text-cyan-400 mb-1.5">
                  <Droplet size={14} />
                </div>
                <span className="block font-mono text-[8px] tracking-wider text-muted-text uppercase font-semibold">
                  Hydration
                </span>
                <span className="text-xs font-semibold text-foreground mt-0.5 block">
                  Optimum
                </span>
              </div>
            </div>
          </>
        )}

        {activeTab === "profile" && (
          <>
            {/* Profile Section Header */}
            <div>
              <span className="font-mono text-[9px] font-bold tracking-widest text-primary-accent uppercase">
                Client Profile
              </span>
              <h2 className="font-display font-extrabold text-2xl tracking-tight text-foreground mt-1">
                Your Health File
              </h2>
            </div>

            {/* Profile Detail Card */}
            <GlassCard hoverEffect={false} className="border-white/[0.05] p-5">
              <div className="flex items-center gap-4 border-b border-white/[0.05] pb-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary-accent/40 bg-white/[0.03]">
                  <Image
                    src="/images/dr_ananya.png"
                    alt="Sarah"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Sarah Miller</h3>
                  <span className="font-mono text-[9px] tracking-wider text-muted-text font-semibold uppercase">
                    ID: DP-9642
                  </span>
                </div>
              </div>

              {/* Bio Details */}
              <div className="flex flex-col gap-3 font-mono text-xs text-muted-text">
                <div className="flex justify-between border-b border-white/[0.02] pb-1.5">
                  <span>Age:</span>
                  <span className="text-foreground">29 Years</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.02] pb-1.5">
                  <span>Blood Type:</span>
                  <span className="text-foreground">O+ Positive</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.02] pb-1.5">
                  <span>Clinical Goal:</span>
                  <span className="text-primary-accent font-semibold text-right">Spinal Alignment</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.02] pb-1.5">
                  <span>Assigned Physio:</span>
                  <span className="text-foreground">Dr. Ananya Raju</span>
                </div>
                <div className="flex justify-between">
                  <span>Joined Date:</span>
                  <span className="text-foreground">Jan 12, 2026</span>
                </div>
              </div>
            </GlassCard>

            {/* Medical Disclaimer */}
            <div className="rounded-lg bg-white/[0.02] border border-white/[0.05] p-4 text-center">
              <div className="flex justify-center text-primary-accent mb-2">
                <Award size={18} />
              </div>
              <h5 className="font-mono text-[9px] font-bold tracking-widest text-foreground uppercase mb-1">
                Clinical movement grade
              </h5>
              <p className="text-[10px] text-muted-text font-sans leading-relaxed">
                Your program values are set by your supervising physical therapist based on clinical assessments.
              </p>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default function PortalPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0B0B0B] text-foreground flex items-center justify-center font-mono text-[10px] tracking-widest uppercase">
        Loading Wellness Portal...
      </div>
    }>
      <PortalDashboard />
    </Suspense>
  );
}
