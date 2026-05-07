import { useState } from "react";
import { text } from "@/config/text";
import { messages } from "@/config/messages";
import { buttons } from "@/config/buttons";
import { CheckCircle2 } from "lucide-react";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus("err");
      return;
    }
    setStatus("ok");
    form.reset();
  }

  if (status === "ok") {
    return (
      <div className="card-elevated p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 text-[var(--color-success)]" size={48} />
        <h3 className="text-xl font-extrabold mb-2">Thank you!</h3>
        <p className="text-[var(--color-muted-foreground)]">{messages.formSuccess}</p>
      </div>
    );
  }

  const f = text.quote.fields;
  const inputCls = "w-full rounded-md border border-[var(--color-border)] px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]";

  return (
    <form onSubmit={onSubmit} className="card-elevated p-6 md:p-8 grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <label className="grid gap-1.5 text-sm font-semibold">
          {f.name}
          <input required name="name" className={inputCls} placeholder="John Smith" />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          {f.phone}
          <input required type="tel" name="phone" className={inputCls} placeholder="(555) 555-5555" />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-semibold">
        {f.email}
        <input required type="email" name="email" className={inputCls} placeholder="you@example.com" />
      </label>
      <div className="grid md:grid-cols-2 gap-4">
        <label className="grid gap-1.5 text-sm font-semibold">
          {f.service}
          <select required name="service" className={inputCls} defaultValue="">
            <option value="" disabled>Select a service…</option>
            {text.quote.serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          {f.address}
          <input required name="address" className={inputCls} placeholder="123 Main St, City" />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-semibold">
        {f.message}
        <textarea required name="message" rows={4} className={inputCls} placeholder="Briefly describe what's going on…" />
      </label>
      <button type="submit" className="btn-primary text-base mt-2">{buttons.submitQuote.text}</button>
      {status === "err" && (
        <div className="text-sm text-red-600">{messages.formError}</div>
      )}
      <div className="text-xs text-[var(--color-muted-foreground)] text-center">
        🔒 Your information is private and never shared. Response within 15 minutes during business hours.
      </div>
    </form>
  );
}
