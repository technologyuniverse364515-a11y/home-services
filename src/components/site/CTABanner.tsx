import { Link } from "@tanstack/react-router";
import { buttons } from "@/config/buttons";
import { messages } from "@/config/messages";
import { Phone } from "lucide-react";

export function CTABanner() {
  return (
    <section className="section" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-x text-center text-white">
        <div className="eyebrow text-[var(--color-accent)] mb-3">{messages.urgency}</div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{messages.ctaBannerTitle}</h2>
        <p className="opacity-90 max-w-2xl mx-auto mb-7">{messages.ctaBannerSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={buttons.callNow.link} className="btn-primary text-base">
            <Phone size={18}/> {buttons.callNow.text}
          </a>
          <Link to={buttons.requestQuote.link} className="btn-outline text-base bg-white/10 text-white border-white hover:bg-white hover:text-[var(--color-primary)]">
            {buttons.requestQuote.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
