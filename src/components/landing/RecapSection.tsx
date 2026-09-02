import { motion } from "framer-motion";
import { Check, Smartphone, Wrench, CircuitBoard, Gift, Award } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";

const groups = [
  { icon: Smartphone, title: "Manutenção", items: "Telas • Baterias • Câmeras • Conectores • Tampas • Botões • Antenas" },
  { icon: Wrench, title: "Diagnóstico e eletrônica", items: "Desoxidação • Software • Multímetro • Fonte • Sensores • Calibração" },
  { icon: CircuitBoard, title: "Reparo avançado", items: "Microssoldagem • Reballing • Jumper • CPU • Memória NAND • Swap" },
  { icon: Smartphone, title: "Android + iPhone", items: "Reparos em placa • Face ID • Interposer • Separação de placas" },
  { icon: Gift, title: "Extras", items: "5 bônus exclusivos • Comunidade VIP • Suporte • Atualizações" },
  { icon: Award, title: "Conclusão", items: "Certificado profissional de conclusão" },
];

const RecapSection = () => (
  <SectionWrapper className="relative overflow-hidden bg-deep-blue py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />
    <div className="relative mx-auto max-w-6xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-accent"><Check className="h-4 w-4" /> Tudo reunido em um só lugar</span>
        <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Olha tudo o que você leva<span className="block text-gradient-accent">na condição atual.</span></h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Em vez de uma lista interminável, aqui está o pacote completo dividido por aquilo que realmente importa para sua evolução.</p>
      </motion.div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
        {groups.map(({ icon: Icon, title, items }, i) => (
          <motion.div key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .05 }} className="rounded-2xl border border-border bg-card/80 p-6 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35">
            <div className="mb-4 flex items-center justify-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><h3 className="font-display text-xl font-black">{title}</h3></div>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{items}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-10 max-w-3xl rounded-3xl border border-accent/25 bg-background/80 p-7 text-center sm:p-9">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-muted-foreground">Condição atual</p>
        <div className="mt-2 flex flex-wrap items-baseline justify-center gap-3"><span className="font-display text-4xl font-black text-accent">R$ 147</span><span className="text-lg font-bold text-destructive line-through">R$ 697</span></div>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">Treinamento completo + 5 bônus exclusivos + 7 dias de garantia, conforme as condições da oferta.</p>
        <CtaButton href="#pricing" className="mt-6">QUERO APROVEITAR A CONDIÇÃO →</CtaButton>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default RecapSection;
