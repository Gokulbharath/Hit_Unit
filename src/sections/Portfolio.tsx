import { ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { portfolio } from '../data/site';
import udhyamImage from '../assets/csbs.png';
import brightmindsImage from '../assets/brb.jpeg';

const gradients = [
  'from-copper/25 to-gold/10',
  'from-gold/25 to-copper/10',
  'from-copper/15 to-gold/20',
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 py-20 sm:py-20">
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
          {portfolio.map((p, i) => {
            // Determine which image to use
            const projectImage = p.title === 'UDHYAM 2026' ? udhyamImage : p.title === 'BrightMinds Arena' ? brightmindsImage : null;
            
            return (
            <StaggerItem key={p.title} className="h-full">
              <div className="card card-hover group flex h-full flex-col overflow-hidden">
                {/* Image placeholder with floating overlay */}
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${gradients[i % gradients.length]} rounded-t-lg`} aria-label={`${p.title} - ${p.category}`}>
                  {projectImage ? (
                    <>
                      {/* Real project screenshot */}
                      <img 
                        src={projectImage} 
                        alt={`${p.title} - ${p.category}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Dark gradient overlay at bottom for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </>
                  ) : (
                    <>
                      {/* Placeholder for DEPART project */}
                      <div className="absolute inset-0 grid-bg opacity-40" />
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="text-center">
                          <span className="font-heading text-2xl font-bold text-ink/20 transition-all duration-500 group-hover:text-copper/40 group-hover:scale-110 sm:text-3xl" aria-hidden="true">
                            {p.title.split(' ').map((w) => w[0]).join('')}
                          </span>
                          <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ink/30" aria-hidden="true">{p.category}</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Floating overlay with status and action button */}
                  <div className="absolute inset-0 flex flex-col items-end justify-between p-3 sm:p-4">
                    {/* Status badge - top right */}
                    <span className={`rounded-full px-3 py-1.5 text-[11px] font-semibold backdrop-blur transition-all duration-300 ${
                      p.status === 'Live' 
                        ? 'bg-green-500/20 text-green-600' 
                        : 'bg-yellow-500/20 text-yellow-600'
                    }`}>
                      {p.status}
                    </span>
                    
                    {/* Action button - bottom right */}
                    <div className="flex flex-col items-end gap-2 transition-transform duration-300 group-hover:translate-y-0">
                      {p.status === 'On Progress' ? (
                        <button
                          disabled
                          className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/20 px-3 py-1.5 text-[11px] font-semibold text-yellow-600 backdrop-blur cursor-not-allowed"
                        >
                          On Progress
                          <ArrowUpRight className="h-3 w-3 transition-transform duration-300" />
                        </button>
                      ) : (
                        <a
                          href={p.link || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-1.5 rounded-full bg-copper/20 px-3 py-1.5 text-[11px] font-semibold text-copper backdrop-blur transition-all duration-300 hover:bg-copper/30 hover:-translate-y-0.5"
                        >
                          🌐 Visit Live Site
                          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
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
