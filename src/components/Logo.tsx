import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

export function Logo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="HIT UNIT home">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 shadow-md">
        <img
            src={logo}
            alt="HIT UNIT"
            className="h-7 w-7 object-contain"
        />
    </span>
      {showText && (
        <span className="font-heading text-lg font-bold tracking-tight text-ink">
          HIT<span className="text-copper"> UNIT</span>
        </span>
      )}
    </Link>
  );
}
