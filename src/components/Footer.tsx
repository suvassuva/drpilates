"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const pathname = usePathname();

  // Hide global Footer on the Wellness Portal page to keep portal full-screen
  if (pathname === "/portal") {
    return null;
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0B0B0B] border-t border-border-color pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Block */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/dr pilates.png"
              alt="Dr Pilates"
              width={132}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-muted-text text-sm leading-relaxed max-w-xs font-sans">
            Clinical precision meets aesthetic excellence. Our method is designed for those who demand the best for their body.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-text hover:text-primary-accent transition-colors"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-text hover:text-primary-accent transition-colors"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-text hover:text-primary-accent transition-colors"
              aria-label="Youtube"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                <polygon points="10 15 15 12 10 9" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Programs */}
        <div>
          <h4 className="font-mono text-xs font-bold tracking-widest text-foreground uppercase mb-6">
            Programs
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/services#reformer" className="text-muted-text hover:text-foreground text-sm font-sans transition-colors">
                Clinical Pilates
              </Link>
            </li>
            <li>
              <Link href="/services#physiotherapy" className="text-muted-text hover:text-foreground text-sm font-sans transition-colors">
                Rehabilitation
              </Link>
            </li>
            <li>
              <Link href="/services#ems" className="text-muted-text hover:text-foreground text-sm font-sans transition-colors">
                Performance
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-text hover:text-foreground text-sm font-sans transition-colors">
                Client Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Studio */}
        <div>
          <h4 className="font-mono text-xs font-bold tracking-widest text-foreground uppercase mb-6">
            Company
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/about" className="text-muted-text hover:text-foreground text-sm font-sans transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-text hover:text-foreground text-sm font-sans transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about#scientific-basis" className="text-muted-text hover:text-foreground text-sm font-sans transition-colors">
                Scientific Basis
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-text hover:text-foreground text-sm font-sans transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="font-mono text-xs font-bold tracking-widest text-foreground uppercase mb-6">
            Newsletter
          </h4>
          <p className="text-muted-text text-xs leading-relaxed mb-4 font-sans">
            Subscribe to receive insights on human performance, biomechanics, and clinical physical recovery.
          </p>
          {subscribed ? (
            <div className="text-tertiary-accent text-xs font-medium font-sans">
              Thank you for subscribing to our clinical newsletter.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1A1A1A] border border-white/[0.08] text-foreground text-xs rounded-full px-4 py-2.5 focus:outline-none focus:border-primary-accent"
              />
              <button
                type="submit"
                className="p-2.5 rounded-full bg-primary-accent hover:bg-tertiary-accent text-foreground transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={14} />
              </button>
            </form>
          )}
          
          <div className="mt-6 flex flex-col gap-2">
            <a
              href="tel:+918892236442"
              className="flex items-center gap-2 text-muted-text hover:text-foreground text-xs font-mono transition-colors"
            >
              <Phone size={12} className="text-primary-accent" />
              +91 88922 36442
            </a>
            <span className="flex items-start gap-2 text-muted-text text-xs font-mono leading-tight">
              <MapPin size={12} className="text-primary-accent mt-0.5 shrink-0" />
              Kalyan Nagar & Doddagubbi, Bangalore
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-muted-text text-[11px] font-mono tracking-widest text-center sm:text-left">
          © {new Date().getFullYear()} DR PILATES. CLINICAL PRECISION. AESTHETIC EXCELLENCE.
        </div>
        <div className="flex gap-6 text-[11px] font-mono tracking-widest">
          <Link href="/contact" className="text-muted-text hover:text-foreground transition-colors">
            TERMS
          </Link>
          <Link href="/contact" className="text-muted-text hover:text-foreground transition-colors">
            PRIVACY
          </Link>
        </div>
      </div>
    </footer>
  );
}
