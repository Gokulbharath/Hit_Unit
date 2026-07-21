import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-canvas px-6 text-center">
      <div>
        <p className="font-heading text-7xl font-bold text-gradient-copper">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-ink">Page not found</h1>
        <p className="mt-2 text-muted">The page you are looking for does not exist.</p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          <Home className="h-4 w-4" /> Back home
        </Link>
      </div>
    </div>
  );
}
