import React from 'react';
import { businessConfig } from '../config/business';
import { ArrowUp, Instagram, MessageCircle, Phone, Shield } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 text-neutral-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="inline-block group">
              <img
                src="/assets/logo.png"
                alt="JOS Group Logo"
                className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-md"
              />
            </a>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              {businessConfig.tagline}
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Specializing in Paint Protection Film (PPF), Ceramic & Graphene Coating, Automotive Painting, Denting, Paint Correction & Detailing.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={businessConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-gold-400 hover:border-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${businessConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="w-9 h-9 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-gold-400 hover:border-gold-500 transition-colors"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#before-after" className="hover:text-gold-400 transition-colors">Before & After</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Our Work</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              TREATMENTS
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Paint Protection Film (PPF)</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Ceramic / Graphene Coating</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Automotive Painting</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Denting & Body Restoration</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Paint Correction</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Premium Detailing</a></li>
            </ul>
          </div>

          {/* Studio Contact Info */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              STUDIO LOCATION
            </div>
            <div className="text-xs space-y-1">
              <p className="text-white">{businessConfig.location.address}</p>
              <p>{businessConfig.location.city}</p>
              <p className="text-gold-400 font-mono pt-1">
                <a href={`tel:${businessConfig.phoneRaw}`} className="hover:underline">{businessConfig.phone}</a>
                <br />
                <a href={`tel:${businessConfig.phoneSecondaryRaw}`} className="hover:underline">{businessConfig.phoneSecondary}</a>
              </p>
            </div>
            <button
              onClick={onOpenQuote}
              className="mt-2 w-full py-2.5 bg-dark-800 border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-black font-bold uppercase text-[10px] tracking-wider rounded-lg transition-colors"
            >
              REQUEST QUOTE
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {new Date().getFullYear()} {businessConfig.name}. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-gold-400 transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
