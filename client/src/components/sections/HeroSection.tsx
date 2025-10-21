import { Button } from "@/components/ui/button";
import { Sparkles, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@assets/generated_images/Luxury_spa_treatment_room_eeed824b.png";

const WHATSAPP_NUMBER = "5511976820135";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de agendar minha experiência no Spaço Bellas.");

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white uppercase tracking-wider">
                Spaço Bellas
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white leading-tight">
              Seu refúgio de luxo
              <br />
              e bem-estar em São Paulo
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Descubra uma experiência única de autocuidado e transformação. Day Spa, massagens, tratamentos estéticos e muito mais.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center pt-4">
              <Button
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank")}
                className="bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white font-medium px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Agende sua Experiência
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">2.500+</div>
                <div className="text-sm text-white/80">Clientes Satisfeitas</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-white/80">Avaliação Média</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">10 anos</div>
                <div className="text-sm text-white/80">De Excelência</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={() => {
            document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group"
          aria-label="Rolar para baixo"
        >
          <span className="text-sm font-medium uppercase tracking-wider">Explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </section>
    </>
  );
}
