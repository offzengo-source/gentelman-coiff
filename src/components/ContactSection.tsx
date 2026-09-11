import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  Clock, 
  User, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Instagram, 
  Facebook, 
  Music2, 
  Scissors
} from 'lucide-react';
import { SALON_INFO, SERVICES } from '../data';

interface ContactSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export default function ContactSection({ selectedService, onServiceChange }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService || SERVICES[0].name,
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Veuillez saisir votre nom';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Veuillez saisir votre numéro de téléphone';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Numéro invalide (au moins 8 chiffres)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Bonjour Gentleman Coif, je souhaite réserver une prestation.\n\n` +
      `Nom: ${formData.name || 'Non spécifié'}\n` +
      `Téléphone: ${formData.phone || 'Non spécifié'}\n` +
      `Prestation: ${formData.service}\n` +
      (formData.preferredDate ? `Date: ${formData.preferredDate}\n` : '') +
      (formData.preferredTime ? `Heure: ${formData.preferredTime}\n` : '') +
      (formData.notes ? `Note: ${formData.notes}` : '')
    );
    window.open(`https://wa.me/21652961481?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#d4af37]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            Rendez-vous & Contact
          </span>
          <span className="w-6 h-[1px] bg-[#d4af37]" />
        </div>
        <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Réservez Votre Créneau
        </h2>
        <p className="text-[#a0a5b5] text-sm sm:text-base leading-relaxed">
          Prenez rendez-vous directement en ligne, par téléphone au <strong className="text-white">52 961 481</strong> ou via WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info & Fast Actions (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Call Box */}
          <div className="p-7 rounded-2xl glass-panel border border-[#d4af37]/35 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa8214] flex items-center justify-center text-[#0c0d12] shadow-md mb-4">
              <Phone className="w-6 h-6 fill-current" />
            </div>

            <span className="text-xs font-semibold text-[#8e94a5] uppercase tracking-wider block">
              Ligne directe du salon
            </span>
            <h3 className="font-luxury text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
              {SALON_INFO.phoneDisplay}
            </h3>
            <p className="text-xs text-[#b0b5c4] mb-6">
              Disponible 7j/7 de 10h00 à 23h00 pour réservation instantanée ou renseignement.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                id="contact-call-btn"
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="flex-1 py-3.5 px-4 rounded-xl bg-[#d4af37] hover:bg-[#e5c07b] text-[#0c0d12] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Appeler maintenant</span>
              </a>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Social Networks & Salon Spirit */}
          <div className="p-7 rounded-2xl bg-[#13151f] border border-white/10 space-y-4">
            <h4 className="font-luxury text-base font-bold text-white">
              Suivez l'actualité de Gentleman Coif
            </h4>
            <p className="text-xs text-[#a0a5b5] leading-relaxed">
              Retrouvez nos dernières créations, avant/après et inspirations coiffure sur nos réseaux :
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Gentleman Coif"
                className="w-11 h-11 rounded-xl bg-[#1d202d] border border-white/10 hover:border-[#d4af37] text-[#a0a5b5] hover:text-[#d4af37] flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Gentleman Coif"
                className="w-11 h-11 rounded-xl bg-[#1d202d] border border-white/10 hover:border-[#d4af37] text-[#a0a5b5] hover:text-[#d4af37] flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Gentleman Coif"
                className="w-11 h-11 rounded-xl bg-[#1d202d] border border-white/10 hover:border-[#d4af37] text-[#a0a5b5] hover:text-[#d4af37] flex items-center justify-center transition-all"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Booking Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#12141c] border border-white/15 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <h3 className="font-luxury text-2xl font-bold text-white mb-2">
                    Demande transmise avec succès !
                  </h3>
                  <p className="text-sm text-[#a0a5b5] max-w-md mx-auto mb-6">
                    Merci <strong>{formData.name}</strong>. L'équipe de Gentleman Coif vous contactera rapidement au <strong className="text-white">{formData.phone}</strong> pour confirmer votre créneau pour la prestation <strong className="text-[#f3e5ab]">{formData.service}</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Confirmer sur WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          service: SERVICES[0].name,
                          preferredDate: '',
                          preferredTime: '',
                          notes: '',
                        });
                      }}
                      className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold cursor-pointer transition-colors"
                    >
                      Nouveau message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-luxury text-2xl font-bold text-white mb-1">
                      Formulaire de Réservation
                    </h3>
                    <p className="text-xs text-[#8e94a5]">
                      Renseignez vos coordonnées, notre équipe vous répond dans les plus brefs délais.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nom */}
                    <div>
                      <label htmlFor="client-name" className="block text-xs font-semibold text-[#d1c7bd] uppercase tracking-wider mb-2">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#8e94a5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="client-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          placeholder="Ex : Marwen Ben Ali"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#191c27] border text-white text-sm placeholder-[#555a6d] focus:outline-none focus:border-[#d4af37] transition-colors ${
                            errors.name ? 'border-red-500/80' : 'border-white/10'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-red-400 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Téléphone */}
                    <div>
                      <label htmlFor="client-phone" className="block text-xs font-semibold text-[#d1c7bd] uppercase tracking-wider mb-2">
                        Téléphone *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#8e94a5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="client-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="Ex : 52 961 481"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#191c27] border text-white text-sm placeholder-[#555a6d] focus:outline-none focus:border-[#d4af37] transition-colors ${
                            errors.phone ? 'border-red-500/80' : 'border-white/10'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-red-400 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Choix Prestation */}
                  <div>
                    <label htmlFor="client-service" className="block text-xs font-semibold text-[#d1c7bd] uppercase tracking-wider mb-2">
                      Prestation souhaitée
                    </label>
                    <div className="relative">
                      <Scissors className="w-4 h-4 text-[#8e94a5] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        id="client-service"
                        value={formData.service}
                        onChange={(e) => {
                          setFormData({ ...formData, service: e.target.value });
                          onServiceChange(e.target.value);
                        }}
                        className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#191c27] border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer appearance-none"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.name} className="bg-[#12141c] text-white">
                            {s.name} — {s.price} ({s.duration})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date et Heure souhaitées (optionnel) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="client-date" className="block text-xs font-semibold text-[#d1c7bd] uppercase tracking-wider mb-2">
                        Date souhaitée (optionnel)
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-[#8e94a5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="client-date"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#191c27] border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="client-time" className="block text-xs font-semibold text-[#d1c7bd] uppercase tracking-wider mb-2">
                        Heure souhaitée (10h - 23h)
                      </label>
                      <div className="relative">
                        <Clock className="w-4 h-4 text-[#8e94a5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="client-time"
                          type="time"
                          min="10:00"
                          max="23:00"
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#191c27] border border-white/10 text-white text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message / Remarque */}
                  <div>
                    <label htmlFor="client-message" className="block text-xs font-semibold text-[#d1c7bd] uppercase tracking-wider mb-2">
                      Message ou instruction spécifique
                    </label>
                    <textarea
                      id="client-message"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Ex : Première coupe pour mon enfant de 2 ans, dégradé particulier..."
                      className="w-full p-4 rounded-xl bg-[#191c27] border border-white/10 text-white text-sm placeholder-[#555a6d] focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-booking-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c07b] to-[#aa8214] text-[#0c0d12] font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg shadow-[#d4af37]/25 hover:shadow-xl hover:shadow-[#d4af37]/40 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#0c0d12] border-t-transparent rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirmer ma demande de rendez-vous</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#8e94a5]">
                    Sans engagement · Vous recevrez un appel ou SMS de confirmation.
                  </p>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
