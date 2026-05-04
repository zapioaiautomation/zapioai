"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface NavHeaderProps {
  items?: { label: string; href: string }[];
}

function NavHeader({ items }: NavHeaderProps) {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  const defaultItems = items || [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "OFFERS", href: "#offers" },
    { label: "ABOUT US", href: "/about" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {defaultItems.map((item) => (
        <Tab key={item.label} setPosition={setPosition} href={item.href}>
          {item.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  href?: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-white/70 hover:text-white transition-colors md:px-4 md:py-2 md:text-sm"
    >
      <a href={href || "#"}>{children}</a>
    </li>
  );
};

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-white/10 border border-cyan-500/30 md:h-9"
    />
  );
};

export default NavHeader;
