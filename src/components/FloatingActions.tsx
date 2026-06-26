"use client";

import React, { useState, useEffect } from "react";
import { MessageSquareCode, Phone, LayoutGrid, Calendar, TrendingUp, User } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function FloatingActions() {
  const pathname = usePathname();
  const whatsappUrl = "https://wa.me/918892236442?text=Hello%20Dr%20Pilates,%20I%20would%20like%20to%20book%20a%20clinical%20assessment.";
  const phoneUrl = "tel:+918892236442";

  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    const checkTab = () => {
      if (typeof window !== "undefined") {
        const searchParams = new URLSearchParams(window.location.search);
        const tab = searchParams.get("tab");
        if (pathname === "/portal") {
          setActiveTab(tab === "profile" ? "profile" : "progress");
        } else if (pathname === "/contact") {
          setActiveTab("book");
        } else if (pathname === "/") {
          setActiveTab("home");
        } else {
          setActiveTab("");
        }
      }
    };

    checkTab();
    // Listen to history and hash updates
    window.addEventListener("popstate", checkTab);
    return () => window.removeEventListener("popstate", checkTab);
  }, [pathname]);

  return (
    <>
      {/* Desktop / Tablet floating actions */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        {/* WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-[#128C7E] flex items-center justify-center text-white shadow-lg shadow-[#128C7E]/25 hover:bg-[#075E54] transition-colors duration-300 relative group cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-[#128C7E]/20 duration-1000 -z-10" />
          <MessageSquareCode size={20} />
          <span className="absolute right-14 bg-background border border-border-color text-foreground text-[10px] font-mono tracking-widest px-2.5 py-1 rounded shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            WHATSAPP CHAT
          </span>
        </motion.a>

        {/* Call Studio Button */}
        <motion.a
          href={phoneUrl}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-primary-accent flex items-center justify-center text-white shadow-lg shadow-primary-accent/25 hover:bg-tertiary-accent transition-colors duration-300 relative group cursor-pointer"
          aria-label="Call Dr Pilates"
        >
          <Phone size={18} />
          <span className="absolute right-14 bg-background border border-border-color text-foreground text-[10px] font-mono tracking-widest px-2.5 py-1 rounded shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            CALL STUDIO
          </span>
        </motion.a>
      </div>

      {/* Mobile-only Sticky App-like Capsule Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-45 bg-[#0B0B0B]/95 backdrop-blur-md border border-white/[0.08] rounded-2xl py-2.5 px-6 flex justify-around items-center shadow-2xl">
        {/* Home Tab */}
        <Link
          href="/"
          className={`flex flex-col items-center gap-1 p-1.5 cursor-pointer relative transition-colors duration-300 ${
            activeTab === "home" ? "text-primary-accent" : "text-muted-text hover:text-foreground"
          }`}
        >
          {activeTab === "home" && (
            <motion.span
              layoutId="mobileActiveIndicator"
              className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-accent rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <LayoutGrid size={18} />
          <span className="font-mono text-[8px] font-bold tracking-widest uppercase">Home</span>
        </Link>

        {/* Book Tab */}
        <Link
          href="/contact"
          className={`flex flex-col items-center gap-1 p-1.5 cursor-pointer relative transition-colors duration-300 ${
            activeTab === "book" ? "text-primary-accent" : "text-muted-text hover:text-foreground"
          }`}
        >
          {activeTab === "book" && (
            <motion.span
              layoutId="mobileActiveIndicator"
              className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-accent rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <Calendar size={18} />
          <span className="font-mono text-[8px] font-bold tracking-widest uppercase">Book</span>
        </Link>

        {/* Progress Tab */}
        <Link
          href="/portal"
          className={`flex flex-col items-center gap-1 p-1.5 cursor-pointer relative transition-colors duration-300 ${
            activeTab === "progress" ? "text-primary-accent" : "text-muted-text hover:text-foreground"
          }`}
        >
          {activeTab === "progress" && (
            <motion.span
              layoutId="mobileActiveIndicator"
              className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-accent rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <TrendingUp size={18} />
          <span className="font-mono text-[8px] font-bold tracking-widest uppercase">Progress</span>
        </Link>

        {/* Profile Tab */}
        <Link
          href="/portal?tab=profile"
          className={`flex flex-col items-center gap-1 p-1.5 cursor-pointer relative transition-colors duration-300 ${
            activeTab === "profile" ? "text-primary-accent" : "text-muted-text hover:text-foreground"
          }`}
        >
          {activeTab === "profile" && (
            <motion.span
              layoutId="mobileActiveIndicator"
              className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-accent rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <User size={18} />
          <span className="font-mono text-[8px] font-bold tracking-widest uppercase">Profile</span>
        </Link>
      </div>
    </>
  );
}
