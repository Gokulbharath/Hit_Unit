import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Loader2, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { Reveal } from '../components/Reveal';

// API base URL from environment variable
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const projectTypes = [
  'Web Development',
  'Full Stack Application',
  'AI Solutions',
  'Machine Learning',
  'Cloud Deployment',
  'API Development',
  'Business Automation',
  'Technical Documentation',
];

const budgets = ['< ₹5,000', '₹5,000 – ₹15,000', '₹15,000 – ₹50,000', '₹50,000+', 'Custom Quote'];

const info = [
  { icon: MapPin, label: 'Office', value: 'Coimbatore, Tamil Nadu' },
  { icon: Mail, label: 'Email', value: 'rohith16725gmail.com', href: 'mailto:rohith16725gmail.com' },
  { icon: Clock, label: 'Business Hours', value: 'Monday – Saturday · 9:00 AM – 7:00 PM' },
];

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      company: String(data.get('company') || ''),
      project_type: String(data.get('project_type') || ''),
      budget: String(data.get('budget') || ''),
      message: String(data.get('message') || ''),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setError('Please fill in your name, email and message.');
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || 'Failed to send enquiry. Please try again.');
      }
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-20">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-5">Let's build something together</h2>
          <p className="section-sub">
            Tell us about your project and we will get back within one business day with next steps.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* Form */}
          <Reveal direction="right">
            <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required placeholder="Your full name" />
                <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
                <Field label="Phone" name="phone" placeholder="Available on Request" />
                <Field label="Company" name="company" placeholder="Company name" />
                <SelectField label="Project Type" name="project_type" options={projectTypes} />
                <SelectField label="Budget" name="budget" options={budgets} />
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your goals, timeline and any specific requirements..."
                  className="w-full resize-none rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-muted/60 focus:border-copper focus:ring-2 focus:ring-copper/20"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary group disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex flex-col gap-0.5"
                  >
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600">
                      <CheckCircle2 className="h-4 w-4" /> Message Sent Successfully
                    </span>
                    <span className="text-xs text-green-600/80">We'll get back to you within 24 hours.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-red-500"
                  >
                    ✕ {error}
                  </motion.span>
                )}
              </div>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal direction="left" className="flex flex-col gap-4">
            <div className="rounded-3xl border border-line bg-surface p-6 shadow-soft sm:p-8">
              <h3 className="font-heading text-lg font-semibold text-ink">Contact details</h3>
              <div className="mt-5 space-y-4">
                {info.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3.5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-copper/10 text-copper">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="link-copper text-sm font-medium">{item.value}</a>
                        ) : (
                          <p className="text-sm font-medium text-ink">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary mt-6 w-full group"
              >
                <MessageCircle className="h-4 w-4 text-copper" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Map placeholder */}
            <div className="relative flex-1 overflow-hidden rounded-3xl border border-line bg-surface shadow-soft">
              <div className="absolute inset-0 dot-bg opacity-50" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-copper/10 text-copper">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <p className="mt-3 font-heading text-sm font-semibold text-ink">Coimbatore, Tamil Nadu</p>
                  <p className="mt-1 text-xs text-muted">11.0168° N, 76.9558° E</p>
                </div>
              </div>
              <div className="h-44 sm:h-52" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-muted/60 focus:border-copper focus:ring-2 focus:ring-copper/20"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none transition-all focus:border-copper focus:ring-2 focus:ring-copper/20"
      >
        <option value="" disabled>Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
