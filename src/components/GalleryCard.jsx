import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Shield } from 'lucide-react';

export default function GalleryCard({ item, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-dark-800 border border-white/10 hover:border-gold-500/50 transition-all duration-500 shadow-xl"
    >
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-90 contrast-105"
          loading="lazy"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Top Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[9px] font-mono tracking-widest text-gold-400 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-gold-500/30 uppercase">
            {item.category}
          </span>
        </div>

        {/* Hover Expand Icon */}
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full bg-gold-500 text-black flex items-center justify-center shadow-lg">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Bottom Content Info */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 space-y-0.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-gold-400 transition-colors uppercase">
            {item.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-neutral-300 font-sans">{item.service}</p>
        </div>
      </div>
    </motion.div>
  );
}
