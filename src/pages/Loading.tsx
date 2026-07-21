import { motion } from 'framer-motion';

export function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-canvas">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex"
        >
          <span className="relative inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-primary text-white shadow-soft">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="font-heading text-2xl font-bold"
            >
              H
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-gold"
            />
          </span>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="font-heading text-2xl font-bold text-ink">Loading</h1>
          <p className="mt-2 text-muted">Building ideas into software...</p>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-hover"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-1/3 bg-gradient-to-r from-copper to-gold"
          />
        </motion.div>
      </div>
    </div>
  );
}
