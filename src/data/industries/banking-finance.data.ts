import type { IndustryDetailConfig } from '@app-types/index'

export const BANKING_FINANCE_INDUSTRY: IndustryDetailConfig = {
  slug: 'banking-finance',
  eyebrow: 'BANKING & FINANCE',
  title: 'Banking & Finance',
  tagline: 'Securing transactions, modernizing core banking, and building trust in digital finance.',
  heroImage:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop',
  stats: [
    { value: '99.99%', label: 'UPTIME SLA' },
    { value: '$2B+', label: 'TRANSACTIONS SECURED ANNUALLY' },
    { value: '40+', label: 'FINANCIAL INSTITUTIONS SERVED' },
  ],
  challengesHeading: 'The Challenges Financial Institutions Face Today',
  challenges: [
    {
      id: 'legacy-core',
      title: 'Legacy Core Banking Systems',
      description:
        'Decades-old core banking platforms slow innovation and create hidden security gaps. We modernize incrementally, without disrupting daily operations.',
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'fraud-detection',
      title: 'Real-Time Fraud Detection',
      description:
        'Fraud patterns evolve faster than static rule engines can track. We build adaptive, ML-assisted monitoring that catches anomalies as they happen.',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'regulatory',
      title: 'Regulatory Complexity',
      description:
        'Basel III, PCI DSS, and local banking regulations demand constant vigilance. We build compliance into the architecture, not as an afterthought.',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    },
  ],
  capabilitiesHeading: 'What We Bring to Banking & Finance',
  capabilities: [
    {
      id: 'core-payments',
      title: 'Core Banking & Payments',
      items: [
        'Core banking modernization',
        'Payment gateway integration',
        'Real-time settlement systems',
        'Open banking APIs',
      ],
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance',
      items: [
        'PCI DSS compliance',
        'Fraud detection systems',
        'AML/KYC automation',
        'Regulatory reporting',
      ],
    },
    {
      id: 'digital-innovation',
      title: 'Digital Innovation',
      items: [
        'Mobile banking platforms',
        'Blockchain-based settlement',
        'Robo-advisory tools',
        'Customer data analytics',
      ],
    },
  ],
  caseStudy: {
    quote:
      'Chiscript modernized our core banking platform without a single hour of unplanned downtime.',
    author: 'Rebecca Roy',
    role: 'H&N \u2014 CEO & PRESIDENT',
    metricValue: '1.6x',
    metricLabel: 'net synergies realized above the initial target in the first year.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop',
  },
  ctaHeading: 'Ready to Modernize Your Financial Infrastructure?',
  ctaSubheading: "Let's talk about where your systems are today and where they need to be.",
}
