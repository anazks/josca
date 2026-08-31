import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Shield, Sparkles, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="hero" className="relative w-full min-h-screen sm:h-screen sm:min-h-[700px] flex items-center justify-center overflow-hidden bg-dark-950 pt-24 sm:pt-16 pb-16 sm:pb-0">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-4 sm:space-y-5">

          {/* Centered Standalone Brand Logo with Motion & Floating Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center my-1 sm:my-2 group cursor-pointer"
          >
            {/* Animated Golden Ambient Glow Aura */}
            <motion.div
              animate={{
                opacity: [0.35, 0.65, 0.35],
                scale: [0.95, 1.1, 0.95],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -inset-4 sm:-inset-8 lg:-inset-10 bg-gold-500/25 blur-2xl sm:blur-3xl rounded-full pointer-events-none"
            />

            {/* Floating Animation Wrapper */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.05 }}
              className="relative z-10"
            >
              <img
                src="/assets/logo.png"
                alt="JOS Group Studio Logo"
                className="h-48 xs:h-60 sm:h-56 md:h-64 lg:h-64 xl:h-72 max-w-[95vw] sm:max-w-md md:max-w-lg lg:max-w-xl w-auto object-contain filter drop-shadow-[0_10px_35px_rgba(200,169,107,0.45)] transition-all duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 border border-gold-500/30 bg-black/60 backdrop-blur-md px-3 sm:px-3.5 py-1 rounded-full text-gold-500 text-[10px] sm:text-xs font-mono tracking-widest uppercase"
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
            {/* Primary SEO H1 */}
            <h1 className="sr-only">JOS Group – Premium Car Care & Auto Services</h1>
            <p className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white uppercase leading-[1.1] sm:leading-[1.05]">
              YOUR CAR.
              <br />
              <span className="text-gold-gradient">PERFECTED.</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xs sm:text-base text-neutral-300 max-w-xs sm:max-w-lg font-sans font-light leading-relaxed text-center px-2 sm:px-0"
          >
            Protection, restoration and detailing crafted for people who expect more from their car.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto pt-1 sm:pt-2 px-4 sm:px-0"
          >
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:brightness-110 transition-all duration-300 shadow-xl shadow-gold-500/25 flex items-center justify-center gap-2 group"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>GET A FREE QUOTE</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 border border-white/20 bg-black/40 backdrop-blur-md text-white font-semibold uppercase tracking-wider text-xs rounded-xl hover:border-gold-500/60 hover:text-gold-400 transition-all duration-300 text-center"
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
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-neutral-400 hover:text-gold-500 transition-colors"
      >
        <a href="#services" className="flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest uppercase">
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
