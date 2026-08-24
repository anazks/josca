import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonialsData';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare, SlidersHorizontal, Pause, Play } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [sortBy, setSortBy] = useState('relevant');
  const [expandedOwnerReply, setExpandedOwnerReply] = useState({});
  const autoScrollTimer = useRef(null);

  const toggleOwnerReply = (id) => {
    setExpandedOwnerReply((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sortedTestimonials = useMemo(() => {
    const items = [...testimonials];
    if (sortBy === 'newest') {
      return items.sort((a, b) => (a.time.includes('year') ? 1 : -1));
    }
    if (sortBy === 'highest') {
      return items.sort((a, b) => b.rating - a.rating);
    }
    if (sortBy === 'lowest') {
      return items.sort((a, b) => a.rating - b.rating);
    }
    return items;
  }, [sortBy]);

  // Auto-scroll loop to the right (next item) every 3.5 seconds
  useEffect(() => {
    if (!isPaused) {
      autoScrollTimer.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % sortedTestimonials.length);
      }, 3500);
    }
    return () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    };
  }, [isPaused, sortedTestimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? sortedTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sortedTestimonials.length);
  };

  // Get current batch of 3 cards for desktop carousel sliding
  const visibleDesktopItems = useMemo(() => {
    const total = sortedTestimonials.length;
    return [
      sortedTestimonials[currentIndex % total],
      sortedTestimonials[(currentIndex + 1) % total],
      sortedTestimonials[(currentIndex + 2) % total]
    ];
  }, [currentIndex, sortedTestimonials]);

  return (
    <section
      className="relative bg-dark-950 py-16 sm:py-20 border-b border-white/10 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambient Glow */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-gold-500 uppercase">
              <Star className="w-3.5 h-3.5 fill-gold-500" />
              <span>VERIFIED GOOGLE REVIEWS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight leading-none">
              TRUSTED BY <span className="text-gold-gradient">CAR LOVERS.</span>
            </h2>

            <p className="text-xs sm:text-base text-neutral-300 font-sans font-light">
              Read authentic Google reviews from car owners across Ernakulam, Tripunithura, and Udayamperoor.
            </p>
          </div>

          {/* Controls & Google Rating Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-dark-800 border border-gold-500/30 px-3 py-1.5 rounded-xl text-xs font-mono text-white">
              <span className="text-gold-400 font-bold">★ 4.9</span>
              <span className="text-neutral-400">Google Rating</span>
            </div>

            <div className="flex items-center gap-2 bg-dark-800 border border-white/10 px-3 py-1.5 rounded-xl">
              <SlidersHorizontal className="w-3.5 h-3.5 text-gold-500" />
              <span className="text-[11px] font-mono text-neutral-400 uppercase">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentIndex(0);
                }}
                className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
              >
                <option value="relevant" className="bg-dark-900 text-white">Most relevant</option>
                <option value="newest" className="bg-dark-900 text-white">Newest</option>
                <option value="highest" className="bg-dark-900 text-white">Highest rating</option>
                <option value="lowest" className="bg-dark-900 text-white">Lowest rating</option>
              </select>
            </div>

            {/* Play/Pause & Arrow Navigation */}
            <div className="flex items-center gap-1.5 bg-dark-800 border border-white/10 p-1 rounded-xl">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-1.5 text-neutral-400 hover:text-gold-400 transition-colors"
                title={isPaused ? "Resume Auto Scroll" : "Pause Auto Scroll"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-gold-500" /> : <Pause className="w-3.5 h-3.5 text-neutral-400" />}
              </button>
              <button
                onClick={handlePrev}
                className="p-1.5 text-neutral-400 hover:text-white transition-colors"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 text-neutral-400 hover:text-white transition-colors"
                aria-label="Next Review"
              >
                <ChevronRight className="w-4 h-4 text-gold-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Auto-Scrolling Carousel Grid (Desktop & Tablet) */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleDesktopItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-dark-800/90 border border-white/10 hover:border-gold-500/40 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-xl group space-y-4"
                >
                  <div className="space-y-3">
                    {/* Author Info & Star Rating */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold font-heading text-white group-hover:text-gold-400 transition-colors uppercase">
                          {item.author}
                        </h4>
                        <span className="text-[10px] font-mono text-neutral-400 block">
                          {item.badge} • {item.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5 text-gold-500">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-gold-500" />
                        ))}
                      </div>
                    </div>

                    {/* Service Tag */}
                    <span className="inline-block text-[10px] font-mono text-gold-400 bg-gold-500/10 border border-gold-500/30 px-2.5 py-0.5 rounded-full uppercase">
                      {item.service}
                    </span>

                    {/* Customer Review Quote */}
                    <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Owner Reply Expander */}
                  {item.ownerReply && (
                    <div className="pt-3 border-t border-white/5">
                      <button
                        onClick={() => toggleOwnerReply(item.id)}
                        className="text-[10px] font-mono text-gold-400/90 hover:text-gold-400 flex items-center gap-1 transition-colors"
                      >
                        <MessageSquare className="w-3 h-3 text-gold-500" />
                        <span>{expandedOwnerReply[item.id] ? 'Hide Owner Reply' : 'View Owner Reply (Team JOS Group)'}</span>
                      </button>
                      {expandedOwnerReply[item.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-2 p-3 bg-dark-950/80 rounded-xl border border-gold-500/20 text-[11px] text-neutral-300 space-y-1"
                        >
                          <span className="text-[10px] font-mono text-gold-500 font-bold block uppercase">
                            Response from Team JOS Group:
                          </span>
                          <p className="leading-relaxed italic">{item.ownerReply}</p>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Auto-Scrolling Carousel Card (Mobile) */}
        <div className="block md:hidden space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={sortedTestimonials[currentIndex % sortedTestimonials.length].id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-dark-800 border border-white/10 p-5 rounded-2xl space-y-3.5 shadow-xl"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold font-heading text-white uppercase">
                    {sortedTestimonials[currentIndex % sortedTestimonials.length].author}
                  </h4>
                  <span className="text-[10px] font-mono text-neutral-400 block">
                    {sortedTestimonials[currentIndex % sortedTestimonials.length].badge}
                  </span>
                </div>
                <div className="flex items-center gap-0.5 text-gold-500">
                  {[...Array(sortedTestimonials[currentIndex % sortedTestimonials.length].rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-500" />
                  ))}
                </div>
              </div>

              <span className="inline-block text-[10px] font-mono text-gold-400 bg-gold-500/10 border border-gold-500/30 px-2.5 py-0.5 rounded-full uppercase">
                {sortedTestimonials[currentIndex % sortedTestimonials.length].service}
              </span>

              <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                "{sortedTestimonials[currentIndex % sortedTestimonials.length].quote}"
              </p>

              {sortedTestimonials[currentIndex % sortedTestimonials.length].ownerReply && (
                <div className="pt-3 border-t border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-gold-500 font-bold block uppercase">
                    Response from Team JOS Group:
                  </span>
                  <p className="text-[11px] text-neutral-400 italic leading-relaxed">
                    {sortedTestimonials[currentIndex % sortedTestimonials.length].ownerReply}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Mobile Carousel Indicator Controls */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-mono text-neutral-400">
              {(currentIndex % sortedTestimonials.length) + 1} / {sortedTestimonials.length} Reviews
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 bg-dark-800 border border-white/10 rounded-lg text-neutral-300 hover:text-white"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-dark-800 border border-white/10 rounded-lg text-neutral-300 hover:text-white"
                aria-label="Next Review"
              >
                <ChevronRight className="w-4 h-4 text-gold-500" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
