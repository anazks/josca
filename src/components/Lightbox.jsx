import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Shield } from 'lucide-react';

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-neutral-400 hover:text-white p-3 bg-dark-900/80 rounded-full border border-white/10 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Button */}
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 text-neutral-400 hover:text-gold-400 p-3 bg-dark-900/80 rounded-full border border-white/10 transition-colors"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 text-neutral-400 hover:text-gold-400 p-3 bg-dark-900/80 rounded-full border border-white/10 transition-colors"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image & Detail Container */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/20 bg-dark-900"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full max-h-[70vh] object-contain bg-black"
          />

          {/* Info Footer */}
          <div className="w-full p-6 bg-dark-900 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-gold-400 uppercase tracking-widest mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span>{item.category}</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-white">{item.title}</h3>
              <p className="text-xs text-neutral-400">{item.service}</p>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-gold-gradient text-black font-bold text-xs uppercase tracking-wider rounded-lg self-start sm:self-center"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
