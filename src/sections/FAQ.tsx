import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { faqs } from '../data/site';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-20">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal direction="right">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title mt-5">Questions, answered</h2>
            <p className="section-sub">
              Everything you need to know before starting a project with us. Still curious? Reach
              out and we will get back within a day.
            </p>
            <a href="#contact" className="link-copper mt-6 inline-flex text-sm font-semibold">
              Talk to us →
            </a>
          </Reveal>

          <Reveal direction="left">
            <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-hover sm:px-6"
                    >
                      <span className="font-heading text-sm font-semibold text-ink sm:text-base">{faq.q}</span>
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-copper transition-all duration-300 ${
                          isOpen ? 'rotate-45 bg-copper text-white border-copper' : ''
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
