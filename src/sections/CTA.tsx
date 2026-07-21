import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Magnetic } from '../components/Magnetic';

export function CTA() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center shadow-float sm:px-12 sm:py-16">
            <div className="absolute inset-0 dot-bg opacity-20" />
            <div className="absolute left-1/2 top-0 h-64 w-[640px] -translate-x-1/2 rounded-full bg-copper/30 blur-[100px]" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                Ready to build your <span className="text-gradient-copper">next product?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
                Book a free consultation. We will discuss your idea, scope and timeline — no
                commitment required.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Magnetic>
                  <a href="#contact" className="btn bg-copper text-white hover:bg-white hover:text-primary">
                    Get Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="#portfolio" className="btn border border-white/20 bg-white/5 text-white hover:bg-white/10">
                    View Our Work
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
