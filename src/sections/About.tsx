import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { useCountUp } from '../hooks/useCountUp';
import { stats } from '../data/site';

function Stat({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const value = useCountUp(stat.value, 1800, inView);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        {value}
        <span className="text-copper">{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-muted">{stat.label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <p className="eyebrow">About</p>
            <h2 className="section-title mt-5">
              A software company built for <span className="text-gradient-copper">ambitious teams.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              HIT UNIT is a modern software development company that designs, develops and deploys
              custom software solutions for startups, businesses, educational institutions and
              enterprises. We turn ideas into reliable, scalable products.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-copper">Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  To help organizations grow by building software that is fast, secure and genuinely
                  useful to the people who rely on it every day.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-copper">Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  To be the most trusted engineering partner for teams that want to ship
                  world-class products without building a large in-house team.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Ownership', 'Clarity', 'Craft', 'Reliability', 'Long-term thinking'].map((v) => (
                <span key={v} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-ink">
                  {v}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left" className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8 rounded-3xl border border-line bg-surface p-8 shadow-soft sm:p-10">
              {stats.map((s, i) => (
                <Stat key={s.label} stat={s} index={i} />
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center text-xs text-muted"
            >
              Trusted by founders, product teams and institutions across India.
            </motion.p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
