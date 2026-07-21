import { Github, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { navItems, services } from '../data/site';

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: Mail, label: 'Email', href: 'mailto:gokulbharath1221@gmail.com' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919000000000' },
  ];

  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              HIT UNIT builds scalable websites, AI-powered applications and business software that
              help companies grow faster.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line bg-canvas text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-copper hover:text-copper hover:bg-copper/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-sm text-ink/80 transition-colors hover:text-copper">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 8).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-ink/80 transition-colors hover:text-copper">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-muted">Get in touch</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/80">
              <li>Coimbatore, Tamil Nadu</li>
              <li>
                <a href="mailto:gokulbharath1221@gmail.com" className="transition-colors hover:text-copper">
                  gokulbharath1221@gmail.com
                </a>
              </li>
              <li>Mon – Sat · 9:00 AM – 7:00 PM</li>
            </ul>
            <a href="#contact" className="btn-secondary mt-5 text-xs">
              Start a project
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © 2026 HIT UNIT · Building Ideas Into Software
          </p>
          <p className="text-xs text-muted">
            Designed & built with care in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
