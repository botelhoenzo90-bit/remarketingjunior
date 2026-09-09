import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import mentorImg from "@/assets/mentor.png";
import CtaButton from "./CtaButton";

const highlights = [
  "Experiência real de mais de 7 anos",
  "Métodos testados e comprovados por +1.000 alunos",
  "Suporte direto e personalizado no WhatsApp",
  "Atualizações constantes do conteúdo",
];

const stats = [
  ["7+", "Anos de experiência"],
  ["1.000+", "Alunos formados"],
  ["5.000+", "Celulares reparados"],
  ["98%", "Aprovação dos alunos"],
] as const;

const MentorSection = () => (
  <SectionWrapper id="quem-sou-eu" className="relative overflow-hidden bg-[#07111f] py-20 text-white sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
    <div className="relative mx-auto max-w-5xl px-4">
      <div className="mb-4 flex justify-center"><span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-5 py-2 text-sm font-black uppercase tracking-wider text-cyan-300"><Award className="h-4 w-4" /> Seu Mentor</span></div>
      <h2 className="text-center font-display text-4xl font-black leading-tight sm:text-5xl">Quem vai te guiar nessa <span className="text-cyan-300">jornada.</span></h2>
      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center">
          <div className="relative"><div className="overflow-hidden rounded-3xl border-2 border-cyan-400/30 shadow-2xl"><img src={mentorImg} alt="Júnior Bezerra, especialista em manutenção de celulares" className="w-full max-w-md object-cover" /></div><div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950">Júnior Bezerra</div></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-300">🏆 Especialista em Celulares</span>
          <h3 className="mt-4 font-display text-2xl font-black">Júnior Bezerra</h3>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">Há mais de 7 anos eu trabalho com manutenção de celulares. Comecei do zero, assim como você, sem nenhuma experiência.</p>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">Enfrentei todas as dificuldades: falta de dinheiro, medo de não conseguir, descrença da família. Mas eu insisti e hoje vivo exclusivamente disso.</p>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">Já reparei mais de 5.000 celulares e formei mais de 1.000 alunos que hoje faturam de R$ 5.000 a R$ 7.000 por mês.</p>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">Minha missão é te mostrar o caminho mais rápido e seguro para você conquistar sua liberdade financeira através dessa profissão incrível.</p>
          <div className="mt-7 space-y-3">{highlights.map((highlight) => <div key={highlight} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" /><span className="text-sm font-semibold text-slate-200 sm:text-base">{highlight}</span></div>)}</div>
        </motion.div>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center">
            <p className="font-display text-3xl font-black text-cyan-300">{value}</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
          </div>
        ))}
      </div>
      <div className="text-center"><CtaButton href="#faq" className="mt-10">TIRAR MINHAS DÚVIDAS →</CtaButton></div>
    </div>
  </SectionWrapper>
);

export default MentorSection;
