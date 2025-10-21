import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Heart, Building2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const offerings = [
  {
    icon: Calendar,
    title: "Day Spa",
    description: "Pacotes exclusivos de bem-estar para você relaxar e se renovar completamente em um dia de puro luxo.",
    target: "spa-day",
    highlight: "A partir de R$ 195",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Heart,
    title: "Mensal Bellas",
    description: "Plano de assinatura mensal para cuidar de você todos os meses com economia e exclusividade.",
    target: "mensal-bellas",
    highlight: "Economize até 30%",
    color: "from-rose-500 to-rose-600"
  },
  {
    icon: Building2,
    title: "Empresas",
    description: "Programas corporativos de bem-estar para sua equipe e colaboradores com pacotes personalizados.",
    target: "empresas",
    highlight: "Soluções Personalizadas",
    color: "from-amber-500 to-amber-600"
  }
];

export function IntroductionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="introduction"
      ref={sectionRef}
      className={`relative py-24 px-4 sm:px-6 lg:px-8 bg-[var(--primary-beige-light)] overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[var(--primary-purple)]/10">
            <Sparkles className="w-3.5 h-3.5 text-[var(--primary-purple)]" />
            <span className="text-xs font-medium text-[var(--primary-purple)] uppercase tracking-wider">
              Escolha Sua Jornada
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[var(--primary-purple)]">
            Experiências Transformadoras
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Descubra o caminho perfeito para o seu momento de autocuidado e bem-estar
          </p>
        </div>

        {/* Offerings Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {offerings.map((offering, index) => {
            const IconComponent = offering.icon;
            return (
              <Card
                key={index}
                className={`group cursor-pointer border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => smoothScrollTo(offering.target)}
              >
                <CardContent className="p-6 space-y-5 h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex items-start justify-between gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${offering.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Arrow icon */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[var(--primary-purple)] flex items-center justify-center transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[var(--primary-purple)] transition-colors">
                        {offering.title}
                      </h3>
                      <p className="text-xs font-medium text-[var(--primary-purple)]">
                        {offering.highlight}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {offering.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:text-[var(--primary-purple)] transition-colors">
                      <span>Explorar</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="text-center max-w-3xl mx-auto">
          <blockquote className="relative">
            {/* Decorative quotes */}
            <div className="absolute -top-4 -left-4 text-6xl text-[var(--primary-purple)]/10 font-serif leading-none">
              "
            </div>
            <div className="absolute -bottom-8 -right-4 text-6xl text-[var(--primary-purple)]/10 font-serif leading-none">
              "
            </div>
            
            <p className="relative text-base sm:text-lg text-gray-700 italic leading-relaxed">
              Cada experiência é cuidadosamente projetada para proporcionar momentos únicos de relaxamento e renovação
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
