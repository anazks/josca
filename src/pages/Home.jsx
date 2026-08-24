import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HeroStats from '../components/HeroStats';
import Services from '../components/Services';
import FeaturedPPF from '../components/FeaturedPPF';
import BeforeAfter from '../components/BeforeAfter';
import Process from '../components/Process';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Instagram from '../components/Instagram';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import CustomCursor from '../components/CustomCursor';
import QuoteModal from '../components/QuoteModal';

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleOpenQuote = () => setQuoteModalOpen(true);
  const handleCloseQuote = () => setQuoteModalOpen(false);

  return (
    <div className="relative min-h-screen bg-dark-950 text-white selection:bg-gold-500 selection:text-black font-sans">
      {/* Custom Desktop Ring Cursor */}
      <CustomCursor />

      {/* Glassmorphism Sticky Navigation Bar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenQuote={handleOpenQuote} />
        <HeroStats />
        <Services onOpenQuote={handleOpenQuote} />
        <FeaturedPPF onOpenQuote={handleOpenQuote} />
        <BeforeAfter onOpenQuote={handleOpenQuote} />
        <Process />
        <About />
        <Gallery />
        <Instagram />
        <Testimonials />
        <CTA onOpenQuote={handleOpenQuote} />
        <Contact />
      </main>

      {/* Luxury Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating Conversion Widgets */}
      <FloatingWhatsApp />
      <QuoteModal isOpen={quoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}
