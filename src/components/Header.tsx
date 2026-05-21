import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
] as const;

const WHATSAPP = "https://wa.me/5511969438599?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20*Avalia%C3%A7%C3%A3o%20Neuropsicol%C3%B3gica*";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-[0.25em] text-olive-deep">
          VRS<span className="text-olive"> · </span>NEUROPSICOLOGIA
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/70 hover:text-olive transition-colors"
              activeProps={{ className: "text-olive" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="px-5 py-2.5 bg-olive text-cream text-xs tracking-[0.2em] uppercase hover:bg-olive-deep transition-colors"
          >
            Agendar
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-olive-deep"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-foreground/80 text-sm"
              >
                {n.label}
              </Link>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noopener" className="px-5 py-3 bg-olive text-cream text-xs tracking-[0.2em] uppercase text-center">
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
