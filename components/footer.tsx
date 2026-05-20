"use client";

import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-[var(--gold)] flex items-center justify-center">
                <span className="text-[var(--gold)] font-serif text-lg">श्री</span>
              </div>
              <div>
                <p className="text-white font-serif text-sm leading-tight">Sri Dhanvantri Pooja Store</p>
                <p className="text-[var(--gold)] text-[10px] tracking-widest">MADURAI · WOMEN-OWNED HERITAGE</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Where every ritual is remembered with reverence —
              serving the families of Madurai with priest services and
              pooja essentials.
            </p>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm tracking-wider">VISIT</h4>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-[var(--gold)] mt-1 flex-shrink-0" />
              <p>
                Thulasiram Street,
                <br />
                Villapuram,
                <br />
                Madurai — 625012, Tamil Nadu
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-4">
              <Phone className="w-4 h-4 text-[var(--gold)]" />
              <a href="tel:09245255783" className="hover:text-[var(--gold)] transition-colors">
                092452 55783
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm tracking-wider">HOURS</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Mon – Sat : 9:00 AM – 2:00 PM</p>
              <p>Mon – Sat : 5:00 PM – 9:00 PM</p>
              <p>Sunday : By appointment</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4 text-sm tracking-wider">QUICK LINKS</h4>
            <div className="space-y-2">
              {["Home", "About", "Services", "Calendar", "Reviews", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 text-sm hover:text-[var(--gold)] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-gray-500 text-xs">
            © 2026 SRI DHANVANTRI POOJA STORE
          </p>
          <p className="text-gray-500 text-xs">
            CRAFTED WITH DEVOTION
          </p>
        </div>
      </div>
    </footer>
  );
}
