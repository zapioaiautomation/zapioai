"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ChecklistItem {
  id: number | string;
  text: string;
  helperText?: string;
  helperLink?: { href: string; text: string };
}

export interface OnboardingChecklistProps {
  title: string;
  description: string;
  items: ChecklistItem[];
  videoFile?: string;
  videoThumbnailUrl?: string;
  videoUrl?: string;
  className?: string;
}

export const OnboardingChecklist = ({
  title,
  description,
  items,
  videoFile,
  videoThumbnailUrl,
  videoUrl,
  className,
}: OnboardingChecklistProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={cn(
        "w-full max-w-5xl mx-auto bg-[#0a1628] border border-cyan-500/20 rounded-2xl shadow-lg shadow-cyan-500/5 p-8 overflow-hidden",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
          <p className="mt-2 text-gray-400">{description}</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {items.map((item) => (
              <motion.li key={item.id} variants={itemVariants} className="flex flex-col">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="ml-3 text-sm font-medium text-white">{item.text}</span>
                </div>
                {item.helperText && item.helperLink && (
                  <div className="ml-8 mt-1 text-xs text-gray-500">
                    {item.helperText}{" "}
                    <a href={item.helperLink.href} className="text-cyan-400 underline-offset-4 hover:underline">
                      {item.helperLink.text}
                    </a>
                  </div>
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Side: Video */}
        <motion.div
          variants={itemVariants}
          className="relative rounded-xl overflow-hidden w-full aspect-video border border-cyan-500/20"
        >
          {videoFile ? (
            <video
              src={videoFile}
              controls
              playsInline
              muted
              preload="metadata"
              className="w-full h-full object-cover rounded-xl"
            >
              <source src={videoFile} type="video/mp4" />
            </video>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer w-full h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={videoThumbnailUrl}
                    alt="Video guide thumbnail"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-400/60 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <PlayCircle className="h-10 w-10 text-cyan-300" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-0 border border-cyan-500/20 bg-[#050b14]">
                <DialogTitle className="sr-only">Watch Demo Video</DialogTitle>
                <div className="aspect-video">
                  <iframe
                    src={videoUrl}
                    title="Onboarding Video Guide"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
