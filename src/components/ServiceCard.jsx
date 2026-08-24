import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ServiceCard({ service, onOpenQuote }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative bg-dark-800 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
    >
      {/* Background Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-black">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-90 contrast-105"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/40 to-transparent" />
        
        {/* Top Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[9px] font-mono tracking-widest text-gold-400 bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-gold-500/30 uppercase">
            {service.accent}
          </span>
        </div>

        {/* Action Icon */}
        <button
          onClick={onOpenQuote}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-500 transition-all duration-300"
          aria-label={`Inquire for ${service.title}`}
        >
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-gold-400 transition-colors uppercase tracking-tight">
            {service.title}
          </h3>
          <p className="text-[10px] sm:text-xs font-mono text-gold-500/90 mt-0.5 uppercase tracking-widest">
            {service.tagline}
          </p>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 font-sans leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Feature List */}
        <div className="pt-3 border-t border-white/5 space-y-1.5">
          {service.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px] sm:text-xs text-neutral-400">
              <CheckCircle2 className="w-3 h-3 text-gold-500 flex-shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <div className="pt-1">
          <button
            onClick={onOpenQuote}
            className="w-full py-2.5 bg-dark-900 border border-white/10 rounded-xl text-[11px] font-bold tracking-wider text-white group-hover:border-gold-500/40 group-hover:bg-gold-500/10 group-hover:text-gold-400 transition-all duration-300 flex items-center justify-center gap-1.5"
          >
            <span>INQUIRE FOR THIS TREATMENT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
          </button>
        </div>
      </div>

      {/* Bottom Gold Line reveal */}
      <div className="h-1 w-0 bg-gold-gradient group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
