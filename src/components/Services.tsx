import { motion } from 'motion/react';
import { 
  Scissors, 
  Sparkles, 
  Flame, 
  Crown, 
  Smile, 
  Droplets, 
  Gem, 
  Wand2, 
  Clock, 
  Check, 
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  Scissors,
  Sparkles,
  Flame,
  Crown,
  Smile,
  Droplets,
  Gem,
  Wand2,
};

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#d4af37]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            Carte des Prestations
          </span>
          <span className="w-6 h-[1px] bg-[#d4af37]" />
        </div>
        <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          L'Art du Grooming Masculin
        </h2>
        <p className="text-[#a0a5b5] text-sm sm:text-base leading-relaxed">
          Chaque rendez-vous est une expérience sur-mesure. Diagnostic personnalisé, techniques traditionnelles et produits haut de gamme pour sublimer votre style.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service: ServiceItem, idx: number) => {
          const IconComponent = iconMap[service.iconName] || Scissors;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group ${
                service.popular
                  ? 'bg-gradient-to-b from-[#1c1f2b] to-[#12141c] border-2 border-[#d4af37]/50 shadow-xl shadow-[#d4af37]/10'
                  : 'bg-[#13151e]/80 border border-white/10 hover:border-[#d4af37]/40 hover:bg-[#181a26]'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8214] text-[#0c0d12] text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  Incontournable
                </div>
              )}

              <div>
                {/* Header: Icon + Tagline + Price */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1d202d] border border-[#d4af37]/30 flex items-center justify-center text-[#f3e5ab] group-hover:scale-105 group-hover:border-[#d4af37] transition-all">
                    <IconComponent className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div className="text-right">
                    <span className="font-luxury text-2xl font-black text-white block">
                      {service.price}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#8e94a5]">
                      <Clock className="w-3 h-3 text-[#d4af37]" />
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Service Name & Tagline */}
                <h3 className="font-luxury text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors mb-1">
                  {service.name}
                </h3>
                <p className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#b0b5c4] leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.name)}
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  service.popular
                    ? 'bg-[#d4af37] text-[#0c0d12] hover:bg-[#e5c07b] shadow-md shadow-[#d4af37]/20'
                    : 'bg-[#1f2230] text-[#e8dfd8] hover:bg-[#d4af37] hover:text-[#0c0d12] border border-white/5'
                }`}
              >
                <span>Choisir cette prestation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Assurance Bar */}
      <div className="mt-12 p-6 rounded-2xl glass-panel border border-[#d4af37]/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h4 className="font-luxury text-lg font-bold text-white">
            Vous avez une demande particulière ou un style sur photo ?
          </h4>
          <p className="text-xs sm:text-sm text-[#a0a5b5] mt-1">
            Nos barbiers visagistes reproduisent avec fidélité les styles les plus exigeants.
          </p>
        </div>
        <div className="flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#e8dfd8]">
            <Check className="w-4 h-4 text-[#d4af37]" />
            <span>Désinfection systématique</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#e8dfd8]">
            <Check className="w-4 h-4 text-[#d4af37]" />
            <span>Café & Boisson d'accueil</span>
          </div>
        </div>
      </div>
    </section>
  );
}
