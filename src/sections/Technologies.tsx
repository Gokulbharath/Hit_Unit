import { Reveal } from '../components/Reveal';
import { techStack } from '../data/site';

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
   <div className="mask-fade-x relative w-full overflow-hidden">
      <div
        className="flex w-max shrink-0 gap-3 pr-3"
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
    <section id="technologies" className="scroll-mt-20 py-20">
      <div className="container-px">
        {/* Heading... */}
      </div>

      {/* Mobile */}
      <div className="mt-10 flex flex-wrap justify-center gap-3 px-5 sm:hidden">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line bg-surface px-4 py-2 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Tablet/Desktop */}
      <div className="mt-12 hidden space-y-3 sm:block">
        <Marquee items={techStack.slice(0, half)} />
        <Marquee items={techStack.slice(half)} reverse />
      </div>
    </section>
  );
}
