import { Link } from "@tanstack/react-router";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { messages } from "@/config/messages";
import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)] mt-20">
      <div className="container-x py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-extrabold text-xl mb-3">{text.brand.name}</div>
          <p className="text-sm opacity-80 mb-4">{text.footer.about}</p>
          <div className="flex items-center gap-2 text-sm opacity-90"><ShieldCheck size={16}/> {text.brand.license}</div>
        </div>
        <div>
          <div className="font-bold mb-3 text-sm uppercase tracking-wider opacity-80">Contact</div>
          <a href={buttons.callNow.link} className="flex items-center gap-2 mb-2 hover:text-[var(--color-accent)]">
            <Phone size={16}/> {text.brand.phoneDisplay}
          </a>
          <div className="flex items-start gap-2 mb-2 text-sm opacity-90"><MapPin size={16} className="mt-0.5"/> {text.brand.address}</div>
          <div className="flex items-center gap-2 text-sm opacity-90"><Clock size={16}/> {text.brand.hours}</div>
        </div>
        <div>
          <div className="font-bold mb-3 text-sm uppercase tracking-wider opacity-80">Services</div>
          <ul className="space-y-2 text-sm">
            {text.services.map(s => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-[var(--color-accent)]">{s.shortTitle}</Link>
              </li>
            ))}
            <li><Link to="/services" className="hover:text-[var(--color-accent)]">All Services</Link></li>
            <li><Link to="/reviews" className="hover:text-[var(--color-accent)]">Reviews</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-3 text-sm uppercase tracking-wider opacity-80">Service Areas</div>
          <ul className="grid grid-cols-2 gap-1 text-sm opacity-90">
            {text.footer.serviceAreas.map(a => <li key={a}>{a}</li>)}
          </ul>
          <div className="mt-4 text-xs opacity-75">{messages.trust}</div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-4 text-xs opacity-70 text-center">{text.footer.copyright}</div>
      </div>
    </footer>
  );
}
