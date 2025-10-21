import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Heart, 
  Award,
  CheckCircle2,
  Sparkles,
  Mail,
  Phone,
  Briefcase,
  Send
} from "lucide-react";

const WHATSAPP_NUMBER = "5511976820135";

// Benefícios para empresas
const benefits = [
  {
    icon: Users,
    title: "Equipe Mais Engajada",
    text: "Colaboradores valorizados são mais produtivos e comprometidos com os resultados da empresa.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Redução de Absenteísmo",
    text: "Programas de bem-estar diminuem faltas por estresse e problemas de saúde relacionados ao trabalho.",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: Heart,
    title: "Clima Organizacional",
    text: "Ambiente de trabalho mais saudável e harmonioso, fortalecendo a cultura empresarial.",
    gradient: "from-rose-500 to-rose-600"
  },
  {
    icon: Award,
    title: "Atração de Talentos",
    text: "Empresas que investem em bem-estar são mais atrativas para profissionais qualificados.",
    gradient: "from-amber-500 to-amber-600"
  }
];

// Serviços corporativos
const corporateServices = [
  {
    title: "Quick Massage no Escritório",
    description: "Massagens rápidas em cadeira ergonômica, sem necessidade de estrutura especial.",
    duration: "10-30 min por pessoa",
    ideal: "Ideal para eventos e dias de bem-estar"
  },
  {
    title: "Day Spa Corporativo",
    description: "Experiência completa de spa nas instalações da empresa ou no Spaço Bellas.",
    duration: "Meio período ou dia completo",
    ideal: "Perfeito para premiações e incentivos"
  },
  {
    title: "Workshops de Bem-Estar",
    description: "Palestras sobre gestão de estresse, autocuidado e equilíbrio vida-trabalho.",
    duration: "1-4 horas",
    ideal: "Capacitação contínua da equipe"
  },
  {
    title: "Programa Mensal Corporativo",
    description: "Descontos especiais para colaboradores em nossos serviços regulares.",
    duration: "Plano anual",
    ideal: "Benefício contínuo para todos"
  }
];

// Depoimento corporativo
const testimonial = {
  company: "TechCorp",
  size: "150 colaboradores",
  quote: "O programa de bem-estar corporativo do Spaço Bellas transformou nossa equipe. Notamos redução de 40% no absenteísmo e aumento significativo na satisfação dos colaboradores.",
  author: "Ana Silva",
  role: "Diretora de RH",
  initials: "AS"
};

export function EmpresasSection() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    employeeCount: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio (substituir por integração real)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Abrir WhatsApp com informações do formulário
      const message = encodeURIComponent(
        `Olá! Gostaria de uma proposta corporativa para:\n\n` +
        `Empresa: ${formData.companyName}\n` +
        `Contato: ${formData.contactName}\n` +
        `Email: ${formData.email}\n` +
        `Telefone: ${formData.phone}\n` +
        `Nº Colaboradores: ${formData.employeeCount}\n` +
        `Mensagem: ${formData.message}`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");

      // Reset após 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          employeeCount: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section
      id="empresas"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-beige-light)] rounded-full border border-[var(--primary-purple)]/10">
            <Building2 className="w-3.5 h-3.5 text-[var(--primary-purple)]" />
            <span className="text-xs font-medium text-[var(--primary-purple)] uppercase tracking-wider">
              Soluções Corporativas
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-[var(--primary-purple)]">
            Bem-Estar para Empresas
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Invista no bem-estar da sua equipe com soluções personalizadas que transformam o ambiente de trabalho
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="border border-gray-200 bg-white hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-sm`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Corporate Services */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif text-gray-900 mb-3">
              Nossos Serviços Corporativos
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Programas flexíveis que se adaptam às necessidades da sua empresa
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {corporateServices.map((service, index) => (
              <Card
                key={index}
                className="border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--primary-purple)]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-[var(--primary-purple)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base text-gray-900 mb-2 group-hover:text-[var(--primary-purple)] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="space-y-1.5">
                        <p className="text-xs text-gray-500 flex items-center gap-1.5">
                          <span className="font-medium">⏱️</span>
                          {service.duration}
                        </p>
                        <p className="text-xs text-[var(--primary-purple)] font-medium">
                          {service.ideal}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <Card className="border border-gray-200 bg-gradient-to-br from-[var(--primary-beige-light)] to-white shadow-lg">
            <CardContent className="p-8 md:p-10">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-purple)]/80 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.initials}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-gray-900 text-lg">
                          {testimonial.company}
                        </span>
                        <span className="text-sm text-gray-500">
                          • {testimonial.size}
                        </span>
                      </div>
                    </div>

                    <blockquote className="text-base text-gray-700 italic leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                      <div>
                        <p className="font-bold text-sm text-[var(--primary-purple)]">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <Card className="border border-gray-200 bg-white shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Solicite uma Proposta
                </h3>
                <p className="text-sm text-gray-600">
                  Preencha o formulário e receba uma proposta personalizada para sua empresa
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Proposta Enviada!
                    </h4>
                    <p className="text-sm text-gray-600">
                      Em breve entraremos em contato para apresentar nossa proposta personalizada.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Nome da Empresa *
                    </label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Sua Empresa Ltda"
                      className="border-gray-300 focus:border-[var(--primary-purple)] focus:ring-[var(--primary-purple)]"
                    />
                  </div>

                  {/* Contact Name */}
                  <div className="space-y-2">
                    <label htmlFor="contactName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Nome do Contato *
                    </label>
                    <Input
                      id="contactName"
                      name="contactName"
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={handleInputChange}
                      placeholder="João Silva"
                      className="border-gray-300 focus:border-[var(--primary-purple)] focus:ring-[var(--primary-purple)]"
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="contato@empresa.com"
                        className="border-gray-300 focus:border-[var(--primary-purple)] focus:ring-[var(--primary-purple)]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Telefone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className="border-gray-300 focus:border-[var(--primary-purple)] focus:ring-[var(--primary-purple)]"
                      />
                    </div>
                  </div>

                  {/* Employee Count */}
                  <div className="space-y-2">
                    <label htmlFor="employeeCount" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Número de Colaboradores *
                    </label>
                    <Input
                      id="employeeCount"
                      name="employeeCount"
                      type="text"
                      required
                      value={formData.employeeCount}
                      onChange={handleInputChange}
                      placeholder="Ex: 50-100"
                      className="border-gray-300 focus:border-[var(--primary-purple)] focus:ring-[var(--primary-purple)]"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Mensagem (Opcional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre suas necessidades e objetivos..."
                      className="border-gray-300 focus:border-[var(--primary-purple)] focus:ring-[var(--primary-purple)] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/90 text-white font-medium py-3 shadow-sm transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Solicitar Proposta
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Ao enviar, você será redirecionado para o WhatsApp para finalizar o contato
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            Soluções personalizadas para empresas de todos os tamanhos
          </p>
        </div>
      </div>
    </section>
  );
}
