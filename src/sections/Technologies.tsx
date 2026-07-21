import { Reveal } from '../components/Reveal';
import { techStack } from '../data/site';

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="mask-fade-x flex overflow-hidden">
      <div
        className="flex shrink-0 gap-3 pr-3"
        style={{
          animation: `marquee-${reverse ? 'r' : 'f'} 28s linear infinite`,
        }}
      >
        {[...items, ...items].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink shadow-soft"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-copper to-gold" />
            {t}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee-f { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-r { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}

export function Technologies() {
  const half = Math.ceil(techStack.length / 2);
  return (
    <section id="technologies" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow">Technologies</p>
          <h2 className="section-title mt-5">A modern, proven stack</h2>
          <p className="section-sub">
            We choose technologies that are mature, well-supported and loved by engineers — so your
            product stays fast and your team stays productive.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 space-y-3">
        <Marquee items={techStack.slice(0, half)} />
        <Marquee items={techStack.slice(half)} reverse />
      </div>
    </section>
  );
}
