import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { text } from "@/config/text";
import { images } from "@/config/images";
import { buttons } from "@/config/buttons";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: text.seo.services.title },
      { name: "description", content: text.seo.services.description },
      { property: "og:title", content: text.seo.services.title },
      { property: "og:description", content: text.seo.services.description },
      { property: "og:image", content: images.hero },
    ],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/services/$slug");
  if (isChild) return <Outlet />;
  return (
    <Layout>
      <section className="section" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-x text-white text-center">
          <div className="eyebrow text-[var(--color-accent)] mb-2">Our Services</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Complete Home Repair Services</h1>
          <p className="opacity-90 max-w-2xl mx-auto">One trusted team for plumbing, electrical and HVAC. Same-day service across the metro.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-8">
          {text.services.map((s, idx) => (
            <article key={s.slug} className={`card-elevated overflow-hidden grid md:grid-cols-2 ${idx % 2 ? "md:[direction:rtl]" : ""}`}>
              <img src={(images as any)[s.slug]} alt={s.shortTitle} className="w-full h-full min-h-[260px] object-cover" loading="lazy"/>
              <div className="p-7 md:p-9 [direction:ltr]">
                <div className="text-3xl mb-2">{s.icon}</div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-primary)] mb-3">{s.title}</h2>
                <p className="text-[var(--color-muted-foreground)] mb-4">{s.description}</p>
                <ul className="grid sm:grid-cols-2 gap-1.5 mb-5">
                  {s.features.slice(0,4).map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 size={16} className="text-[var(--color-success)] mt-0.5 shrink-0"/>{f}</li>
                  ))}
                </ul>
                <div className="flex gap-3 flex-wrap">
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="btn-primary">{buttons.learnMore.text}</Link>
                  <Link to={buttons.requestQuote.link} className="btn-outline">{buttons.requestQuote.text}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
