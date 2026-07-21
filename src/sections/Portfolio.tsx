import { ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { portfolio } from '../data/site';

const gradients = [
  'from-copper/25 to-gold/10',
  'from-gold/25 to-copper/10',
  'from-copper/15 to-gold/20',
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="section-title mt-5">Work we are proud of</h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              A selection of products we have designed, built and shipped.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" gap={0.08}>
          {portfolio.map((p, i) => (
            <StaggerItem key={p.title} className="h-full">
              <div className="card card-hover group flex h-full flex-col overflow-hidden">
                {/* Image placeholder */}
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${gradients[i % gradients.length]}`}>
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <span className="font-heading text-2xl font-bold text-ink/20 transition-all duration-500 group-hover:text-copper/40 group-hover:scale-110 sm:text-3xl">
                        {p.title.split(' ').map((w) => w[0]).join('')}
                      </span>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ink/30">{p.category}</p>
                    </div>
                  </div>
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-surface/80 px-2.5 py-1 text-[10px] font-semibold text-ink backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-0.5 text-xs font-medium text-copper">{p.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-md bg-hover px-2 py-1 text-[10px] font-medium text-muted">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <a
                      href="#contact"
                      className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-copper transition-colors hover:text-copper-600"
                    >
                      View Details
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
