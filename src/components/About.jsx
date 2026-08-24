import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    { title: 'PRECISION', desc: 'Micrometer-level perfection in every polish pass and edge wrap.' },
    { title: 'CRAFTSMANSHIP', desc: 'Master technicians dedicated exclusively to high-end automotive surfaces.' },
    { title: 'PASSION', desc: 'We treat every automobile as a canvas for automotive perfection.' }
  ];

  return (
    <section id="about" className="relative bg-dark-950 py-16 sm:py-20 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Text Editorial Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-gold-500 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT JOS GROUP</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight leading-none">
                MORE THAN
                <br />
                <span className="text-gold-gradient">A DETAILING STUDIO.</span>
              </h2>
            </div>

            <p className="text-xs sm:text-base text-neutral-300 font-sans font-light leading-relaxed">
              At JOS Group, every vehicle receives the attention and precision it deserves. From paint restoration to advanced paint protection film, our goal is simple — to make your car look its absolute best.
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
              Founded on an uncompromising passion for automotive aesthetics, our studio brings together state-of-the-art climate-controlled cleanrooms, computerized plotters, and certified surface technicians.
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-white/10">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="space-y-1">
                  <div className="text-[11px] font-mono font-bold text-gold-400 uppercase tracking-widest">
                    {pillar.title}
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-neutral-400 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Subtle Signature Accent */}
            <div className="pt-1 flex items-center gap-3">
              <div className="w-10 h-[1px] bg-gold-500" />
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                AUTOMOTIVE PERFECTION
              </span>
            </div>
          </motion.div>

          {/* Editorial Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/assets/about_workshop.png"
                alt="JOS Group Studio Workshop Interior"
                className="w-full h-[320px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
            </div>

            {/* Float Card */}
            <div className="absolute -bottom-4 -left-4 sm:left-4 max-w-xs bg-dark-900/90 backdrop-blur-xl p-4 rounded-2xl border border-gold-500/30 shadow-2xl hidden sm:block">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-gold-500 flex-shrink-0" />
                <div>
                  <div className="text-[11px] font-mono font-bold text-white uppercase">UNCOMPROMISING QUALITY</div>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Tested under extreme high-intensity spotlighting.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
