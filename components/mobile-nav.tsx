"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { href: "#spa-day", label: "Day Spa" },
    { href: "#mensal-bellas", label: "Mensal Bellas" },
    { href: "#empresas", label: "Empresas" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar um horário no Spaço Bellas.")
  const whatsappLink = `https://wa.me/5511976820135?text=${whatsappMessage}`

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
              <span className="font-heading text-2xl md:text-3xl text-primary">Spaço Bellas</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Agendar
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 lg:hidden transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-4">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "text-3xl font-heading text-foreground hover:text-primary transition-all duration-300",
                isOpen ? "animate-fade-in-up" : "",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl mt-4 animate-fade-in-up"
            style={{ animationDelay: `${navItems.length * 100}ms` }}
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              Agendar Agora
            </a>
          </Button>
        </div>
      </div>
    </>
  )
}
