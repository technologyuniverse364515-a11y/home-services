import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCall } from "./StickyCall";
import { LeadPopup } from "./LeadPopup";
import { messages } from "@/config/messages";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[var(--color-accent)] text-[var(--color-accent-foreground)] text-center text-sm font-semibold py-2 px-3">
        {messages.emergencyBanner}
      </div>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyCall />
      <LeadPopup />
    </div>
  );
}
