"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Menu, X, MessageCircle } from "lucide-react";
import NavHeader from "@/components/ui/nav-header";

export default function SharedNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Zap size={16} className="text-white" />
          </div>
          <span className="text-xl font-bold gradient-text" style={{ fontFamily: "'Syne', sans-serif" }}>
            Zapioai
          </span>
        </a>

        <div className="hidden lg:block">
          <NavHeader />
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+923403338516"
            className="text-sm text-gray-300 hover:text-white border border-white/10 hover:border-cyan-500/40 px-4 py-2 rounded-full transition-all duration-200"
          >
            Book Free Call
          </a>
          <a
            href="/contact"
            className="text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            Get Free AI Audit
          </a>
        </div>

        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#070f1d] border-t border-white/5 px-4 py-4 space-y-3"
        >
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Offers", href: "/#offers" },
            { label: "About Us", href: "/about" },
            { label: "Contact Us", href: "/contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-gray-300 hover:text-white py-1.5 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2 border-t border-white/5">
            <a href="tel:+923403338516" className="text-center text-sm text-white border border-white/10 px-4 py-2.5 rounded-full">
              Book Free Call
            </a>
            <a
              href="https://wa.me/923403338516"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2.5 rounded-full font-medium flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
