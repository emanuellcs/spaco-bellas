import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Início", target: "home" },
  { label: "Sobre", target: "introduction" },
  { label: "Day Spa", target: "spa-day" },
  { label: "Mensal Bellas", target: "mensal-bellas" },
  { label: "Empresas", target: "empresas" },
  { label: "Serviços", target: "menu" },
  { label: "Depoimentos", target: "testimonials" },
];

const WHATSAPP_NUMBER = "5511976820135";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Gostaria de agendar minha experiência no Spaço Bellas.");
const PHONE_NUMBER = "(11) 97682-0135";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.target));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].target);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => smoothScrollTo("home")}
              className="flex items-center gap-2 group"
            >
              <div className="flex items-center gap-2">
                <Sparkles className={`w-6 h-6 transition-colors ${
                  scrolled ? "text-[var(--primary-purple)]" : "text-white"
                }`} />
                <span className={`text-2xl font-serif font-bold transition-colors ${
                  scrolled ? "text-[var(--primary-purple)]" : "text-white"
                }`}>
                  Spaço Bellas
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => smoothScrollTo(item.target)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.target
                      ? scrolled
                        ? "bg-[var(--primary-purple)] text-white"
                        : "bg-white/20 text-white backdrop-blur-sm"
                      : scrolled
                      ? "text-gray-700 hover:bg-gray-100"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{PHONE_NUMBER}</span>
              </a>

              <Button
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank")}
                className="bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white font-medium shadow-sm"
                size="sm"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Agendar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-20 left-0 right-0 bg-white shadow-xl transition-all duration-300 z-40 ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => smoothScrollTo(item.target)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.target
                      ? "bg-[var(--primary-purple)] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 space-y-2 border-t border-gray-200">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_NUMBER}
                </a>

                <Button
                  onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank")}
                  className="w-full bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white font-medium"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Agendar Agora
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
