export function Navigation() {
  const sections = [
    { id: "spa-day", label: "Day Spa", description: "Pacotes de relaxamento" },
    { id: "mensal-bellas", label: "Mensal Bellas", description: "Planos mensais" },
    { id: "empresas", label: "Empresas", description: "Soluções corporativas" },
  ]

  return (
    <section id="navegacao" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Como Podemos Te Ajudar?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty leading-relaxed">
            Escolha a experiência perfeita para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="group">
              <div className="bg-background border-2 border-border hover:border-primary transition-all duration-300 rounded-xl p-8 text-center h-full flex flex-col justify-center">
                <h3 className="font-heading text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {section.label}
                </h3>
                <p className="text-foreground/60 text-sm">{section.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
