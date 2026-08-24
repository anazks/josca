import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Shield, Sparkles, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          src="/assets/hero_bg.png"
          alt="JOS Group Premium Studio Supercar"
          className="w-full h-full object-cover object-center brightness-75 contrast-110 opacity-90"
        />
        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/60 to-dark-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
        <div className="absolute inset-0 bg-radial-gold opacity-30" />
      </div>

      {/* Grid Pattern Overlay for Automotive Studio Aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-5">
          
          {/* Centered Large Standalone Brand Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center items-center mb-2"
          >
            <img
              src="/assets/logo.jpeg"
              alt="JOS Group Studio Logo"
              className="h-20 sm:h-32 md:h-36 w-auto rounded-3xl border-2 border-gold-500/60 shadow-[0_0_40px_rgba(200,169,107,0.35)] object-contain bg-black/60 p-2"
            />
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-gold-500/30 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full text-gold-500 text-[10px] sm:text-xs font-mono tracking-widest uppercase"
          >
            <Sparkles className="w-3 h-3" />
            <span>PREMIUM AUTOMOTIVE CARE</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white uppercase leading-[1.05]">
              YOUR CAR.
              <br />
              <span className="text-gold-gradient">PERFECTED.</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xs sm:text-base text-neutral-300 max-w-lg font-sans font-light leading-relaxed text-center"
          >
            Protection, restoration and detailing crafted for people who expect more from their car.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <button
              onClick={onOpenQuote}
              className="px-5 py-3 sm:px-6 sm:py-3.5 bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:brightness-110 transition-all duration-300 shadow-xl shadow-gold-500/25 flex items-center gap-2 group"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>GET A FREE QUOTE</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#services"
              className="px-5 py-3 sm:px-6 sm:py-3.5 border border-white/20 bg-black/40 backdrop-blur-md text-white font-semibold uppercase tracking-wider text-xs rounded-xl hover:border-gold-500/60 hover:text-gold-400 transition-all duration-300"
            >
              EXPLORE OUR SERVICES
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-neutral-400 hover:text-gold-500 transition-colors"
      >
        <a href="#stats" className="flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest uppercase">
          <span>SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ArrowDown className="w-4 h-4 text-gold-500" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
