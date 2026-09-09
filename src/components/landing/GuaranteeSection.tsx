import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import selo from "@/assets/garantia-7-dias.png.asset.json";

const GuaranteeSection = () => (
  <SectionWrapper id="garantia" className="relative overflow-hidden bg-[#07111f] py-20 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-4xl px-4 text-center">
      <img src={selo.url} alt="Selo de garantia de 7 dias" className="mx-auto h-40 w-40 object-contain drop-shadow-[0_0_45px_hsl(45_100%_60%/0.2)] sm:h-48 sm:w-48" loading="lazy" />
      <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-accent">Compra protegida</p>
      <h2 className="mt-3 font-display text-4xl font-black leading-tight text-white sm:text-5xl">Experimente por 7 dias - você não tem nada a perder</h2>
      <div className="mx-auto mt-5 max-w-3xl space-y-4 text-left text-base leading-relaxed text-slate-300 sm:text-lg">
        <p>Não tenha dúvida, meu treinamento mestre da manutenção simplesmente funciona.</p>
        <p>A prova disso são os mais de 1.000 mil alunos com resultados incríveis e que tiveram suas vidas transformadas.</p>
        <p>Abriram loja física, aprenderam a fazer reparos em placa avançado.</p>
        <p>Mas se você ainda tem alguma dúvida, vou permitir que você experimente por 7 dias e caso você não goste ou não veja nenhum resultado, basta me enviar um email durante esse período que devolvo todo o valor que você pagou.</p>
        <p>Ou seja, se der certo, você consegue ter um negócio lucrativo e vai aumentar seu lucro com reparos em placa e vai faturar 10 mil reais todos os meses. E se não gostar, você tem o seu dinheiro de volta.</p>
        <p>O único risco que você corre é de estar daqui a 60 dias faturando 10 mil reais.</p>
        <p>Simples assim!</p>
      </div>
      <div className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
        {["Acesso ao treinamento", "Conheça o conteúdo", "7 dias de garantia"].map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />{item}</div>
        ))}
      </div>
      <CtaButton href="https://pay.kiwify.com.br/eOrXUxm" className="mt-8">QUERO APROVEITAR O DESCONTO →</CtaButton>
    </motion.div>
  </SectionWrapper>
);

export default GuaranteeSection;
