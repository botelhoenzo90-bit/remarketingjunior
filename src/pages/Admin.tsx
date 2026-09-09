import { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Search, Users, Mail, Phone, CalendarDays, Download, Trash2, RefreshCw } from "lucide-react";

type Lead = { id: string; name: string; email: string; phone: string; createdAt: string };

const ADMIN_PASSWORD = "jrtec2026";
const AUTH_KEY = "jrtec_admin_auth";

const Admin = () => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(AUTH_KEY) === "ok");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const loadLeads = useCallback(async () => {
    setLoading(true);
    const { data, error: fnError } = await supabase.functions.invoke("admin-leads", {
      body: { password: sessionStorage.getItem(AUTH_KEY) === "ok" ? ADMIN_PASSWORD : "" },
    });
    setLoading(false);
    if (fnError || !data?.leads) return;
    setLeads(
      (data.leads as Array<{ id: string; name: string; email: string; phone: string; created_at: string }>).map((row) => ({
        id: row.id,
        name: row.name,
        email: row.email,
        phone: row.phone,
        createdAt: row.created_at,
      })),
    );
  }, []);

  useEffect(() => {
    if (authed) void loadLeads();
  }, [authed, loadLeads]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return leads;
    return leads.filter((lead) => `${lead.name} ${lead.email} ${lead.phone}`.toLowerCase().includes(term));
  }, [leads, query]);

  const refresh = () => void loadLeads();

  const exportCsv = () => {
    const header = "Nome,Email,Telefone,Data\n";
    const rows = leads.map((lead) => [lead.name, lead.email, lead.phone, new Date(lead.createdAt).toLocaleString("pt-BR")].map((value) => `"${value.replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "leads-jrtec.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  if (!authed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#06101d] px-4 text-white">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (password === ADMIN_PASSWORD) {
              sessionStorage.setItem(AUTH_KEY, "ok");
              setAuthed(true);
              setError("");
            } else {
              setError("Senha incorreta.");
            }
          }}
          className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl"
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">JRTEC • Admin</p>
          <h1 className="mt-2 text-2xl font-black">Área restrita</h1>
          <p className="mt-2 text-sm text-slate-400">Digite a senha para ver os cadastros.</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Senha"
            className="mt-5 h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm outline-none focus:border-cyan-400"
          />
          {error && <p className="mt-2 text-sm font-bold text-red-400">{error}</p>}
          <button type="submit" className="mt-4 w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-black text-slate-950 hover:brightness-110">ENTRAR</button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#06101d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div><p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">JRTEC • Admin</p><h1 className="mt-2 text-3xl font-black sm:text-4xl">Leads da inscrição</h1><p className="mt-2 max-w-2xl text-sm text-slate-400">Painel para acompanhar os dados preenchidos antes do checkout.</p></div>
            <div className="flex flex-wrap gap-2"><button type="button" onClick={refresh} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold hover:bg-white/10"><RefreshCw className="h-4 w-4" /> {loading ? "Carregando..." : "Atualizar"}</button><button type="button" onClick={exportCsv} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-black text-slate-950 hover:brightness-110"><Download className="h-4 w-4" /> Exportar CSV</button></div>
          </div>
        </header>

        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><Users className="h-5 w-5 text-cyan-400" /><p className="mt-4 text-3xl font-black">{leads.length}</p><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Total de leads</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><Mail className="h-5 w-5 text-emerald-400" /><p className="mt-4 text-3xl font-black">{new Set(leads.map((lead) => lead.email.toLowerCase())).size}</p><p className="text-xs font-bold uppercase tracking-wider text-slate-500">E-mails registrados</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"><CalendarDays className="h-5 w-5 text-violet-400" /><p className="mt-4 text-3xl font-black">{leads.filter((lead) => new Date(lead.createdAt).toDateString() === new Date().toDateString()).length}</p><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Leads hoje</p></div>
        </section>

        <section className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          <div className="flex flex-col gap-3 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between"><div className="relative w-full max-w-md"><Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar nome, e-mail ou telefone" className="h-11 w-full rounded-xl border border-white/10 bg-black/20 pl-10 pr-4 text-sm outline-none focus:border-cyan-400" /></div><button type="button" onClick={clearLeads} className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-500/20 px-4 py-3 text-sm font-bold text-red-300 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /> Limpar dados</button></div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-black/20 text-xs uppercase tracking-wider text-slate-500"><tr><th className="px-5 py-4">Nome</th><th className="px-5 py-4">E-mail</th><th className="px-5 py-4">Telefone</th><th className="px-5 py-4">Data</th></tr></thead><tbody className="divide-y divide-white/5">{filtered.map((lead) => <tr key={lead.id} className="hover:bg-white/[0.03]"><td className="px-5 py-4 font-bold">{lead.name}</td><td className="px-5 py-4 text-slate-300">{lead.email}</td><td className="px-5 py-4 text-slate-300"><span className="inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-cyan-400" />{lead.phone}</span></td><td className="px-5 py-4 text-slate-400">{new Date(lead.createdAt).toLocaleString("pt-BR")}</td></tr>)}{filtered.length === 0 && <tr><td colSpan={4} className="px-5 py-14 text-center text-slate-500">Nenhum lead encontrado.</td></tr>}</tbody></table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Admin;
