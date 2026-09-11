import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Phone, Check, ShieldCheck, Car } from 'lucide-react';
import { SALON_INFO } from '../data';

export default function LocationMap() {
  return (
    <section id="localisation" className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#d4af37]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            Accès & Horaires
          </span>
          <span className="w-6 h-[1px] bg-[#d4af37]" />
        </div>
        <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Nous Trouver à Tunis
        </h2>
        <p className="text-[#a0a5b5] text-sm sm:text-base leading-relaxed">
          Situé stratégiquement à Tunis avec un accès facile, ouvert 7 jours sur 7 jusqu’à 23h00 pour s’adapter à votre rythme de vie.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Address, Hours, Info Cards (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-6"
        >
          {/* Main Info Card */}
          <div className="p-7 rounded-2xl glass-panel border border-[#d4af37]/30 shadow-xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{SALON_INFO.status}</span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-11 h-11 rounded-xl bg-[#1d202d] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#8e94a5] uppercase tracking-wider block">
                  Adresse officielle
                </span>
                <h3 className="font-luxury text-xl font-bold text-white mt-0.5">
                  Gentleman Coif
                </h3>
                <p className="text-sm text-[#d1c7bd] mt-1 font-medium">
                  Plus Code : <span className="text-[#f3e5ab] font-bold">{SALON_INFO.addressCode}</span>
                </p>
                <p className="text-xs text-[#8e94a5]">
                  Tunis, Tunisie
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 mb-6 pt-6 border-t border-white/10">
              <div className="w-11 h-11 rounded-xl bg-[#1d202d] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#8e94a5] uppercase tracking-wider block">
                  Horaires d'ouverture
                </span>
                <p className="text-sm font-bold text-white mt-0.5">
                  Lundi au Dimanche (7j/7)
                </p>
                <p className="text-xs text-[#d4af37] font-semibold mt-0.5">
                  10:00 — 23:00 (Service nocturne)
                </p>
                <p className="text-[11px] text-[#8e94a5] mt-1">
                  Sans interruption toute la journée
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-8 pt-6 border-t border-white/10">
              <div className="w-11 h-11 rounded-xl bg-[#1d202d] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#8e94a5] uppercase tracking-wider block">
                  Téléphone direct
                </span>
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="font-luxury text-2xl font-bold text-[#f3e5ab] hover:text-[#d4af37] transition-colors block mt-0.5"
                >
                  {SALON_INFO.phoneDisplay}
                </a>
                <p className="text-[11px] text-[#8e94a5]">
                  Appels & réservations instantanés
                </p>
              </div>
            </div>

            {/* Itinerary CTA */}
            <a
              id="maps-itinerary-btn"
              href={SALON_INFO.googleDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c07b] to-[#aa8214] text-[#0c0d12] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg shadow-[#d4af37]/25 hover:opacity-95 transition-opacity"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>Ouvrir l'itinéraire Google Maps</span>
            </a>
          </div>

          {/* Salon Amenities */}
          <div className="p-5 rounded-2xl bg-[#13151f] border border-white/10 grid grid-cols-2 gap-3 text-xs text-[#a0a5b5]">
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-[#d4af37]" />
              <span>Stationnement accessible</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#d4af37]" />
              <span>Salon climatisé & WiFi</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Hygiène certifiée</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#d4af37]" />
              <span>Paiement espèces / TPE</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Google Maps Iframe (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col"
        >
          <div className="relative w-full h-[450px] lg:h-full min-h-[420px] rounded-2xl overflow-hidden border-2 border-[#d4af37]/35 shadow-2xl bg-[#11131a] group">
            {/* Embedded Google Maps with no API key requirement */}
            <iframe
              title="Carte localisation Gentleman Coif Tunis"
              src={SALON_INFO.embedMapUrl}
              className="w-full h-full border-0 filter contrast-105"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay badge on the map */}
            <div className="absolute top-4 left-4 p-3 rounded-xl glass-panel border border-[#d4af37]/40 shadow-lg pointer-events-none max-w-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-luxury font-bold text-xs text-white">Gentleman Coif Tunis</span>
              </div>
              <p className="text-[11px] text-[#c5a059] mt-0.5 font-mono">
                {SALON_INFO.addressCode}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
