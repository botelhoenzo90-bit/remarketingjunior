import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Phone, Clock, CheckCircle2, Smartphone } from "lucide-react";
import { Instagram } from "lucide-react";

const faqs = [
  { q: "Nunca fiz microssoldagem. Vou conseguir aprender?", a: "Sim. O treinamento foi desenvolvido para quem está começando e também para técnicos que já trabalham com manutenção, mas querem dominar os reparos avançados. Você aprenderá desde os fundamentos até técnicas profissionais de microssoldagem." },
  { q: "Vou aprender análise e diagnóstico de placas?", a: "Sim. Você aprenderá um método completo para analisar a placa, interpretar medições, localizar defeitos e identificar a causa real dos problemas antes de trocar qualquer componente." },
  { q: "O curso ensina temperaturas, fluxo de ar e configurações da estação?", a: "Sim. Você aprenderá quais temperaturas utilizar, como ajustar o fluxo de ar, como trabalhar com o ferro de solda e quando utilizar cada configuração para evitar danos à placa." },
  { q: "Vou aprender quais ferramentas e insumos realmente preciso comprar?", a: "Sim. Você receberá orientações sobre microscópio, estação de ar, ferro de solda, fonte de alimentação, multímetro, soldas, fluxos e os principais insumos utilizados por profissionais da área." },
  { q: "O curso ensina reparos em placas de Android e iPhone?", a: "Sim. O conteúdo aborda diagnósticos, microssoldagem e reparos em placas de diversos aparelhos Android e iPhone, utilizando situações reais de bancada." },
  { q: "Preciso ter experiência em manutenção?", a: "Não. O curso foi estruturado para levar você do zero ao avançado, mesmo que nunca tenha trabalhado com eletrônica ou manutenção de celulares." },
  { q: "Quanto tempo terei acesso ao curso?", a: "Você terá acesso vitalício para assistir às aulas no seu ritmo, revisar o conteúdo sempre que precisar e acompanhar todas as futuras atualizações." },
  { q: "Existe suporte caso eu tenha dúvidas?", a: "Sim. Você terá acesso ao suporte direto com Júnior Bezerra para esclarecer dúvidas e continuar evoluindo durante sua jornada no curso." },
  { q: "Depois de aprender reparo em placas, consigo aumentar meu faturamento?", a: "Sim. Os reparos em placa costumam ter maior valor agregado do que serviços básicos. Ao dominar análise, diagnóstico e microssoldagem, você amplia seus serviços e pode cobrar mais." },
  { q: "Esse curso serve para quem já trabalha com manutenção?", a: "Sim. Se você já troca telas e baterias, este treinamento foi criado justamente para dar o próximo passo: dominar os reparos avançados que diferenciam um especialista." },
];

const contactFeatures = [
  { icon: Phone, title: "Atendimento Humano", desc: "Nada de robô, você fala diretamente comigo" },
  { icon: Clock, title: "Resposta Rápida", desc: "Respondo o mais rápido possível" },
  { icon: CheckCircle2, title: "Tire Todas as Dúvidas", desc: "Sem compromisso, só conversar" },
];

const FAQSection = () => (
  <>
    <SectionWrapper id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-4 text-center font-display text-3xl font-bold sm:text-4xl">
          Dúvidas <span className="text-gradient">Frequentes</span>
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          Tire suas dúvidas antes de tomar a melhor decisão da sua vida
        </p>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-5 data-[state=open]:glow-primary"
            >
              <AccordionTrigger className="text-left font-display text-sm font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 flex justify-center">
          <CtaButton className="whitespace-nowrap">QUERO GARANTIR MINHA VAGA!</CtaButton>
        </div>
      </div>
    </SectionWrapper>

    {/* WhatsApp Contact Section */}
    <section className="py-20 bg-deep-blue relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        {/* Logo */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/40 bg-primary/10">
            <Smartphone className="h-5 w-5 text-primary" />
          </div>
          <div className="text-left">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-foreground leading-tight">MESTRE DA</p>
            <p className="font-display text-sm font-bold uppercase tracking-wider text-accent leading-tight">MANUTENÇÃO</p>
          </div>
        </div>

        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent">
          <MessageCircle className="h-4 w-4" />
          ATENDIMENTO DIRETO
        </span>

        <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">
          Fale <span className="text-accent">comigo</span> pelo WhatsApp
        </h2>
        <p className="mb-8 text-muted-foreground max-w-xl mx-auto">
          Tem alguma dúvida específica? Quer conversar antes de tomar sua decisão?<br />
          Clique no botão abaixo e fale diretamente com <span className="font-bold text-foreground">Júnior Bezerra</span>.
        </p>

        <a
          href="https://wa.me/558894231328?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20Mestre%20da%20Manuten%C3%A7%C3%A3o%21"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground transition-colors hover:brightness-110"
        >
          <MessageCircle className="h-5 w-5" />
          Falar no WhatsApp
        </a>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {contactFeatures.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6 text-center">
              <f.icon className="mx-auto mb-3 h-7 w-7 text-accent" />
              <h3 className="mb-1 font-display text-sm font-bold text-foreground">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <a
          href="https://www.instagram.com/juniorbezerraa/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="h-5 w-5" />
          @juniorbezerraa
        </a>
        <p className="mt-4 text-xs text-muted-foreground">
          © 2026 Mestre da Manutenção. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  </>
);

export default FAQSection;
