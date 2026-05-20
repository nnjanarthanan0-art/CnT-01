"use client";

import dynamic from "next/dynamic";
import { ChevronDown, Star } from "lucide-react";

const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false });

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-[var(--navy)] overflow-hidden">
      {/* 3D Scene */}
      <HeroScene />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-2xl">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] mb-4">
            MADURAI · EST. HERITAGE
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Sri <span className="italic text-[var(--gold)]">Dhanvantri</span>
            <br />
            Pooja Store
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            A women-owned heritage temple of authentic poojas, brass artifacts
            and ritual essentials — trusted across Madurai for the divine details that
            matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block bg-[var(--gold)] text-[var(--navy)] px-8 py-3 text-sm font-semibold tracking-wider hover:bg-[var(--gold-light)] transition-colors duration-300 text-center"
            >
              BOOK A PRIEST
            </a>
            <a
              href="#services"
              className="inline-block border border-[var(--gold)] text-[var(--gold)] px-8 py-3 text-sm font-semibold tracking-wider hover:bg-[var(--gold)]/10 transition-colors duration-300 text-center"
            >
              VIEW SERVICES
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
            ))}
          </div>
          <span className="text-gray-400 text-xs tracking-wider ml-2">5.0 · GOOGLE RATING</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-gray-400 text-xs tracking-wider">
          <span>SCROLL</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
