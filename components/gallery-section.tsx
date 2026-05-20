"use client";

import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1605707282676-7ada5a0f91b0?w=800",
    alt: "Marigold garlands",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1609766857326-22ed56b0624f?w=800",
    alt: "Brass puja items",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?w=800",
    alt: "Traditional lamp",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1626076299412-4b2a68f8fec9?w=800",
    alt: "Temple architecture",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600339786313-60e04b4738b1?w=800",
    alt: "Ornate arch",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1567591370504-81e48a6e7833?w=800",
    alt: "Oil lamp diya",
    className: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-[var(--cream)] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-[var(--gold)] text-xs tracking-[0.3em] mb-4">GALLERY</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--navy)] leading-tight">
              Glimpses of <span className="italic text-[var(--gold)]">devotion</span>.
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-right">
            Lamps, garlands & rituals — a quiet record of the everyday sacred.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--navy)]/20 group-hover:bg-[var(--navy)]/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
