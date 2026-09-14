import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();

  // Ultra-fast, GPU-accelerated transition with 0 blur repaint overhead
  const variants = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.15 } },
        exit: { opacity: 0, transition: { duration: 0.1 } },
      }
    : {
        initial: {
          opacity: 0,
          y: 6,
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.22,
            ease: "easeOut",
          },
        },
        exit: {
          opacity: 0,
          y: -4,
          transition: {
            duration: 0.15,
            ease: "easeIn",
          },
        },
      };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="w-full min-h-[calc(100vh-64px)] flex flex-col justify-between transform-gpu"
    >
      {children}
    </motion.div>
  );
}
