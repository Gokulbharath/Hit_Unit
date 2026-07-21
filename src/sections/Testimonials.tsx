import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { testimonials } from '../data/site';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [paused, count]);

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);
  const active = testimonials[index];

  return (
    <section className="py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title mt-5">Trusted by teams that ship</h2>
        </Reveal>

        <div
          className="relative mt-12 overflow-hidden rounded-3xl border border-line bg-surface p-8 shadow-soft sm:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="absolute right-8 top-8 h-16 w-16 text-copper/10" />

          <div className="relative min-h-[180px] sm:min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                <p className="font-heading text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                  "{active.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-copper to-gold font-heading text-sm font-bold text-white">
                    {active.name.split(' ').map((w) => w[0]).join('')}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-ink">{active.name}</p>
                    <p className="text-xs text-muted">{active.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-7 bg-copper' : 'w-1.5 bg-line hover:bg-copper/40'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous"
                className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-copper hover:text-copper"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next"
                className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-copper hover:text-copper"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
