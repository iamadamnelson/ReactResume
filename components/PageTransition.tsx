import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    filter: 'blur(10px)'
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)'
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    filter: 'blur(10px)'
  }
};

const pageTransition = {
  type: "tween",
  ease: "circOut",
  duration: 0.5
} as const;

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full min-h-screen pt-28 pb-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      {children}
    </motion.div>
  );
};