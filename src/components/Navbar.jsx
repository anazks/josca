import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { businessConfig } from '../config/business';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'SERVICES', href: '#services' },
    { name: 'OUR WORK', href: '#gallery' },
    { name: 'BEFORE & AFTER', href: '#before-after' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav py-4 shadow-2xl' : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src="/assets/logo.jpeg"
              alt="JOS Group Logo"
              className="h-9 sm:h-11 w-auto rounded-lg border border-gold-500/30 object-contain shadow-md transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tighter font-display text-white group-hover:text-gold-400 transition-colors leading-none">
                JOS<span className="text-gold-500 ml-1">GROUP</span>
              </span>
              <span className="text-[9px] tracking-widest text-gold-400/90 font-mono uppercase mt-0.5">
                AUTOMOTIVE CARE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-neutral-300 hover:text-gold-400 transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="text-neutral-400 hover:text-gold-400 p-2 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Call Us"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{businessConfig.phone}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold tracking-wider text-black rounded-lg group bg-gold-gradient hover:brightness-110 transition-all duration-300 shadow-md shadow-gold-500/20"
            >
              <span className="px-5 py-2.5 transition-all duration-300 ease-in flex items-center gap-1">
                GET A QUOTE
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 bg-gold-gradient text-black text-[11px] font-bold tracking-wider rounded"
            >
              QUOTE
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-dark-950/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 md:hidden"
          >
            <div className="space-y-6">
              <p className="text-[10px] font-mono tracking-widest text-gold-500 uppercase">
                // NAVIGATION
              </p>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold font-heading tracking-wider text-white hover:text-gold-500 transition-colors flex items-center justify-between border-b border-white/5 pb-3"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-5 h-5 text-gold-500/60" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-gold-gradient text-black font-bold uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2"
              >
                GET A FREE QUOTE
              </button>

              <div className="text-center text-xs text-neutral-400 font-mono pt-2">
                {businessConfig.phone} • {businessConfig.instagramHandle}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
