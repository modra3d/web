import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnologySection } from "@/components/technology-section"
import { ContactSection } from "@/components/contact-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { AnimatedDots } from "@/components/animated-dots"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedDots />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechnologySection />
      <ContactSection />
      <FinalCtaSection />
    </main>
  )
}
