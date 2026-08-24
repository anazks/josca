import React from 'react';
import { motion } from 'framer-motion';
import { businessConfig } from '../config/business';

export default function HeroStats() {
  return (
    <section id="stats" className="relative z-20 bg-dark-900 border-y border-white/10 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {businessConfig.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col items-center md:items-start text-center md:text-left ${
                idx > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-gold-gradient tracking-tight">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-lg text-gold-500 font-bold">{stat.suffix}</span>
                )}
              </div>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-400 uppercase mt-0.5">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
