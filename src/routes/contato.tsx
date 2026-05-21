import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato · VRS Neuropsicologia · São Paulo" },
      { name: "description", content: "Agende sua avaliação neuropsicológica em São Paulo. Atendimento presencial e online com Viviane Rocha (CRP 06/167235)." },
      { property: "og:title", content: "Contato · VRS Neuropsicologia" },
      { property: "og:description", content: "Fale com a VRS Neuropsicologia em São Paulo." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

const WHATSAPP = "https://wa.me/5511969438599?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20*Avalia%C3%A7%C3%A3o%20Neuropsicol%C3%B3gica*";

function Contato() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12">
        <p className="text-xs tracking-[0.4em] uppercase text-olive">Contato</p>
        <h1 className="font-serif text-5xl md:text-6xl mt-6 text-olive-deep max-w-3xl leading-[1.05]">
          Estou aqui para <em>ajudar você</em> sempre que precisar.
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-px bg-border">
        <a href={WHATSAPP} target="_blank" rel="noopener" className="bg-olive text-cream p-12 group hover:bg-olive-deep transition-colors">
          <Phone size={28} strokeWidth={1.2} />
          <h2 className="font-serif text-3xl mt-6">WhatsApp</h2>
          <p className="mt-3 text-cream/85">Resposta rápida e prática para agendamento.</p>
          <p className="mt-8 text-lg tracking-wide">+55 11 96943-8599</p>
        </a>
        <a href="mailto:psico.vrs@gmail.com" className="bg-cream p-12 hover:bg-background transition-colors">
          <Mail size={28} strokeWidth={1.2} className="text-olive" />
          <h2 className="font-serif text-3xl mt-6 text-olive-deep">E-mail</h2>
          <p className="mt-3 text-muted-foreground">Para questões mais detalhadas e parcerias.</p>
          <p className="mt-8 text-lg text-olive-deep">psico.vrs@gmail.com</p>
        </a>
        <div className="bg-background p-12">
          <MapPin size={28} strokeWidth={1.2} className="text-olive" />
          <h2 className="font-serif text-3xl mt-6 text-olive-deep">Atendimento</h2>
          <p className="mt-3 text-muted-foreground">
            Presencial em São Paulo · SP<br />
            Atendimento online para todo o Brasil
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">CRP 06/167235</p>
        </div>
        <div className="bg-background p-12">
          <Instagram size={28} strokeWidth={1.2} className="text-olive" />
          <h2 className="font-serif text-3xl mt-6 text-olive-deep">Redes sociais</h2>
          <div className="mt-6 flex gap-5 text-olive-deep">
            <a href="https://www.instagram.com/vrs_neuropsicologia" className="flex items-center gap-2 hover:text-olive"><Instagram size={18} /> Instagram</a>
            <a href="https://www.facebook.com/VRSNeuroPsi" className="flex items-center gap-2 hover:text-olive"><Facebook size={18} /></a>
            <a href="https://www.linkedin.com/in/viviane-r-s-angelo" className="flex items-center gap-2 hover:text-olive"><Linkedin size={18} /></a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
