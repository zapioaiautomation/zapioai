"use client";

import { motion } from "framer-motion";
import { Zap, Users, Target, Globe, TrendingUp, CheckCircle, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SharedNav from "@/components/ui/shared-nav";

const stats = [
  { value: "50+", label: "Businesses Automated" },
  { value: "30 Days", label: "Average Results Timeline" },
  { value: "24/7", label: "AI Systems Always Active" },
  { value: "5+", label: "Countries Served" },
];

const values = [
  {
    icon: <Target size={22} />,
    title: "Results First",
    desc: "We don't build tech demos — we build revenue systems. Every automation we deploy is tied to a measurable business outcome.",
  },
  {
    icon: <Users size={22} />,
    title: "Done For You",
    desc: "You run your business. We handle everything technical — setup, integration, testing, and ongoing optimization.",
  },
  {
    icon: <Globe size={22} />,
    title: "Global Reach",
    desc: "We serve businesses across Pakistan, UAE, USA, UK, Canada, and Australia with systems tuned to local markets.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Scalable Systems",
    desc: "Every system we build is designed to grow with your business — no ripping and replacing as you scale.",
  },
];

const team = [
  {
    name: "AI Automation Experts",
    role: "Strategy & Systems Design",
    desc: "Our strategists analyze your business workflows and design AI systems that target the highest-impact opportunities first.",
  },
  {
    name: "Technical Build Team",
    role: "Development & Integration",
    desc: "Experienced developers who integrate AI tools, build custom automations, and connect your systems seamlessly.",
  },
  {
    name: "Growth Partners",
    role: "Ongoing Optimization",
    desc: "We stay with you after launch — monitoring performance, refining automations, and finding new opportunities to grow.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050b14] text-white">
      <SharedNav />
      <div className="h-16" />

      {/* Hero */}
      <section className="py-24 text-center px-4 relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.12) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            We Build AI Systems That Grow Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Zapioai is an AI automation agency helping businesses across Pakistan, the GCC, and international markets automate their lead generation, sales, customer support, and operations — so they can grow faster with less effort.
          </motion.p>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-cyan-500/30 bg-[#0a1628]/80 p-8 md:p-12 overflow-hidden"
          style={{ boxShadow: "0 0 60px rgba(14,165,233,0.08), inset 0 0 60px rgba(14,165,233,0.03)" }}
        >
          {/* Subtle glow blob */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-8">Meet the Founder</p>

          <div className="flex flex-col md:flex-row md:items-start gap-10">
            {/* Left: Photo */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  width: 200,
                  height: 200,
                  boxShadow: "0 0 0 2px rgba(14,165,233,0.4), 0 0 30px rgba(14,165,233,0.2)",
                }}
              >
                <Image
                  src="/dua-ali.jpg"
                  alt="Dua Ali, CEO and Founder of Zapioai"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Name block + Story */}
            <div className="flex-1 min-w-0">
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-br from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Dua Ali
              </h2>
              <p className="mt-2 text-sm font-semibold text-white/70 uppercase tracking-wider">CEO & Founder</p>
              <p className="mt-1 text-xs text-gray-500 uppercase tracking-wide">Zapioai</p>
              <div className="mt-4 mb-6 h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent" />

              <div className="space-y-5 text-gray-400 leading-relaxed text-[15px]">
                <p>
                  At 23, I was studying IT and watching businesses around me bleed time and money on tasks that should have been automated years ago. I wasn&apos;t a CEO — I was a student with a laptop, a frustration, and a question: <em className="text-gray-300 not-italic">why is powerful AI technology still out of reach for most businesses?</em>
                </p>
                <p>
                  That question became Zapioai. I built the first systems myself — AI lead generation pipelines, chatbots, outreach automations — for businesses in Pakistan, UAE, and beyond. Every client taught me something new. Every deployment made the systems sharper. What started as a side project turned into a platform serving businesses across 5+ countries, and I&apos;m just getting started.
                </p>
                <p>
                  I built Zapioai with one belief: you shouldn&apos;t need a technical team or a Silicon Valley budget to compete with AI. You need the right partner, the right system, and 30 days. That&apos;s what we deliver — every time.
                </p>

                <a
                  href="mailto:CEO@zapioai.com"
                  className="inline-flex items-center gap-2 mt-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors group"
                >
                  Get in touch directly: CEO@zapioai.com
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-[#0a1628]/60 border border-cyan-500/15"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
              Built by Business Operators, for Business Operators
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                We started Zapioai after seeing firsthand how much time and revenue businesses waste on manual, repetitive processes — chasing leads, sending follow-ups, managing customer queries, and handling operations that AI can handle in seconds.
              </p>
              <p>
                Our mission is simple: take AI out of the hype and into real business results. We build practical, done-for-you automation systems that generate measurable outcomes within 30 days — not months.
              </p>
              <p>
                From real estate agencies in Lahore to clinics in Dubai and e-commerce brands in Toronto, we&apos;ve helped businesses across industries and geographies automate their growth engines and reclaim their time.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              "Pakistan-founded, globally focused",
              "Specialized in GCC, US, UK, Canada & Australia markets",
              "100% done-for-you — no technical skills needed from you",
              "Results-focused: we measure success by your revenue",
              "Custom systems — nothing off-the-shelf or generic",
              "Ongoing support after every deployment",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0a1628]/40 border border-white/5">
                <CheckCircle size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{point}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-t border-white/5 bg-[#070f1d]/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              How We Work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-[#0a1628]/60 border border-cyan-500/15 hover:border-cyan-500/30 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  {v.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">The Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            Who Builds Your Systems
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-[#0a1628]/60 border border-cyan-500/15"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <Zap size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-1">{member.name}</h3>
              <p className="text-xs text-cyan-400 mb-3 font-medium uppercase tracking-wider">{member.role}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4 border-t border-white/5 bg-[#030810] relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(14,165,233,0.1) 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Ready to Work Together?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free strategy call and discover what AI automation can do for your specific business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/923045167233?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20AI%20strategy%20call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-2xl shadow-cyan-500/30"
            >
              <MessageCircle size={20} />
              Book Free Strategy Call →
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-cyan-500/40 text-cyan-300 font-semibold px-8 py-4 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/70 transition-all duration-200"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
