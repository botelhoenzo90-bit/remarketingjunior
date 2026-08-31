import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { PlayCircle, Eye } from "lucide-react";

const CoursePreviewSection = () => (
  <SectionWrapper className="py-20 relative bg-background">
    <div className="relative mx-auto max-w-4xl px-4">
      <div className="space-y-24">
        {/* Primeiro Vídeo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8 inline-flex flex-col items-center">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2">
                <PlayCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Como funciona o curso por dentro
              </h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Entenda a metodologia e como você vai aprender a dominar reparos em placa.
            </p>
          </div>
          <div className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-card/30 backdrop-blur-sm shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/rbkPaEU9rJs?rel=0"
              title="Como funciona o curso"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </motion.div>

        {/* Segundo Vídeo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8 inline-flex flex-col items-center">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Dê uma espiada na nossa plataforma
              </h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Conheça a nossa plataforma exclusiva e todos os módulos por dentro.
            </p>
          </div>
          <div className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-card/30 backdrop-blur-sm shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/G7SnLMD1-JM?rel=0"
              title="Espiada por dentro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </SectionWrapper>
);

export default CoursePreviewSection;