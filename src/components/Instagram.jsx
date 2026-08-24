import React from 'react';
import { motion } from 'framer-motion';
import { instagramPosts } from '../data/instagramData';
import { businessConfig } from '../config/business';
import { Instagram as InstagramIcon, Heart, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Instagram() {
  return (
    <section className="relative bg-dark-900 py-16 sm:py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-gold-500 uppercase">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>INSTAGRAM FEED</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight leading-none">
              FOLLOW THE <span className="text-gold-gradient">TRANSFORMATION.</span>
            </h2>

            <p className="text-xs sm:text-base text-neutral-300 font-sans font-light">
              See our latest work, transformations and projects daily on {businessConfig.instagramHandle}.
            </p>
          </div>

          <a
            href={businessConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-dark-800 border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-all duration-300 flex items-center gap-2 self-start md:self-auto shadow-lg"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>FOLLOW {businessConfig.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Grid Instagram Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={businessConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-dark-800 border border-white/10 hover:border-gold-500/50 shadow-xl"
            >
              <img
                src={post.image}
                alt={`JOS Group Instagram Post ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90"
                loading="lazy"
              />

              {/* Hover Stats Overlay */}
              <div className="absolute inset-0 bg-black/75 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                <div className="flex items-center justify-end text-gold-400">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <p className="text-[11px] text-neutral-300 line-clamp-2 leading-snug font-sans">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-3 text-xs font-mono text-gold-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-gold-400" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
