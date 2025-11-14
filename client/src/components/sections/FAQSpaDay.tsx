import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, HelpCircle, ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const WHATSAPP_NUMBER = "5511976820135";
const WHATSAPP_FAQ_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20tirar%20d%C3%BAvidas%20sobre%20o%20Spa%20Day%20das%20Celebridades.`;

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "POSSO IR EM DUAS PESSOAS?",
    answer:
      "Sim, a segunda pessoa paga 50% do valor para irem juntas.",
  },
  {
    question: "POSSO IR EM CASAL? POSSO LEVAR QUEM?",
    answer:
      "Sim! É livre, geralmente entre casal, mãe e filha, irmãs e amigas.",
  },
  {
    question: "POSSO IR APÓS O HORÁRIO DE TRABALHO, TEM FLEXIBILIDADE?",
    answer:
      "Sim! Combine previamente e podemos estender o horário de funcionamento.",
  },
  {
    question: "POSSO PRESENTEAR ALGUÉM COM O SPA?",
    answer:
      "Sim, é ótimo para presentear alguém e a pessoa terá até 90 dias para fazer uso.",
  },
  {
    question: "ALÉM DO SPA, POSSO FAZER O DIA DA NOIVA NO SPAÇO BELLAS?",
    answer:
      "Sim! No Spaço Bellas você tem total liberdade para vir com suas noivas e passar o dia relaxando antes do casamento.",
  },
];

export function FAQSpaDay() {
  const [showBonusDetails, setShowBonusDetails] = useState(false);

  const handleWhatsappClick = () => {
    window.open(WHATSAPP_FAQ_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="faq-spa-day"
      className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10"
    >
      {/* Cabeçalho da seção */}
      <header className="text-center max-w-2xl mx-auto space-y-3">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-semibold tracking-tight">
          Tire suas dúvidas
        </h2>

        <p className="text-sm sm:text-base leading-relaxed text-zinc-700">
          Entenda como funcionam os bônus, regras de agendamento e tudo que
          você precisa saber para aproveitar o seu Spa Day com tranquilidade.
        </p>
      </header>

      {/* Bloco de bônus / oferta especial, coeso com os cards de pacote */}
      <Card className="border-[var(--primary-purple)]/25 bg-gradient-to-br from-white via-[#fff9fd] to-purple-50/40 shadow-lg">
        <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center space-y-6">
          {/* Cabeçalho do bônus */}
          <div className="flex flex-col items-center gap-2 max-w-2xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-purple)]/10 text-[var(--primary-purple)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-900">
              Bônus para as 10 primeiras em novembro
            </h3>
            <p className="text-base leading-relaxed text-zinc-800">
              As 10 primeiras pessoas que fecharem o Spa Day em novembro ganham
              design de sobrancelhas e 1 spa dos pés extra para usar em até 30 dias
              ou presentear alguém especial.
            </p>
          </div>

          {/* Benefícios e regras */}
          <div className="grid gap-6 sm:grid-cols-2 w-full max-w-3xl text-base leading-relaxed text-zinc-800">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary-purple)]">
                O que você ganha
              </p>
              <div className="rounded-xl border border-[var(--primary-purple)]/20 bg-white/70 p-4 text-sm leading-relaxed text-zinc-700 space-y-1">
                <ul className="list-disc list-inside space-y-1">
                  <li>Design de sobrancelhas incluso na sua experiência.</li>
                  <li>1 spa dos pés extra para usar em até 30 dias ou dar de presente.</li>
                  <li>
                    10% de desconto na próxima visita ou um voucher para você ou uma amiga.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
                Regras rápidas
              </p>
              <div className="rounded-xl border border-[var(--primary-purple)]/20 bg-white/70 p-4 text-sm leading-relaxed text-zinc-700 space-y-1">
                <ul className="list-disc list-inside space-y-1">
                  <li>Válido para as 10 primeiras pessoas que fecharem em novembro.</li>
                  <li>
                    Voucher válido por 30 dias para marcação (não precisa consumir
                    dentro desse prazo, apenas agendar).
                  </li>
                  <li>
                    É necessário deixar um sinal de 20% para garantir sua vaga e os
                    benefícios.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Button
            type="button"
            onClick={handleWhatsappClick}
            className="w-full sm:w-auto rounded-full bg-emerald-500 text-white text-base font-semibold px-8 py-3 shadow-lg hover:bg-emerald-600 transition-colors"
          >
            Quero meu dia de princesa
          </Button>
        </CardContent>
      </Card>

      {/* Seção de perguntas frequentes */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[var(--primary-purple)]/10 text-[var(--primary-purple)]">
            <HelpCircle className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-900">
              Perguntas frequentes
            </h3>
            <p className="text-sm text-zinc-700">
              Veja as dúvidas mais comuns antes de agendar seu Dia de Estrela,
              Rainha ou Diva.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item: FaqItem, index: number) => (
            <Card
              key={index}
              className="border-[var(--primary-purple)]/15 bg-white/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-3 sm:p-4">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                    <span className="text-sm sm:text-base font-medium text-zinc-900 text-left">
                      {item.question}
                    </span>
                    <span className="shrink-0 flex items-center gap-1 text-[11px] text-[var(--primary-purple)]">
                      <span className="group-open:hidden">Ver resposta</span>
                      <span className="hidden group-open:inline">Fechar</span>
                      <ChevronDown
                        className="h-3 w-3 transition-transform group-open:rotate-180"
                      />
                    </span>
                  </summary>
                  <div className="mt-2 text-sm leading-relaxed text-zinc-700">
                    {item.answer}
                  </div>
                </details>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA final, para manter o mesmo fluxo da SpaDaySection */}
      <section className="pt-4 border-t border-[var(--primary-purple)]/10">
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm leading-relaxed text-zinc-700">
            Se ainda ficou alguma dúvida depois de ler o FAQ, a equipe está
            pronta para te ajudar no WhatsApp.
          </p>
          <Button
            type="button"
            onClick={handleWhatsappClick}
            className="w-full sm:w-auto rounded-full bg-emerald-500 text-white text-sm font-semibold px-6 py-3 shadow-lg hover:bg-emerald-600/90 transition-colors"
          >
            Tirar dúvidas no WhatsApp
          </Button>
        </div>
      </section>
    </section>
  );
}
