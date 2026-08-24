import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Check, ArrowUpRight } from 'lucide-react';

export default function FeaturedPPF({ onOpenQuote }) {
  const ppfFeatures = [
    { num: '01', title: 'PAINT PROTECTION', desc: 'Shields against gravel chips, bird droppings, acid rain & road grit.' },
    { num: '02', title: 'HIGH-GLOSS FINISH', desc: 'Enhances depth and clarity while maintaining factory optical reflection.' },
    { num: '03', title: 'SCRATCH RESISTANCE', desc: 'Self-healing TPU film eliminates micro-swirls under heat exposure.' },
    { num: '04', title: 'EASY MAINTENANCE', desc: 'Extreme hydrophobic properties make washing quick & effortless.' }
  ];

  return (
    <section className="relative bg-dark-900 py-16 sm:py-20 overflow-hidden border-b border-white/10">
      {/* Background Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 bg-radial-gold pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Visual Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl group"
          >
            <div className="relative h-[300px] sm:h-[420px] overflow-hidden">
              <img
                src="/assets/ppf_hero.png"
                alt="Paint Protection Film Installation JOS Group"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
            </div>

            {/* Float Badge */}
            <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 bg-dark-950/90 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-gold-400 uppercase">TECHNOLOGY</div>
                  <div className="text-xs sm:text-sm font-bold text-white font-heading">STEK DYNOshield Self-Healing TPU</div>
                </div>
              </div>
              <span className="hidden sm:inline-block text-[9px] font-mono bg-gold-500 text-black px-2 py-0.5 rounded font-bold uppercase">
                10 YR WARRANTY
              </span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-gold-500 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FEATURED PROTECTION PACKAGE</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight leading-none">
                PROTECT
                <br />
                <span className="text-gold-gradient">WHAT YOU LOVE.</span>
              </h2>

              <p className="text-xs sm:text-base text-neutral-300 font-sans font-light pt-1">
                Advanced paint protection designed to keep your vehicle looking newer for longer. Our pre-cut patterns ensure 100% precision fitment without blade contact on your factory paint.
              </p>
            </div>

            {/* Feature List 01 - 04 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ppfFeatures.map((item) => (
                <div key={item.num} className="bg-dark-800/80 border border-white/5 p-4 rounded-xl hover:border-gold-500/40 transition-colors">
                  <div className="text-xs font-mono text-gold-500 font-bold mb-0.5">
                    {item.num}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold font-heading text-white uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-1">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:brightness-110 transition-all duration-300 shadow-xl shadow-gold-500/20 flex items-center gap-2"
              >
                <span>EXPLORE PPF OPTIONS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
