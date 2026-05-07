import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { Phone, Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
      <div className="container-x flex items-center justify-between py-3 gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)] grid place-items-center font-black text-lg">
            P
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-[var(--color-primary)]">{text.brand.name}</div>
            <div className="text-xs text-[var(--color-muted-foreground)] hidden sm:block">
              {text.brand.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {text.nav.map((n) => (
            <Link
              key={n.href}
              to={n.href}
              className="font-semibold text-sm text-[var(--color-foreground)] hover:text-[var(--color-accent)]"
              activeProps={{ style: { color: "var(--color-accent)" } }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={buttons.callNow.link} className="flex items-center gap-2 font-bold text-[var(--color-primary)]">
            <Phone size={18} className="text-[var(--color-accent)]" />
            {text.brand.phoneDisplay}
          </a>
          <Link to={buttons.requestQuote.link} className="btn-primary text-sm">
            {buttons.requestQuote.text}
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {text.nav.map((n) => (
              <Link key={n.href} to={n.href} onClick={() => setOpen(false)} className="font-semibold py-1">
                {n.label}
              </Link>
            ))}
            <a href={buttons.callNow.link} className="btn-secondary mt-2">
              <Phone size={16} /> {text.brand.phoneDisplay}
            </a>
            <Link to={buttons.requestQuote.link} className="btn-primary" onClick={() => setOpen(false)}>
              {buttons.requestQuote.text}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
