import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Calendar, Gift, Crown } from "lucide-react"

export function MensalBellasSection() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Economia Garantida",
      description: "Economize até 40% em comparação com serviços avulsos",
    },
    {
      icon: Calendar,
      title: "Conveniência Total",
      description: "Agendamento prioritário e horários exclusivos para assinantes",
    },
    {
      icon: Gift,
      title: "Benefícios Exclusivos",
      description: "Descontos especiais em produtos e serviços adicionais",
    },
    {
      icon: Crown,
      title: "Tratamento VIP",
      description: "Atendimento personalizado e acompanhamento dedicado",
    },
  ]

  const plans = [
    {
      name: "Essencial",
      price: "R$ 299",
      savings: "Economize R$ 150/mês",
      services: ["2 Manicures em Gel", "1 Design de Sobrancelhas", "1 Hidratação Capilar"],
    },
    {
      name: "Premium",
      price: "R$ 499",
      savings: "Economize R$ 280/mês",
      services: ["3 Manicures em Gel", "2 Designs de Sobrancelhas", "2 Hidratações Capilares", "1 Massagem Relaxante"],
    },
    {
      name: "Diamante",
      price: "R$ 799",
      savings: "Economize R$ 450/mês",
      services: [
        "4 Manicures em Gel",
        "3 Designs de Sobrancelhas",
        "3 Hidratações Capilares",
        "2 Massagens Relaxantes",
        "1 Limpeza de Pele",
      ],
    },
  ]

  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os planos Mensal Bellas.")
  const whatsappLink = `https://wa.me/5511976820135?text=${whatsappMessage}`

  return (
    <section id="mensal-bellas" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">Mensal Bellas</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty leading-relaxed">
            Mantenha sua beleza em dia com nossos planos mensais. Economia, conveniência e exclusividade em um único
            pacote personalizado para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-border text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="font-heading text-3xl text-center text-foreground mb-8">Planos Disponíveis</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className="border-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-center">{plan.name}</CardTitle>
                  <div className="text-center pt-2">
                    <span className="text-3xl font-heading text-primary">{plan.price}</span>
                    <span className="text-sm text-foreground/60">/mês</span>
                  </div>
                  <CardDescription className="text-center text-primary font-semibold">{plan.savings}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.services.map((service, index) => (
                      <li key={index} className="text-sm text-foreground/80">
                        • {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Assinar Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
