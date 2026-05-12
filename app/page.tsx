"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase, MessageCircle, DollarSign, TrendingUp, Home,
  Search, Map, Code, Rocket, CheckCircle, ArrowRight,
  Zap, Bot, Users, BarChart3, Settings, MapPin, MessageSquare,
  Lightbulb, Globe, Phone, Mail, AlertTriangle, Clock, Target,
  Wifi, X, Menu,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import NavHeader from "@/components/ui/nav-header";
import { CircleMenu } from "@/components/ui/circle-menu";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import PricingSection from "@/components/ui/pricing-section";
import { MorphingCardStack } from "@/components/ui/morphing-card-stack";
import { Marquee } from "@/components/ui/marquee";
import { OnboardingChecklist } from "@/components/ui/onboarding-checklist";
import AnimatedSocialLinks from "@/components/ui/social-links";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card as TestiCard, CardContent } from "@/components/ui/card";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

/* ─────────────────────── DATA ─────────────────────── */

const processSteps = [
  { id: 1, title: "System Audit", date: "Step 1", content: "Deep analysis of your current business workflows and bottlenecks.", category: "Planning", icon: Search, relatedIds: [2], status: "completed" as const, energy: 100 },
  { id: 2, title: "AI Strategy", date: "Step 2", content: "Crafting a high-impact roadmap for automation and AI scaling.", category: "Strategy", icon: Map, relatedIds: [1, 3], status: "in-progress" as const, energy: 85 },
  { id: 3, title: "Custom Build", date: "Step 3", content: "Developing and integrating your custom AI agents and systems.", category: "Development", icon: Code, relatedIds: [2, 4], status: "pending" as const, energy: 60 },
  { id: 4, title: "Deploy & Scale", date: "Step 4", content: "Launch, optimize, and scale your growth with performance data.", category: "Scale", icon: Rocket, relatedIds: [3], status: "pending" as const, energy: 30 },
];

const painPoints = [
  { id: "1", title: "Slow Lead Response", description: "Your competitors reply instantly. You don't. Every minute of delay costs you clients and revenue.", icon: <Clock className="h-5 w-5" /> },
  { id: "2", title: "Manual Follow-ups", description: "80% of sales require 5+ follow-ups. Most businesses stop at 1. You're leaving money on the table.", icon: <AlertTriangle className="h-5 w-5" /> },
  { id: "3", title: "No Automation", description: "Your team spends hours on repetitive tasks instead of growth. That's wasted salary and missed potential.", icon: <Settings className="h-5 w-5" /> },
  { id: "4", title: "No Systems", description: "Scaling feels impossible without reliable processes. Chaos kills growth. Automation kills chaos.", icon: <Target className="h-5 w-5" /> },
  { id: "5", title: "Weak Online Presence", description: "Leads are everywhere online. You're not capturing them. Your competitors are getting them instead.", icon: <Wifi className="h-5 w-5" /> },
];

const services = [
  { slug: "ai-lead-generation", icon: <Zap size={20} />, title: "AI Lead Generation Systems", desc: "Generate qualified leads using AI-powered funnels, landing pages, and automated outreach.", subs: ["Lead capture funnels", "AI qualification flows", "Landing page systems"] },
  { slug: "ai-sales-automation", icon: <BarChart3 size={20} />, title: "AI Sales Automation", desc: "Automate follow-ups, appointment booking, and CRM pipeline workflows to boost conversions.", subs: ["CRM automation", "Follow-up sequences", "Appointment workflows"] },
  { slug: "ai-customer-support", icon: <Bot size={20} />, title: "AI Customer Support", desc: "Provide faster support with AI assistants, FAQ bots, and multi-channel response workflows.", subs: ["FAQ bots", "Customer query handling", "Multi-channel support"] },
  { slug: "ai-marketing-automation", icon: <Globe size={20} />, title: "AI Marketing Automation", desc: "Automate email sequences, customer journeys, and content support systems.", subs: ["Email automation", "Lead nurturing", "Campaign workflows"] },
  { slug: "business-process-automation", icon: <Settings size={20} />, title: "Business Process Automation", desc: "Reduce repetitive work by automating onboarding, reporting, and internal communication.", subs: ["Internal workflows", "Task automation", "Reporting systems"] },
  { slug: "local-business-growth", icon: <MapPin size={20} />, title: "Local Business Growth", desc: "Specially designed for clinics, consultants, and agencies to dominate local markets.", subs: ["Local SEO & Maps", "AI Appointment Booking", "Auto Reviews & Reputation"] },
  { slug: "whatsapp-chatbot-automation", icon: <MessageSquare size={20} />, title: "WhatsApp & Chatbot Automation", desc: "Scale engagement with intelligent WhatsApp flows and AI agents that qualify leads 24/7.", subs: ["24/7 AI Customer Support", "Automated Sales Sequences", "Instant Lead Qualification"] },
  { slug: "ai-consulting-strategy", icon: <Lightbulb size={20} />, title: "AI Consulting & Strategy", desc: "Expert guidance to implement the most impactful AI opportunities with a custom roadmap.", subs: ["Custom AI Roadmap", "Workflow Optimization", "Tech Stack Integration"] },
  { slug: "custom-chatbot-development", icon: <Code size={20} />, title: "Custom Chatbot Development", desc: "Tailor-made AI assistants trained on your business data for personalized experiences.", subs: ["Knowledge Base Training", "Multi-Language Support", "Seamless CRM Sync"] },
];

const testimonials = [
  { name: "Raza Khan", username: "Real Estate Agency, Lahore", body: "+340% Qualified Leads in 45 days. The AI lead capture and follow-up system completely transformed how we handle inquiries.", img: "https://randomuser.me/api/portraits/men/32.jpg", country: "🇵🇰 Pakistan" },
  { name: "Dr. Ayesha Siddiqui", username: "Clinic, Karachi", body: "+270% Bookings & 24/7 availability. The AI chatbot never misses a patient message — even at 3am.", img: "https://randomuser.me/api/portraits/women/44.jpg", country: "🇵🇰 Pakistan" },
  { name: "John Mitchell", username: "Consultant, New York", body: "Zapioai's AI system saved us 20 hours/week and doubled our lead quality. ROI was visible in the first month.", img: "https://randomuser.me/api/portraits/men/11.jpg", country: "🇺🇸 USA" },
  { name: "Sarah Chen", username: "E-Commerce, Toronto", body: "The WhatsApp automation is incredible — we never miss a lead now. Customer satisfaction went through the roof.", img: "https://randomuser.me/api/portraits/women/68.jpg", country: "🇨🇦 Canada" },
  { name: "Mohammed Al-Rashid", username: "Law Firm, Dubai", body: "ROI in 30 days, exactly as promised. The team is incredibly professional and delivered beyond expectations.", img: "https://randomuser.me/api/portraits/men/54.jpg", country: "🇦🇪 UAE" },
  { name: "Emma Thompson", username: "Recruitment Agency, London", body: "Automated our entire candidate pipeline. What used to take 3 staff now runs on autopilot with better results.", img: "https://randomuser.me/api/portraits/women/23.jpg", country: "🇬🇧 UK" },
  { name: "Carlos Mendez", username: "Restaurant Group, Miami", body: "AI booking system increased our reservations by 180%. Best investment we've made in years.", img: "https://randomuser.me/api/portraits/men/77.jpg", country: "🇺🇸 USA" },
  { name: "Priya Sharma", username: "EdTech Startup, Vancouver", body: "Our lead nurturing became completely hands-free. The AI follows up better than our human sales team did.", img: "https://randomuser.me/api/portraits/women/55.jpg", country: "🇨🇦 Canada" },
];

const socials = [
  { name: "WhatsApp", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", href: "https://wa.me/923045167233?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20AI%20strategy%20call" },
  { name: "LinkedIn", image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", href: "#" },
  { name: "Instagram", image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", href: "#" },
  { name: "YouTube", image: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg", href: "#" },
];

const circleNavItems = [
  { label: "Home", icon: <Home size={16} />, href: "#" },
  { label: "Services", icon: <Briefcase size={16} />, href: "#services" },
  { label: "Pricing", icon: <DollarSign size={16} />, href: "#pricing" },
  { label: "Results", icon: <TrendingUp size={16} />, href: "#results" },
  { label: "WhatsApp", icon: <MessageCircle size={16} />, href: "https://wa.me/923045167233?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20AI%20strategy%20call" },
];

const whyUsItems = [
  { id: 1, text: "AI + Business Growth expertise" },
  { id: 2, text: "Automation built for revenue, not just fancy tech" },
  { id: 3, text: "Done-for-you implementation — zero tech knowledge needed" },
  { id: 4, text: "Tailored for Pakistan, GCC & international markets" },
  { id: 5, text: "Focused on leads, sales, and real efficiency gains" },
  { id: 6, text: "Scalable systems for long-term growth" },
];

/* ─────────────────────── TESTIMONIAL CARD ─────────────────────── */

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <TestiCard className="w-72 bg-[#0a1628] border border-cyan-500/15 flex-shrink-0">
      <CardContent className="pt-4">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-cyan-500/20 text-cyan-300">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-semibold text-white flex items-center gap-1">
              {name} <span className="text-xs">{country}</span>
            </figcaption>
            <p className="text-xs text-gray-500">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-gray-300 leading-relaxed">{body}</blockquote>
      </CardContent>
    </TestiCard>
  );
}

/* ─────────────────────── AUDIT MODAL ─────────────────────── */

function AuditModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); }, 2500);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#070f1d] border border-cyan-500/30 max-w-md shadow-2xl shadow-cyan-500/10">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">Get Your Free AI Growth Plan</DialogTitle>
          <DialogDescription className="text-gray-400">
            Takes 60 seconds. We&apos;ll analyze your business and send you a personalized AI automation roadmap within 24 hours.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <p className="text-white font-semibold text-lg">Submitted Successfully!</p>
            <p className="text-gray-400 text-sm mt-2">We&apos;ll send your AI roadmap within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Full Name</label>
              <input required className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-500/50 placeholder:text-gray-600" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Email Address</label>
              <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-500/50 placeholder:text-gray-600" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Business / Industry</label>
              <input required className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-500/50 placeholder:text-gray-600" placeholder="e.g. Real estate agency, clinic..." />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">WhatsApp / Phone</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-500/50 placeholder:text-gray-600" placeholder="+1 234 567 8900" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/30">
              Send Me My Free AI Plan →
            </button>
            <p className="text-center text-xs text-gray-600">🔒 Your information is safe. Zero spam ever.</p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

/* ─────────────────────── MAIN PAGE ─────────────────────── */

export default function Page() {
  const [auditOpen, setAuditOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050b14] text-white overflow-x-hidden">
      {/* Fixed dotted wave background */}
      <DottedSurface />

      {/* Audit Modal */}
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />

      {/* ══════════════════════════════════════════
          SECTION 1 — STICKY NAVIGATION
      ══════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold gradient-text" style={{ fontFamily: "'Syne', sans-serif" }}>
              Zapioai
            </span>
          </a>

          {/* Desktop Nav — NavHeader component */}
          <div className="hidden lg:block">
            <NavHeader />
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+923045167233"
              className="text-sm text-gray-300 hover:text-white border border-white/10 hover:border-cyan-500/40 px-4 py-2 rounded-full transition-all duration-200"
            >
              Book Free Call
            </a>
            <button
              onClick={() => setAuditOpen(true)}
              className="text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              Get Free AI Audit
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#070f1d] border-t border-white/5 px-4 py-4 space-y-3"
          >
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Offers", href: "#offers" },
              { label: "About Us", href: "/about" },
              { label: "Contact Us", href: "/contact" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="block text-gray-300 hover:text-white py-1.5 text-sm" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-white/5">
              <a href="tel:+923045167233" className="text-center text-sm text-white border border-white/10 px-4 py-2.5 rounded-full">Book Free Call</a>
              <button onClick={() => { setAuditOpen(true); setMobileMenuOpen(false); }} className="text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2.5 rounded-full font-medium">
                Get Free AI Audit
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* ══════════════════════════════════════════
          SECTION 2 — HERO
      ══════════════════════════════════════════ */}
      <section id="hero" className="relative pt-16 min-h-screen flex items-center">
        {/* Radial glow */}
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 py-20 w-full">
          <Card className="w-full min-h-[600px] bg-black/[0.92] border border-cyan-500/20 relative overflow-hidden shadow-2xl shadow-cyan-500/10">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(34, 211, 238, 0.5)" />

            <div className="flex flex-col lg:flex-row h-full min-h-[600px]">
              {/* Left — copy */}
              <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                {/* Live badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-white/5 border border-cyan-500/30 rounded-full px-4 py-1.5 text-xs text-cyan-300 w-fit mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 live-dot" />
                  Pakistan&apos;s Premier AI Growth Systems · US · UK · Canada
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-white mb-6"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  We Help Businesses{" "}
                  <span className="gradient-text text-glow">Automate Sales,</span>{" "}
                  Marketing & Operations Using AI
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg"
                >
                  Zapioai helps businesses in United States, Canada, UK, UAE &amp; Australia automate lead generation, follow-ups, customer support, and operations — so they grow faster with less effort.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="flex flex-col sm:flex-row gap-3 mb-8"
                >
                  <a
                    href="https://wa.me/923045167233?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20AI%20strategy%20call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
                  >
                    <MessageCircle size={18} />
                    Book Free Strategy Call →
                  </a>
                  <button
                    onClick={() => setAuditOpen(true)}
                    className="inline-flex items-center justify-center gap-2 border border-cyan-500/40 text-cyan-300 font-semibold px-6 py-3.5 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/70 transition-all duration-200"
                  >
                    Get Free AI Audit
                  </button>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3 text-sm text-gray-400"
                >
                  {["No technical skills needed", "Done-for-you implementation", "Results in 30 days"].map((badge) => (
                    <span key={badge} className="flex items-center gap-1.5">
                      <CheckCircle size={14} className="text-cyan-400 flex-shrink-0" />
                      {badge}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Right — 3D Spline scene */}
              <div className="flex-1 relative min-h-[350px] lg:min-h-0">
                {/* Live dashboard widget */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="absolute top-6 right-6 z-20 glass-card rounded-xl p-4 w-52 float-anim"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-400 live-dot" />
                    <span className="text-xs font-bold text-green-300 tracking-widest">LIVE AI DASHBOARD</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Leads Today</span>
                      <span className="text-sm font-bold text-cyan-300">47</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Appointments</span>
                      <span className="text-sm font-bold text-cyan-300">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">Revenue</span>
                      <span className="text-sm font-bold text-cyan-300">$2.8M</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-cyan-500/10">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp size={12} className="text-green-400" />
                      <span className="text-xs text-green-400 font-semibold">+184% growth today</span>
                    </div>
                  </div>
                  <div className="mt-2.5 space-y-1">
                    {["WhatsApp Lead", "AI Chatbot", "CRM Booking"].map((feed) => (
                      <div key={feed} className="flex items-center gap-1.5 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                        {feed}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>

          {/* Business tags ticker */}
          <div className="mt-8 overflow-hidden">
            <div className="flex gap-4 ticker-inner whitespace-nowrap">
              {["Startups & Scale-ups", "Local Businesses", "GCC & International", "Consultants & Clinics", "E-Commerce", "Law Firms", "Real Estate Agencies", "Recruitment Firms", "Restaurants & Hospitality", "Startups & Scale-ups", "Local Businesses", "GCC & International", "Consultants & Clinics", "E-Commerce"].map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-gray-500 text-sm flex-shrink-0">
                  <span className="w-1 h-1 rounded-full bg-cyan-500/50" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — PAIN POINTS
      ══════════════════════════════════════════ */}
      <section id="pain-points" className="py-24 relative">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(14,165,233,0.08) 0%, transparent 60%)" }} />
        <div className="section-divider mb-0" />

        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Stop Losing Leads &amp; Revenue<br className="hidden md:block" /> to Manual Processes
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Every day without automation is a day your competitors gain ground. Here&apos;s what&apos;s costing you right now:</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <MorphingCardStack cards={painPoints} defaultLayout="stack" />
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4">
              {painPoints.map((point) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Number(point.id) * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/3 border border-white/5 hover:border-cyan-500/20 transition-all group"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-0.5">{point.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — SERVICES
      ══════════════════════════════════════════ */}
      <section id="services" className="relative">
        <div className="section-divider" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(14,165,233,0.06) 0%, transparent 70%)" }} />

        <ContainerScroll
          titleComponent={
            <div className="text-center px-4">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                Our Professional AI<br />Automation Services
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base">
                We design and deploy custom AI ecosystems that handle your repetitive tasks, nurture leads, and scale your business 24/7.
              </p>
            </div>
          }
        >
          <div className="grid grid-cols-3 gap-3 p-2 h-full overflow-auto">
            {services.map((service, i) => (
              <a key={i} href={`/services#${service.slug}`} className="flex flex-col p-3 rounded-xl bg-[#0a1628]/80 border border-cyan-500/10 hover:border-cyan-500/30 transition-all group cursor-pointer no-underline">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2 group-hover:bg-cyan-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-white text-xs mb-1 leading-tight">{service.title}</h3>
                <p className="text-xs text-gray-500 mb-2 line-clamp-2 leading-relaxed">{service.desc}</p>
                <div className="space-y-0.5 mt-auto">
                  {service.subs.map((sub, j) => (
                    <div key={j} className="flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-cyan-400/60 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{sub}</span>
                    </div>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </ContainerScroll>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — PROCESS (RADIAL ORBITAL)
      ══════════════════════════════════════════ */}
      <section id="process" className="relative py-8">
        <div className="section-divider mb-0" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.06) 0%, transparent 65%)" }} />

        <div className="text-center pt-20 pb-4 px-4">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">The Roadmap to Success</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Our Seamless AI Integration Process
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Four precise steps from where you are to where you want to be. Click any node to explore.
          </p>
        </div>

        <RadialOrbitalTimeline timelineData={processSteps} />
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 — PRICING
      ══════════════════════════════════════════ */}
      <section id="offers">
        <div className="section-divider" />
        <PricingSection />
      </section>

      {/* ══════════════════════════════════════════
          SECTION 7 — RESULTS / TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section id="results" className="py-24 relative overflow-hidden">
        <div className="section-divider mb-0" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(14,165,233,0.08) 0%, transparent 60%)" }} />

        <div className="text-center mb-16 px-4">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Proof</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Results &amp; Success Stories
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real businesses. Real results. See what happens when you stop doing things manually.
          </p>
        </div>

        {/* 3D Marquee */}
        <div
          className="relative flex w-full max-w-5xl mx-auto flex-row items-center justify-center overflow-hidden gap-1.5 h-[420px]"
          style={{ perspective: "300px" }}
        >
          <div
            className="flex flex-row items-center gap-4"
            style={{ transform: "translateX(-60px) translateY(0px) translateZ(-80px) rotateX(15deg) rotateY(-8deg) rotateZ(15deg)" }}
          >
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:35s]">
              {testimonials.map((t) => <TestimonialCard key={t.username + "a"} {...t} />)}
            </Marquee>
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:35s]">
              {testimonials.map((t) => <TestimonialCard key={t.username + "b"} {...t} />)}
            </Marquee>
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
              {testimonials.map((t) => <TestimonialCard key={t.username + "c"} {...t} />)}
            </Marquee>
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:30s]">
              {testimonials.map((t) => <TestimonialCard key={t.username + "d"} {...t} />)}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#050b14]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#050b14]" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#050b14]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#050b14]" />
          </div>
        </div>

        {/* Stats row */}
        <div className="max-w-4xl mx-auto mt-12 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "+340%", label: "Lead Increase (Real Estate)", color: "text-cyan-300" },
              { val: "+270%", label: "Booking Increase (Clinics)", color: "text-cyan-300" },
              { val: "30 Days", label: "Average Results Timeline", color: "text-green-400" },
              { val: "24/7", label: "AI Systems Always Active", color: "text-blue-300" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-white/3 border border-white/5">
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.val}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 8 — WHY US (ONBOARDING CHECKLIST)
      ══════════════════════════════════════════ */}
      <section id="why-us" className="py-24 relative">
        <div className="section-divider mb-0" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(14,165,233,0.07) 0%, transparent 65%)" }} />

        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Why Businesses Choose Zapioai
            </h2>
          </div>

          <OnboardingChecklist
            title="Why Businesses Choose AI Automation Agency"
            description="We don't just install tools — we engineer revenue systems that work for you 24/7. Here's what sets us apart:"
            items={whyUsItems}
            videoFile="/why-zapioai.mp4"
          />

          {/* Additional pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { icon: <Zap size={20} />, title: "We engineer revenue systems", desc: "Not fancy tech demos — systems built specifically to generate leads and close sales." },
              { icon: <Users size={20} />, title: "Done-for-you, zero hassle", desc: "You focus on running your business. We handle the entire technical setup and management." },
              { icon: <TrendingUp size={20} />, title: "Scalable & future-proof", desc: "Your AI system grows with your business — no limits, no ceiling on what's possible." },
            ].map((pillar, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#0a1628]/60 border border-cyan-500/15 hover:border-cyan-500/30 card-hover">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-400">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 9 — FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="section-divider mb-0" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(14,165,233,0.15) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Take The Next Step</p>
            <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Ready to Automate &amp;<br />
              <span className="gradient-text">Grow Your Business?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-4">
              Book a free strategy call and discover how AI can save time, generate leads, and increase revenue for your business.
            </p>
            <p className="text-cyan-400/70 text-sm mb-10 flex items-center justify-center gap-2">
              <TrendingUp size={14} />
              Average first call result: 3–7 high-impact automation opportunities identified
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/923045167233?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20AI%20strategy%20call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105"
              >
                <MessageCircle size={20} />
                Book Free Strategy Call →
              </a>
              <button
                onClick={() => setAuditOpen(true)}
                className="inline-flex items-center justify-center gap-2 border-2 border-cyan-500/50 text-cyan-300 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
              >
                Get Free AI Audit
              </button>
            </div>

            <p className="text-gray-600 text-sm mt-6">🔒 Zero obligation. Zero spam. Just clarity on your AI opportunity.</p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 10 — CONTACT FORM
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-24 relative">
        <div className="section-divider mb-0" />

        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>Send Your Query</h2>
            <p className="text-gray-400">Tell us about your business and our team will reply with a custom AI automation plan within 24 hours.</p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 11 — FOOTER
      ══════════════════════════════════════════ */}
      <footer className="border-t border-white/5 bg-[#030810]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Column 1 — Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <span className="text-xl font-bold gradient-text" style={{ fontFamily: "'Syne', sans-serif" }}>Zapioai</span>
              </a>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
                We empower businesses in United States, Canada, UK, UAE and Saudi Arabia by deploying cutting-edge AI systems that automate growth, sales, and operations.
              </p>
              <AnimatedSocialLinks socials={socials} />
            </div>

            {/* Column 2 — Useful Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Useful Links</h4>
              <ul className="space-y-2.5">
                {["Home", "Live Demo", "Signature Offers", "Case Studies", "Why Us", "FAQ"].map((link) => (
                  <li key={link}><a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 3 — AI Services */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">AI Services</h4>
              <ul className="space-y-2.5">
                {["AI Lead Generation", "AI Sales Automation", "Customer Support AI", "Marketing Automation", "Business Process AI", "Local Growth AI", "WhatsApp Automation", "AI Consulting", "Custom Chatbots"].map((s) => (
                  <li key={s}><a href="#services" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-500 text-sm">Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-cyan-400 flex-shrink-0" />
                  <a href="mailto:info@Zapioai.com" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">info@Zapioai.com</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={14} className="text-cyan-400 flex-shrink-0" />
                  <a href="tel:+923045167233" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">+92 304 5167233</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageCircle size={14} className="text-green-400 flex-shrink-0" />
                  <a href="https://wa.me/923045167233?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20AI%20strategy%20call" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 text-sm transition-colors">WhatsApp Chat</a>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-xs text-gray-600 mb-2">Industries We Serve:</p>
                  <div className="flex flex-wrap gap-1">
                    {["Real Estate", "Clinics", "E-Commerce", "Consultants", "Law Firms", "Education", "Travel", "Restaurants", "Recruitment"].map((ind) => (
                      <span key={ind} className="text-xs text-gray-600 bg-white/3 border border-white/5 rounded px-1.5 py-0.5">{ind}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-sm">© 2026 Zapioai.com. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════════
          FLOATING CIRCLE MENU
      ══════════════════════════════════════════ */}
      <div className="fixed bottom-8 right-8 z-40">
        <CircleMenu
          items={circleNavItems}
          openIcon={<Menu size={18} className="text-white" />}
          closeIcon={<X size={18} className="text-white" />}
        />
      </div>
    </main>
  );
}

/* ─────────────────────── CONTACT FORM ─────────────────────── */

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-cyan-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Query Sent Successfully!</h3>
        <p className="text-gray-400">Our team will reply with a custom AI automation plan within 24 hours.</p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-cyan-400 hover:underline">Send another query</button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-[#0a1628]/60 border border-cyan-500/15 rounded-2xl p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400 mb-1.5 block">Full Name *</label>
          <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 placeholder:text-gray-600 transition-all" placeholder="John Smith" />
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-1.5 block">Email Address *</label>
          <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 placeholder:text-gray-600 transition-all" placeholder="you@company.com" />
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-400 mb-1.5 block">Business / Industry *</label>
        <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 placeholder:text-gray-600 transition-all" placeholder="e.g. Real estate agency in Dubai" />
      </div>
      <div>
        <label className="text-sm text-gray-400 mb-1.5 block">Your Message</label>
        <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 placeholder:text-gray-600 transition-all resize-none" placeholder="Tell us about your business challenges and what you'd like to automate..." />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3.5 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2"
      >
        <ArrowRight size={18} />
        Send Your Query →
      </button>
      <p className="text-center text-xs text-gray-600">🔒 Your information is safe. Zero spam ever.</p>
    </form>
  );
}
