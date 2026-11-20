import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'blur-in';
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.75,
  className = '',
  distance = 32,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getVariants = () => {
    switch (variant) {
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 },
        };
      case 'scale-up':
        return {
          hidden: { opacity: 0, scale: 0.94, y: 20 },
          visible: { opacity: 1, scale: 1, y: 0 },
        };
      case 'blur-in':
        return {
          hidden: { opacity: 0, filter: 'blur(8px)', y: 20 },
          visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
        };
      case 'fade-up':
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
