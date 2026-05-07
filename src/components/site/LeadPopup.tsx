import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { messages } from "@/config/messages";
import { buttons } from "@/config/buttons";
import { X } from "lucide-react";

const KEY = "profix_popup_dismissed";

export function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;
    const t = setTimeout(() => setOpen(true), 12000);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setOpen(false);
    try { sessionStorage.setItem(KEY, "1"); } catch {}
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4 animate-in fade-in">
      <div className="bg-card text-card-foreground rounded-2xl max-w-md w-full p-7 relative shadow-2xl">
        <button onClick={close} className="absolute right-3 top-3 p-1 opacity-70 hover:opacity-100" aria-label="Close">
          <X size={20}/>
        </button>
        <div className="eyebrow mb-2">{messages.popupOffer.eyebrow}</div>
        <h3 className="text-2xl font-extrabold mb-2 text-[var(--color-primary)]">{messages.popupOffer.title}</h3>
        <p className="text-[var(--color-muted-foreground)] mb-5">{messages.popupOffer.body}</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Link to={buttons.requestQuote.link} onClick={close} className="btn-primary flex-1">
            {messages.popupOffer.cta}
          </Link>
          <a href={buttons.callNow.link} onClick={close} className="btn-outline flex-1">
            {buttons.callNow.text}
          </a>
        </div>
      </div>
    </div>
  );
}
