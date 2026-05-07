import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { QuoteForm } from "@/components/site/QuoteForm";
import { text } from "@/config/text";
import { messages } from "@/config/messages";
import { images } from "@/config/images";
import { buttons } from "@/config/buttons";
import { CheckCircle2, Phone } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: text.seo.quote.title },
      { name: "description", content: text.seo.quote.description },
      { property: "og:title", content: text.seo.quote.title },
      { property: "og:description", content: text.seo.quote.description },
      { property: "og:image", content: images.hero },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <Layout>
      <section className="section" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-x text-white text-center">
          <div className="eyebrow text-[var(--color-accent)] mb-2">{messages.urgency}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{text.quote.title}</h1>
          <p className="opacity-90 max-w-2xl mx-auto">{text.quote.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3"><QuoteForm/></div>
          <aside className="lg:col-span-2 space-y-5">
            <div className="card-elevated p-6">
              <h3 className="font-extrabold text-lg mb-4 text-[var(--color-primary)]">What you get</h3>
              <ul className="space-y-2.5">
                {text.quote.perks.map(p => (
                  <li key={p} className="flex gap-2"><CheckCircle2 className="text-[var(--color-success)] shrink-0 mt-0.5" size={20}/>{p}</li>
                ))}
              </ul>
            </div>
            <div className="card-elevated p-6 text-center">
              <div className="eyebrow mb-1">Prefer to talk?</div>
              <div className="text-2xl font-extrabold text-[var(--color-primary)] mb-3">{text.brand.phoneDisplay}</div>
              <a href={buttons.callNow.link} className="btn-primary w-full"><Phone size={16}/>{buttons.callNow.text}</a>
              <div className="text-xs text-[var(--color-muted-foreground)] mt-3">{text.brand.hours}</div>
            </div>
            <div className="card-elevated overflow-hidden">
              <iframe
                src={images.mapEmbed}
                className="w-full h-56 border-0"
                loading="lazy"
                title="Service area map"
              />
              <div className="p-4 text-sm font-semibold text-center">{text.brand.address}</div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
