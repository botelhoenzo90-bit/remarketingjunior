import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "O curso tem certificado?", a: "Sim. Ao concluir o treinamento você recebe o Certificado Profissional de Conclusão, que comprova sua qualificação na área de manutenção de celulares." },
  { q: "Tem grupo de alunos?", a: "Sim. Você entra para a Comunidade VIP de alunos, onde pode trocar experiências, tirar dúvidas e acompanhar o que outros técnicos estão fazendo." },
  { q: "Tem suporte pra tirar dúvidas?", a: "Sim. A oferta inclui suporte direto para tirar dúvidas durante a sua jornada de aprendizado, além da comunidade VIP." },
  { q: "O curso é em PDF? Ou vídeo aulas?", a: "São vídeo aulas gravadas em alta qualidade, com aulas práticas na bancada para você ver passo a passo cada procedimento." },
  { q: "O curso é atualizado ou as aulas são antiga?", a: "O conteúdo é constantemente atualizado com novas técnicas, procedimentos e situações reais de assistência técnica." },
  { q: "Tem atualizações?", a: "Sim. As atualizações são vitalícias e gratuitas para quem adquire o acesso vitalício, sem custo adicional." },
  { q: "É acesso vitalício ou 1 ano?", a: "Você escolhe a melhor opção para você: acesso vitalício por R$ 247 ou acesso por 1 ano por R$ 102,90." },
  { q: "Ensina reparos em iphone?", a: "Sim. O treinamento ensina reparos em placa de iPhone e Android, do básico até o avançado." },
  { q: "Ensina achar o defeito?", a: "Sim. Você aprende diagnóstico completo, uso de multímetro, fonte de alimentação e análise para encontrar o defeito corretamente." },
  { q: "Ensina esquema elétrico?", a: "Sim. O curso aborda leitura de esquemas elétricos e como interpretar os circuitos para resolver defeitos com mais precisão." },
  { q: "É curso presencial ou online?", a: "É 100% online. Você assiste as aulas de onde quiser, no seu ritmo e pode rever quantas vezes precisar." },
  { q: "Como faço pra aderir?", a: "Basta preencher seus dados no formulário da página, clicar em continuar e finalizar a compra no checkout seguro." },
  { q: "Como vou ter acesso ao curso?", a: "Após a confirmação do pagamento você recebe o acesso à área de membros com login e senha para assistir todas as aulas." },
  { q: "Quanto é o curso?", a: "O acesso vitalício custa R$ 247 e o acesso por 1 ano custa R$ 102,90. Ainda dá para usar o cupom JRTEC30 para garantir 30% de desconto." },
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
