import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems, galleryCategories } from '../data/galleryData';
import GalleryCard from './GalleryCard';
import Lightbox from './Lightbox';
import { Camera } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    selectedCategory === 'ALL'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="relative bg-dark-950 py-16 sm:py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-gold-500 uppercase">
              <Camera className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight leading-none">
              OUR <span className="text-gold-gradient">WORK.</span>
            </h2>

            <p className="text-xs sm:text-base text-neutral-300 font-sans font-light">
              Explore our recent transformations on exotic, luxury, and performance vehicles.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-mono tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold-gradient text-black font-bold shadow-md shadow-gold-500/20'
                    : 'bg-dark-800 border border-white/10 text-neutral-400 hover:text-white hover:border-gold-500/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => setLightboxIndex(index)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          item={filteredItems[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
