import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, ExternalLink, ThumbsUp } from 'lucide-react';
import { REVIEWS, SALON_INFO } from '../data';

export default function Reviews() {
  return (
    <section id="avis" className="py-20 px-4 max-w-7xl mx-auto relative">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#d4af37]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            Témoignages & Avis Google
          </span>
          <span className="w-6 h-[1px] bg-[#d4af37]" />
        </div>
        <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          La Confiance de Nos Clients
        </h2>
        <p className="text-[#a0a5b5] text-sm sm:text-base leading-relaxed">
          Une réputation bâtie sur la constance, le respect et la satisfaction de chaque gentleman franchissant notre porte.
        </p>
      </div>

      {/* Global Rating Scoreboard Card */}
      <div className="mb-14 p-8 rounded-3xl glass-panel border border-[#d4af37]/35 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-2xl" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
          {/* Rating big score */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#d4af37] via-[#aa8214] to-[#3a2c09] p-[2px] shadow-lg">
              <div className="w-full h-full rounded-2xl bg-[#0e1017] flex flex-col items-center justify-center">
                <span className="font-luxury text-4xl font-extrabold gold-gradient-text leading-none">
                  5.0
                </span>
                <span className="text-[10px] text-[#c5a059] uppercase tracking-widest font-semibold mt-1">
                  Sur 5
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 stroke-none" />
                ))}
              </div>
              <h3 className="font-luxury text-xl font-bold text-white">
                Note Parfaite Google
              </h3>
              <p className="text-xs text-[#a0a5b5] flex items-center justify-center md:justify-start gap-1.5 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Basé sur <strong>{SALON_INFO.reviewCount} avis certifiés</strong></span>
              </p>
            </div>
          </div>

          {/* Google branding & button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27a7.17 7.17 0 0 1 0-4.54V6.58H1.25a11.97 11.97 0 0 0 0 10.84l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>Avis Google Maps</span>
            </div>

            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8214] text-[#0c0d12] font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity shadow-md"
            >
              <span>Voir sur Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((review, idx) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="p-7 rounded-2xl bg-[#13151f] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl relative"
          >
            {/* Top quote icon */}
            <Quote className="w-8 h-8 text-[#d4af37]/20 group-hover:text-[#d4af37]/50 transition-colors mb-4 shrink-0" />

            <div>
              {/* Star rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-[#d1c7bd] leading-relaxed mb-6 font-light italic">
                « {review.text} »
              </p>
            </div>

            {/* Author details */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#1a1c24] flex items-center justify-center font-luxury font-bold text-sm text-[#f3e5ab] shadow-sm">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white group-hover:text-[#f3e5ab] transition-colors">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-[#8e94a5]">
                    {review.date} · Avis certifié
                  </p>
                </div>
              </div>

              <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-emerald-400" title="Avis vérifié Google">
                <ThumbsUp className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
