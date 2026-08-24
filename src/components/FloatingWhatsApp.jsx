import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { businessConfig } from '../config/business';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const text = encodeURIComponent(businessConfig.whatsappDefaultMessage);
    window.open(`https://wa.me/${businessConfig.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9980] bg-emerald-500 hover:bg-emerald-400 text-white p-3 sm:p-4 rounded-full shadow-2xl shadow-emerald-500/40 flex items-center justify-center group focus:outline-none border-2 border-emerald-300/30"
      aria-label="Chat on WhatsApp"
      title="Chat with JOS Group Detailing Specialist"
    >
      {/* Pulse Outer Ring */}
      <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping" />
      
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 fill-white text-emerald-500" />
      
      {/* Tooltip on Hover */}
      <span className="absolute right-full mr-3 bg-dark-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-xl">
        Chat on WhatsApp
      </span>
    </motion.button>
  );
}
