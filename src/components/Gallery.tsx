import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../data';
import { GalleryImage } from '../types';
import { Maximize2, X, Sparkles } from 'lucide-react';

type FilterCategory = 'all' | 'coupes' | 'barbe' | 'ambiance';

export default function Gallery() {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = filter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <section id="galerie" className="py-20 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#d4af37]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
            Portfolio & Réalisations
          </span>
          <span className="w-6 h-[1px] bg-[#d4af37]" />
        </div>
        <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          La Galerie Gentleman Coif
        </h2>
        <p className="text-[#a0a5b5] text-sm sm:text-base leading-relaxed">
          Découvrez la précision de nos dégradés, la finesse de nos tracés de barbe et l'atmosphère unique de notre salon à Tunis.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'all', label: 'Toutes les photos' },
            { id: 'coupes', label: 'Coupes & Fades' },
            { id: 'barbe', label: 'Barbe & Rasage' },
            { id: 'ambiance', label: 'Salon & Ambiance' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as FilterCategory)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa8214] text-[#0c0d12] shadow-md shadow-[#d4af37]/25'
                  : 'glass-panel text-[#a0a5b5] hover:text-white hover:border-[#d4af37]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              layout
              key={image.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImage(image)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer bg-[#151720] border border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 shadow-lg"
            >
              <img
                src={image.imageUrl}
                alt={image.alt}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#f3e5ab] border border-[#d4af37]/30">
                  {image.category === 'coupes' ? 'Coupe' : image.category === 'barbe' ? 'Barbe' : 'Salon'}
                </span>
              </div>

              {/* View Overlay Button */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/15">
                <Maximize2 className="w-4 h-4 text-[#f3e5ab]" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-luxury text-lg font-bold text-white mb-1 group-hover:text-[#f3e5ab] transition-colors">
                  {image.title}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Cliquer pour agrandir</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#12141c] rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-[#d4af37] text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.alt}
                  className="w-full max-h-[75vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-[#12141c] flex items-center justify-between border-t border-white/10">
                <div>
                  <h3 className="font-luxury text-xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-[#a0a5b5] mt-0.5">
                    Salon Gentleman Coif · Tunis
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedImage(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#d4af37] hover:bg-[#e5c07b] text-[#0c0d12] font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Demander ce style
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
