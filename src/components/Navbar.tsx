"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PORTAL", href: "/portal" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide global Navbar on the Wellness Portal page to prevent header overlap
  if (pathname === "/portal") {
    return null;
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md py-3 border-b border-border-color shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group z-50">
            <Image
              src="/images/dr pilates.png"
              alt="Dr Pilates"
              width={132}
              height={60}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href.split("#")[0];
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-mono text-xs tracking-widest text-muted-text hover:text-foreground transition-colors relative py-2"
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Book Assessment CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-6 py-2 rounded-full bg-primary-accent text-foreground text-xs font-semibold tracking-wider hover:bg-tertiary-accent transition-colors shadow-md shadow-primary-accent/15 duration-300"
            >
              Book Assessment
            </Link>
          </div>

        </div>
      </header>
    </>
  );
}
