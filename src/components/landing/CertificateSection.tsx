import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, CheckCircle } from "lucide-react";
import certificateImg from "@/assets/certificate.png";
import CtaButton from "./CtaButton";

const CertificateSection = () => (
  <SectionWrapper className="py-20 relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute right-0 top-1/3 w-[600px] h-[400px] rounded-full opacity-25 blur-[100px]" style={{ background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)" }} />
    </div>
    <div className="relative mx-auto max-w-5xl px-4">
      <div className="mb-4 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground uppercase tracking-wider">
          <Award className="h-4 w-4" />
          Certificado Profissional
        </span>
      </div>

      <h2 className="mb-4 text-center font-display text-3xl font-bold sm:text-4xl">
        Certificado <span className="text-gradient">Válido em Todo o Brasil</span>
      </h2>
      <p className="mb-12 text-center text-muted-foreground max-w-2xl mx-auto">
        Ao concluir o curso, você recebe um certificado de conclusão profissional reconhecido em todo o território nacional.
      </p>

      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl border-2 border-primary/30 shadow-xl shadow-primary/10 max-w-lg"
        >
          <img src={certificateImg} alt="Certificado Mestre da Manutenção" className="w-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {[
            "Comprova suas habilidades técnicas",
            "Diferencial competitivo no mercado",
            "Emitido pela JR TEC",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-5 py-2.5 text-sm font-semibold text-accent">
              <CheckCircle className="h-4 w-4" />
              {item}
            </span>
          ))}
        </motion.div>
        <div className="mt-10 flex justify-center">
          <CtaButton className="whitespace-nowrap">QUERO MEU CERTIFICADO!</CtaButton>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default CertificateSection;
