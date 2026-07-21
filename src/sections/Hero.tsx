import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { Magnetic } from '../components/Magnetic';
import { heroCards } from '../data/site';

const float = (i: number) => ({
  y: [0, i % 2 === 0 ? -10 : 10, 0],
  transition: {
    duration: 4 + (i % 3),
    repeat: Infinity,
    ease: 'easeInOut',
    delay: i * 0.2,
  },
});

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-44 lg:pb-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-b opacity-70" />
        <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-copper/10 blur-[120px]" />
        <div className="absolute right-0 top-40 -z-10 h-[380px] w-[380px] rounded-full bg-gold/10 blur-[100px]" />
      </div>

      <div className="container-px grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5 text-copper" />
            Building Ideas Into Software
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            Building Ideas Into <span className="text-gradient-copper">Powerful Software.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            We build scalable websites, AI-powered applications and business software that help
            companies grow faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <button onClick={() => scrollTo('contact')} className="btn-primary group">
                Get Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </Magnetic>
            <Magnetic>
              <button onClick={() => scrollTo('services')} className="btn-secondary group">
                View Our Services
                <ArrowUpRight className="h-4 w-4 text-copper transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-sm text-muted"
          >
            <div className="flex -space-x-2">
              {['A', 'P', 'S', 'K'].map((c, i) => (
                <span
                  key={i}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-canvas bg-hover font-heading text-xs font-bold text-ink"
                  style={{ zIndex: 10 - i }}
                >
                  {c}
                </span>
              ))}
            </div>
            <span>
              <span className="font-semibold text-ink">48+</span> projects delivered for teams worldwide
            </span>
          </motion.div>
        </div>

        {/* Right — floating dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* Dashboard frame */}
          <div className="relative rounded-3xl border border-line bg-surface p-5 shadow-float">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-copper/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
              </div>
              <span className="font-heading text-xs font-semibold text-muted">hit-unit · dashboard</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-line bg-canvas p-3.5">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted">Deployments</p>
                <p className="mt-1 font-heading text-2xl font-bold text-ink">128</p>
                <div className="mt-2 flex items-end gap-1">
                  {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                    <span key={i} className="flex-1 rounded-sm bg-copper/30" style={{ height: `${h * 0.3}px` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-canvas p-3.5">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted">Uptime</p>
                <p className="mt-1 font-heading text-2xl font-bold text-ink">99.9%</p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-hover">
                  <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-copper to-gold" />
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-line bg-canvas p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted">AI Inference</p>
                <span className="rounded-full bg-copper/10 px-2 py-0.5 text-[10px] font-semibold text-copper">live</span>
              </div>
              <div className="mt-2 space-y-2">
                {['Chat completion', 'Image classification', 'NLP pipeline'].map((t) => (
                  <div key={t} className="flex items-center justify-between text-xs">
                    <span className="text-ink">{t}</span>
                    <span className="font-mono text-muted">12ms</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="pointer-events-none absolute inset-0">
            {heroCards.slice(0, 6).map((card, i) => {
              const positions = [
                'left-[-8%] top-[8%]',
                'right-[-6%] top-[18%]',
                'left-[-12%] top-[48%]',
                'right-[-10%] top-[52%]',
                'left-[10%] bottom-[-6%]',
                'right-[12%] bottom-[-4%]',
              ];
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  animate={float(i)}
                  className={`absolute ${positions[i]} flex items-center gap-2 rounded-2xl border border-line bg-surface/90 px-3 py-2 shadow-float backdrop-blur`}
                >
                  <span className={`grid h-7 w-7 place-items-center rounded-lg ${card.accent === 'copper' ? 'bg-copper/10' : 'bg-gold/15'}`}>
                    <Icon className={`h-3.5 w-3.5 ${card.accent === 'copper' ? 'text-copper' : 'text-gold-600'}`} />
                  </span>
                  <span className="font-heading text-xs font-semibold text-ink">{card.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
