import { Phone, MapPin, Clock, Star, ArrowUp } from 'lucide-react';
import { SALON_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090d] border-t border-[#d4af37]/20 pt-16 pb-28 md:pb-16 text-[#8e94a5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] via-[#aa8214] to-[#42320b] p-[1px] flex items-center justify-center shadow-md">
                <div className="w-full h-full rounded-full bg-[#0c0d12] flex items-center justify-center">
                  <span className="font-luxury text-base font-bold text-[#f3e5ab]">G</span>
                </div>
              </div>
              <div>
                <span className="font-luxury font-bold text-lg text-white tracking-wider block">
                  {SALON_INFO.name}
                </span>
                <span className="text-[10px] text-[#c5a059] uppercase tracking-widest font-semibold block">
                  Barbershop Tunis
                </span>
              </div>
            </div>
            <p className="text-xs text-[#a0a5b5] leading-relaxed mb-4">
              {SALON_INFO.tagline}. Une expérience de soin et de coupe raffinée au cœur de Tunis pour l'homme d'aujourd'hui.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#f3e5ab]">
              <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
              <span>5,0 / 5 · 77 avis Google</span>
            </div>
          </div>

          {/* Col 2: Navigation Rapide */}
          <div>
            <h4 className="font-luxury text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#d4af37] transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Services & Tarifs
                </a>
              </li>
              <li>
                <a href="#galerie" className="hover:text-[#d4af37] transition-colors">
                  Galerie & Réalisations
                </a>
              </li>
              <li>
                <a href="#avis" className="hover:text-[#d4af37] transition-colors">
                  Avis Clients Google
                </a>
              </li>
              <li>
                <a href="#localisation" className="hover:text-[#d4af37] transition-colors">
                  Accès & Google Maps
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">
                  Prendre Rendez-vous
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Coordonnées & Accès */}
          <div>
            <h4 className="font-luxury text-sm font-bold text-white uppercase tracking-wider mb-4">
              Coordonnées
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block">{SALON_INFO.addressCode}</strong>
                  Tunis, Tunisie
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${SALON_INFO.phoneRaw}`} className="text-[#f3e5ab] hover:text-[#d4af37] font-semibold transition-colors">
                  {SALON_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block">Tous les jours</strong>
                  10:00 — 23:00 (Ferme à 23h)
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Horaires & Réservation rapide */}
          <div>
            <h4 className="font-luxury text-sm font-bold text-white uppercase tracking-wider mb-4">
              Service Client
            </h4>
            <p className="text-xs text-[#a0a5b5] mb-4 leading-relaxed">
              Pour toute question ou rendez-vous de groupe, contactez-nous directement par téléphone ou WhatsApp.
            </p>
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#d4af37] hover:text-[#0c0d12] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200"
            >
              Appeler le salon
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-[#e8dfd8]">{SALON_INFO.name}</strong>. Tous droits réservés.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#a0a5b5] hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            <span>Retour en haut</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
