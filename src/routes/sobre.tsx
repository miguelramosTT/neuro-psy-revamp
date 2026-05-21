import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import viviane from "@/assets/viviane.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre · Viviane Rocha, Neuropsicóloga em São Paulo" },
      { name: "description", content: "Viviane Rocha — Psicóloga e Neuropsicóloga (CRP 06/167235), especialista pela UNIFESP. Avaliação Neuropsicológica em São Paulo, psicoterapia e reabilitação cognitiva." },
      { property: "og:title", content: "Sobre · VRS Neuropsicologia" },
      { property: "og:description", content: "Conheça a trajetória da neuropsicóloga Viviane Rocha." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12">
        <p className="text-xs tracking-[0.4em] uppercase text-olive">Sobre a marca</p>
        <h1 className="font-serif text-5xl md:text-6xl mt-6 text-olive-deep max-w-3xl leading-[1.05]">
          A VRS Neuropsicologia nasceu para enxergar cada pessoa <em>além de rótulos</em>.
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12 py-16">
        <div className="md:col-span-5">
          <img src={viviane} alt="Viviane Rocha, neuropsicóloga em São Paulo" width={1024} height={1024} className="w-full aspect-[4/5] object-cover" loading="lazy" />
          <p className="mt-4 text-xs tracking-[0.25em] uppercase text-muted-foreground">Viviane Rocha · CRP 06/167235</p>
        </div>
        <div className="md:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-[17px]">
          <p>
            Acredito que todas as pessoas merecem ser compreendidas em sua singularidade,
            com respeito à sua história. Minha trajetória é construída sobre três pilares
            fundamentais: <strong className="text-olive-deep font-medium">presença, escuta qualificada e compromisso com a ciência.</strong>
          </p>
          <p>
            Cuidar do ser humano exige sensibilidade, mas também exige precisão técnica.
            Por isso, busco unir a humanização e a fundamentação científica, e tecnologia
            em cada avaliação e intervenção.
          </p>
          <p>
            Sou Psicóloga e Neuropsicóloga, especialista em Saúde Pública e Neuropsicologia
            pela <strong className="text-olive-deep font-medium">UNIFESP</strong>, em
            constante aprimoramento profissional. Atualmente, estou em especialização
            em Neurologia Clínica com foco em Reabilitação, também pela Universidade
            Federal de São Paulo.
          </p>
          <p>
            Tenho ampla experiência em psicoterapia, avaliação neuropsicológica em todas as
            faixas etárias, treino cognitivo e reabilitação neurocognitiva centrada na pessoa
            — unindo ciência, tecnologia e sensibilidade clínica.
          </p>

          <div className="border-l-2 border-olive pl-6 mt-10">
            <p className="font-serif text-2xl italic text-olive-deep">
              "Um cuidado baseado em presença, evidência e humanidade — respeitando o
              ritmo, a singularidade e a trajetória de cada paciente."
            </p>
          </div>

          <div className="pt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
            <span className="border border-border px-4 py-2 text-olive-deep">Presencial</span>
            <span className="border border-border px-4 py-2 text-olive-deep">Online</span>
            <span className="border border-border px-4 py-2 text-olive-deep">Todas as faixas etárias</span>
          </div>

          <div className="pt-6">
            <Link to="/contato" className="inline-block text-olive text-xs tracking-[0.25em] uppercase border-b border-olive/40 pb-1">
              Entre em contato →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
