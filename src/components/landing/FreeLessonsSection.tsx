import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Gift, GraduationCap, PlayCircle, ShieldCheck } from "lucide-react";
import CtaButton from "./CtaButton";

const lessons = [
  { title: "Como trocar um C.I de Wi-Fi", desc: "Veja uma técnica real de reparo em placa e entenda o nível de prática do treinamento.", videoId: "SZLLDmMOiRA", icon: GraduationCap },
  { title: "Como trocar um IF PMIC", desc: "Aprenda na prática como é feita a substituição de um componente importante da placa.", videoId: "FP5xYT-PFt0", icon: GraduationCap },
  { title: "Como trocar um PMIC", desc: "Acompanhe o processo passo a passo e veja como o conteúdo é apresentado nas aulas.", videoId: "MyxWlTqSn6k", icon: GraduationCap },
];

const FreeLessonsSection = () => (
  <SectionWrapper id="aulas-gratis" className="py-20 relative bg-deep-blue sm:py-28">
    <div className="absolute inset-0 pointer-events-none"><div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-25 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} /></div>
    <div className="relative mx-auto max-w-6xl px-4">
      <div className="mb-5 flex items-center justify-center gap-2"><span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-black text-accent-foreground uppercase tracking-wider"><Gift className="h-4 w-4" /> 3 aulas liberadas gratuitamente</span></div>
      <h2 className="mb-5 text-center font-display text-3xl font-black leading-tight sm:text-5xl">Antes de colocar seu dinheiro, <span className="text-gradient">coloque o curso à prova.</span></h2>
      <p className="mx-auto max-w-3xl text-center text-muted-foreground sm:text-lg">Você não precisa comprar no escuro. Assista às aulas abaixo, veja a didática, a prática e o nível de detalhe do treinamento. Depois, decida com muito mais segurança.</p>
      <div className="mx-auto mt-5 flex max-w-xl items-center justify-center gap-2 rounded-xl border border-primary/20 bg-background/30 px-4 py-3 text-center text-sm font-bold text-primary"><PlayCircle className="h-5 w-5 shrink-0" /> Dê o play nas 3 aulas e veja como funciona por dentro.</div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {lessons.map((l, i) => (
          <motion.div key={l.videoId} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="card-hover group overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <div className="relative aspect-video bg-black"><iframe src={`https://www.youtube.com/embed/${l.videoId}?rel=0`} title={l.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" /></div>
            <div className="p-5"><div className="mb-2 flex items-center gap-2"><l.icon className="h-5 w-5 text-primary shrink-0" /><h3 className="font-display text-base font-bold text-foreground">{l.title}</h3></div><p className="text-sm leading-relaxed text-muted-foreground">{l.desc}</p></div>
          </motion.div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-accent/20 bg-card/80 p-5 text-center"><div className="flex items-center justify-center gap-2 text-accent"><ShieldCheck className="h-5 w-5" /><span className="font-bold">Conheça primeiro. Decida depois.</span></div><p className="mt-2 text-sm text-muted-foreground">E se você decidir continuar, a oferta inclui garantia de 7 dias.</p></div>
      <div className="mt-8 text-center"><CtaButton href="#pricing" className="whitespace-nowrap">QUERO VER A OFERTA COMPLETA →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default FreeLessonsSection;
