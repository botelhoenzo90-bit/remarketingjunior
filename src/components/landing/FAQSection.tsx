import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
];

const FAQSection = () => (
  <SectionWrapper id="faq" className="bg-[#f4f7fa] py-20 text-slate-900 sm:py-28">
    <div className="mx-auto max-w-3xl px-4">
      <div className="text-center"><span className="inline-flex rounded-full bg-[#07111f] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Perguntas frequentes</span><h2 className="mt-5 font-display text-4xl font-black sm:text-5xl">Ainda ficou alguma <span className="text-blue-600">dúvida?</span></h2><p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">Confira as respostas mais importantes antes de aproveitar a condição especial.</p></div>
      <Accordion type="single" collapsible className="mt-10 space-y-3">
        {faqs.map((faq, i) => <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-slate-200 bg-white px-5 shadow-sm data-[state=open]:border-blue-300"><AccordionTrigger className="py-5 text-left font-display text-sm font-bold text-slate-900 hover:text-blue-600 hover:no-underline sm:text-base">{faq.q}</AccordionTrigger><AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">{faq.a}</AccordionContent></AccordionItem>)}
      </Accordion>
      <div className="text-center"><CtaButton href="#cadastro" className="mt-9">QUERO APROVEITAR O DESCONTO →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default FAQSection;
