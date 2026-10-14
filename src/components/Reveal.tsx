"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function Reveal({
  children,
  delay = 0,
}: RevealProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 35 }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}