import { motion } from 'motion/react';
import { Star, Phone, Calendar, Clock, MapPin, Scissors, ShieldCheck } from 'lucide-react';
import { SALON_INFO } from '../data';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Image with Deep Vignette & Dark Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop"
          alt="Ambiance salon de coiffure Gentleman Coif Tunis"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter brightness-75 contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend smoothly into dark canvas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/80 to-[#0c0d12]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Salon Status & Google Rating Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12141c]/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{SALON_INFO.status}</span>
          </div>

          {/* 5.0 Google Reviews Badge */}
          <a
            href="#avis"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a24]/90 border border-[#d4af37]/35 text-[#f3e5ab] text-xs font-semibold backdrop-blur-md hover:border-[#d4af37] transition-colors shadow-sm"
          >
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
              ))}
            </div>
            <span className="font-bold text-white">5,0</span>
            <span className="text-[#a0a5b5]">({SALON_INFO.reviewCount} avis Google)</span>
          </a>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-4"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#d4af37]/80" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#d4af37] uppercase">
              Salon de Coiffure Homme & Barbershop
            </span>
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#d4af37]/80" />
          </div>

          <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.1]">
            <span className="block gold-gradient-text drop-shadow-sm">GENTLEMAN</span>
            <span className="block text-stone-100 tracking-wider">COIF</span>
          </h1>
        </motion.div>

        {/* Catchphrase */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl md:text-2xl text-[#d1c7bd] font-light max-w-2xl mx-auto mb-8 leading-relaxed italic"
        >
          « {SALON_INFO.tagline} »
        </motion.p>

        {/* Key USPs / Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 w-full max-w-xl text-left"
        >
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl glass-panel-subtle">
            <Scissors className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span className="text-xs text-[#e8dfd8]">Coupes & Barbe sur-mesure</span>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl glass-panel-subtle">
            <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span className="text-xs text-[#e8dfd8]">Nocturne jusqu’à 23h00</span>
          </div>
          <div className="flex items-center gap-2.5 p-2.5 rounded-xl glass-panel-subtle col-span-2 sm:col-span-1 justify-center sm:justify-start">
            <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span className="text-xs text-[#e8dfd8]">100% Satisfaction client</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA - Book appointment */}
          <button
            id="hero-book-cta"
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c07b] to-[#aa8214] text-[#0c0d12] font-bold text-base shadow-lg shadow-[#d4af37]/25 hover:shadow-xl hover:shadow-[#d4af37]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#0c0d12]" />
            <span>Prendre rendez-vous</span>
          </button>

          {/* Secondary CTA - Call directly */}
          <a
            id="hero-call-cta"
            href={`tel:${SALON_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-[#f5f2eb] font-semibold text-base border border-[#d4af37]/40 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-200 flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5 text-[#d4af37]" />
            <span>Appeler : {SALON_INFO.phoneDisplay}</span>
          </a>
        </motion.div>

        {/* Quick location tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex items-center gap-2 text-xs text-[#9da3b4]"
        >
          <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Localisation : <strong className="text-white font-medium">{SALON_INFO.addressCode}, {SALON_INFO.city}</strong></span>
        </motion.div>
      </div>
    </section>
  );
}
