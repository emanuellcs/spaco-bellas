import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Início", target: "home" },
  { label: "Sobre", target: "introduction" },
  { label: "Experiências", target: "spa-day" },
  { label: "Diferenciais", target: "differentials" },
  { label: "Depoimentos", target: "testimonials" },
];

const WHATSAPP_NUMBER = "5511976820135";
const WHATSAPP_MESSAGE = "Olá!%20Quero%20conhecer%20o%20Spa%20Day%20das%20Celebridades!";
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo - SEM ÍCONE */}
            <button
              onClick={() => smoothScrollTo("home")}
              className="group transition-transform hover:scale-105"
            >
              <span
                className={`font-bold text-xl leading-tight ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Spaço Bellas
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => smoothScrollTo(item.target)}
                  className={`font-medium transition-all duration-300 relative group ${
                    scrolled
                      ? activeSection === item.target
                        ? "text-[var(--primary-purple)]"
                        : "text-gray-700 hover:text-[var(--primary-purple)]"
                      : activeSection === item.target
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--primary-purple)] transition-all duration-300 ${
                      activeSection === item.target ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className={`flex items-center gap-2 font-medium transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-[var(--primary-purple)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                {PHONE_NUMBER}
              </a>

              <Button
                onClick={() =>
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank")
                }
                className="bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Quero minha experiência
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

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <span className="font-bold text-xl text-gray-900">Spaço Bellas</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 overflow-y-auto py-6">
                <div className="flex flex-col gap-2 px-6">
                  {navItems.map((item) => (
                    <button
                      key={item.target}
                      onClick={() => smoothScrollTo(item.target)}
                      className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        activeSection === item.target
                          ? "bg-purple-50 text-[var(--primary-purple)]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 px-6">
                  <div className="p-4 bg-purple-50 rounded-lg space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-5 h-5 text-[var(--primary-purple)]" />
                      <a href={`tel:${WHATSAPP_NUMBER}`} className="font-medium">
                        {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="p-6 border-t border-gray-200">
                <Button
                  onClick={() =>
                    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank")
                  }
                  className="w-full bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white font-medium shadow-lg"
                  size="lg"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Quero minha experiência
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
