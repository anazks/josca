import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/servicesData';
import ServiceCard from './ServiceCard';
import { ShieldAlert } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  return (
    <section id="services" className="relative bg-dark-950 py-16 sm:py-20 border-b border-white/10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-gold-500 uppercase"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>EXPERT AUTOMOTIVE SERVICES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight leading-tight"
          >
            PRECISION
            <br />
            <span className="text-gold-gradient">IN EVERY DETAIL.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-base text-neutral-300 font-sans font-light max-w-2xl"
          >
            From protection to complete transformation, we take care of every surface of your vehicle using high-grade materials and obsessive craftsmanship.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onOpenQuote={onOpenQuote} />
          ))}
        </div>
      </div>
    </section>
  );
}
