import {
  Cloud,
  Code2,
  Cpu,
  Database,
  FileText,
  Gauge,
  Layers,
  Lock,
  Plug,
  Rocket,
  Shield,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export const heroCards = [
  { label: 'AI', icon: Cpu, accent: 'copper' },
  { label: 'Cloud', icon: Cloud, accent: 'gold' },
  { label: 'Automation', icon: Workflow, accent: 'copper' },
  { label: 'Analytics', icon: Gauge, accent: 'gold' },
  { label: 'API', icon: Plug, accent: 'copper' },
  { label: 'React', icon: Code2, accent: 'gold' },
  { label: 'Node.js', icon: Terminal, accent: 'copper' },
  { label: 'Python', icon: Terminal, accent: 'gold' },
  { label: 'MongoDB', icon: Database, accent: 'copper' },
  { label: 'AWS', icon: Cloud, accent: 'gold' },
];

export const whyCards: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: 'Fast Delivery',
    desc: 'Agile sprints with weekly demos. We ship production-ready software in weeks, not quarters.',
    icon: Zap,
  },
  {
    title: 'Enterprise Quality',
    desc: 'Type-safe code, automated tests and code reviews on every commit. Built to scale.',
    icon: Shield,
  },
  {
    title: 'Secure Development',
    desc: 'OWASP-aligned practices, encrypted data flows and least-privilege access by default.',
    icon: Lock,
  },
  {
    title: 'Scalable Architecture',
    desc: 'Modular, cloud-native systems designed to handle 10x growth without rewrites.',
    icon: Layers,
  },
  {
    title: 'Clean Code',
    desc: 'Readable, documented and maintainable code your team can own with confidence.',
    icon: Code2,
  },
  {
    title: 'Long-Term Support',
    desc: 'Ongoing maintenance, monitoring and feature evolution after launch.',
    icon: Sparkles,
  },
];

export const stats = [
  { label: 'Successful Projects', value: 3, suffix: '', type: 'number' },
  { label: 'Technologies', value: 15, suffix: '+', type: 'number' },
  { label: 'Business Domains', value: 3, suffix: '', type: 'number' },
  { label: 'Support', value: 'Mon–Sat', suffix: '9:00 AM – 7:00 PM', type: 'text' },
];

export const services = [
  {
    title: 'Web Development',
    desc: 'High-performance websites that represent your brand and convert visitors into customers.',
    icon: Code2,
    items: ['Business Websites', 'Corporate Websites', 'Landing Pages', 'Portfolio Websites'],
    tech: ['React', 'Next.js', 'Tailwind', 'Vite'],
  },
  {
    title: 'Full Stack Applications',
    desc: 'End-to-end web apps with authentication, dashboards and real-time data.',
    icon: Layers,
    items: ['React', 'Node', 'Express', 'MongoDB', 'Authentication', 'Dashboard'],
    tech: ['React', 'Node', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'AI Solutions',
    desc: 'Intelligent systems that understand, predict and automate using modern ML.',
    icon: Cpu,
    items: ['OpenAI', 'Chatbots', 'Automation', 'Computer Vision', 'NLP'],
    tech: ['OpenAI', 'TensorFlow', 'Python', 'LangChain'],
  },
  {
    title: 'Machine Learning',
    desc: 'Custom models for prediction, classification and training on your data.',
    icon: Sparkles,
    items: ['Prediction Models', 'Classification', 'Training', 'NLP'],
    tech: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Python'],
  },
  {
    title: 'Cloud Deployment',
    desc: 'Reliable, auto-scaling infrastructure with CI/CD pipelines and monitoring.',
    icon: Cloud,
    items: ['AWS', 'Docker', 'Render', 'Vercel', 'Railway'],
    tech: ['AWS', 'Docker', 'Vercel', 'GitHub Actions'],
  },
  {
    title: 'API Development',
    desc: 'Robust, documented APIs with auth, payments and third-party integrations.',
    icon: Plug,
    items: ['REST API', 'Authentication', 'Payment Gateway', 'Third Party Integrations'],
    tech: ['Node', 'Express', 'Supabase', 'Stripe'],
  },
  {
    title: 'Business Automation',
    desc: 'Automate repetitive workflows and connect your tools into one system.',
    icon: Workflow,
    items: ['Workflow Automation', 'Integrations', 'Reporting', 'Notifications'],
    tech: ['n8n', 'Zapier', 'Node', 'Python'],
  },
  {
    title: 'Technical Documentation',
    desc: 'Clear documentation that makes your software easy to use and maintain.',
    icon: FileText,
    items: ['Deployment Guide', 'Technical Documents', 'API Docs', 'User Manuals'],
    tech: ['Markdown', 'Mintlify', 'Docusaurus', 'OpenAPI'],
  },
];

export const process = [
  { title: 'Requirement Analysis', desc: 'We dive deep into your goals, users and constraints to define a clear scope.', icon: FileText },
  { title: 'Planning', desc: 'Architecture, milestones and a roadmap your team can track week by week.', icon: Layers },
  { title: 'UI/UX Design', desc: 'Wireframes and polished interfaces validated against real user flows.', icon: Sparkles },
  { title: 'Development', desc: 'Agile sprints with clean, tested code and continuous integration.', icon: Code2 },
  { title: 'Testing', desc: 'Automated and manual QA across devices, edge cases and performance.', icon: Shield },
  { title: 'Deployment', desc: 'Zero-downtime releases on scalable cloud infrastructure with monitoring.', icon: Rocket },
  { title: 'Support', desc: 'Ongoing maintenance, updates and feature evolution after launch.', icon: Gauge },
];

export const techStack = [
  'React', 'Next.js', 'Node', 'Express', 'MongoDB', 'PostgreSQL',
  'Python', 'TensorFlow', 'OpenAI', 'Docker', 'GitHub', 'AWS',
  'Firebase', 'Tailwind', 'Framer Motion',
];

export const portfolio = [
  {
    title: 'DEPART',
    subtitle: 'Smart Supermarket Management System',
    category: 'Full Stack Web Application',
    desc: 'A complete supermarket management platform with inventory management, billing, order tracking, customer management, analytics dashboard, authentication and admin panel.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    status: 'Coming Soon',
    link: null,
  },
  {
    title: 'UDHYAM 2026',
    subtitle: 'College Cultural Event Website',
    category: 'Event Management Website',
    desc: 'A responsive event website developed for a college cultural festival with event listings, registrations, schedules, gallery, coordinators, and contact information.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'Live',
    link: 'https://udhyam-csbs.vercel.app/',
  },
  {
    title: 'BrightMinds Arena',
    subtitle: 'Assessment Platform',
    category: 'EdTech Platform',
    desc: 'An online assessment platform for educational institutions with student management, online tests, evaluations, performance analytics and result tracking.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    status: 'Live',
    link: 'https://brightminds-arena-frontend-production.up.railway.app/',
  },
];

export const pricing = [
  {
    name: 'Starter Website',
    price: '₹2,500',
    note: 'Starting from',
    desc: 'A polished, responsive website to establish your online presence.',
    features: ['Responsive Design', 'Source Code', 'Documentation', '2 Weeks Support', '1 Page Group'],
    highlight: false,
  },
  {
    name: 'Business Application',
    price: '₹7,500',
    note: 'Starting from',
    desc: 'A full-stack web app with auth, dashboard and database.',
    features: ['Responsive Design', 'Source Code', 'Documentation', '1 Month Support', '4–6 Weeks Timeline', 'Authentication'],
    highlight: true,
  },
  {
    name: 'AI Solutions',
    price: '₹10,000',
    note: 'Starting from',
    desc: 'Custom AI models, chatbots and automation tailored to your data.',
    features: ['Responsive Design', 'Source Code', 'Documentation', '1 Month Support', 'Custom Model', 'API Integration'],
    highlight: false,
  },
  {
    name: 'Hosting',
    price: 'Custom Quote',
    note: 'Tailored to usage',
    desc: 'Cloud hosting, CI/CD and ongoing maintenance for your product.',
    features: ['Cloud Deployment', 'CI/CD Pipeline', 'Monitoring', 'Monthly Support', 'SSL & Backups'],
    highlight: false,
  },
];

export const testimonials = [
  {
    quote:
      'The supermarket management system simplified our daily operations and inventory management. The interface is clean and easy to use.',
    name: 'Retail Business Owner',
    role: 'DEPART — Supermarket Management',
  },
  {
    quote:
      'The event website made registrations and event management smooth throughout our college cultural festival.',
    name: 'College Event Coordinator',
    role: 'UDHYAM 2026 — Cultural Event',
  },
  {
    quote:
      'The assessment platform helped us conduct online evaluations efficiently with a great user experience.',
    name: 'Educational Organization',
    role: 'BrightMinds Arena — EdTech',
  },
];

export const faqs = [
  {
    q: 'What kind of software does HIT UNIT build?',
    a: 'We build custom websites, full-stack web applications, AI solutions, machine learning systems, cloud deployments and APIs for startups, enterprises and educational institutions.',
  },
  {
    q: 'How much does a project cost?',
    a: 'Project costs depend entirely on scope, complexity and timeline. Every project is unique. We provide a detailed, tailored quotation after understanding your requirements during a free consultation.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A marketing website takes 1–2 weeks, a full-stack application 4–6 weeks and AI solutions vary by complexity. We share a week-by-week roadmap during planning.',
  },
  {
    q: 'Do I own the source code?',
    a: 'Yes. You receive the complete, documented source code and deployment guide. Your team can own and extend it with confidence.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. Every project includes ongoing support and maintenance. We also offer long-term feature-evolution retainers to keep your product competitive.',
  },
  {
    q: 'Can you work with our existing team?',
    a: 'Absolutely. We follow agile practices, share progress weekly and can integrate directly into your repos, boards and CI/CD pipelines.',
  },
  {
    q: 'Which technologies do you use?',
    a: 'React, Next.js, Node, Express, MongoDB, PostgreSQL, Python, TensorFlow, OpenAI, Docker, AWS and more, chosen to fit your scale and team.',
  },
];
