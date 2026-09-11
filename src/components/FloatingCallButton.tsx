import { Phone } from 'lucide-react';
import { SALON_INFO } from '../data';

export default function FloatingCallButton() {
  return (
    <div
      id="floating-call-container"
      className="md:hidden fixed bottom-24 right-4 z-40"
    >
      <a
        id="floating-call-btn"
        href={`tel:${SALON_INFO.phoneRaw}`}
        aria-label="Appeler Gentleman Coif"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8214] text-[#0c0d12] font-bold text-xs shadow-2xl shadow-[#d4af37]/40 border border-[#f3e5ab] hover:scale-105 active:scale-95 transition-all"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0c0d12] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0c0d12]"></span>
        </span>
        <Phone className="w-4 h-4 fill-current" />
        <span className="tracking-wide">{SALON_INFO.phoneDisplay}</span>
      </a>
    </div>
  );
}
