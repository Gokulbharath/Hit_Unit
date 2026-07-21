import { ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { portfolio } from '../data/site';

const gradients = [
  'from-copper/20 to-gold/10',
  'from-gold/20 to-copper/10',
  'from-copper/15 to-gold/5',
  'from-gold/15 to-copper/5',
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
              A selection of products we have designed, built and shipped across industries.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.05}>
          {portfolio.map((p, i) => (
            <StaggerItem key={p.title} className="h-full">
              <div className="card card-hover group h-full overflow-hidden">
                {/* Image placeholder */}
                <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${gradients[i % gradients.length]}`}>
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-heading text-3xl font-bold text-ink/15 transition-all duration-500 group-hover:text-copper/30 group-hover:scale-110">
                      {p.title.split(' ').map((w) => w[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-surface/80 px-2.5 py-1 text-[10px] font-semibold text-ink backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-surface/80 text-copper opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:rotate-0 -rotate-12">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-md bg-hover px-2 py-1 text-[10px] font-medium text-muted">
                        {t}
                      </span>
                    ))}
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
