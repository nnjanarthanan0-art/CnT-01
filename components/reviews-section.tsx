"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Great. And I love it.",
    author: "Joy Boy",
    source: "GOOGLE REVIEW · A MONTH AGO",
  },
  {
    text: "The brass diyas are of exceptional quality. Very authentic.",
    author: "Lakshmi S",
    source: "GOOGLE REVIEW · 2 WEEKS AGO",
  },
  {
    text: "Best pooja items in Madurai. The priests are very knowledgeable.",
    author: "Kumar R",
    source: "GOOGLE REVIEW · 3 MONTHS AGO",
  },
];

const stats = [
  { value: "335", label: "PROFILE VIEWS" },
  { value: "1", label: "5-STAR REVIEW" },
  { value: "100%", label: "SATISFACTION RATE" },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[var(--navy)] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--gold)] text-xs tracking-[0.3em] mb-4">VOICES</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            A perfect <span className="italic text-[var(--gold)]">5.0</span> on Google.
          </h2>
          <p className="text-gray-400">
            Every review is a blessing returned. Here is what our visitors say.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--navy-light)] border border-[var(--border)] p-6 lg:p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-700" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <p className="text-white text-lg font-serif mb-6">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--gold)] flex items-center justify-center">
                  <span className="text-[var(--navy)] font-semibold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs tracking-wider">{testimonial.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 border border-[var(--border)]">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 lg:p-8 text-center border-r border-[var(--border)] last:border-r-0">
              <p className="text-[var(--gold)] font-serif text-2xl sm:text-3xl lg:text-4xl mb-2">
                {stat.value}
              </p>
              <p className="text-gray-500 text-[10px] sm:text-xs tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
