import type { IndustryDetailConfig } from '@app-types/index'

export const TELECOMMUNICATIONS_INDUSTRY: IndustryDetailConfig = {
  slug: 'telecommunications',
  eyebrow: 'TELECOMMUNICATIONS',
  title: 'Telecommunications',
  tagline: 'Building resilient networks and secure infrastructure for the connected world.',
  heroImage:
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
  stats: [
    { value: '99.98%', label: 'NETWORK UPTIME DELIVERED' },
    { value: '5G', label: 'MIGRATION EXPERTISE' },
    { value: '10M+', label: 'SUBSCRIBERS SUPPORTED' },
  ],
  challengesHeading: 'The Challenges Telecom Providers Face Today',
  challenges: [
    {
      id: 'network-security',
      title: 'Network Security at Scale',
      description:
        'Telecom networks are high-value targets with massive attack surfaces. We secure infrastructure without sacrificing throughput.',
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: '5g-migration',
      title: 'Legacy-to-5G Migration',
      description:
        'Migrating from legacy infrastructure to 5G is complex and high-risk. We plan and execute phased transitions that keep networks live.',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'data-volumes',
      title: 'Massive Data Volumes',
      description:
        'Telecom generates enormous data streams that are hard to monitor in real time. We build analytics pipelines that surface what matters.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    },
  ],
  capabilitiesHeading: 'What We Bring to Telecommunications',
  capabilities: [
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure',
      items: [
        '5G network architecture',
        'Network function virtualization',
        'Edge computing deployment',
        'IoT connectivity platforms',
      ],
    },
    {
      id: 'security-operations',
      title: 'Security Operations',
      items: [
        'DDoS protection',
        'Network intrusion detection',
        'SIM & identity security',
        'Signaling security (SS7/Diameter)',
      ],
    },
    {
      id: 'customer-data',
      title: 'Customer & Data Platforms',
      items: [
        'Billing system integration',
        'Customer analytics platforms',
        'Churn prediction models',
        'Self-service portals',
      ],
    },
  ],
  caseStudy: {
    quote: 'Chiscript\u2019s engineers understood our network at a level most vendors never reach.',
    author: 'Priya Nandan',
    role: 'META MEX \u2014 COO',
    metricValue: '3.1x',
    metricLabel: 'ROI realized on the digital transformation program within 18 months.',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1600&auto=format&fit=crop',
  },
  ctaHeading: 'Ready to Future-Proof Your Network?',
  ctaSubheading: "Let's talk about scaling securely as demand grows.",
}
