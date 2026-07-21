import { Link } from 'react-router-dom';

export function Logo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="HIT UNIT home">
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-primary text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
        <span className="font-heading text-base font-bold tracking-tight">H</span>
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-gold" />
      </span>
      {showText && (
        <span className="font-heading text-lg font-bold tracking-tight text-ink">
          HIT<span className="text-copper"> UNIT</span>
        </span>
      )}
    </Link>
  );
}
