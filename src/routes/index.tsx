import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import viviane from "@/assets/viviane.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight, Brain, HeartHandshake, GraduationCap, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avaliação Neuropsicológica em São Paulo · VRS Neuropsicologia" },
      { name: "description", content: "Avaliação Neuropsicológica em São Paulo com a neuropsicóloga Viviane Rocha. Investigação detalhada de atenção, memória, linguagem e raciocínio. Presencial e online." },
      { property: "og:title", content: "Avaliação Neuropsicológica em São Paulo · VRS Neuropsicologia" },
      { property: "og:description", content: "Especialista em Neuropsicologia pela UNIFESP. Atendimento humano, técnico e baseado em evidências em São Paulo." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/5511969438599?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20*Avalia%C3%A7%C3%A3o%20Neuropsicol%C3%B3gica*";

function Home() {
  return (
    <Layout>
      {/* HERO — SEO highlight */}
      <section className="relative bg-olive text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <img src={logo} alt="" className="absolute -right-32 top-1/2 -translate-y-1/2 w-[700px]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.4em] uppercase opacity-75">VRS · Neuropsicologia · CRP 06/167235</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mt-8">
              Avaliação<br />
              <span className="italic">Neuropsicológica</span><br />
              <span className="text-cream/85">em São Paulo</span>
            </h1>
            <p className="mt-8 max-w-xl text-cream/85 leading-relaxed text-lg font-light">
              Cuidado clínico que une ciência, sensibilidade e escuta qualificada.
              Avaliação detalhada das funções cognitivas — atenção, memória,
              linguagem e raciocínio — com direcionamento claro para cada história.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 items-center">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-cream text-olive-deep px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-cream/90 transition-colors">
                Agendar avaliação <ArrowRight size={14} />
              </a>
              <Link to="/servicos" className="text-cream/90 text-xs tracking-[0.25em] uppercase border-b border-cream/40 pb-1 hover:border-cream">
                Conheça os serviços
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:flex justify-end">
            <div className="w-[280px] aspect-[3/4] border border-cream/30 relative">
              <div className="absolute inset-3 border border-cream/20 flex items-center justify-center">
                <img src={logo} alt="Monograma VRS" className="w-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.35em] uppercase text-olive">Filosofia</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-5 text-olive-deep">
              Profissionalismo,<br />
              <em className="text-olive">credibilidade,</em><br />
              confiança & acolhimento.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 text-muted-foreground leading-relaxed">
            A VRS Neuropsicologia nasceu do propósito de enxergar cada pessoa além de rótulos,
            diagnósticos ou expectativas externas. Acredito que todas as pessoas merecem ser
            compreendidas em sua singularidade, com respeito à sua história.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            { icon: HeartHandshake, t: "Presença", d: "Escuta qualificada, vínculo terapêutico genuíno e respeito ao ritmo de cada pessoa." },
            { icon: Brain, t: "Ciência", d: "Avaliação fundamentada em evidências, instrumentos validados e prática atualizada." },
            { icon: Sparkles, t: "Humanidade", d: "Cuidado que vai além dos sintomas — sensível, técnico e profundamente humano." },
          ].map((p) => (
            <div key={p.t} className="bg-background p-10">
              <p.icon className="text-olive" size={28} strokeWidth={1.2} />
              <h3 className="font-serif text-2xl text-olive-deep mt-6">{p.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE PREVIEW */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img src={viviane} alt="Viviane Rocha, neuropsicóloga em São Paulo" width={1024} height={1024} className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-xs tracking-[0.35em] uppercase text-olive">Sobre mim</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-5 text-olive-deep">
              Sou a Viviane,<br />
              <em>Psicóloga & Neuropsicóloga.</em>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Especialista em Saúde Pública e Neuropsicologia pela <strong className="text-olive-deep font-medium">UNIFESP</strong>,
              em constante aprimoramento profissional. Atualmente em especialização em Neurologia
              Clínica com foco em Reabilitação, também pela Universidade Federal de São Paulo.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ampla experiência em psicoterapia, avaliação neuropsicológica em todas as faixas
              etárias, treino cognitivo e reabilitação neurocognitiva centrada na pessoa.
            </p>
            <Link to="/sobre" className="inline-flex items-center gap-2 mt-8 text-olive text-xs tracking-[0.25em] uppercase border-b border-olive/40 pb-1 hover:border-olive">
              Conheça minha trajetória <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase text-olive">Serviços</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 text-olive-deep">Como posso te ajudar?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {[
            { icon: Brain, t: "Avaliação Neuropsicológica", d: "Processo detalhado que investiga atenção, memória, linguagem e raciocínio — oferecendo clareza e direcionamento clínico." },
            { icon: HeartHandshake, t: "Psicoterapia", d: "Espaço de acolhimento e transformação. Autoconhecimento, fortalecimento emocional e estratégias para os desafios do dia a dia." },
            { icon: Sparkles, t: "Reabilitação Cognitiva", d: "Estimulação e fortalecimento de memória, atenção e organização, favorecendo autonomia e qualidade de vida." },
            { icon: GraduationCap, t: "Orientação Familiar & Escolar", d: "Suporte especializado para compreender dificuldades comportamentais e emocionais, no ambiente familiar e escolar." },
          ].map((s) => (
            <div key={s.t} className="bg-background p-10 group hover:bg-cream transition-colors">
              <s.icon className="text-olive" size={28} strokeWidth={1.2} />
              <h3 className="font-serif text-2xl mt-5 text-olive-deep">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-olive-deep text-cream">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs tracking-[0.35em] uppercase opacity-70">Vamos conversar</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-5">
            Agende sua <em>Avaliação Neuropsicológica</em> em São Paulo
          </h2>
          <p className="mt-6 text-cream/80 max-w-xl mx-auto">
            Atendimento presencial e online. Escolha o melhor dia e horário para você.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 mt-10 bg-cream text-olive-deep px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-cream/90">
            Agendar pelo WhatsApp <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </Layout>
  );
}
