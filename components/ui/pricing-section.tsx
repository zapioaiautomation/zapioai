"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "AI Lead Generation System",
    description: "An end-to-end AI-powered funnel that captures, qualifies, and nurtures leads on autopilot — 24/7.",
    includes: [
      "What's included:",
      "AI lead capture funnels",
      "Automated qualification flows",
      "Landing page systems",
      "CRM integration & pipeline setup",
      "Follow-up sequences",
    ],
  },
  {
    name: "Custom AI Automation System",
    description: "A fully bespoke automation system designed around your specific business workflows and goals.",
    includes: [
      "What's included:",
      "Full business workflow audit",
      "Custom AI agent development",
      "Internal task & reporting automation",
      "Data sync & third-party integrations",
      "Dedicated account manager",
    ],
  },
  {
    name: "AI Video Ads & Social Automation",
    description: "AI-generated video ads and automated social media content systems to grow your brand consistently.",
    popular: true,
    includes: [
      "What's included:",
      "AI video ad creation & scripting",
      "Automated social media posting",
      "Content calendar & scheduling",
      "Multi-platform distribution",
      "Performance tracking & iteration",
    ],
  },
  {
    name: "AI Chatbots & Customer Support",
    description: "Deploy intelligent AI chatbots across your website, WhatsApp, and other channels for instant support.",
    includes: [
      "What's included:",
      "Custom AI chatbot build & training",
      "WhatsApp & website integration",
      "24/7 lead qualification & response",
      "FAQ knowledge base setup",
      "Handoff to human support flows",
    ],
  },
];

export default function PricingSection() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { delay: i * 0.4, duration: 0.5 },
    }),
    hidden: { filter: "blur(10px)", y: -20, opacity: 0 },
  };

  return (
    <div
      className="min-h-screen mx-auto relative bg-[#050b14] overflow-x-hidden"
      ref={pricingRef}
      id="offers"
    >
      {/* Sparkle background */}
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-full overflow-hidden"
        style={{ maskImage: "radial-gradient(50% 50%, white, transparent)" }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:70px_80px]" />
        <Sparkles
          density={600}
          direction="bottom"
          speed={0.5}
          color="#22d3ee"
          className="absolute inset-x-0 bottom-0 h-full w-full"
        />
      </TimelineContent>

      {/* Glow orb */}
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-[60%] z-0"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(14, 165, 233, 0.12) 0%, transparent 70%)",
          opacity: 0.8,
        }}
      />

      {/* Header */}
      <article className="text-center mb-6 pt-32 max-w-3xl mx-auto space-y-4 relative z-50 px-4">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Our Offers</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{ type: "spring", stiffness: 250, damping: 40, delay: 0 }}
          >
            Done-For-You AI Systems
          </VerticalCutReveal>
        </h2>
        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-400 max-w-xl mx-auto"
        >
          Every system is custom-built for your business. Contact us for a personalized quote after a free strategy call.
        </TimelineContent>
        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-4">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Custom pricing for every business — book a free call to get started.</span>
          </div>
        </TimelineContent>
      </article>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 max-w-7xl gap-4 py-6 mx-auto px-4">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={cn(
                "relative text-white h-full flex flex-col",
                plan.popular
                  ? "border-cyan-500/50 bg-gradient-to-b from-[#0a1e35] to-[#070f1d] shadow-[0px_-8px_120px_0px_rgba(14,165,233,0.25)] z-20"
                  : "border-white/10 bg-gradient-to-b from-[#0a1628] to-[#070f1d] z-10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    <Star size={10} className="fill-white" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <CardHeader className="text-left pb-3 pt-6">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-3xl font-bold text-cyan-400">Contact for</span>
                  <span className="text-gray-400 text-sm">Pricing</span>
                </div>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0 flex-1 flex flex-col">
                <a
                  href="/contact"
                  className={cn(
                    "w-full mb-6 p-3 text-center text-sm font-semibold rounded-xl block transition-all duration-200",
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                  )}
                >
                  Contact for Pricing
                </a>

                <div className="space-y-2 pt-4 border-t border-white/5 flex-1">
                  <h4 className="font-medium text-xs text-gray-400 uppercase tracking-wider mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2">
                        <Check size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
