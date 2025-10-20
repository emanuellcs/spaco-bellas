import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function SpaDaySection() {
  const packages = [
    {
      name: "Bronze",
      price: "R$ 195",
      description: "Um cuidado essencial para você relaxar e sair renovada",
      features: ["Spa dos Pés (30 min)", "Massagem Relaxante (30 min)", "Chá e ambiente relaxante"],
    },
    {
      name: "Prata",
      price: "R$ 360",
      description: "Mais completo, inclui relaxamento profundo e cuidados extras",
      features: [
        "Spa dos Pés (30 min)",
        "Hidromassagem (30 min)",
        "Massagem Relaxante (50 min)",
        "Hidratação facial",
        "Chá e lanches",
      ],
      popular: true,
    },
    {
      name: "Ouro",
      price: "R$ 450",
      description: "Experiência premium para se sentir única",
      features: [
        "Spa dos Pés (30 min)",
        "Hidromassagem (40 min)",
        "Massagem Relaxante (60 min)",
        "Tratamento facial completo",
        "Design de sobrancelhas",
        "Refeição leve",
      ],
    },
    {
      name: "Diamante",
      price: "R$ 650",
      description: "O ápice do autocuidado, um dia de luxo inesquecível",
      features: [
        "Todos os serviços do Ouro",
        "Manicure em gel",
        "Pedicure em gel",
        "Tratamento capilar",
        "Maquiagem profissional",
        "Champagne e menu gourmet",
      ],
    },
  ]

  const getWhatsAppLink = (packageName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar o Day Spa ${packageName}.`)
    return `https://wa.me/5511976820135?text=${message}`
  }

  return (
    <section id="spa-day" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">Day Spa</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty leading-relaxed">
            Desconecte-se da rotina e mergulhe em uma experiência de relaxamento e renovação. Nossos pacotes Day Spa são
            cuidadosamente elaborados para proporcionar bem-estar completo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative ${pkg.popular ? "border-primary border-2 shadow-lg" : "border-border"}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              <CardHeader>
                <CardTitle className="font-heading text-3xl text-center">{pkg.name}</CardTitle>
                <CardDescription className="text-center text-sm min-h-12">{pkg.description}</CardDescription>
                <div className="text-center pt-4">
                  <span className="text-4xl font-heading text-primary">{pkg.price}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg" asChild>
                  <a href={getWhatsAppLink(pkg.name)} target="_blank" rel="noopener noreferrer">
                    Quero Este Pacote
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
