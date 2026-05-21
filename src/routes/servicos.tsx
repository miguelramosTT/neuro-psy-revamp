import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import office from "@/assets/office.jpg";
import { Brain, HeartHandshake, GraduationCap, Sparkles, Check } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços · Avaliação Neuropsicológica em São Paulo" },
      { name: "description", content: "Avaliação Neuropsicológica em São Paulo, psicoterapia, reabilitação cognitiva e orientação familiar e escolar. Atendimento presencial e online." },
      { property: "og:title", content: "Serviços · VRS Neuropsicologia" },
      { property: "og:description", content: "Avaliação neuropsicológica, psicoterapia, reabilitação cognitiva e orientação familiar em São Paulo." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: Servicos,
});

const WHATSAPP = "https://wa.me/5511969438599?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20*Avalia%C3%A7%C3%A3o%20Neuropsicol%C3%B3gica*";

const services = [
  {
    icon: Brain,
    title: "Avaliação Neuropsicológica em São Paulo",
    desc: "Processo detalhado que investiga funções cognitivas como atenção, memória, linguagem, raciocínio e funções executivas — oferecendo clareza diagnóstica e direcionamento clínico.",
    bullets: ["Crianças, adolescentes, adultos e idosos", "Instrumentos validados", "Relatório completo", "Devolutiva clínica"],
    featured: true,
  },
  {
    icon: HeartHandshake,
    title: "Psicoterapia",
    desc: "Espaço de acolhimento e transformação. Promove autoconhecimento, fortalecimento emocional e desenvolvimento de estratégias para lidar com desafios internos e externos.",
    bullets: ["Sessões de 50 minutos", "Frequência semanal", "Presencial ou online", "Focada em você"],
  },
  {
    icon: Sparkles,
    title: "Reabilitação Cognitiva",
    desc: "Voltada para estimulação e fortalecimento de funções como memória, atenção e organização, favorecendo mais autonomia e qualidade de vida.",
    bullets: ["Treino cognitivo", "Reabilitação neurocognitiva", "Plano individualizado", "Acompanhamento de evolução"],
  },
  {
    icon: GraduationCap,
    title: "Orientação Familiar & Escolar",
    desc: "Suporte especializado para compreender dificuldades comportamentais e emocionais, contribuindo para um ambiente mais equilibrado e saudável no cotidiano.",
    bullets: ["Orientação a pais", "Articulação com escola", "Estratégias práticas", "Acompanhamento contínuo"],
  },
];

function Servicos() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12">
        <p className="text-xs tracking-[0.4em] uppercase text-olive">Serviços</p>
        <h1 className="font-serif text-5xl md:text-6xl mt-6 text-olive-deep max-w-3xl leading-[1.05]">
          Cuidado clínico que une <em>ciência</em> e sensibilidade.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          Atendimento humanizado, técnico e baseado em evidências para todas as faixas
          etárias. Presencial em São Paulo ou online, de onde você estiver.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 space-y-px bg-border">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid md:grid-cols-12 gap-10 p-10 md:p-14 ${s.featured ? "bg-olive text-cream" : "bg-background"}`}
          >
            <div className="md:col-span-1">
              <span className={`font-serif text-3xl ${s.featured ? "text-cream/70" : "text-olive/60"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="md:col-span-6">
              <s.icon size={26} strokeWidth={1.2} className={s.featured ? "text-cream" : "text-olive"} />
              <h2 className={`font-serif text-3xl md:text-4xl mt-5 ${s.featured ? "text-cream" : "text-olive-deep"}`}>
                {s.title}
              </h2>
              <p className={`mt-5 leading-relaxed ${s.featured ? "text-cream/85" : "text-muted-foreground"}`}>
                {s.desc}
              </p>
            </div>
            <ul className="md:col-span-5 space-y-3 text-sm md:pt-12">
              {s.bullets.map((b) => (
                <li key={b} className={`flex items-start gap-3 ${s.featured ? "text-cream/90" : "text-foreground/80"}`}>
                  <Check size={16} className={`mt-0.5 ${s.featured ? "text-cream" : "text-olive"}`} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <img src={office} alt="Consultório de neuropsicologia em São Paulo" width={1280} height={960} className="w-full aspect-[4/3] object-cover" loading="lazy" />
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-olive">Atendimento</p>
          <h2 className="font-serif text-4xl mt-4 text-olive-deep">Presencial em São Paulo ou online</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Entre em contato e escolha o melhor dia e horário para você. Atendimento
            individualizado para adultos, idosos, adolescentes e crianças.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-block mt-8 bg-olive text-cream px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-olive-deep">
            Agendar sessão
          </a>
        </div>
      </section>
    </Layout>
  );
}
