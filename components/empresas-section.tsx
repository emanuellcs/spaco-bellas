"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Users, Award, TrendingUp } from "lucide-react"

export function EmpresasSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const benefits = [
    {
      icon: Building2,
      title: "Bem-Estar Corporativo",
      description: "Aumente a satisfação e produtividade da sua equipe",
    },
    {
      icon: Users,
      title: "Atendimento no Local",
      description: "Levamos nossos serviços até sua empresa",
    },
    {
      icon: Award,
      title: "Pacotes Personalizados",
      description: "Soluções sob medida para as necessidades da sua empresa",
    },
    {
      icon: TrendingUp,
      title: "Resultados Comprovados",
      description: "Empresas parceiras relatam 30% mais engajamento",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")
    setFormData({ name: "", company: "", email: "", phone: "", message: "" })

    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="empresas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">Soluções para Empresas</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto text-pretty leading-relaxed">
            Invista no bem-estar da sua equipe. Oferecemos serviços corporativos personalizados que promovem saúde,
            relaxamento e valorização dos colaboradores.
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

        <Card className="max-w-2xl mx-auto border-border">
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-center">Solicite uma Proposta</CardTitle>
            <CardDescription className="text-center">
              Preencha o formulário e entraremos em contato em até 24 horas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-foreground block mb-2">
                    Empresa *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-foreground block mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Conte-nos sobre as necessidades da sua empresa..."
                  className="bg-background"
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-primary/10 text-primary p-4 rounded-lg text-center">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-destructive/10 text-destructive p-4 rounded-lg text-center">
                  Erro ao enviar mensagem. Por favor, tente novamente.
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
