import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { businessConfig } from '../config/business';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    service: 'PPF',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Build WhatsApp quick link as well
      const text = encodeURIComponent(
        `Hi JOS Group,\nI'd like to request a quote.\nName: ${formData.name}\nPhone: ${formData.phone}\nCar: ${formData.carModel}\nService: ${formData.service}\nNotes: ${formData.message}`
      );
      window.open(`https://wa.me/${businessConfig.whatsapp}?text=${text}`, '_blank');
    }, 1200);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg bg-dark-900 border border-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-auto"
          >
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors p-2"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-500 uppercase mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Instant Consultation</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    REQUEST A QUOTE
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1">
                    Tell us about your vehicle and your desired protection or restoration package.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-dark-800 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-dark-800 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                        Car Make & Model *
                      </label>
                      <input
                        type="text"
                        name="carModel"
                        required
                        value={formData.carModel}
                        onChange={handleChange}
                        placeholder="e.g. Porsche 911 / BMW M3"
                        className="w-full bg-dark-800 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                      Required Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-dark-800 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="PPF">Paint Protection Film (PPF)</option>
                      <option value="CERAMIC">Ceramic / Graphene Coating</option>
                      <option value="PAINTING">Automotive Painting</option>
                      <option value="DENTING">Denting & Body Restoration</option>
                      <option value="CORRECTION">Paint Correction</option>
                      <option value="DETAILING">Premium Detailing</option>
                      <option value="OTHER">Bespoke Customization / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-neutral-300 mb-1.5">
                      Specific Notes or Requirements
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention any specific scratches, matte finish, or timeline expectations..."
                      className="w-full bg-dark-800 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-gradient text-black font-bold uppercase tracking-wider py-4 rounded-lg hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
                  >
                    <span>REQUEST BESPOKE QUOTE</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-gold-500/20 text-gold-500 border border-gold-500/50 rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h4 className="text-2xl font-bold text-white font-heading">
                  REQUEST RECEIVED
                </h4>
                <p className="text-sm text-neutral-300 max-w-sm mx-auto">
                  Thank you! Our detailing specialist is connecting with you via WhatsApp & Phone shortly.
                </p>
                <button
                  onClick={resetAndClose}
                  className="mt-4 px-6 py-2.5 bg-dark-800 border border-neutral-700 text-white rounded-lg text-xs font-semibold uppercase tracking-wider hover:border-gold-500 transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
