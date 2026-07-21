import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';

const offset: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 40 },
  right: { x: -40 },
  scale: { scale: 0.94 },
  none: {},
};

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.25,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offset[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
  once?: boolean;
  amount?: number;
}

export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.08,
  once = true,
  amount = 0.2,
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
