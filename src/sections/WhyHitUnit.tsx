import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { whyCards } from '../data/site';

export function WhyHitUnit() {
  return (
    <section className="py-20 sm:py-20">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow">Why HIT UNIT</p>
          <h2 className="section-title mt-5">Why HIT UNIT?</h2>
          <p className="section-sub">
            We combine engineering rigor with product thinking to deliver software that earns trust
            and scales with your business.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
          {whyCards.map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.title}>
                <div className="card card-hover group h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-copper/10 text-copper transition-all duration-300 group-hover:bg-copper group-hover:text-white group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
