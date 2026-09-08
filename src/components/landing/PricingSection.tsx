import { motion } from "framer-motion";
import { Check, Gift, ShieldCheck, Lock } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import garantiaSelo from "@/assets/garantia-selo.png";

const accessItems = [
  "Curso completo de manutenção de celulares",
  "+100 aulas em vídeo passo a passo",
  "Troca de telas, baterias, câmeras e conectores",
  "Desoxidação, software, diagnóstico e eletrônica",
  "Microssoldagem, reballing, jumper e reparos em placa",
  "Conteúdos para Android e iPhone",
  "Comunidade VIP + suporte direto",
  "Atualizações gratuitas conforme o treinamento for atualizado",
  "Certificado de conclusão",
];

const bonuses = [
  "Kit Primeira Assistência",
  "Método Turbinado de Clientes",
  "Mapa dos Fornecedores",
  "Comunidade VIP WhatsApp",
  "Atualizações do Conteúdo",
];

const PricingSection = () => (
  <SectionWrapper id="pricing" className="relative overflow-hidden bg-radial-accent py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
    <div className="relative mx-auto max-w-5xl px-4">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
        <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-accent">Recapitulando seu acesso</span>
        <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Tudo o que você vai receber <span className="text-accent">em um só acesso.</span></h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">Você viu as aulas, conheceu a plataforma e agora pode conferir, de forma rápida, tudo que está reunido na oferta do Mestre da Manutenção — incluindo os 5 bônus.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl border-2 border-primary/60 bg-card shadow-[0_0_60px_hsl(192_95%_55%/0.14)]">
        <div className="p-6 sm:p-9">
          <div className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-primary">MESTRE DA MANUTENÇÃO</p><h3 className="mt-2 font-display text-2xl font-black sm:text-3xl">Seu acesso completo inclui:</h3></div><span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-accent">9 itens de acesso</span></div>

          <div className="mt-7 grid gap-x-8 gap-y-3 md:grid-cols-2">{accessItems.map((item) => <div key={item} className="flex items-start gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span className="text-sm leading-relaxed text-muted-foreground sm:text-base">{item}</span></div>)}</div>

          <div className="mt-9 rounded-2xl border border-accent/20 bg-accent/5 p-5 sm:p-6">
            <div className="flex items-center justify-center gap-2 text-center text-sm font-black uppercase tracking-[0.12em] text-accent"><Gift className="h-5 w-5" /> E ainda recebe 5 bônus</div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{bonuses.map((bonus, index) => <div key={bonus} className="rounded-xl border border-border bg-card p-4 text-center"><p className="text-[10px] font-black uppercase tracking-wider text-primary">Bônus {index + 1}</p><p className="mt-2 text-sm font-bold leading-tight text-foreground">{bonus}</p></div>)}</div>
          </div>
        </div>

        <div className="border-t border-border bg-background/60 p-6 text-center sm:p-9">
          <p className="text-sm font-bold text-destructive line-through">De R$ 697,00</p>
          <p className="mt-2 text-sm text-muted-foreground">Hoje, por</p>
          <p className="font-display text-6xl font-black leading-none text-accent sm:text-7xl">R$ 147</p>
          <p className="mt-2 text-sm text-muted-foreground">ou 12x de <strong className="text-foreground">R$ 12,25</strong></p>
          <p className="mx-auto mt-4 w-fit rounded-full bg-accent/10 px-4 py-2 text-sm font-black text-accent">Economia de R$ 550,00</p>
          <CtaButton href="https://pay.kiwify.com.br/eOrXUxm" className="mt-7 w-full py-5 text-base sm:text-lg">QUERO ACESSO AGORA →</CtaButton>
          <p className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground"><Lock className="h-3.5 w-3.5" /> Pagamento via cartão ou PIX</p>
          <div className="mx-auto mt-6 grid max-w-md grid-cols-3 gap-2 border-t border-border pt-5 text-[11px] font-bold text-muted-foreground"><span className="flex flex-col items-center gap-1"><ShieldCheck className="h-5 w-5 text-primary" />7 dias</span><span className="flex flex-col items-center gap-1"><Check className="h-5 w-5 text-primary" />Acesso imediato</span><span className="flex flex-col items-center gap-1"><Gift className="h-5 w-5 text-primary" />5 bônus</span></div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-5 rounded-2xl border border-accent/20 bg-card p-6 sm:flex-row sm:p-7">
        <img src={garantiaSelo} alt="Selo de Garantia de 7 Dias" className="h-24 w-24 shrink-0" />
        <div className="text-center sm:text-left"><h3 className="font-display text-xl font-black">Você não precisa assumir um risco sem conhecer o conteúdo.</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">A oferta inclui 7 dias de garantia. Caso decida não continuar, solicite o reembolso dentro do prazo e conforme as condições da garantia.</p></div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default PricingSection;
