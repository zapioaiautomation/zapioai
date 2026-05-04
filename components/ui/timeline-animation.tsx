"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ElementType } from "react";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  children: React.ReactNode;
  as?: ElementType;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement>;
  customVariants?: {
    hidden: Record<string, unknown>;
    visible: (i: number) => Record<string, unknown>;
  };
  className?: string;
  style?: React.CSSProperties;
}

export function TimelineContent({
  children,
  as: _as,
  animationNum = 0,
  timelineRef: _timelineRef,
  customVariants,
  className,
  ...props
}: TimelineContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const defaultVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: (_i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, delay: animationNum * 0.1 },
    }),
  };

  const variants = customVariants
    ? {
        hidden: customVariants.hidden,
        visible: (i: number) => customVariants.visible(i),
      }
    : defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
