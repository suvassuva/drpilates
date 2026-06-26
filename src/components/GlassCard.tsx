"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  onClick,
}: GlassCardProps) {
  const hasPadding = className.split(" ").some(c => 
    c.startsWith("p-") || 
    c.startsWith("px-") || 
    c.startsWith("py-") || 
    c.startsWith("pt-") || 
    c.startsWith("pb-") || 
    c.startsWith("pl-") || 
    c.startsWith("pr-")
  );
  const paddingClass = hasPadding ? "" : "p-6";

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel rounded-xl ${paddingClass} relative overflow-hidden group ${
        hoverEffect ? "glass-panel-hover" : ""
      } ${className}`}
    >
      {/* Decorative inner glow hover element */}
      {hoverEffect && (
        <div className="absolute inset-0 -translate-y-full group-hover:translate-y-0 bg-gradient-to-b from-primary-accent/5 to-transparent transition-transform duration-500 pointer-events-none" />
      )}
      
      {/* Inner card border light overlay */}
      <div className="absolute inset-0 border border-white/[0.03] rounded-xl pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
