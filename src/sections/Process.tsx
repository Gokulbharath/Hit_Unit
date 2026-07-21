import { motion } from 'framer-motion';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { process } from '../data/site';

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 dot-bg mask-fade-b opacity-60" />
      <div className="container-px">
        <Reveal>
          <p className="eyebrow">Process</p>
          <h2 className="section-title mt-5">A clear path from idea to launch</h2>
          <p className="section-sub">
            A transparent, week-by-week process so you always know what is happening and why.
          </p>
        </Reveal>

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-copper via-line to-transparent sm:block" />

          <Stagger className="space-y-3" gap={0.08}>
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title}>
                  <div className="group relative flex items-start gap-4 sm:gap-6">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface text-copper shadow-soft transition-all duration-300 group-hover:border-copper group-hover:bg-copper group-hover:text-white group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                      <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex-1 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 group-hover:border-copper/40 group-hover:shadow-soft sm:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-heading text-base font-semibold text-ink sm:text-lg">{step.title}</h3>
                        <span className="font-mono text-xs text-muted">Step 0{i + 1}</span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
