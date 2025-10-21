import { MapPin, Phone, Clock, Mail, Send, Sparkles } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const WHATSAPP_NUMBER = "5511976820135";
const PHONE_NUMBER = "(11) 97682-0135";
const EMAIL = "contato@spacobellas.com.br";
const ADDRESS = "R. Antônio Fortunato, 678 - Burgo Paulista, São Paulo - SP";
const INSTAGRAM = "https://instagram.com/spacobellas";
const FACEBOOK = "https://facebook.com/spacobellas";

const navigationSections = [
  {
    title: "Navegação",
    links: [
      { label: "Início", target: "home" },
      { label: "Sobre", target: "introduction" },
      { label: "Day Spa", target: "spa-day" },
      { label: "Mensal Bellas", target: "mensal-bellas" },
      { label: "Empresas", target: "empresas" },
    ]
  },
  {
    title: "Serviços",
    links: [
      { label: "Catálogo Completo", target: "menu" },
      { label: "Depoimentos", target: "testimonials" },
    ]
  }
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary-purple)] to-transparent opacity-50" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-[var(--primary-purple)]" />
                <h3 className="text-2xl font-serif font-bold text-white">
                  Spaço Bellas
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Seu refúgio de luxo e bem-estar em São Paulo. Experiências transformadoras desde 2015.
              </p>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm font-semibold text-white mb-4">Siga-nos</p>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl bg-gray-800/50 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-green-600"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl bg-gray-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-pink-600"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 rounded-xl bg-gray-800/50 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-blue-600"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {navigationSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-base font-semibold text-white mb-5 uppercase tracking-wider text-sm">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.target}>
                    <button
                      onClick={() => smoothScrollTo(link.target)}
                      className="group text-sm text-gray-400 hover:text-[var(--primary-purple)] transition-colors flex items-center gap-2"
                    >
                      <span className="w-0 h-0.5 bg-[var(--primary-purple)] group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5 uppercase tracking-wider text-sm">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="group flex items-start gap-3 text-sm text-gray-400 hover:text-[var(--primary-purple)] transition-colors"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-800/50 border border-gray-700 group-hover:border-[var(--primary-purple)] flex items-center justify-center transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="pt-1.5">
                    <span className="block">{PHONE_NUMBER}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-start gap-3 text-sm text-gray-400 hover:text-[var(--primary-purple)] transition-colors"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-800/50 border border-gray-700 group-hover:border-[var(--primary-purple)] flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="pt-1.5">
                    <span className="block break-all">{EMAIL}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[var(--primary-purple)]" />
                  </div>
                  <div className="pt-1.5">
                    <span className="block leading-relaxed">{ADDRESS}</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[var(--primary-purple)]" />
                  </div>
                  <div className="pt-1.5 space-y-0.5">
                    <p className="text-gray-400">Seg-Sáb: 09:00 - 20:00</p>
                    <p className="text-gray-400">Dom: Fechado</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="pt-12 pb-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-2">
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-6">
              Receba novidades, promoções exclusivas e dicas de bem-estar
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-2 px-6 py-4 bg-green-900/20 border border-green-700 rounded-xl text-green-400 text-sm">
                <Send className="w-5 h-5" />
                <span className="font-medium">Obrigado por se inscrever!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-[var(--primary-purple)] focus:ring-[var(--primary-purple)] rounded-xl"
                />
                <Button
                  type="submit"
                  className="h-12 px-8 bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white font-medium rounded-xl shadow-lg hover:shadow-[var(--primary-purple)]/20 transition-all"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Inscrever
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-500">
              © {currentYear} Spaço Bellas. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-gray-500 hover:text-[var(--primary-purple)] transition-colors">
                Política de Privacidade
              </button>
              <span className="text-gray-700">•</span>
              <button className="text-gray-500 hover:text-[var(--primary-purple)] transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
