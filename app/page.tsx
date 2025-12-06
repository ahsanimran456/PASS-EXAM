import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ContactStatsSection from "@/components/contact-stats-section"
import FeatureCardsSection from "@/components/feature-cards-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import Chatbot from "@/components/chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ContactStatsSection />
      <FeatureCardsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </main>
  )
}
