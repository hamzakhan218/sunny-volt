import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PartnersSection } from "@/components/partners-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PartnersSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
