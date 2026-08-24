import React, { useState, useRef, useCallback, useEffect } from 'react';
import { SlidersHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({ beforeImage, afterImage, title, description, stats }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback(
    (clientX) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove]);

  return (
    <div className="space-y-4">
      {/* Slider Viewport */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        className="relative h-[260px] sm:h-[380px] w-full rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/10 shadow-2xl bg-black"
      >
        {/* AFTER Image (Full Layer) */}
        <img
          src={afterImage}
          alt="After Transformation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-95"
        />

        {/* AFTER Badge */}
        <div className="absolute top-3 right-3 z-20 bg-gold-500 text-black font-bold font-mono text-[10px] px-2.5 py-0.5 rounded shadow-lg uppercase tracking-wider">
          AFTER
        </div>

        {/* BEFORE Image (Clipped Layer) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before Transformation"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-95"
            style={{
              width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
              maxWidth: 'none',
            }}
          />
          {/* BEFORE Badge */}
          <div className="absolute top-3 left-3 z-20 bg-black/80 backdrop-blur-md text-neutral-300 font-bold font-mono text-[10px] px-2.5 py-0.5 rounded border border-white/20 uppercase tracking-wider">
            BEFORE
          </div>
        </div>

        {/* Vertical Divider Line & Handle */}
        <div
          className="absolute inset-y-0 z-30 w-0.5 bg-gold-400 pointer-events-none shadow-[0_0_10px_#C8A96B]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gold-500 text-black flex items-center justify-center shadow-2xl border-2 border-white cursor-ew-resize pointer-events-auto hover:scale-110 transition-transform">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Item Meta Information */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 bg-dark-800/60 rounded-xl border border-white/5">
        <div>
          <h3 className="text-sm sm:text-base font-bold font-heading text-white">{title}</h3>
          <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">{description}</p>
        </div>
        {stats && (
          <span className="inline-block text-[10px] sm:text-xs font-mono text-gold-400 bg-gold-500/10 border border-gold-500/30 px-2.5 py-0.5 rounded-full whitespace-nowrap self-start sm:self-center">
            {stats}
          </span>
        )}
      </div>
    </div>
  );
}
