import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { businessConfig } from '../config/business';
import { Phone, MessageCircle, Instagram, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
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
  };

  return (
    <section id="contact" className="relative bg-dark-900 py-16 sm:py-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-gold-500 uppercase">
            <span>// CONTACT & INQUIRIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight leading-none">
            CONNECT WITH <span className="text-gold-gradient">JOS GROUP.</span>
          </h2>

          <p className="text-xs sm:text-base text-neutral-300 font-sans font-light">
            Book an appointment, request custom quotes, or visit our detailing studio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Form Column (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-dark-800 border border-white/10 p-5 sm:p-8 rounded-3xl shadow-2xl space-y-5"
          >
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white uppercase tracking-tight">
              REQUEST A CUSTOM QUOTE
            </h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Vikramaditya Sharma"
                      className="w-full bg-dark-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      PHONE *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99478 12555"
                      className="w-full bg-dark-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      CAR MODEL *
                    </label>
                    <input
                      type="text"
                      name="carModel"
                      required
                      value={formData.carModel}
                      onChange={handleChange}
                      placeholder="e.g. Porsche 911 / BMW M5"
                      className="w-full bg-dark-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      SERVICE REQUIRED *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-dark-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="PPF">Paint Protection Film (PPF)</option>
                      <option value="CERAMIC COATING">Ceramic / Graphene Coating</option>
                      <option value="PAINTING">Car Painting</option>
                      <option value="DENTING">Denting & Body Work</option>
                      <option value="DETAILING">Exterior & Interior Detailing</option>
                      <option value="PAINT CORRECTION">Paint Correction</option>
                      <option value="OTHER">Other Customization</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    MESSAGE & VEHICLE CONDITION
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe specific scratches, matte finish goals, or preferred appointment dates..."
                    className="w-full bg-dark-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-gradient text-black font-bold uppercase tracking-wider py-3.5 rounded-xl hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 text-xs shadow-lg shadow-gold-500/20"
                >
                  <span>REQUEST A QUOTE</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-gold-500/20 text-gold-500 border border-gold-500/50 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-white font-heading">
                  THANK YOU FOR CONTACTING US
                </h4>
                <p className="text-neutral-300 text-sm max-w-md mx-auto">
                  Your inquiry has been submitted directly to our studio team. We will review your vehicle details and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-dark-900 border border-neutral-700 text-white rounded-lg text-xs font-semibold uppercase hover:border-gold-500 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </motion.div>

          {/* Quick Info Sidebar Column (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Phone & WhatsApp Card */}
            <div className="bg-dark-800 border border-white/10 p-6 rounded-2xl space-y-4">
              <div className="text-xs font-mono text-gold-400 font-bold uppercase tracking-widest">
                DIRECT CHANNELS
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase font-mono">PHONE NUMBERS</div>
                    <div className="flex flex-col sm:flex-row sm:gap-4 text-sm font-bold font-heading">
                      <a href={`tel:${businessConfig.phoneRaw}`} className="hover:text-gold-400 transition-colors">
                        {businessConfig.phone}
                      </a>
                      <span className="hidden sm:inline text-neutral-600">•</span>
                      <a href={`tel:${businessConfig.phoneSecondaryRaw}`} className="hover:text-gold-400 transition-colors">
                        {businessConfig.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${businessConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white hover:text-emerald-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 text-emerald-400 flex items-center justify-center group-hover:border-emerald-500">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase font-mono">WHATSAPP</div>
                    <div className="text-sm font-bold font-heading">Chat Directly on WhatsApp</div>
                  </div>
                </a>

                <a
                  href={businessConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white hover:text-gold-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 text-gold-400 flex items-center justify-center group-hover:border-gold-500">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase font-mono">INSTAGRAM</div>
                    <div className="text-sm font-bold font-heading">{businessConfig.instagramHandle}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="bg-dark-800 border border-white/10 p-6 rounded-2xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase font-mono">STUDIO LOCATION</div>
                  <div className="text-sm font-bold text-white font-heading">{businessConfig.location.address}</div>
                  <div className="text-xs text-neutral-400">{businessConfig.location.city}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase font-mono">BUSINESS HOURS</div>
                  <div className="text-xs text-neutral-300 font-semibold">{businessConfig.businessHours.weekdays}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{businessConfig.businessHours.sunday}</div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
