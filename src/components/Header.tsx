import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP = "https://wa.me/5511969438599?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20*Avalia%C3%A7%C3%A3o%20Neuropsicol%C3%B3gica*";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <a href="/" className="font-serif text-xl tracking-[0.25em] text-olive-deep">
          VRS<span className="text-olive"> · </span>NEUROPSICOLOGIA
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          className="hidden md:inline-flex px-5 py-2.5 bg-olive text-cream text-xs tracking-[0.2em] uppercase hover:bg-olive-deep transition-colors"
        >
          Agendar
        </a>
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
          <div className="px-6 py-6">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="block px-5 py-3 bg-olive text-cream text-xs tracking-[0.2em] uppercase text-center">
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
