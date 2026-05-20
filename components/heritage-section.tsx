"use client";

import Image from "next/image";

const stats = [
  { value: "20+", label: "YEARS OF DEVOTION" },
  { value: "50+", label: "POOJA VARIANTS" },
  { value: "5.0", label: "GOOGLE RATING" },
];

export default function HeritageSection() {
  return (
    <section id="about" className="bg-[var(--cream)] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/god-photo.png.jpg"
                alt="Heritage deity statue"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto bg-white p-4 sm:p-6 shadow-lg max-w-xs">
              <p className="text-[var(--navy)] text-xs tracking-widest mb-1">BLESSED BY</p>
              <p className="text-[var(--gold)] font-serif text-xl">Maa Lakshmi</p>
              <p className="text-gray-600 text-sm mt-2">
                A women-owned legacy run with reverence.
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] mb-4">OUR HERITAGE</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] leading-tight mb-6">
              Where every ritual is{" "}
              <span className="italic text-[var(--gold)]">remembered</span>
              <br />
              with reverence.
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Tucked along Thulasiram Street in Madurai&apos;s Villapuram, Sri
                Dhanvantri Pooja Store is more than a shop — it is a quiet sanctuary
                curated over decades of devotion.
              </p>
              <p>
                From hand-cast brass diyas to fresh marigold garlands, from priest
                services for griha pravesh to seemantham, every item and every
                ritual is offered with the care of family.
              </p>
              <p>
                Owned and led by a woman entrepreneur, the store stands as a
                tribute to the divine feminine — where Lakshmi, Saraswati, and
                Durga are not idols, but daily companions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[var(--gold)] font-serif text-2xl sm:text-3xl">{stat.value}</p>
                  <p className="text-gray-500 text-[10px] sm:text-xs tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
