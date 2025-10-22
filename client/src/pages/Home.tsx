import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroductionSection } from "@/components/sections/IntroductionSection";
import { SpaDaySection } from "@/components/sections/SpaDaySection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero - Viva o seu dia de estrela */}
        <HeroSection />
        
        {/* 2. Apresentação Emocional - Uma experiência criada para você */}
        <IntroductionSection />
        
        {/* 3. Pacotes - Dia de Estrela, Rainha e Diva */}
        <SpaDaySection />
        
        {/* 4. Differentials - Por que o Spa das Celebridades é único */}
        <DifferentialsSection />
        
        {/* 5. Depoimentos - Histórias de Transformação */}
        <TestimonialsSection />
        
        {/* 6. CTA Final - Escassez e Grupo VIP */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
