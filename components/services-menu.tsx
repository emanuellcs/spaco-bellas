import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function ServicesMenu() {
  const serviceCategories = [
    {
      id: "sobrancelhas",
      title: "Sobrancelhas & Micropigmentação",
      icon: "✨",
      services: [
        { name: "Design Personalizado", price: "R$ 44,90" },
        { name: "Design com Henna", price: "R$ 59,90" },
        { name: "Brow Lamination", price: "R$ 129,90" },
        { name: "Nanoblading", price: "R$ 619,90" },
        { name: "Fio a Fio", price: "R$ 619,90" },
        { name: "Shadow", price: "R$ 699,90" },
      ],
    },
    {
      id: "cilios",
      title: "Alongamento de Cílios",
      icon: "👁️",
      services: [
        { name: "Volume Híbrido", price: "R$ 149,90" },
        { name: "Volume Natural", price: "R$ 149,90" },
        { name: "Volume Brasileiro", price: "R$ 159,90" },
        { name: "Volume Egípcio", price: "R$ 159,90" },
        { name: "Mega Brasegípcio", price: "R$ 189,90" },
        { name: "Efeito Delineado", price: "R$ 175,90" },
      ],
    },
    {
      id: "unhas",
      title: "Unhas (Nail Design)",
      icon: "💅",
      services: [
        { name: "Fibra de Vidro", price: "a partir de R$ 194,90" },
        { name: "Molde F1", price: "a partir de R$ 189,90" },
        { name: "Gel na Tips", price: "a partir de R$ 169,90" },
        { name: "Banho de Gel", price: "a partir de R$ 139,90" },
        { name: "Manicure em Gel", price: "a partir de R$ 79,90" },
        { name: "Pedicure em Gel", price: "a partir de R$ 69,90" },
      ],
    },
    {
      id: "massagens",
      title: "Massagens & Terapias",
      icon: "💆",
      services: [
        { name: "Massagem Relaxante", price: "R$ 165,00" },
        { name: "Drenagem Linfática", price: "R$ 165,00" },
        { name: "Liberação Miofascial", price: "R$ 170,00" },
        { name: "Shiatsu", price: "R$ 160,00" },
        { name: "Quick Massage", price: "R$ 60,00" },
        { name: "Spa dos Pés", price: "R$ 60,00" },
      ],
    },
    {
      id: "cabelo",
      title: "Serviços de Cabelo",
      icon: "💇",
      services: [
        { name: "Corte Feminino/Masculino", price: "R$ 80,00" },
        { name: "Progressiva", price: "a partir de R$ 150,00" },
        { name: "Hidratação", price: "a partir de R$ 50,00" },
        { name: "Botox Capilar", price: "a partir de R$ 130,00" },
        { name: "Coloração", price: "a partir de R$ 120,00" },
        { name: "Luzes", price: "a partir de R$ 450,00" },
      ],
    },
    {
      id: "consultoria",
      title: "Consultoria de Imagem",
      icon: "👗",
      services: [
        { name: "Consultoria Completa", price: "R$ 6.000,00" },
        { name: "Estratégia de Imagem", price: "R$ 3.000,00" },
        { name: "Coloração Pessoal", price: "R$ 700,00" },
        { name: "Análise de Visagismo", price: "R$ 1.800,00" },
        { name: "Personal Shopper", price: "R$ 600,00/dia" },
      ],
    },
  ]

  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um serviço no Spaço Bellas.")
  const whatsappLink = `https://wa.me/5511976820135?text=${whatsappMessage}`

  return (
    <section id="servicos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">Nossos Serviços</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty leading-relaxed">
            Explore nosso catálogo completo de serviços de beleza e bem-estar. Cada tratamento é realizado por
            profissionais especializados com produtos de alta qualidade.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {serviceCategories.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="border-2 border-border rounded-xl px-6 bg-background"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-3xl">{category.icon}</span>
                    <span className="font-heading text-xl md:text-2xl">{category.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 pb-6">
                    {category.services.map((service, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-card rounded-lg">
                        <span className="text-sm text-foreground">{service.name}</span>
                        <span className="text-sm font-semibold text-primary">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar Serviço
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
