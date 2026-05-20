"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";

const serviceTypes = [
  "Griha Pravesh",
  "Seemantham",
  "Satyanarayana Pooja",
  "Vedic Consultation",
  "Navagraha Shanti",
  "Wedding Rituals",
  "Other",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="bg-[var(--cream)] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] mb-4">BOOK A PRIEST</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] leading-tight mb-8">
              Tell us the{" "}
              <span className="italic text-[var(--gold)]">occasion</span>.
              <br />
              We&apos;ll bring the divine.
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[var(--gold)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs tracking-wider mb-1">PHONE</p>
                  <a href="tel:09245255783" className="text-[var(--navy)] font-medium hover:text-[var(--gold)] transition-colors">
                    092452 55783
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[var(--gold)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs tracking-wider mb-1">VISIT</p>
                  <p className="text-[var(--navy)]">
                    Thulasiram Street, Villapuram,
                    <br />
                    Madurai — 625012, Tamil Nadu
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Plus code: V6WC+PR</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[var(--gold)] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs tracking-wider mb-1">HOURS</p>
                  <p className="text-[var(--navy)]">
                    Mon – Sat : 9:00 AM - 2:00 PM
                    <br />
                    <span className="text-[var(--gold)]">Reopens</span> : 5:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 lg:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-500 text-xs tracking-wider mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lakshmi Iyer"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors text-[var(--navy)]"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs tracking-wider mb-2">
                    PHONE *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 ..."
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors text-[var(--navy)]"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-500 text-xs tracking-wider mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="optional"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors text-[var(--navy)]"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs tracking-wider mb-2">
                    PREFERRED DATE
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors text-[var(--navy)]"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-500 text-xs tracking-wider mb-2">
                  SERVICE TYPE *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors text-[var(--navy)] bg-white"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-500 text-xs tracking-wider mb-2">
                  TELL US MORE
                </label>
                <textarea
                  rows={4}
                  placeholder="Family details, location, special requests..."
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[var(--gold)] focus:outline-none transition-colors resize-none text-[var(--navy)]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="bg-[var(--gold)] text-[var(--navy)] px-8 py-3 text-sm font-semibold tracking-wider hover:bg-[var(--gold-light)] transition-colors duration-300 flex items-center gap-2"
              >
                SUBMIT INQUIRY
                <Send className="w-4 h-4" />
              </button>

              <p className="text-gray-500 text-xs">
                By submitting you agree to be contacted by phone for scheduling.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
