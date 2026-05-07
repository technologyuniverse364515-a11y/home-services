import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CTABanner } from "@/components/site/CTABanner";
import { text } from "@/config/text";
import { images } from "@/config/images";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: text.seo.reviews.title },
      { name: "description", content: text.seo.reviews.description },
      { property: "og:title", content: text.seo.reviews.title },
      { property: "og:description", content: text.seo.reviews.description },
      { property: "og:image", content: images.hero },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <Layout>
      <section className="section" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-x text-white text-center">
          <div className="eyebrow text-[var(--color-accent)] mb-2">Reviews</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{text.reviews.title}</h1>
          <p className="opacity-90 max-w-2xl mx-auto mb-10">{text.reviews.subtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {text.reviews.stats.map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-5 backdrop-blur">
                <div className="text-3xl font-extrabold text-[var(--color-accent)]">{s.value}</div>
                <div className="text-sm opacity-90">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {text.testimonials.map((t, i) => (
            <article key={i} className="card-elevated p-6 flex flex-col">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, k) => <Star key={k} size={16} className="fill-[var(--color-accent)] text-[var(--color-accent)]"/>)}
              </div>
              <p className="text-[var(--color-foreground)] mb-5 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-3 border-t">
                <img src={images.testimonialUsers[i % images.testimonialUsers.length]} alt={t.name} className="w-11 h-11 rounded-full object-cover"/>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">{t.city} • {t.service}</div>
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
