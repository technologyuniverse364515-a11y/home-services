import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { text } from "@/config/text";
import { buttons } from "@/config/buttons";
import { messages } from "@/config/messages";
import { images } from "@/config/images";
import { Phone, Star, CheckCircle2, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: text.seo.home.title },
      { name: "description", content: text.seo.home.description },
      { property: "og:title", content: text.seo.home.title },
      { property: "og:description", content: text.seo.home.description },
      { property: "og:image", content: images.hero },
      { name: "twitter:image", content: images.hero },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-x grid lg:grid-cols-2 gap-10 py-16 md:py-24 items-center text-white">
          <div>
            <div className="inline-block bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              {text.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              {text.hero.title}
            </h1>
            <p className="text-lg opacity-90 mb-6 max-w-xl">{text.hero.subtitle}</p>
            <ul className="grid sm:grid-cols-2 gap-2 mb-8 max-w-xl">
              {text.hero.bullets.map(b => (
                <li key={b} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 size={18} className="text-[var(--color-accent)] shrink-0"/> {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={buttons.callNow.link} className="btn-primary"><Phone size={18}/> {buttons.callNow.text}</a>
              <Link to={buttons.requestQuote.link} className="btn-outline border-white text-white bg-white/10 hover:bg-white hover:text-[var(--color-primary)]">
                {buttons.requestQuote.text}
              </Link>
            </div>
            <div className="flex items-center gap-4 mt-6 text-sm opacity-90">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[var(--color-accent)] text-[var(--color-accent)]"/>)}
              </div>
              <div>4.9★ from 5,000+ neighbors</div>
            </div>
          </div>
          <div className="relative">
            <img
              src={images.hero}
              alt={images.heroAlt}
              className="rounded-2xl shadow-2xl w-full h-[420px] object-cover"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-4 bg-white text-[var(--color-foreground)] rounded-xl p-4 shadow-xl flex items-center gap-3 max-w-xs">
              <ShieldCheck className="text-[var(--color-success)] shrink-0" size={32}/>
              <div className="text-sm font-semibold leading-tight">{messages.satisfactionGuarantee}</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-[var(--color-secondary)] py-5 border-b">
        <div className="container-x flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold text-[var(--color-muted-foreground)]">
          {messages.trustBadges.map(b => <span key={b}>✓ {b}</span>)}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow mb-2">{text.servicesOverview.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[var(--color-primary)]">{text.servicesOverview.title}</h2>
            <p className="text-[var(--color-muted-foreground)]">{text.servicesOverview.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {text.services.map(s => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="card-elevated overflow-hidden block">
                <img src={(images as any)[s.slug]} alt={s.shortTitle} className="w-full h-48 object-cover" loading="lazy"/>
                <div className="p-6">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <h3 className="text-xl font-extrabold mb-2 text-[var(--color-primary)]">{s.title}</h3>
                  <p className="text-sm text-[var(--color-muted-foreground)] mb-4">{s.description}</p>
                  <span className="text-[var(--color-accent)] font-bold text-sm">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section bg-[var(--color-secondary)]">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="eyebrow mb-2">{text.whyUs.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">{text.whyUs.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {text.whyUs.points.map(p => (
              <div key={p.title} className="card-elevated p-6 text-center">
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-extrabold mb-2 text-[var(--color-primary)]">{p.title}</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="section">
        <div className="container-x">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="eyebrow mb-2">Customer Stories</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">Trusted by 5,000+ Local Homes</h2>
            </div>
            <Link to="/reviews" className="btn-outline">{buttons.readReviews.text}</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {text.testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="card-elevated p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, k) => <Star key={k} size={16} className="fill-[var(--color-accent)] text-[var(--color-accent)]"/>)}
                </div>
                <p className="text-[var(--color-foreground)] mb-4 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-3 border-t">
                  <img src={images.testimonialUsers[i]} alt={t.name} className="w-10 h-10 rounded-full object-cover"/>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-[var(--color-muted-foreground)]">{t.city} • {t.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* BEFORE / AFTER */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="eyebrow mb-2">Recent Work</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-2">{text.beforeAfter.title}</h2>
            <p className="text-[var(--color-muted-foreground)]">{text.beforeAfter.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {images.beforeAfter.map((b, i) => (
              <div key={i} className="card-elevated overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={b.before} alt="Before" className="w-full h-48 object-cover"/>
                    <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Before</span>
                  </div>
                  <div className="relative">
                    <img src={b.after} alt="After" className="w-full h-48 object-cover"/>
                    <span className="absolute top-2 left-2 bg-[var(--color-success)] text-white text-xs px-2 py-1 rounded">After</span>
                  </div>
                </div>
                <div className="p-4 font-semibold text-sm">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--color-secondary)]">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-10">
            <div className="eyebrow mb-2">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)]">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {text.faq.map((f, i) => (
              <details key={i} className="card-elevated p-5 group">
                <summary className="cursor-pointer font-bold flex justify-between items-center list-none">
                  {f.q}<span className="text-[var(--color-accent)] group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-3 text-[var(--color-muted-foreground)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
