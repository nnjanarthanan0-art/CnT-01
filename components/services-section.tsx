"use client";

import { Flame, Baby, Sparkles, BookOpen, Sun, Heart } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Griha Pravesh",
    description: "Auspicious housewarming poojas with vastu shanti, navagraha homam and complete samagri.",
    number: "01",
  },
  {
    icon: Baby,
    title: "Seemantham",
    description: "Sacred ceremonies for expectant mothers conducted in the family tradition.",
    number: "02",
  },
  {
    icon: Sparkles,
    title: "Satyanarayana Pooja",
    description: "Monthly Pournami offerings — full priest service & prasadam included.",
    number: "03",
  },
  {
    icon: BookOpen,
    title: "Vedic Consultation",
    description: "Muhurat selection, naming ceremonies and panchang readings by senior priests.",
    number: "04",
  },
  {
    icon: Sun,
    title: "Navagraha Shanti",
    description: "Personalised graha doshas with complete homam and parihara.",
    number: "05",
  },
  {
    icon: Heart,
    title: "Wedding Rituals",
    description: "Engagements, nichayathartham, kalyanam & all ancillary poojas — fully arranged.",
    number: "06",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[var(--navy)] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] mb-4">PRIEST SERVICES</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Rituals performed in the{" "}
            <span className="italic text-[var(--gold)]">old way</span>,
            <br />
            attended with new care.
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Each ceremony is preceded by a personal consultation. We bring the priests, the
            samagri and the silence — you bring the family.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-[var(--navy-light)] border border-[var(--border)] p-6 lg:p-8 hover:border-[var(--gold)]/50 transition-all duration-300 ${
                index < 2 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <service.icon className="w-6 h-6 text-[var(--gold)]" strokeWidth={1.5} />
                <span className="text-gray-600 text-sm">{service.number}</span>
              </div>
              <h3 className="font-serif text-xl text-white mb-3 group-hover:text-[var(--gold)] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
