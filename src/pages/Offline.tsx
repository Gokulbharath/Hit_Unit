import { motion } from 'framer-motion';
import { Wifi, RefreshCw } from 'lucide-react';

export function Offline() {
  const handleRefresh = () => window.location.reload();

  return (
    <div className="grid min-h-screen place-items-center bg-canvas px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Icon */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-6 inline-flex"
        >
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-copper/10">
            <Wifi className="h-7 w-7 text-copper" />
          </span>
        </motion.div>

        {/* Text */}
        <h1 className="font-heading text-3xl font-bold text-ink">You're offline</h1>
        <p className="mt-3 max-w-sm text-muted">
          It looks like you've lost your internet connection. Please check your network and try again.
        </p>

        {/* Action */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRefresh}
          className="btn-primary mt-8 inline-flex gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </motion.button>

        {/* Additional Help */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xs text-muted"
        >
          Troubleshooting tips:
          <br />
          • Check your Wi-Fi or mobile data connection
          <br />
          • Restart your router
          <br />
          • Try disabling VPN if connected
        </motion.p>
      </motion.div>
    </div>
  );
}
