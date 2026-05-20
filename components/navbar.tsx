"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "CALENDAR", href: "#calendar" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--navy)]/95 backdrop-blur-sm border-b border-[var(--gold)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[var(--gold)] flex items-center justify-center">
              <span className="text-[var(--gold)] font-serif text-lg">श्री</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-serif text-sm leading-tight">Sri Dhanvantri</p>
              <p className="text-[var(--gold)] text-xs tracking-widest">POOJA STORE</p>
              <p className="text-gray-400 text-[10px] tracking-wider">MADURAI</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-[var(--gold)] text-xs tracking-widest transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:block bg-[var(--gold)] text-[var(--navy)] px-6 py-2.5 text-xs font-semibold tracking-wider hover:bg-[var(--gold-light)] transition-colors duration-300"
          >
            BOOK A PRIEST
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--navy-light)] border-t border-[var(--gold)]/20">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-[var(--gold)] text-sm tracking-widest transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block bg-[var(--gold)] text-[var(--navy)] px-6 py-3 text-center text-sm font-semibold tracking-wider hover:bg-[var(--gold-light)] transition-colors duration-300"
            >
              BOOK A PRIEST
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
