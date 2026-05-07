import { buttons } from "@/config/buttons";
import { text } from "@/config/text";
import { Phone } from "lucide-react";

export function StickyCall() {
  return (
    <a
      href={buttons.callNow.link}
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 btn-primary text-base shadow-2xl"
    >
      <Phone size={18} /> Call {text.brand.phoneDisplay}
    </a>
  );
}
