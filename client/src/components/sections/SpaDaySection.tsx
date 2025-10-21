import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Star, Gift } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5511976820135";

// Dados atualizados do catálogo
const packages = [
  {
    id: "bronze",
    tier: "Bronze",
    price: "195,00",
    description: "Um cuidado essencial para você relaxar e sair renovada.",
    features: [
      "Spa dos Pés (30 min)",
      "Hidromassagem (30 min)",
      "Massagem Relaxante (50 min)",
      "Chá e frutas"
    ],
    featured: false,
    color: "from-amber-600 to-amber-800",
    icon: Star,
    badge: "Essencial"
  },
  {
    id: "prata",
    tier: "Prata",
    price: "360,00",
    description: "Mais completo, inclui relaxamento profundo e cuidados extras.",
    features: [
      "Tudo do Bronze",
      "Drenagem Linfática (50 min)",
      "Esfoliação Corporal",
      "Hidratação Facial",
      "Aromaterapia personalizada"
    ],
    featured: false,
    color: "from-gray-400 to-gray-600",
    icon: Star,
    badge: "Completo"
  },
  {
    id: "ouro",
    tier: "Ouro",
    price: "450,00",
    description: "Experiência premium para se sentir única.",
    features: [
      "Tudo do Prata",
      "Massagem com Pedras Quentes (70 min)",
      "Tratamento Facial Completo",
      "Reflexologia Podal",
      "Lanche gourmet"
    ],
    featured: true,
    color: "from-yellow-400 to-amber-500",
    icon: Crown,
    badge: "Mais Popular"
  },
  {
    id: "diamante",
    tier: "Diamante",
    price: "650,00",
    description: "O ápice do autocuidado, um dia de luxo e bem-estar inesquecível.",
    features: [
      "Tudo do Ouro",
      "Massagem Ayurvédica (90 min)",
      "Spa Facial Luminosidade",
      "Ritual de Bambuterapia",
      "Day Use Completo",
      "Jantar especial incluso"
    ],
    featured: true,
    color: "from-purple-400 to-purple-600",
    icon: Crown,
    badge: "Premium"
  }
];

export function SpaDaySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = (packageName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de reservar o Day Spa ${packageName}.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      id="spa-day"
      ref={sectionRef}
      className={`relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--primary-beige-light)] to-white overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[var(--primary-purple-ultra-light)] rounded-full blur-3xl opacity-30 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary-purple-ultra-light)] rounded-full blur-3xl opacity-20 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-[var(--primary-purple)]/10">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-medium text-[var(--primary-purple)] uppercase tracking-wider">
              Experiências Day Spa
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[var(--primary-purple)] leading-tight">
            Seu Dia de Renovação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o pacote perfeito e mergulhe em uma jornada de bem-estar completa
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <Card
                key={pkg.id}
                onMouseEnter={() => setHoveredPackage(pkg.id)}
                onMouseLeave={() => setHoveredPackage(null)}
                className={`group relative overflow-hidden transition-all duration-500 ${
                  pkg.featured
                    ? "border-2 border-[var(--primary-purple)] shadow-2xl md:scale-105 lg:scale-110"
                    : "border border-[var(--primary-purple)]/20 shadow-lg hover:shadow-2xl hover:scale-105"
                } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className={`px-4 py-1.5 bg-gradient-to-r ${pkg.color} text-white text-xs font-bold rounded-bl-lg rounded-tr-lg shadow-lg flex items-center gap-1`}>
                      <Gift className="w-3 h-3" />
                      {pkg.badge}
                    </div>
                  </div>
                )}

                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                <CardContent className="relative p-6 space-y-6">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Tier name */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[var(--primary-purple)] mb-2">
                      {pkg.tier}
                    </h3>
                    <p className="text-sm text-gray-600 min-h-[60px]">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center py-4 border-y border-[var(--primary-purple)]/10">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span className="text-sm text-gray-500">A partir de</span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-[var(--primary-purple)] font-medium">R$</span>
                      <span className="text-4xl font-bold text-[var(--primary-purple)]">
                        {pkg.price.split(',')[0]}
                      </span>
                      <span className="text-xl text-[var(--primary-purple)]">
                        ,{pkg.price.split(',')[1]}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 min-h-[200px]">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <Check className="w-5 h-5 text-[var(--primary-purple)] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleWhatsAppClick(pkg.tier)}
                    className={`w-full font-medium shadow-lg transition-all duration-300 ${
                      pkg.featured
                        ? `bg-gradient-to-r ${pkg.color} hover:shadow-2xl hover:scale-105 text-white`
                        : "bg-white border-2 border-[var(--primary-purple)] text-[var(--primary-purple)] hover:bg-[var(--primary-purple)] hover:text-white"
                    }`}
                  >
                    {pkg.featured ? (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Reservar Agora
                      </>
                    ) : (
                      "Saiba Mais"
                    )}
                  </Button>
                </CardContent>

                {/* Animated border on hover */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
              </Card>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
            <Sparkles className="w-4 h-4 inline mr-1 text-[var(--primary-purple)]" />
            Todos os pacotes incluem acesso às instalações do spa • Agendamento flexível • Garantia de satisfação
          </p>
        </div>
      </div>
    </section>
  );
}
