import { motion } from "framer-motion";
import { Smartphone, ArrowDown, PlayCircle } from "lucide-react";
import CtaButton from "./CtaButton";
import vslCover from "@/assets/vsl-cover.png";

const trustItems = ["7 DIAS DE GARANTIA", "ACESSO IMEDIATO", "AULAS ONLINE", "5 BÔNUS INCLUSOS"];

const HeroSection = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-background">
      <div className="absolute inset-0 opacity-[0.055]" style={{ backgroundImage: "linear-gradient(hsl(var(--primary)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background/70 to-background" />
    </div>
    <div className="pointer-events-none absolute left-1/2 top-[52%] h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[130px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55% / 0.7), transparent 70%)" }} />
    <div className="absolute left-0 right-0 top-0 h-1 bg-primary" />

    <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-8 text-center sm:pt-12">
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center justify-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/40 bg-primary/10"><Smartphone className="h-5 w-5 text-primary" /></div>
        <div className="text-left"><p className="font-display text-sm font-black uppercase leading-tight tracking-wider">MESTRE DA</p><p className="font-display text-sm font-black uppercase leading-tight tracking-wider text-accent">MANUTENÇÃO</p></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-5 inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-accent sm:text-sm">
        ⚡ ÚLTIMA CHANCE: A OFERTA PODE ACABAR A QUALQUER MOMENTO
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mx-auto mb-5 max-w-5xl font-display text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
        Pare de trocar tempo por dinheiro. <span className="text-gradient">Aprenda a consertar celulares e cobre o que você realmente vale.</span>
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Se você ainda está em dúvida, não precisa decidir agora. Primeiro veja as aulas, conheça a plataforma e entenda exatamente o que o treinamento entrega. <strong className="text-foreground">Depois você decide.</strong>
      </motion.p>

      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.38 }} className="mx-auto mb-7 max-w-4xl">
        <div className="mb-3 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary sm:text-sm"><PlayCircle className="h-4 w-4" /> VEJA A APRESENTAÇÃO</div>
        <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-primary/70 bg-card shadow-[0_0_50px_hsl(192_95%_55%/0.2)] sm:rounded-3xl">
          <img src={vslCover} alt="Apresentação do Mestre da Manutenção" className="absolute inset-0 h-full w-full object-cover" />
          <iframe src="https://www.youtube.com/embed/3ONlCDPSsEY?rel=0" title="Apresentação do Mestre da Manutenção" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" />
        </div>
      </motion.div>

      <CtaButton href="#curso-por-dentro" className="w-full max-w-md px-6 py-5 text-base sm:text-lg">QUERO VER O CURSO POR DENTRO →</CtaButton>
      <p className="mt-3 text-xs text-muted-foreground">Veja o conteúdo primeiro. A oferta completa aparece mais abaixo.</p>
    </div>

    <div className="relative z-10 w-full overflow-hidden border-y border-primary/20 bg-primary/95 py-2.5">
      <div className="marquee-track flex whitespace-nowrap gap-8">{[...trustItems, ...trustItems, ...trustItems].map((item, i) => <span key={i} className="px-4 text-xs font-black tracking-wide text-primary-foreground sm:text-sm">✓ {item}</span>)}</div>
    </div>

    <a href="#curso-por-dentro" className="relative z-10 mt-4 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary sm:text-sm">Continue e veja como funciona <ArrowDown className="h-4 w-4" /></a>
  </section>
);

export default HeroSection;
