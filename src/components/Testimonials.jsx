import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonialsData';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [mobileIndex, setMobileIndex] = useState(0);

  const handlePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-dark-950 py-16 sm:py-20 border-b border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-gold-500 uppercase">
            <span>// CLIENT REVIEWS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight">
            TRUSTED BY <span className="text-gold-gradient">CAR LOVERS.</span>
          </h2>

          <p className="text-xs sm:text-base text-neutral-300 font-sans font-light">
            Read authentic experiences from luxury vehicle owners who trust JOS Group with their prized automobiles.
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark-800 border border-white/10 hover:border-gold-500/50 p-5 sm:p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div className="space-y-3">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-neutral-300 font-sans italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Car Info */}
              <div className="pt-4 border-t border-white/5 space-y-0.5">
                <div className="text-xs sm:text-sm font-bold font-heading text-white group-hover:text-gold-400 transition-colors uppercase">
                  {item.author}
                </div>
                <div className="text-[11px] font-mono text-gold-500 font-medium">
                  {item.carModel}
                </div>
                <div className="text-[9px] text-neutral-500 uppercase tracking-wider">
                  {item.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="block md:hidden space-y-4">
          <motion.div
            key={testimonials[mobileIndex].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-dark-800 border border-white/10 p-6 rounded-2xl space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-gold-500">
                {[...Array(testimonials[mobileIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-gold-500/30" />
            </div>

            <p className="text-sm text-neutral-300 font-sans italic leading-relaxed">
              "{testimonials[mobileIndex].quote}"
            </p>

            <div className="pt-4 border-t border-white/5 space-y-1">
              <div className="text-sm font-bold font-heading text-white uppercase">
                {testimonials[mobileIndex].author}
              </div>
              <div className="text-xs font-mono text-gold-500">
                {testimonials[mobileIndex].carModel}
              </div>
              <div className="text-[10px] text-neutral-400 uppercase">
                {testimonials[mobileIndex].service}
              </div>
            </div>
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-mono text-neutral-400">
              {mobileIndex + 1} / {testimonials.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 bg-dark-800 border border-white/10 rounded-lg text-neutral-300 hover:text-white"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 bg-dark-800 border border-white/10 rounded-lg text-neutral-300 hover:text-white"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
