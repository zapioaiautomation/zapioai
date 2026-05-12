"use client";

import { motion } from "framer-motion";
import {
  Zap, BarChart3, Bot, Globe, Settings, MapPin,
  MessageSquare, Lightbulb, Code, ArrowRight, CheckCircle, MessageCircle,
} from "lucide-react";
import Link from "next/link";
import SharedNav from "@/components/ui/shared-nav";

const services = [
  {
    id: "ai-lead-generation",
    icon: <Zap size={28} />,
    title: "AI Lead Generation Systems",
    tagline: "Qualified leads on autopilot — 24/7.",
    description:
      "Stop waiting for leads to find you. Our AI lead generation systems capture, qualify, and nurture prospects automatically using smart funnels, landing pages, and multi-step outreach — so your pipeline is always full.",
    benefits: [
      "Fill your pipeline without manual prospecting",
      "Qualify leads instantly — no human needed",
      "24/7 lead capture across all channels",
      "Reduce cost per acquisition by up to 60%",
    ],
    included: [
      "Custom AI lead capture funnels",
      "Automated lead qualification flows",
      "High-converting landing page systems",
      "CRM integration & pipeline setup",
      "Email & WhatsApp follow-up sequences",
    ],
    useCases: ["Real Estate Agencies", "Clinics & Healthcare", "Law Firms", "Recruitment Agencies", "Consultants"],
  },
  {
    id: "ai-sales-automation",
    icon: <BarChart3 size={28} />,
    title: "AI Sales Automation",
    tagline: "Close more deals without lifting a finger.",
    description:
      "Most businesses lose deals because follow-ups are slow or non-existent. Our AI sales automation systems handle appointment booking, CRM updates, follow-up reminders, and pipeline tracking — automatically, at every stage of the funnel.",
    benefits: [
      "Never miss a follow-up again",
      "Reduce sales cycle by 40–60%",
      "Automate appointment booking & reminders",
      "Real-time pipeline visibility",
    ],
    included: [
      "CRM automation & pipeline management",
      "Automated multi-step follow-up sequences",
      "AI appointment booking & calendar sync",
      "Sales performance reporting",
      "Lead scoring & prioritization",
    ],
    useCases: ["B2B Sales Teams", "Real Estate", "Financial Advisors", "SaaS Companies", "E-Commerce"],
  },
  {
    id: "ai-customer-support",
    icon: <Bot size={28} />,
    title: "AI Customer Support",
    tagline: "Instant answers, happier customers — around the clock.",
    description:
      "Customers expect fast responses. Our AI support systems handle FAQs, route complex queries to humans, and maintain consistent communication across all channels — without hiring more staff.",
    benefits: [
      "Respond to customers in under 5 seconds",
      "Reduce support ticket volume by 70%",
      "Scale support without scaling headcount",
      "Consistent, accurate answers every time",
    ],
    included: [
      "AI chatbot build & knowledge base training",
      "Multi-channel support (Website, WhatsApp, Email)",
      "FAQ automation & smart routing",
      "Human handoff workflows",
      "Monthly performance reports",
    ],
    useCases: ["E-Commerce Brands", "SaaS Products", "Clinics", "Hospitality", "Education Platforms"],
  },
  {
    id: "ai-marketing-automation",
    icon: <Globe size={28} />,
    title: "AI Marketing Automation",
    tagline: "Run campaigns that run themselves.",
    description:
      "From email sequences to customer journey mapping, our AI marketing systems nurture leads, segment audiences, and trigger the right message at the right time — maximizing every touchpoint automatically.",
    benefits: [
      "Nurture cold leads into hot prospects passively",
      "Segment audiences for higher open rates",
      "Automate entire customer journeys",
      "Save 15+ hours per week on manual campaigns",
    ],
    included: [
      "Email automation & drip sequences",
      "Lead nurturing workflows",
      "Audience segmentation & tagging",
      "Campaign triggers & automation rules",
      "A/B testing & optimization",
    ],
    useCases: ["E-Commerce", "Coaches & Consultants", "SaaS", "EdTech", "Agencies"],
  },
  {
    id: "business-process-automation",
    icon: <Settings size={28} />,
    title: "Business Process Automation",
    tagline: "Eliminate busywork. Multiply output.",
    description:
      "Your team shouldn't spend time on repetitive manual tasks. We automate internal processes — from onboarding to reporting to team communication — so your people can focus on high-value work.",
    benefits: [
      "Reclaim 20+ hours per week per team member",
      "Eliminate costly human errors",
      "Streamline onboarding, approvals, and workflows",
      "Scale operations without adding headcount",
    ],
    included: [
      "Internal workflow mapping & automation",
      "Task assignment & tracking systems",
      "Automated reporting & dashboards",
      "Document generation & approval flows",
      "Team communication & notification automation",
    ],
    useCases: ["Operations Teams", "HR & Recruitment", "Finance Departments", "Agencies", "Growing SMEs"],
  },
  {
    id: "local-business-growth",
    icon: <MapPin size={28} />,
    title: "Local Business Growth",
    tagline: "Dominate your local market with AI.",
    description:
      "Built specifically for clinics, consultants, restaurants, and local businesses in Pakistan, UAE, and beyond. Our local growth systems handle bookings, reviews, local SEO signals, and customer re-engagement — automatically.",
    benefits: [
      "Increase local visibility on Google Maps",
      "Automate review collection & reputation management",
      "Reduce no-shows with smart reminders",
      "Turn one-time customers into repeat clients",
    ],
    included: [
      "Local SEO & Google Maps optimization signals",
      "AI appointment booking & calendar management",
      "Automated review request workflows",
      "WhatsApp-first customer engagement funnels",
      "Repeat customer re-engagement campaigns",
    ],
    useCases: ["Clinics & Healthcare", "Restaurants", "Salons & Spas", "Local Consultants", "Retail Shops"],
  },
  {
    id: "whatsapp-chatbot-automation",
    icon: <MessageSquare size={28} />,
    title: "WhatsApp & Chatbot Automation",
    tagline: "Your best salesperson — available 24/7 on WhatsApp.",
    description:
      "WhatsApp is where your customers are. Our WhatsApp automation systems qualify leads, send promotions, book appointments, and handle support — all inside the app your customers already use and trust.",
    benefits: [
      "Engage leads where they already are",
      "Qualify prospects without human involvement",
      "98% open rate vs. 20% for email",
      "Book appointments and close deals via chat",
    ],
    included: [
      "WhatsApp Business API setup & integration",
      "AI-powered lead qualification flows",
      "Automated appointment booking via chat",
      "Broadcast campaigns & promotional messaging",
      "24/7 FAQ & support automation",
    ],
    useCases: ["Real Estate", "Clinics", "E-Commerce", "Local Businesses", "Any WhatsApp-first market"],
  },
  {
    id: "ai-consulting-strategy",
    icon: <Lightbulb size={28} />,
    title: "AI Consulting & Strategy",
    tagline: "Clarity before execution. Maximum ROI.",
    description:
      "Before building anything, we audit your business, identify the highest-impact AI opportunities, and create a roadmap that prioritizes results. Perfect for businesses that want expert guidance before investing in AI.",
    benefits: [
      "Identify the 3–5 highest-ROI AI use cases for your business",
      "Avoid costly mistakes and wrong tool choices",
      "Get a clear, phased implementation roadmap",
      "Align your team on AI strategy before launch",
    ],
    included: [
      "Full business & workflow audit",
      "AI opportunity analysis & scoring",
      "Custom AI implementation roadmap",
      "Tool & vendor recommendations",
      "Post-strategy implementation support",
    ],
    useCases: ["CEOs & Founders", "Ops Leaders", "Agencies", "Scale-ups", "Enterprise Teams"],
  },
  {
    id: "custom-chatbot-development",
    icon: <Code size={28} />,
    title: "Custom Chatbot Development",
    tagline: "AI assistants trained on your business — not generic answers.",
    description:
      "Generic chatbots fail because they don't know your business. We build custom AI assistants trained on your products, services, policies, and FAQs — so every conversation feels personalized and on-brand.",
    benefits: [
      "Answers trained on your exact business data",
      "Works in multiple languages",
      "Seamlessly syncs with your CRM",
      "Continuously improves with usage data",
    ],
    included: [
      "Custom AI chatbot architecture & development",
      "Knowledge base creation & training",
      "Multi-language support configuration",
      "CRM & tool integrations",
      "Ongoing maintenance & retraining",
    ],
    useCases: ["E-Commerce", "SaaS Platforms", "EdTech", "Healthcare", "Financial Services"],
  },
];

export default function ServicesPage() {
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
            What We Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            AI Automation Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
          >
            We design and deploy custom AI systems that generate leads, automate sales, support customers, and streamline operations — so your business scales without scaling your workload.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="https://wa.me/923045167233?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20AI%20strategy%20call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/30"
            >
              <MessageCircle size={18} />
              Book Free Strategy Call →
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-cyan-500/40 text-cyan-300 font-semibold px-6 py-3.5 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/70 transition-all duration-200"
            >
              Get Free AI Audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-4 pb-32 space-y-24">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="scroll-mt-24"
          >
            <div className="border border-cyan-500/15 rounded-2xl bg-[#0a1628]/60 overflow-hidden">
              {/* Header */}
              <div className="p-8 border-b border-cyan-500/10">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-1">
                      Service {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {service.title}
                    </h2>
                    <p className="text-cyan-300/80 font-medium">{service.tagline}</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-400 leading-relaxed">{service.description}</p>
              </div>

              {/* Body */}
              <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-cyan-500/10">
                {/* Benefits */}
                <div className="p-8">
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's Included */}
                <div className="p-8">
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">What&apos;s Included</h3>
                  <ul className="space-y-3">
                    {service.included.map((inc, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-5 border-t border-cyan-500/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#070f1d]/50">
                <div>
                  <p className="text-xs text-gray-500 mb-2">Best for:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.useCases.map((uc) => (
                      <span key={uc} className="text-xs text-cyan-300/70 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-2.5 py-0.5">
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/20 whitespace-nowrap shrink-0"
                >
                  Get Started <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4 border-t border-white/5 bg-[#030810] relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(14,165,233,0.1) 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Not Sure Where to Start?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a free 30-minute strategy call. We&apos;ll identify your highest-ROI AI opportunities and outline a custom plan — at no cost.
          </p>
          <a
            href="https://wa.me/923045167233?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20AI%20strategy%20call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-2xl shadow-cyan-500/30"
          >
            <MessageCircle size={20} />
            Book Free Strategy Call →
          </a>
        </div>
      </section>
    </main>
  );
}
