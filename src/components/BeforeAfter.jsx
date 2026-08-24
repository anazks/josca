import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { beforeAfterItems } from '../data/beforeAfterData';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Sparkles } from 'lucide-react';

export default function BeforeAfter({ onOpenQuote }) {
  const categories = ['PAINT CORRECTION', 'PAINT RESTORATION', 'DETAILING', 'BODY RESTORATION'];
  const [activeCategory, setActiveCategory] = useState('PAINT CORRECTION');

  // Filter current active item based on selected category tab
  const activeItem =
    beforeAfterItems.find((item) => item.category === activeCategory) || beforeAfterItems[0];

  return (
    <section id="before-after" className="relative bg-dark-950 py-16 sm:py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-gold-500 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VISUAL PROOF OF CRAFTSMANSHIP</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight leading-none">
              SEE THE
              <br />
              <span className="text-gold-gradient">TRANSFORMATION.</span>
            </h2>
            <p className="text-xs sm:text-base text-neutral-300 font-sans font-light">
              Drag the interactive slider to reveal how our precision paint correction, detailing, and restoration bring cars back to pristine showroom standards.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-mono tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold-gradient text-black font-bold shadow-md shadow-gold-500/20'
                    : 'bg-dark-800 border border-white/10 text-neutral-400 hover:text-white hover:border-gold-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Drag Comparison Component */}
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <BeforeAfterSlider
            beforeImage={activeItem.beforeImage}
            afterImage={activeItem.afterImage}
            title={activeItem.title}
            description={activeItem.description}
            stats={activeItem.stats}
          />
        </motion.div>
      </div>
    </section>
  );
}
