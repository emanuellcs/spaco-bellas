import { Hero } from "@/components/hero"
import { MobileNav } from "@/components/mobile-nav"
import { Navigation } from "@/components/navigation"
import { SpaDaySection } from "@/components/spa-day-section"
import { MensalBellasSection } from "@/components/mensal-bellas-section"
import { EmpresasSection } from "@/components/empresas-section"
import { ServicesMenu } from "@/components/services-menu"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <MobileNav />
      <Hero />
      <Navigation />
      <SpaDaySection />
      <MensalBellasSection />
      <EmpresasSection />
      <ServicesMenu />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
