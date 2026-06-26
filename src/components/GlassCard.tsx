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
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel rounded-xl p-6 relative overflow-hidden group ${
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
