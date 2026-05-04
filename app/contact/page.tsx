"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import SharedNav from "@/components/ui/shared-nav";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-cyan-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-gray-400 max-w-sm mx-auto">
          Our team will review your message and reply with a custom AI plan within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-cyan-400 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-sm text-gray-400 mb-1.5 block">Full Name *</label>
          <input
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 placeholder:text-gray-600 transition-all"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-1.5 block">Email Address *</label>
          <input
            required
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 placeholder:text-gray-600 transition-all"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-400 mb-1.5 block">Phone / WhatsApp</label>
        <input
          type="tel"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 placeholder:text-gray-600 transition-all"
          placeholder="+1 234 567 8900"
        />
      </div>
      <div>
        <label className="text-sm text-gray-400 mb-1.5 block">Business / Industry *</label>
        <input
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 placeholder:text-gray-600 transition-all"
          placeholder="e.g. Real estate agency in Dubai"
        />
      </div>
      <div>
        <label className="text-sm text-gray-400 mb-1.5 block">What would you like to automate? *</label>
        <textarea
          required
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 placeholder:text-gray-600 transition-all resize-none"
          placeholder="Tell us about your business challenges and what you'd like to automate — leads, follow-ups, support, operations, etc."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2"
      >
        <ArrowRight size={18} />
        Send Your Message →
      </button>
      <p className="text-center text-xs text-gray-600">🔒 Your information is safe. Zero spam ever.</p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050b14] text-white">
      <SharedNav />
      <div className="h-16" />

      {/* Hero */}
      <section className="py-20 text-center px-4 relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.12) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Let&apos;s Build Your AI System
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Tell us about your business and our team will reply with a custom AI automation plan within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 pb-32">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold text-white mb-6">Contact Details</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0a1628]/60 border border-white/5">
                  <MapPin size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Location</p>
                    <p className="text-sm text-gray-500">Islamabad, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0a1628]/60 border border-white/5">
                  <Mail size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Email</p>
                    <a href="mailto:info@Zapioai.com" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                      info@Zapioai.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0a1628]/60 border border-white/5">
                  <Phone size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Phone</p>
                    <a href="tel:+923045167233" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">
                      +92 304 5167233
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0a1628]/60 border border-white/5">
                  <MessageCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">WhatsApp</p>
                    <a
                      href="https://wa.me/923403338516"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-green-400 transition-colors"
                    >
                      Chat with us →
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20">
                <p className="text-white font-semibold mb-2">Prefer to talk directly?</p>
                <p className="text-gray-400 text-sm mb-4">
                  Book a free 30-minute strategy call on WhatsApp and we&apos;ll identify your top 3 AI opportunities on the spot.
                </p>
                <a
                  href="https://wa.me/923403338516?text=Hello%20Zapioai!%20I'd%20like%20to%20book%20a%20free%20strategy%20call."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm w-full justify-center"
                >
                  <MessageCircle size={16} />
                  Book Free Strategy Call
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-[#0a1628]/60 border border-cyan-500/15 rounded-2xl p-8"
          >
            <h2 className="text-xl font-bold text-white mb-6">Send Us a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
