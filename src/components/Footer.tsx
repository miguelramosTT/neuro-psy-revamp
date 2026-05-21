import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-olive-deep text-cream mt-32">
      <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-serif text-2xl tracking-[0.18em]">VRS</p>
          <p className="font-serif text-xs tracking-[0.35em] mt-1 opacity-80">NEUROPSICOLOGIA</p>
          <p className="mt-6 text-sm opacity-75 leading-relaxed max-w-xs">
            Avaliação neuropsicológica em São Paulo. Atendimento presencial e online.
          </p>
        </div>
        <div className="text-sm space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] opacity-60 mb-4">Navegação</p>
          <Link to="/" className="block opacity-85 hover:opacity-100">Início</Link>
          <Link to="/sobre" className="block opacity-85 hover:opacity-100">Sobre</Link>
          <Link to="/servicos" className="block opacity-85 hover:opacity-100">Serviços</Link>
          <Link to="/contato" className="block opacity-85 hover:opacity-100">Contato</Link>
        </div>
        <div className="text-sm space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] opacity-60 mb-4">Contato</p>
          <a href="mailto:psico.vrs@gmail.com" className="flex items-center gap-2 opacity-85 hover:opacity-100">
            <Mail size={14} /> psico.vrs@gmail.com
          </a>
          <a href="https://wa.me/5511969438599" className="flex items-center gap-2 opacity-85 hover:opacity-100">
            <Phone size={14} /> +55 11 96943-8599
          </a>
          <div className="flex items-center gap-4 pt-3">
            <a href="https://www.instagram.com/vrs_neuropsicologia" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/VRSNeuroPsi" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://www.linkedin.com/in/viviane-r-s-angelo" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs opacity-60 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} VRS Neuropsicologia · CRP 06/167235</span>
          <span>Avaliação Neuropsicológica em São Paulo</span>
        </div>
      </div>
    </footer>
  );
}
