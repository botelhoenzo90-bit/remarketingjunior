import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, Users, Smartphone, ThumbsUp, CheckCircle2 } from "lucide-react";
import mentorImg from "@/assets/mentor.png";
import CtaButton from "./CtaButton";

const stats = [
  { icon: Award, value: "7+", label: "Anos de experiência" },
  { icon: Users, value: "1.000+", label: "Alunos formados" },
  { icon: Smartphone, value: "5.000+", label: "Celulares reparados" },
  { icon: ThumbsUp, value: "98%", label: "Aprovação dos alunos" },
];

const highlights = [
  "Experiência real de mais de 7 anos",
  "Métodos testados e comprovados por +1.000 alunos",
  "Suporte direto e personalizado no WhatsApp",
  "Atualizações constantes do conteúdo",
];

const MentorSection = () => (
  <SectionWrapper id="mentor" className="py-20 bg-deep-blue relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} />
    </div>
    <div className="relative mx-auto max-w-5xl px-4">
      <div className="mb-2 flex justify-center">
        <span className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground uppercase tracking-wider">
          Seu Mentor
        </span>
      </div>
      <h2 className="mb-12 text-center font-display text-3xl font-bold sm:text-4xl">
        Quem vai te <span className="text-gradient">guiar nessa jornada</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border-2 border-primary/30 shadow-xl shadow-primary/10">
              <img src={mentorImg} alt="Júnior Bezerra - Mentor" className="w-full max-w-md object-cover" />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-accent-foreground whitespace-nowrap">
              🏆 Especialista em Celulares
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 font-display text-2xl font-bold text-foreground">Júnior Bezerra</h3>
          <p className="mb-3 text-muted-foreground leading-relaxed">
            Há mais de <span className="font-bold text-foreground">7 anos</span> eu trabalho com manutenção de celulares. Comecei do zero, assim como você, sem nenhuma experiência.
          </p>
          <p className="mb-3 text-muted-foreground leading-relaxed">
            Enfrentei todas as dificuldades: falta de dinheiro, medo de não conseguir, descrença da família. Mas eu insisti e hoje vivo exclusivamente disso.
          </p>
          <p className="mb-3 text-muted-foreground leading-relaxed">
            Já reparei mais de <span className="font-bold text-foreground">5.000 celulares</span> e formei mais de <span className="font-bold text-foreground">1.000 alunos</span> que hoje faturam de R$ 5.000 a R$ 7.000 por mês.
          </p>
          <p className="mb-6 text-sm font-medium text-primary">
            Minha missão é te mostrar o caminho mais rápido e seguro para você conquistar sua liberdade financeira através dessa profissão incrível.
          </p>

          <div className="mb-6 space-y-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <p className="text-sm font-semibold text-foreground">{h}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-card p-3 text-center">
                <s.icon className="mx-auto mb-1 h-5 w-5 text-primary" />
                <p className="font-display text-lg font-bold text-foreground">{s.value}</p>
                <p className="text-[10px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="mt-10 flex justify-center">
        <CtaButton className="whitespace-nowrap">QUERO APRENDER COM JÚNIOR!</CtaButton>
      </div>
    </div>
  </SectionWrapper>
);

export default MentorSection;
