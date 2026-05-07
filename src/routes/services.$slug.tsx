import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { text, type Service } from "@/config/text";
import { images } from "@/config/images";
import { buttons } from "@/config/buttons";
import { messages } from "@/config/messages";
import { Phone, CheckCircle2, ShieldCheck, Clock, DollarSign } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = text.services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service Not Found" }] };
    const img = (images as any)[s.slug];
    return {
      meta: [
        { title: `${s.title} | ${text.brand.name}` },
        { name: "description", content: s.description },
        { property: "og:title", content: s.title },
        { property: "og:description", content: s.description },
        { property: "og:image", content: img },
        { name: "twitter:image", content: img },
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <div className="container-x section text-center">
        <h1 className="text-3xl font-extrabold mb-3">Service not found</h1>
        <Link to="/services" className="btn-primary">View All Services</Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout><div className="container-x section text-center text-red-600">{error.message}</div></Layout>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData() as { service: Service };
  const img = (images as any)[s.slug];

  return (
    <Layout>
      <section className="relative" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-x py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center text-white">
          <div>
            <Link to="/services" className="text-sm opacity-80 hover:opacity-100">← All Services</Link>
            <div className="text-4xl mt-3">{s.icon}</div>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4">{s.title}</h1>
            <p className="opacity-90 text-lg mb-6 max-w-xl">{s.description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={buttons.callNow.link} className="btn-primary"><Phone size={18}/> {buttons.callNow.text}</a>
              <Link to={buttons.requestQuote.link} className="btn-outline border-white text-white bg-white/10 hover:bg-white hover:text-[var(--color-primary)]">{buttons.requestQuote.text}</Link>
            </div>
          </div>
          <img src={img} alt={s.shortTitle} className="rounded-2xl shadow-2xl w-full h-80 object-cover"/>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-primary)] mb-4">Why customers call us first</h2>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-8">{s.seoIntro}</p>
            <h3 className="text-xl font-extrabold mb-4 text-[var(--color-primary)]">What's Included</h3>
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {s.features.map(f => (
                <li key={f} className="flex items-start gap-2"><CheckCircle2 className="text-[var(--color-success)] shrink-0 mt-0.5" size={20}/>{f}</li>
              ))}
            </ul>
            <h3 className="text-xl font-extrabold mb-4 text-[var(--color-primary)]">Frequently Asked</h3>
            <div className="space-y-3">
              {s.faq.map((f, i) => (
                <details key={i} className="card-elevated p-5 group">
                  <summary className="cursor-pointer font-bold list-none flex justify-between items-center">{f.q}<span className="text-[var(--color-accent)] group-open:rotate-45 transition-transform text-xl">+</span></summary>
                  <p className="mt-3 text-[var(--color-muted-foreground)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="card-elevated p-6 h-fit sticky top-24">
            <div className="text-center mb-5">
              <div className="eyebrow mb-1">{messages.urgency}</div>
              <div className="text-2xl font-extrabold text-[var(--color-primary)]">Get Help Today</div>
            </div>
            <div className="space-y-3 mb-5 text-sm">
              <div className="flex gap-3"><Clock className="text-[var(--color-accent)]"/><div><div className="font-bold">60-Min Response</div><div className="text-[var(--color-muted-foreground)]">Average 47 minutes</div></div></div>
              <div className="flex gap-3"><DollarSign className="text-[var(--color-accent)]"/><div><div className="font-bold">Upfront Pricing</div><div className="text-[var(--color-muted-foreground)]">No surprise fees</div></div></div>
              <div className="flex gap-3"><ShieldCheck className="text-[var(--color-accent)]"/><div><div className="font-bold">Licensed & Insured</div><div className="text-[var(--color-muted-foreground)]">Workmanship warranty</div></div></div>
            </div>
            <a href={buttons.callNow.link} className="btn-primary w-full mb-2"><Phone size={16}/>{text.brand.phoneDisplay}</a>
            <Link to={buttons.requestQuote.link} className="btn-outline w-full">{buttons.requestQuote.text}</Link>
          </aside>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
