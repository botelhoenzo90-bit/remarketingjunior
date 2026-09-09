import { motion } from "framer-motion";
import { ArrowRight, UserRound, Mail, Phone } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { supabase } from "@/integrations/supabase/client";

const CHECKOUT_URL = "https://pay.kiwify.com.br/eOrXUxm";

const SignupSection = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const lead = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
    };

    try {
      await supabase.from("leads").insert(lead);
    } catch {
      // segue para o checkout mesmo se o registro falhar
    }

    form.reset();
    window.location.href = CHECKOUT_URL;
  };

  return (
    <SectionWrapper id="cadastro" className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-3xl px-4 text-center">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary">Último passo</span>
        <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-5xl">Cadastre seus dados e avance para o treinamento.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Preencha seus dados para continuar. Depois, siga para a página segura de pagamento e utilize o cupom <strong className="text-foreground">JRTEC30</strong>.</p>
        <form onSubmit={handleSubmit} className="mx-auto mt-9 max-w-xl space-y-4 rounded-3xl border border-border bg-card p-5 text-left shadow-2xl sm:p-7">
          <label className="block"><span className="mb-2 block text-xs font-black uppercase tracking-wider text-muted-foreground">Nome</span><div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3"><UserRound className="h-4 w-4 text-primary" /><input required name="name" type="text" placeholder="Seu nome" className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground" /></div></label>
          <label className="block"><span className="mb-2 block text-xs font-black uppercase tracking-wider text-muted-foreground">E-mail</span><div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3"><Mail className="h-4 w-4 text-primary" /><input required name="email" type="email" placeholder="seuemail@email.com" className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground" /></div></label>
          <label className="block"><span className="mb-2 block text-xs font-black uppercase tracking-wider text-muted-foreground">WhatsApp</span><div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3"><Phone className="h-4 w-4 text-primary" /><input required name="phone" type="tel" placeholder="(00) 00000-0000" className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground" /></div></label>
          <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-black text-primary-foreground shadow-[0_12px_35px_hsl(192_95%_55%/0.2)] transition hover:brightness-110">CONTINUAR PARA A OFERTA <ArrowRight className="h-4 w-4" /></button>
          <p className="text-center text-[11px] text-muted-foreground">Cupom: <strong className="text-accent">JRTEC30</strong> · 30% de desconto</p>
        </form>
      </motion.div>
    </SectionWrapper>
  );
};

export default SignupSection;
