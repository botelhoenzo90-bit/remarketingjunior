import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, CheckCircle2, Smartphone } from "lucide-react";
import { Instagram } from "lucide-react";

const faqs = [
  { q: "Preciso já trabalhar com manutenção?", a: "Não. O treinamento foi pensado para acompanhar quem está começando e também quem já trabalha com manutenção e quer avançar para diagnóstico, eletrônica e reparos em placa." },
  { q: "Nunca fiz microssoldagem. Isso é para mim?", a: "O conteúdo apresenta técnicas e procedimentos de microssoldagem dentro da proposta do treinamento. Você pode estudar as aulas, pausar, revisar e avançar no seu ritmo." },
  { q: "Vou aprender a diagnosticar defeitos em placa?", a: "Sim. O conteúdo inclui diagnóstico, eletrônica, uso de multímetro e fonte de alimentação, além de diferentes situações de reparo em placa." },
  { q: "O treinamento aborda Android e iPhone?", a: "Sim. Há conteúdos voltados para reparos em placas Android e iPhone, além de outros procedimentos de manutenção apresentados na página." },
  { q: "Quais tipos de reparo aparecem no curso?", a: "Entre os conteúdos apresentados estão telas, baterias, conectores, câmeras, desoxidação, áudio, diagnóstico, microssoldagem, jumper, reballing e reparos em placa." },
  { q: "Preciso comprar todas as ferramentas antes de começar?", a: "Não é necessário começar dominando tudo. O ideal é estudar o conteúdo e entender quais ferramentas e insumos fazem sentido para o seu momento e para os serviços que você pretende executar." },
  { q: "Como funciona o acesso?", a: "O curso é online e o acesso é liberado após a confirmação da compra. Assim, você pode acompanhar as aulas de acordo com a sua rotina." },
  { q: "Existe suporte para dúvidas?", a: "Sim. A oferta inclui comunidade VIP e suporte direto para dúvidas relacionadas à jornada de aprendizado." },
  { q: "E se eu perceber que o curso não é para mim?", a: "A oferta inclui 7 dias de garantia. Se decidir não continuar, você pode solicitar o reembolso dentro do prazo e conforme as condições da garantia." },
  { q: "Ainda estou em dúvida. O que devo fazer?", a: "Volte às aulas gratuitas e aos vídeos de apresentação. Veja o conteúdo com calma e só depois decida se o treinamento faz sentido para você." },
];

const FAQSection = () => (
  <>
    <SectionWrapper id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center"><span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary">Antes de finalizar</span><h2 className="mt-5 font-display text-3xl font-black sm:text-5xl">Ainda ficou alguma <span className="text-gradient">dúvida?</span></h2><p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Confira as respostas mais importantes e tome sua decisão com todas as informações na mesa.</p></div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((faq, i) => <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-5 data-[state=open]:border-primary/40 data-[state=open]:shadow-[0_10px_35px_hsl(192_95%_55%/0.08)]"><AccordionTrigger className="py-5 text-left font-display text-sm font-bold text-foreground hover:text-primary hover:no-underline sm:text-base">{faq.q}</AccordionTrigger><AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{faq.a}</AccordionContent></AccordionItem>)}
        </Accordion>
        <div className="mt-9 text-center"><CtaButton href="#pricing">JÁ DECIDI. QUERO VER A OFERTA →</CtaButton></div>
      </div>
    </SectionWrapper>

    <section className="relative bg-deep-blue py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0"><div className="absolute left-1/2 top-1/2 h-[450px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} /></div>
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="mb-5 flex items-center justify-center gap-2"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/40 bg-primary/10"><Smartphone className="h-5 w-5 text-primary" /></div><div className="text-left"><p className="font-display text-sm font-black uppercase leading-tight">MESTRE DA</p><p className="font-display text-sm font-black uppercase leading-tight text-accent">MANUTENÇÃO</p></div></div>
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-black text-accent"><MessageCircle className="h-4 w-4" /> PRECISA FALAR ANTES DE COMPRAR?</span>
        <h2 className="mt-5 font-display text-3xl font-black sm:text-5xl">Converse antes de <span className="text-accent">decidir.</span></h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">Se existe uma dúvida específica que a página não respondeu, você pode falar diretamente pelo WhatsApp antes de finalizar.</p>
        <a href="https://wa.me/558894231328?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20curso%20Mestre%20da%20Manuten%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-black text-accent-foreground transition hover:brightness-110"><MessageCircle className="h-5 w-5" /> Falar no WhatsApp</a>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-border bg-card p-5"><CheckCircle2 className="mx-auto mb-2 h-6 w-6 text-accent" /><p className="text-sm font-bold">Tire sua dúvida</p></div><div className="rounded-2xl border border-border bg-card p-5"><CheckCircle2 className="mx-auto mb-2 h-6 w-6 text-accent" /><p className="text-sm font-bold">Conheça melhor o curso</p></div><div className="rounded-2xl border border-border bg-card p-5"><CheckCircle2 className="mx-auto mb-2 h-6 w-6 text-accent" /><p className="text-sm font-bold">Decida com segurança</p></div></div>
      </div>
    </section>

    <footer className="border-t border-border bg-card py-8"><div className="mx-auto max-w-5xl px-4 text-center"><a href="https://www.instagram.com/juniorbezerraa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /> @juniorbezerraa</a><p className="mt-4 text-xs text-muted-foreground">© 2026 Mestre da Manutenção. Todos os direitos reservados.</p></div></footer>
  </>
);

export default FAQSection;
