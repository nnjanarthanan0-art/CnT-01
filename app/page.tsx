import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import HeritageSection from "@/components/heritage-section";
import ServicesSection from "@/components/services-section";
import CalendarSection from "@/components/calendar-section";
import GallerySection from "@/components/gallery-section";
import ReviewsSection from "@/components/reviews-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--navy)]">
      <Navbar />
      <HeroSection />
      <HeritageSection />
      <ServicesSection />
      <CalendarSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
