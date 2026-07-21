import { ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { services } from '../data/site';

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-20 sm:py-20">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="section-title mt-5">Everything you need to ship software</h2>
          <p className="section-sub">
            From a single landing page to a full AI platform, we cover the entire product lifecycle —
            design, development, deployment and support.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.05}>
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.title} className="h-full">
                <div className="card card-hover group flex h-full flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-copper/10 text-copper transition-all duration-300 group-hover:bg-copper group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:text-copper group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>

                  <h3 className="mt-5 font-heading text-base font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>

                  <ul className="mt-4 space-y-1.5">
                    {s.items.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-ink/80">
                        <span className="h-1 w-1 rounded-full bg-copper" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {s.tech.map((t) => (
                      <span key={t} className="rounded-md bg-hover px-2 py-1 text-[10px] font-medium text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
