import type { ServiceItem, StatItem } from '@app-types/index'

export const SERVICES_HERO = {
  eyebrow: 'OUR SERVICES',
  headingPrefix: 'Technology That ',
  headingAccent: 'Drives',
  headingSuffix: ' Growth and Business Transformation',
   image:
    'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?q=80&w=2000&auto=format&fit=crop',
};

export interface TwoToneStat extends StatItem {
  suffix?: string
}

export const WHAT_WE_DO = {
  eyebrow: 'WHAT WE DO',
  headingPrefix: 'Turning Technology ',
  headingAccent: 'Into Business Value',
  headingSuffix: ' Through Innovation and Expertise',
  paragraphs: [
    'We help businesses turn complex technology challenges into practical, scalable solutions. From software development and cybersecurity to fintech, digital transformation, and technology consulting, we combine strategic thinking with hands-on technical expertise.',
    'Our approach is built around understanding your business, identifying the right opportunities, and delivering solutions that improve efficiency, strengthen security, and support sustainable growth.',
  ],
  stats: [
    { id: 'savings', value: '40', suffix: '%', label: 'AVERAGE PROCESS EFFICIENCY GAIN' },
    { id: 'projects', value: '100', suffix: '+', label: 'DIGITAL PROJECTS DELIVERED' },
    { id: 'costs', value: '35', suffix: '%', label: 'AVERAGE OPERATIONAL COST REDUCTION' },
    { id: 'efficiency', value: '2', suffix: 'x', label: 'FASTER DIGITAL DELIVERY' },
  ] as TwoToneStat[],
};

export interface ServiceTier {
  id: string
  title: string
  items: string[]
}

export const WHY_CHOOSE_US = {
  eyebrow: 'WHY CHOOSE US',
  headingPrefix: 'Technology Solutions ',
  headingAccent: 'Built for',
  headingSuffix: ' Your Business Journey',
  tiers: [
    {
      id: 'startups',
      title: 'Startups & New Ventures',
      items: [
        'Product & technical strategy',
        'MVP design and development',
        'Technology stack selection',
        'Secure system architecture',
        'Product validation & research',
        'Scalable foundation planning',
      ],
    },
    {
      id: 'growing',
      title: 'Growing Businesses',
      items: [
        'Custom software development',
        'Cybersecurity assessment',
        'Cloud & infrastructure solutions',
        'System integration & automation',
        'Data & analytics solutions',
        'Technology scaling strategy',
      ],
    },
    {
      id: 'enterprise',
      title: 'Enterprise & Organizations',
      items: [
        'Enterprise software solutions',
        'Fintech & financial technology',
        'Advanced cybersecurity',
        'Digital transformation',
        'Risk & compliance management',
        'Technology consulting & strategy',
      ],
    },
  ] as ServiceTier[],
};

export const FULL_SERVICES_SECTION = {
  eyebrow: 'OUR SERVICES',
  headingPrefix: 'End-to-End ',
  headingAccent: 'Technology',
  headingSuffix: ' Solutions for Modern Businesses',
};

export const SERVICES_GRID_ITEMS: ServiceItem[] = [
  {
    id: 'cybersecurity',
    icon: 'shield',
    title: 'Cybersecurity',
    image:
      'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'fintech',
    icon: 'coins',
    title: 'Fintech & Financial Solutions',
    image:
      'https://images.pexels.com/photos/37594389/pexels-photo-37594389.jpeg?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'software',
    icon: 'code',
    title: 'Software Development',
    image:
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'consultancy',
    icon: 'bank',
    title: 'Technology Consultancy',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'products',
    icon: 'box',
    title: 'Digital Products',
    image:
      'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'financial',
    icon: 'coins',
    title: 'Financial & Investment Services',
    image:
      'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'training',
    icon: 'cap',
    title: 'Training & Capacity Building',
    image:
      'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'cloud',
    icon: 'ai',
    title: 'Cloud & Data Solutions',
    image:
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
];

export const RESULTS_CTA = {
  heading: 'Smart Technology Solutions That Drive Real Business Results',
};

export const SERVICES_WHY_US_OVERLAY = {
  eyebrow: 'WHY CHOOSE US?',
  headingPrefix: 'Technology That ',
  headingHighlight: 'Moves Your Business Forward',
  subtitle: 'Practical solutions, transparent guidance, and expertise you can rely on.',
  buttonLabel: 'Talk to Our Experts',
  image:
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?q=80&w=2000&auto=format&fit=crop',
};
