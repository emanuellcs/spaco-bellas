import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      service: "Day Spa Ouro",
      rating: 5,
      text: "Experiência incrível! O atendimento é impecável e saí me sentindo completamente renovada. O ambiente é acolhedor e os profissionais são extremamente qualificados.",
    },
    {
      name: "Ana Paula Costa",
      service: "Mensal Bellas Premium",
      rating: 5,
      text: "Melhor decisão que tomei foi assinar o plano mensal. Economizo muito e sempre estou com as unhas e sobrancelhas impecáveis. Super recomendo!",
    },
    {
      name: "Juliana Santos",
      service: "Micropigmentação",
      rating: 5,
      text: "Fiz a micropigmentação de sobrancelhas e o resultado ficou perfeito! Natural e exatamente como eu queria. A profissional é muito cuidadosa e atenciosa.",
    },
    {
      name: "Carla Mendes",
      service: "Alongamento de Cílios",
      rating: 5,
      text: "Meus cílios ficaram lindos! O volume é perfeito e dura bastante. Não consigo mais ficar sem. O Spaço Bellas é meu lugar favorito!",
    },
    {
      name: "Patricia Oliveira",
      service: "Consultoria de Imagem",
      rating: 5,
      text: "A consultoria de imagem mudou minha vida! Aprendi a me vestir melhor e a valorizar meus pontos fortes. Valeu cada centavo investido.",
    },
    {
      name: "Fernanda Lima",
      service: "Massagem Relaxante",
      rating: 5,
      text: "Que massagem maravilhosa! Estava super estressada e saí de lá completamente relaxada. O ambiente é tranquilo e a massagista é excelente.",
    },
  ]

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">O Que Nossas Clientes Dizem</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty leading-relaxed">
            A satisfação das nossas clientes é nossa maior conquista. Veja o que elas têm a dizer sobre suas
            experiências no Spaço Bellas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed text-sm">"{testimonial.text}"</p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
