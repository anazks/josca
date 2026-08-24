import React from 'react';
import { motion } from 'framer-motion';
import { Shield, MessageCircle, ArrowUpRight } from 'lucide-react';
import { businessConfig } from '../config/business';

export default function CTA({ onOpenQuote }) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(businessConfig.whatsappDefaultMessage);
    window.open(`https://wa.me/${businessConfig.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="relative bg-dark-950 py-16 sm:py-20 border-b border-white/10 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_bg.png"
          alt="JOS Group Dark Luxury Background"
          className="w-full h-full object-cover object-center brightness-[0.35] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/80 to-dark-950" />
        <div className="absolute inset-0 bg-radial-gold opacity-40 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-gold-500/40 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full text-gold-400 text-[10px] sm:text-xs font-mono tracking-widest uppercase"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>START YOUR VEHICLE TRANSFORMATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight leading-tight"
          >
            READY TO
            <br />
            <span className="text-gold-gradient">TRANSFORM YOUR CAR?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-base text-neutral-300 font-sans font-light max-w-xl mx-auto"
          >
            Tell us about your vehicle and let our detailing specialists recommend the right protection or restoration treatment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <button
              onClick={onOpenQuote}
              className="px-5 py-3 sm:px-6 sm:py-3.5 bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:brightness-110 transition-all duration-300 shadow-2xl shadow-gold-500/25 flex items-center gap-2"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="px-5 py-3 sm:px-6 sm:py-3.5 bg-emerald-600/20 border border-emerald-500/50 hover:bg-emerald-600 text-emerald-400 hover:text-white font-semibold uppercase tracking-wider text-xs rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WHATSAPP US</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
