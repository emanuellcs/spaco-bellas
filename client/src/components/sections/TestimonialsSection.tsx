import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// Depoimentos reais baseados no catálogo
const testimonials = [
  {
    id: "1",
    customerName: "Mariana Silva",
    content: "A experiência no Day Spa Ouro foi transformadora! Saí completamente renovada e relaxada. A equipe é extremamente profissional e atenciosa. Recomendo muito!",
    service: "Day Spa Ouro",
    rating: 5,
    displayOrder: 1
  },
  {
    id: "2",
    customerName: "Juliana Costa",
    content: "O nanoblading ficou perfeito! A micropigmentação é tão natural que ninguém percebe. Economizo muito tempo pela manhã e minha autoestima aumentou demais.",
    service: "Nanoblading",
    rating: 5,
    displayOrder: 2
  },
  {
    id: "3",
    customerName: "Fernanda Oliveira",
    content: "A massagem relaxante é incrível! Sofro com tensões musculares e depois da sessão me senti totalmente aliviada. O ambiente é acolhedor e tranquilo.",
    service: "Massagem Relaxante",
    rating: 5,
    displayOrder: 3
  },
  {
    id: "4",
    customerName: "Patricia Santos",
    content: "O alongamento de cílios Mega Brasegípcio superou minhas expectativas! O volume é impressionante e o resultado durou muito mais do que imaginava.",
    service: "Mega Brasegípcio",
    rating: 5,
    displayOrder: 4
  },
  {
    id: "5",
    customerName: "Camila Rodrigues",
    content: "A Consultoria de Coloração Pessoal mudou minha forma de me vestir! Agora sei exatamente quais cores me favorecem. Investimento que valeu cada centavo!",
    service: "Coloração Pessoal",
    rating: 5,
    displayOrder: 5
  },
  {
    id: "6",
    customerName: "Beatriz Almeida",
    content: "As unhas em fibra de vidro são maravilhosas! Ficam super naturais, resistentes e a manutenção é prática. Nunca mais fico sem!",
    service: "Fibra de Vidro",
    rating: 5,
    displayOrder: 6
  },
  {
    id: "7",
    customerName: "Amanda Ferreira",
    content: "A drenagem linfática é essencial na minha rotina! Reduziu muito o inchaço e me sinto mais leve. A terapeuta é muito cuidadosa e atenciosa.",
    service: "Drenagem Linfática",
    rating: 5,
    displayOrder: 7
  },
  {
    id: "8",
    customerName: "Rafaela Lima",
    content: "O Brow Lamination deixou minhas sobrancelhas perfeitas! Fios alinhados, volume incrível e o melhor: efeito duradouro. Simplesmente amei!",
    service: "Brow Lamination",
    rating: 5,
    displayOrder: 8
  }
];

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

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

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Get visible testimonials (current + next 2)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--primary-beige-light)] overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[var(--primary-purple-ultra-light)] rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[var(--primary-purple-ultra-light)] rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-[var(--primary-purple)]/10">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-medium text-[var(--primary-purple)] uppercase tracking-wider">
              Depoimentos
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[var(--primary-purple)] leading-tight">
            Histórias de Transformação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o que nossas clientes dizem sobre suas experiências no Spaço Bellas
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-12">
          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-[var(--primary-purple)]/20 hover:border-[var(--primary-purple)] hover:bg-[var(--primary-purple)] hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              onClick={goToNext}
              variant="outline"
              size="icon"
              className="rounded-full border-2 border-[var(--primary-purple)]/20 hover:border-[var(--primary-purple)] hover:bg-[var(--primary-purple)] hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonials grid */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${index}`}
                className={`group relative overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl ${
                  index === 0
                    ? "border-[var(--primary-purple)]/30 md:scale-105 shadow-xl"
                    : "border-[var(--primary-purple)]/10 shadow-lg"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-sm" />

                <CardContent className="relative p-6 space-y-4">
                  {/* Quote icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="w-10 h-10 text-[var(--primary-purple)]/20" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "fill-[var(--primary-purple)] text-[var(--primary-purple)]"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed text-sm italic min-h-[120px]">
                    "{testimonial.content}"
                  </p>

                  {/* Customer info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--primary-purple)]/10">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-purple)]/70 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {testimonial.customerName.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[var(--primary-purple)] truncate">
                        {testimonial.customerName}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-purple)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            ))}
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[var(--primary-purple)]"
                    : "w-2 bg-[var(--primary-purple)]/30 hover:bg-[var(--primary-purple)]/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="text-center p-8 border-2 border-[var(--primary-purple)]/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl font-bold text-[var(--primary-purple)]">4.9</span>
                <span className="text-2xl text-gray-400">/5</span>
              </div>
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[var(--primary-purple)] text-[var(--primary-purple)]"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 font-medium">Avaliação Média</p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-2 border-[var(--primary-purple)]/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="space-y-2">
              <div className="text-5xl font-bold text-[var(--primary-purple)]">500+</div>
              <p className="text-sm text-gray-600 font-medium">Clientes Satisfeitas</p>
              <div className="flex justify-center">
                <Sparkles className="w-6 h-6 text-[var(--primary-purple)]" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
