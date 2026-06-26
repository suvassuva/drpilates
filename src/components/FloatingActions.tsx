"use client";

import React, { useState, useEffect } from "react";
import { MessageSquareCode, Phone, LayoutGrid, Info, Activity } from "lucide-react";
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
        if (pathname === "/") {
          setActiveTab("home");
        } else if (pathname === "/about") {
          setActiveTab("about");
        } else if (pathname === "/services") {
          setActiveTab("services");
        } else if (pathname === "/contact") {
          setActiveTab("contacts");
        } else {
          setActiveTab("");
        }
      }
    };

    checkTab();
    // Listen to history updates
    window.addEventListener("popstate", checkTab);
    return () => {
      window.removeEventListener("popstate", checkTab);
    };
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
      {pathname !== "/portal" && (
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

          {/* About Tab */}
          <Link
            href="/about"
            className={`flex flex-col items-center gap-1 p-1.5 cursor-pointer relative transition-colors duration-300 ${
              activeTab === "about" ? "text-primary-accent" : "text-muted-text hover:text-foreground"
            }`}
          >
            {activeTab === "about" && (
              <motion.span
                layoutId="mobileActiveIndicator"
                className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-accent rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <Info size={18} />
            <span className="font-mono text-[8px] font-bold tracking-widest uppercase">About</span>
          </Link>

          {/* Services Tab */}
          <Link
            href="/services"
            className={`flex flex-col items-center gap-1 p-1.5 cursor-pointer relative transition-colors duration-300 ${
              activeTab === "services" ? "text-primary-accent" : "text-muted-text hover:text-foreground"
            }`}
          >
            {activeTab === "services" && (
              <motion.span
                layoutId="mobileActiveIndicator"
                className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-accent rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <Activity size={18} />
            <span className="font-mono text-[8px] font-bold tracking-widest uppercase">Services</span>
          </Link>

          {/* Contacts Tab */}
          <Link
            href="/contact"
            className={`flex flex-col items-center gap-1 p-1.5 cursor-pointer relative transition-colors duration-300 ${
              activeTab === "contacts" ? "text-primary-accent" : "text-muted-text hover:text-foreground"
            }`}
          >
            {activeTab === "contacts" && (
              <motion.span
                layoutId="mobileActiveIndicator"
                className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-accent rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <Phone size={18} />
            <span className="font-mono text-[8px] font-bold tracking-widest uppercase">Contacts</span>
          </Link>
        </div>
      )}
    </>
  );
}
