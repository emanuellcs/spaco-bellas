import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Check, 
  TrendingDown, 
  Calendar, 
  Crown,
  Gift,
  Star
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5511976820135";

// Benefícios do plano
const benefits = [
  {
    icon: TrendingDown,
    title: "Economia Garantida",
    description: "Até 30% de desconto em todos os serviços inclusos no seu plano mensal.",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: Calendar,
    title: "Prioridade no Agendamento",
    description: "Horários preferenciais e flexibilidade para marcar seus atendimentos.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Crown,
    title: "Serviços Premium",
    description: "Acesso exclusivo a tratamentos especiais e lançamentos de novos serviços.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Gift,
    title: "Recompensas Especiais",
    description: "Programa de fidelidade com brindes, descontos adicionais e surpresas mensais.",
    gradient: "from-rose-500 to-rose-600"
  }
];

// Planos disponíveis
const plans = [
  {
    id: "basico",
    name: "Básico",
    price: "199,90",
    originalPrice: "280,00",
    savings: "960",
    features: [
      "2 serviços por mês",
      "Design de sobrancelhas",
      "Manicure ou Pedicure",
      "10% desconto em outros serviços",
      "Atendimento preferencial"
    ],
    popular: false
  },
  {
    id: "premium",
    name: "Premium",
    price: "349,90",
    originalPrice: "500,00",
    savings: "1.800",
    features: [
      "4 serviços por mês",
      "Design + Henna",
      "Manicure e Pedicure em gel",
      "Massagem relaxante (30min)",
      "15% desconto em outros serviços",
      "Atendimento VIP"
    ],
    popular: true
  },
  {
    id: "vip",
    name: "VIP",
    price: "549,90",
    originalPrice: "800,00",
    savings: "3.000",
    features: [
      "6 serviços por mês",
      "Micropigmentação inclusa",
      "Alongamento de cílios",
      "Spa dos pés + Massagem (50min)",
      "Nail Design completo",
      "20% desconto em outros serviços",
      "Concierge exclusivo"
    ],
    popular: false
  }
];

export function MensalBellasSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  const handleWhatsAppClick = (planName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de assinar o plano Mensal Bellas ${planName}.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      id="mensal-bellas"
      ref={sectionRef}
      className={`relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-beige-light)] rounded-full border border-[var(--primary-purple)]/10">
            <Sparkles className="w-3.5 h-3.5 text-[var(--primary-purple)]" />
            <span className="text-xs font-medium text-[var(--primary-purple)] uppercase tracking-wider">
              Mensal Bellas
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[var(--primary-purple)]">
            Autocuidado Todo Mês
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Torne o autocuidado parte da sua rotina mensal e economize
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className={`border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-sm`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Plans */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-[var(--primary-purple)] shadow-xl md:scale-105"
                  : "border border-gray-200 shadow-lg hover:shadow-xl"
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="px-4 py-1.5 bg-[var(--primary-purple)] text-white text-xs font-bold rounded-bl-lg rounded-tr-lg flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Mais Popular
                  </div>
                </div>
              )}

              <CardContent className="p-6 space-y-6">
                {/* Plan Name */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="text-center py-4 border-y border-gray-100">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-sm text-gray-500">R$</span>
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price.split(',')[0]}
                    </span>
                    <span className="text-xl text-gray-900">
                      ,{plan.price.split(',')[1]}
                    </span>
                    <span className="text-sm text-gray-500">/mês</span>
                  </div>
                  <p className="text-xs text-gray-500 line-through">
                    De R$ {plan.originalPrice}
                  </p>
                </div>

                {/* Savings */}
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">
                    Você economiza por ano
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    R$ {plan.savings}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    *Baseado em 2 visitas mensais
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-[var(--primary-purple)] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handleWhatsAppClick(plan.name)}
                  className={`w-full font-medium shadow-sm transition-all duration-200 ${
                    plan.popular
                      ? "bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white"
                      : "bg-white border-2 border-[var(--primary-purple)] text-[var(--primary-purple)] hover:bg-[var(--primary-purple)] hover:text-white"
                  }`}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Assinar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto">
          <Card className="border border-gray-200 bg-gradient-to-br from-[var(--primary-beige-light)] to-white shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Benefícios Exclusivos do Mensal Bellas
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Além da economia, você terá acesso a serviços premium, eventos exclusivos e um programa de fidelidade com recompensas especiais.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Sem fidelidade</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Cancele quando quiser</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--primary-purple)] font-medium">
                  <Star className="w-4 h-4" />
                  <span>Primeiro mês com 50% de desconto</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            Comece sua jornada de autocuidado mensal hoje mesmo
          </p>
        </div>
      </div>
    </section>
  );
}
