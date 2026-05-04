"use client";

import { useState, useEffect, type ReactNode } from "react";
import { motion, type PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";
import { Grid3X3, Layers, LayoutList } from "lucide-react";

export type LayoutMode = "stack" | "grid" | "list";

export interface CardData {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
  color?: string;
}

export interface MorphingCardStackProps {
  cards?: CardData[];
  className?: string;
  defaultLayout?: LayoutMode;
  onCardClick?: (card: CardData) => void;
}

const SWIPE_THRESHOLD = 50;

/* ── Shared card shell ── */
function CardItem({
  card,
  className,
  onClick,
  children,
}: {
  card: CardData;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-[#0a1628] p-5",
        "hover:border-cyan-500/40 transition-colors",
        className
      )}
      style={{ backgroundColor: card.color || undefined }}
    >
      <div className="flex items-start gap-3">
        {card.icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {card.icon}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-white leading-snug">{card.title}</h3>
          <p className="text-sm text-gray-400 mt-1 line-clamp-3 leading-relaxed">{card.description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

/* ── Stack view ── */
function StackView({
  cards,
  activeIndex,
  setActiveIndex,
  onCardClick,
}: {
  cards: CardData[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  onCardClick?: (card: CardData) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);

  const onDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipe = Math.abs(info.offset.x) * info.velocity.x;
    if (info.offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
      setActiveIndex((p) => (p + 1) % cards.length);
    } else if (info.offset.x > SWIPE_THRESHOLD || swipe > 1000) {
      setActiveIndex((p) => (p - 1 + cards.length) % cards.length);
    }
    setIsDragging(false);
  };

  const ordered = Array.from({ length: cards.length }, (_, i) => ({
    ...cards[(activeIndex + i) % cards.length],
    pos: i,
  }));
  const renderOrder = [...ordered].reverse();

  return (
    <div className="space-y-3">
      <div className="relative h-[340px] w-[300px] mx-auto">
        {renderOrder.map(({ pos, ...card }) => {
          const isTop = pos === 0;
          return (
            <motion.div
              key={card.id}
              className="absolute"
              animate={{
                top: pos * 10,
                left: pos * 8,
                rotate: (pos - 1) * 1.5,
                zIndex: cards.length - pos,
                scale: 1 - pos * 0.03,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={onDragEnd}
              whileDrag={{ scale: 1.02, cursor: "grabbing" }}
            >
              <CardItem
                card={card}
                className={cn(
                  "w-72 h-64",
                  isTop ? "cursor-grab active:cursor-grabbing shadow-xl shadow-black/40" : "pointer-events-none"
                )}
                onClick={() => { if (!isDragging) onCardClick?.(card); }}
              >
                {isTop && (
                  <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-gray-600">
                    Swipe to navigate
                  </p>
                )}
              </CardItem>
            </motion.div>
          );
        })}
      </div>

      {cards.length > 1 && (
        <div className="flex justify-center gap-1.5 pt-1">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === activeIndex ? "w-4 bg-cyan-400" : "w-1.5 bg-gray-600 hover:bg-gray-500"
              )}
              aria-label={`Go to card ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main component ── */
export function MorphingCardStack({
  cards = [],
  className,
  defaultLayout = "stack",
  onCardClick,
}: MorphingCardStackProps) {
  const [layout, setLayout] = useState<LayoutMode>(defaultLayout);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!cards.length) return null;

  const icons: Record<LayoutMode, typeof Layers> = { stack: Layers, grid: Grid3X3, list: LayoutList };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Toggle — plain HTML, no framer-motion, safe for SSR */}
      <div className="flex items-center justify-center gap-1 rounded-lg bg-white/5 border border-white/10 p-1 w-fit mx-auto">
        {(["stack", "grid", "list"] as LayoutMode[]).map((mode) => {
          const Icon = icons[mode];
          return (
            <button
              key={mode}
              onClick={() => setLayout(mode)}
              className={cn(
                "rounded-md p-2 transition-all",
                layout === mode ? "bg-cyan-500 text-white" : "text-gray-400 hover:text-white hover:bg-white/10"
              )}
              aria-label={`Switch to ${mode} layout`}
            >
              <Icon className="h-4 w-4" />
            </button>
          );
        })}
      </div>

      {/*
       * Only rendered after hydration. The server and the initial client render
       * both see a plain static div — no framer-motion inline styles, no mismatch.
       * After useEffect fires, the full interactive component replaces it.
       */}
      {!mounted ? (
        <div className="relative h-[340px] w-[300px] mx-auto" />
      ) : (
        <motion.div
          key={layout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="w-full"
        >
          {layout === "stack" && (
            <StackView
              cards={cards}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              onCardClick={onCardClick}
            />
          )}

          {layout === "grid" && (
            <div className="grid grid-cols-2 gap-4 w-full">
              {cards.map((card) => (
                <CardItem
                  key={card.id}
                  card={card}
                  className="cursor-pointer min-h-[160px]"
                  onClick={() => onCardClick?.(card)}
                />
              ))}
            </div>
          )}

          {layout === "list" && (
            <div className="flex flex-col gap-3 w-full">
              {cards.map((card) => (
                <CardItem
                  key={card.id}
                  card={card}
                  className="cursor-pointer"
                  onClick={() => onCardClick?.(card)}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

export { MorphingCardStack as Component };
