import { CheckCircle2 } from "lucide-react";

const items = [
  "Curso 2026",
  "Aulas atualizadas com aparelhos novos",
  "Acesso por 1 ano",
  "Curso EAD em vídeo aulas",
  "Suporte pra tirar dúvidas",
  "Certificado",
  "Grupo de alunos",
];

const TrustCarousel = () => {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <section className="overflow-hidden border-y border-cyan-200/30 bg-[#0ea5e9] py-4 text-white">
      <div className="w-max marquee-track flex items-center gap-10 sm:gap-14">
        {repeatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-black uppercase tracking-wider sm:text-sm"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-100" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustCarousel;
