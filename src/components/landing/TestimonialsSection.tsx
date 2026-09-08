import { motion } from "framer-motion";
import { MessageSquareQuote, Star } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import d1 from "@/assets/depoimento-novo-1.jpg.asset.json";
import d2 from "@/assets/depoimento-novo-2.jpg.asset.json";
import d3 from "@/assets/depoimento-novo-3.jpg.asset.json";
import d4 from "@/assets/depoimento-novo-4.jpg.asset.json";
import d5 from "@/assets/depoimento-novo-5.jpg.asset.json";
import d6 from "@/assets/depoimento-novo-6.jpg.asset.json";
import d7 from "@/assets/depoimento-novo-7.jpg.asset.json";
import d8 from "@/assets/depoimento-novo-8.jpg.asset.json";
import d9 from "@/assets/depoimento-novo-9.jpg.asset.json";
import d10 from "@/assets/depoimento-novo-10.jpg.asset.json";
import d11 from "@/assets/depoimento-novo-11.jpg.asset.json";
import d12 from "@/assets/depoimento-novo-12.jpg.asset.json";
import d13 from "@/assets/depoimento-novo-13.jpg.asset.json";
import d14 from "@/assets/depoimento-novo-14.jpg.asset.json";
import d15 from "@/assets/depoimento-novo-15.jpg.asset.json";
import d16 from "@/assets/depoimento-novo-16.jpg.asset.json";
import d17 from "@/assets/depoimento-novo-17.jpg.asset.json";
import d18 from "@/assets/depoimento-novo-18.jpg.asset.json";
import d19 from "@/assets/depoimento-novo-19.jpg.asset.json";
import d20 from "@/assets/depoimento-novo-20.jpg.asset.json";
import d21 from "@/assets/depoimento-novo-21.jpg.asset.json";
import d22 from "@/assets/depoimento-novo-22.jpg.asset.json";
import d23 from "@/assets/depoimento-novo-23.jpg.asset.json";
import d24 from "@/assets/depoimento-novo-24.jpg.asset.json";
import d25 from "@/assets/depoimento-novo-25.jpg.asset.json";
import d26 from "@/assets/depoimento-novo-26.jpg.asset.json";
import d27 from "@/assets/depoimento-novo-27.jpg.asset.json";

const screenshots = [d1.url,d2.url,d3.url,d4.url,d5.url,d6.url,d7.url,d8.url,d9.url,d10.url,d11.url,d12.url,d13.url,d14.url,d15.url,d16.url,d17.url,d18.url,d19.url,d20.url,d21.url,d22.url,d23.url,d24.url,d25.url,d26.url,d27.url];
const loopedScreenshots = [...screenshots, ...screenshots];

const TestimonialsSection = () => (
  <SectionWrapper id="provas-sociais" className="overflow-hidden bg-background py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary"><MessageSquareQuote className="h-4 w-4" /> Provas sociais</span>
      <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-5xl">Veja o que alunos <span className="text-gradient">compartilharam.</span></h2>
      <div className="mt-4 flex items-center justify-center gap-1 text-yellow-400">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-5 w-5 fill-current" />)}</div>
      <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Depoimentos e experiências apresentados em uma fileira contínua.</p>
      <div className="relative mx-auto mt-10 max-w-[1500px] overflow-hidden py-3">
        <motion.div className="flex w-max gap-4 sm:gap-5" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 55, ease: "linear", repeat: Infinity }}>
          {loopedScreenshots.map((src,index)=><article key={`${index}-${src}`} className="flex h-[330px] w-[250px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-card p-2 shadow-xl sm:h-[420px] sm:w-[310px] sm:p-3"><img src={src} alt={`Depoimento de aluno ${((index % screenshots.length)+1)}`} className="h-full w-full object-contain" loading={index<3?"eager":"lazy"}/></article>)}
        </motion.div>
      </div>
      <CtaButton href="#oferta" className="mt-8">QUERO CONHECER A OFERTA →</CtaButton>
    </div>
  </SectionWrapper>
);

export default TestimonialsSection;
