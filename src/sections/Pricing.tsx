import { Check, Sparkles } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../components/Reveal';
import { Magnetic } from '../components/Magnetic';
import { pricing } from '../data/site';

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 sm:py-20">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title mt-5">Transparent, value-based pricing</h2>
          <p className="section-sub">
            Starting points for the most common engagements. Every project gets a detailed quote
            after a free consultation.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
          {pricing.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 ${
                  plan.highlight
                    ? 'border-copper bg-primary text-white shadow-glow'
                    : 'border-line bg-surface text-ink hover:-translate-y-1 hover:shadow-card'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-copper px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-soft">
                    <Sparkles className="h-3 w-3" /> Popular
                  </span>
                )}

                <h3 className="font-heading text-base font-semibold">{plan.name}</h3>
                <p className={`mt-1.5 text-xs ${plan.highlight ? 'text-white/70' : 'text-muted'}`}>{plan.desc}</p>

                <div className="mt-5">
                  <p className={`text-[11px] uppercase tracking-wider ${plan.highlight ? 'text-white/60' : 'text-muted'}`}>
                    {plan.note}
                  </p>
                  <p className="mt-1 font-heading text-3xl font-bold">{plan.price}</p>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <span
                        className={`grid h-4 w-4 place-items-center rounded-full ${
                          plan.highlight ? 'bg-copper text-white' : 'bg-copper/10 text-copper'
                        }`}
                      >
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <span className={plan.highlight ? 'text-white/90' : 'text-ink/80'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Magnetic className="w-full">
                    <a
                      href="#contact"
                      className={`btn w-full ${
                        plan.highlight
                          ? 'bg-copper text-white hover:bg-white hover:text-primary'
                          : 'btn-secondary'
                      }`}
                    >
                      Get Started
                    </a>
                  </Magnetic>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
