import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import CtaButton from "./CtaButton";
import t1 from "@/assets/testimonial-1.png";
import t2 from "@/assets/testimonial-2.png";
import t3 from "@/assets/testimonial-3.png";
import t4 from "@/assets/testimonial-4.png";
import t5 from "@/assets/testimonial-5.png";
import t6 from "@/assets/testimonial-6.png";
import t7 from "@/assets/testimonial-7.png";
import t8 from "@/assets/testimonial-8.png";
import t9 from "@/assets/testimonial-9.png";
import t10 from "@/assets/testimonial-10.png";
import tn1 from "@/assets/t-new-1.png.asset.json";
import tn2 from "@/assets/t-new-2.png.asset.json";
import tn3 from "@/assets/t-new-3.png.asset.json";
import tn4 from "@/assets/t-new-4.png.asset.json";
import tn5 from "@/assets/t-new-5.png.asset.json";
import tn6 from "@/assets/t-new-6.png.asset.json";
import tn7 from "@/assets/t-new-7.png.asset.json";
import tn8 from "@/assets/t-new-8.png.asset.json";
import tn9 from "@/assets/t-new-9.png.asset.json";
import tn10 from "@/assets/t-new-10.png.asset.json";

const screenshots = [tn1.url, tn2.url, tn3.url, tn4.url, tn5.url, tn6.url, tn7.url, tn8.url, tn9.url, tn10.url, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10];
const testimonials = [
  { name: "Carlos Silva", city: "São Paulo, SP", text: "Em 3 meses já estava faturando R$ 6.000/mês. O curso mudou minha vida!", earnings: "R$ 6.000/mês" },
  { name: "Maria Souza", city: "Rio de Janeiro, RJ", text: "Saí do desemprego e hoje tenho minha própria assistência técnica.", earnings: "R$ 5.500/mês" },
  { name: "Pedro Santos", city: "Belo Horizonte, MG", text: "As aulas são muito práticas. Em 2 semanas já fiz meu primeiro reparo!", earnings: "R$ 7.200/mês" },
  { name: "Ana Oliveira", city: "Curitiba, PR", text: "Comecei em casa e hoje tenho 3 funcionários. Melhor investimento!", earnings: "R$ 12.000/mês" },
  { name: "Lucas Costa", city: "Salvador, BA", text: "O suporte do Júnior é incrível. Sempre tira minhas dúvidas rápido.", earnings: "R$ 5.800/mês" },
  { name: "Juliana Lima", city: "Brasília, DF", text: "Nunca pensei que ia conseguir. Hoje meus amigos pedem pra eu ensinar!", earnings: "R$ 6.500/mês" },
];

const PhoneFrame = ({ src }: { src: string }) => <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px]"><div className="rounded-2xl border border-white/10 bg-card/30 p-2 shadow-2xl backdrop-blur-sm"><div className="relative overflow-hidden rounded-xl bg-black/20"><img src={src} alt="Depoimento de aluno" className="w-full h-auto max-h-[80vh] object-contain block mx-auto" loading="eager" /></div></div></div>;
const useDragCarousel = (length: number, setIdx: (fn: (p: number) => number) => void) => { const dragStart = useRef<number | null>(null); const onPointerDown = useCallback((e: React.PointerEvent) => { dragStart.current = e.clientX; }, []); const onPointerUp = useCallback((e: React.PointerEvent) => { if (dragStart.current === null) return; const diff = e.clientX - dragStart.current; if (Math.abs(diff) > 50) setIdx((p) => diff < 0 ? (p + 1) % length : (p - 1 + length) % length); dragStart.current = null; }, [length, setIdx]); return { onPointerDown, onPointerUp }; };

const TestimonialsSection = () => {
  const [imgIdx, setImgIdx] = useState(0);
  const [txtIdx, setTxtIdx] = useState(0);
  const imgDrag = useDragCarousel(screenshots.length, setImgIdx);
  const txtDrag = useDragCarousel(testimonials.length, setTxtIdx);

  useEffect(() => { const timer = window.setInterval(() => setImgIdx((p) => (p + 1) % screenshots.length), 4500); return () => window.clearInterval(timer); }, []);
  useEffect(() => { const timer = window.setInterval(() => setTxtIdx((p) => (p + 1) % testimonials.length), 5000); return () => window.clearInterval(timer); }, []);

  return (
    <SectionWrapper id="depoimentos" className="py-20 bg-radial-top">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-center mb-4"><span className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground uppercase tracking-wider">Depoimentos dos Alunos</span></div>
        <h2 className="mb-3 text-center font-display text-2xl font-bold sm:text-4xl leading-tight">Veja quem já está aprendendo<br className="hidden sm:inline" /> e <span className="text-gradient">faturando:</span></h2>
        <p className="mb-12 text-center text-muted-foreground text-sm sm:text-base">+1.000 alunos já transformaram suas vidas!</p>

        <div className="relative mb-16 cursor-grab active:cursor-grabbing select-none" {...imgDrag}>
          <div className="flex items-center justify-center overflow-hidden py-4"><AnimatePresence mode="wait"><motion.div key={imgIdx} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.25 }}><PhoneFrame src={screenshots[imgIdx]} /></motion.div></AnimatePresence></div>
          <button aria-label="Depoimento anterior" onClick={() => setImgIdx((p) => (p - 1 + screenshots.length) % screenshots.length)} className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border text-foreground hover:bg-primary/20 transition-colors"><ChevronLeft className="h-5 w-5" /></button>
          <button aria-label="Próximo depoimento" onClick={() => setImgIdx((p) => (p + 1) % screenshots.length)} className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border text-foreground hover:bg-primary/20 transition-colors"><ChevronRight className="h-5 w-5" /></button>
        </div>

        <div className="relative cursor-grab active:cursor-grabbing select-none" {...txtDrag}>
          <AnimatePresence mode="wait"><motion.div key={txtIdx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
            <div className="block sm:hidden"><TestimonialCard t={testimonials[txtIdx]} /></div>
            <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{[0, 1, 2].map((offset) => <TestimonialCard key={testimonials[(txtIdx + offset) % testimonials.length].name} t={testimonials[(txtIdx + offset) % testimonials.length]} />)}</div>
          </motion.div></AnimatePresence>
          <div className="flex justify-center gap-3 mt-6"><button aria-label="Depoimento anterior" onClick={() => setTxtIdx((p) => (p - 1 + testimonials.length) % testimonials.length)} className="flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border text-foreground hover:bg-primary/20 transition-colors"><ChevronLeft className="h-5 w-5" /></button><button aria-label="Próximo depoimento" onClick={() => setTxtIdx((p) => (p + 1) % testimonials.length)} className="flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border text-foreground hover:bg-primary/20 transition-colors"><ChevronRight className="h-5 w-5" /></button></div>
        </div>
        <div className="mt-10 flex justify-center"><CtaButton className="whitespace-nowrap">QUERO COMEÇAR AGORA!</CtaButton></div>
      </div>
    </SectionWrapper>
  );
};

const TestimonialCard = ({ t }: { t: typeof testimonials[number] }) => <div className="card-hover rounded-xl border border-border bg-card p-6"><div className="mb-3 flex gap-1">{[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-primary text-primary" />)}</div><p className="mb-4 text-base text-muted-foreground italic">"{t.text}"</p><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-display font-bold text-primary">{t.name[0]}</div><div><p className="text-sm font-semibold text-foreground">{t.name}</p><p className="text-xs text-muted-foreground">{t.city}</p></div><span className="ml-auto rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">{t.earnings}</span></div></div>;

export default TestimonialsSection;
