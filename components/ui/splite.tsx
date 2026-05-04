"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SplineSceneProps {
  scene?: string;
  className?: string;
}

export function SplineScene({ className }: SplineSceneProps) {
  return (
    <div className={cn("w-full h-full flex items-center justify-center relative overflow-hidden", className)}>
      {/* Animated AI orb replacing the Spline 3D scene */}
      <div className="relative flex items-center justify-center">
        {/* Outer rotating rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 rounded-full border border-cyan-500/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 rounded-full border border-cyan-400/15"
          style={{ borderStyle: "dashed" }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-32 h-32 rounded-full border border-cyan-300/20"
        />

        {/* Orbiting dots */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 8 + i * 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute w-48 h-48"
          >
            <div
              className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/60"
              style={{ top: 0, left: "50%", transform: `translateX(-50%) rotate(${deg}deg) translateY(-96px)` }}
            />
          </motion.div>
        ))}

        {/* Central glowing core */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 shadow-2xl shadow-cyan-500/50 flex items-center justify-center z-10"
        >
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-cyan-400"
          />
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white relative z-10">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* Floating data nodes */}
        {[
          { x: -110, y: -40, label: "Leads +340%", delay: 0 },
          { x: 100, y: -60, label: "Bookings +270%", delay: 0.5 },
          { x: -90, y: 70, label: "24/7 AI", delay: 1 },
          { x: 95, y: 65, label: "ROI 30 days", delay: 1.5 },
        ].map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
            transition={{ delay: node.delay, duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="absolute text-xs font-semibold text-cyan-300 bg-[#0a1628]/90 border border-cyan-500/30 rounded-lg px-2.5 py-1.5 whitespace-nowrap shadow-lg shadow-cyan-500/10"
            style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block mr-1.5 align-middle" />
            {node.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
