import SectionWrapper from "./SectionWrapper";
import CtaButton from "./CtaButton";
import { CheckCircle2, XCircle, X, ArrowRight } from "lucide-react";

const TwoChoicesSection = () => (
  <SectionWrapper className="py-20 sm:py-24">
    <div className="mx-auto max-w-5xl px-4">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-primary">Chegamos ao ponto da decisão</p>
        <h2 className="mb-4 font-display text-3xl font-black sm:text-5xl">Depois de tudo que você viu, <span className="text-gradient">o que você vai fazer?</span></h2>
        <p className="mx-auto max-w-2xl text-muted-foreground sm:text-lg">Não é sobre comprar por impulso. É sobre decidir se você quer continuar exatamente como está ou começar a construir uma nova habilidade profissional.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border-2 border-destructive/40 bg-card p-7 sm:p-8">
          <div className="absolute inset-0 bg-destructive/5 pointer-events-none" />
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/15"><XCircle className="h-6 w-6 text-destructive" /></div>
            <h3 className="mb-2 font-display text-xl font-black text-destructive">CONTINUAR ADIANDO</h3>
            <p className="mb-5 text-sm text-muted-foreground">Você pode fechar esta página e voltar outro dia. Mas o problema que você quer resolver continua esperando.</p>
            <ul className="w-full space-y-3 text-left text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />Continuar limitado aos serviços que já domina</li>
              <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />Continuar dependendo de terceiros para reparos avançados</li>
              <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />Continuar pesquisando sem um caminho organizado</li>
              <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />Deixar para depois aquilo que você já sabe que quer aprender</li>
            </ul>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border-2 border-accent/50 bg-card p-7 shadow-[0_0_45px_hsl(142_76%_46%/0.08)] sm:p-8">
          <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15"><CheckCircle2 className="h-6 w-6 text-accent" /></div>
            <h3 className="mb-2 font-display text-xl font-black text-accent">COMEÇAR COM UM CAMINHO</h3>
            <p className="mb-5 text-sm text-muted-foreground">Você entra para estudar, praticar e ampliar sua capacidade técnica no seu ritmo — sem precisar saber tudo no primeiro dia.</p>
            <ul className="w-full space-y-3 text-left text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Aprender diagnóstico e reparos de placa de forma organizada</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Estudar microssoldagem e técnicas avançadas com aulas práticas</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Ampliar os serviços que você pode oferecer na bancada</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Ter acesso ao conteúdo, bônus, suporte e garantia apresentados na oferta</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center"><p className="mb-5 text-sm font-semibold text-muted-foreground">Se você ainda não assistiu às aulas gratuitas, comece por elas.</p><CtaButton href="#pricing" className="whitespace-nowrap">EU ESCOLHO COMEÇAR → <ArrowRight className="ml-1 h-4 w-4" /></CtaButton></div>
    </div>
  </SectionWrapper>
);

export default TwoChoicesSection;
