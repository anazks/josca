import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Layers, Zap, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'INSPECT',
      icon: Search,
      desc: 'Digital paint depth gauge audit & microscopic flaw mapping under studio LED lighting.'
    },
    {
      num: '02',
      title: 'PLAN',
      icon: Compass,
      desc: 'Formulate bespoke treatment strategy tailored specifically to your vehicle clear coat hardness.'
    },
    {
      num: '03',
      title: 'PREPARE',
      icon: Layers,
      desc: 'Multi-stage pH neutral snow foam wash, iron decontamination & computer pre-cut film fitting.'
    },
    {
      num: '04',
      title: 'TRANSFORM',
      icon: Zap,
      desc: 'Precision machine polishing, PPF application, ceramic bonding or body refinishing.'
    },
    {
      num: '05',
      title: 'PERFECT',
      icon: CheckCircle,
      desc: 'Final inspection under multi-angle spotlights, quality certification & client handover.'
    }
  ];

  return (
    <section className="relative bg-dark-900 py-16 sm:py-20 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-gold-500 uppercase">
            <span>// METHODOLOGY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight">
            OUR <span className="text-gold-gradient">PROCESS.</span>
          </h2>
          <p className="text-xs sm:text-base text-neutral-400 font-sans font-light">
            Every vehicle undergoes a standardized 5-stage precision workflow to ensure zero compromises.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-gold-500/20 via-gold-500/80 to-gold-500/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group bg-dark-800 border border-white/10 hover:border-gold-500/50 p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Icon Circle */}
                    <div className="w-10 h-10 rounded-xl bg-dark-950 border border-white/10 group-hover:border-gold-500 group-hover:bg-gold-500/10 text-gold-400 flex items-center justify-center mb-4 transition-colors shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Step Number */}
                    <span className="text-[10px] font-mono text-gold-500 font-bold tracking-widest block mb-0.5">
                      STEP {step.num}
                    </span>

                    {/* Step Title */}
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white uppercase tracking-wider group-hover:text-gold-400 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Step Progress Line Accent */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                    <span>STAGE {index + 1}/5</span>
                    <span className="text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      READY
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
