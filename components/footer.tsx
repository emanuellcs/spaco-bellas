import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { Butterfly } from "@/components/butterfly"

export function Footer() {
  const whatsappLink = "https://wa.me/5511976820135"

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Butterfly size={32} color="#ede8d0" />
              <h3 className="font-heading text-2xl">Spaço Bellas</h3>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Seu refúgio de beleza e bem-estar no coração de São Paulo.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#spa-day" className="text-background/70 hover:text-background transition-colors">
                  Day Spa
                </a>
              </li>
              <li>
                <a href="#mensal-bellas" className="text-background/70 hover:text-background transition-colors">
                  Mensal Bellas
                </a>
              </li>
              <li>
                <a href="#empresas" className="text-background/70 hover:text-background transition-colors">
                  Empresas
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-background/70 hover:text-background transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-background/70 hover:text-background transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contato@spacobellas.com.br"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  contato@spacobellas.com.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">Localização</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/70">
                  R. Antônio Fortunato, 678
                  <br />
                  Burgo Paulista, São Paulo - SP
                  <br />A 3 minutos do Metrô Patriarca
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-background/70">
                  Segunda a Sábado
                  <br />
                  09:00 às 20:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Spaço Bellas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
