import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Magnetic } from './Magnetic';
import { useActiveSection } from '../hooks/useActiveSection';
import { navItems } from '../data/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled ? 'glass border-b border-line/70 shadow-soft' : 'border-b border-transparent'
          }`}
        >
          <nav className="container-px flex h-12 items-center justify-between sm:h-14">
            <Logo />

            <div className="hidden items-center gap-0.5 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  aria-label={`Navigate to ${item.label}`}
                  className="group relative rounded-full px-3 py-1.5 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  <span className={active === item.id ? 'text-ink' : ''}>{item.label}</span>
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-hover"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Magnetic className="hidden sm:block">
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-primary hidden px-5 py-2.5 text-[13px] sm:inline-flex"
                >
                  Get Free Consultation
                </button>
              </Magnetic>

              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-ink lg:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] lg:hidden"
          >
            <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-canvas p-6 shadow-float"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                    onClick={() => handleNav(item.id)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium transition-colors ${
                      active === item.id ? 'bg-hover text-ink' : 'text-muted hover:bg-hover hover:text-ink'
                    }`}
                  >
                    {item.label}
                    <span className="text-xs text-copper">0{i + 1}</span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto">
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
