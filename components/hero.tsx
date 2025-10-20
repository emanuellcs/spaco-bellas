import { Button } from "@/components/ui/button"
import { Butterfly } from "@/components/butterfly"

export function Hero() {
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um horário no Spaço Bellas.")
  const whatsappLink = `https://wa.me/5511976820135?text=${whatsappMessage}`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20">
          <Butterfly size={120} />
        </div>
        <div className="absolute bottom-40 left-10">
          <Butterfly size={80} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 text-balance">
          Transforme-se no
          <span className="block text-primary mt-2">Spaço Bellas</span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 text-pretty leading-relaxed">
          Seu refúgio de beleza e bem-estar. Especialistas em cabelo, unhas, estética e maquiagem, prontos para realçar
          sua beleza natural.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar Agora
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg rounded-xl bg-transparent"
            asChild
          >
            <a href="#servicos">Conheça Nossos Serviços</a>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-heading text-primary mb-2">10+</div>
            <div className="text-sm text-foreground/70">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading text-primary mb-2">5000+</div>
            <div className="text-sm text-foreground/70">Clientes Satisfeitas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading text-primary mb-2">50+</div>
            <div className="text-sm text-foreground/70">Serviços Especializados</div>
          </div>
        </div>
      </div>
    </section>
  )
}
