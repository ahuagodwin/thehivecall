import type { ServiceItem, StatItem } from '@app-types/index'

export const SERVICES_HERO = {
  eyebrow: 'SERVICES OVERVIEW',
  headingPrefix: 'We Craft ',
  headingAccent: 'Impactful',
  headingSuffix: ' Outcomes for You and Your Business',
  image:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop',
}

export interface TwoToneStat extends StatItem {
  suffix?: string
}

export const WHAT_WE_DO = {
  eyebrow: 'WHAT WE DO?',
  headingPrefix: 'Empowering Businesses ',
  headingAccent: 'with Strategic Guidance',
  headingSuffix: ' and Hands-On Support',
  paragraphs: [
    'We partner with startups and small businesses, from the initial idea stage to enterprise scale. Blending the roles of technical advisors and engineers, we provide guidance where possible and step in when needed. This unique mix makes us more effective than traditional consultants and more affordable than most system integrators—we\u2019re here to teach, not just execute.',
    'Our clients are visionary innovators focused on product, security, and growth. We enhance their strengths with structured technology guidance, helping them make data-driven decisions and scale efficiently.',
  ],
  stats: [
    { id: 'savings', value: '$3.4', suffix: 'M', label: 'IN CLIENT SAVINGS DELIVERED' },
    { id: 'projects', value: '500', suffix: '+', label: 'PROJECTS DELIVERED' },
    { id: 'costs', value: '30', suffix: '%', label: 'OPTIMIZE OPERATIONS TO CUT COSTS' },
    { id: 'efficiency', value: '>200', suffix: '%', label: 'INCREASE IN OPERATIONAL EFFICIENCY' },
  ] as TwoToneStat[],
}

export interface ServiceTier {
  id: string
  title: string
  items: string[]
}

export const WHY_CHOOSE_US = {
  eyebrow: 'WHY CHOOSE US',
  headingPrefix: 'Customized Services for ',
  headingAccent: 'Every Stage',
  headingSuffix: ' of Your Business',
  tiers: [
    {
      id: 'startups',
      title: 'Startups & Idea Stage',
      items: [
        'Technical feasibility review',
        'MVP architecture planning',
        'Security-by-design consulting',
        'Tech stack selection',
        'Market & competitor research',
        'Idea testing & viability',
      ],
    },
    {
      id: 'growing',
      title: 'Growing Businesses',
      items: [
        'Cybersecurity audits',
        'Cloud infrastructure setup',
        'Access to developer network',
        'Data & analytics guidance',
        'Go-to-market tech strategy',
        'Scale-up architecture',
      ],
    },
    {
      id: 'enterprise',
      title: 'Enterprise & Scale',
      items: [
        'Enterprise security operations',
        'Blockchain & fintech integration',
        'Partnership & vendor arrangements',
        'Advanced analytics & AI',
        'Compliance & risk management',
        'Digital transformation strategy',
      ],
    },
  ] as ServiceTier[],
}

export const FULL_SERVICES_SECTION = {
  eyebrow: 'SERVICES',
  headingPrefix: 'We Offer a ',
  headingAccent: 'Full Scale',
  headingSuffix: ' of Services to Meet your Needs',
}

export const SERVICES_GRID_ITEMS: ServiceItem[] = [
  {
    id: 'cybersecurity',
    icon: 'shield',
    title: 'Cybersecurity',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'blockchain',
    icon: 'link',
    title: 'Blockchain Solutions',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'software',
    icon: 'code',
    title: 'Software Development',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'consultancy',
    icon: 'bank',
    title: 'IT Consultancy',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'products',
    icon: 'box',
    title: 'Products',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'financial',
    icon: 'coins',
    title: 'Financial Services & Investment',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'training',
    icon: 'cap',
    title: 'Training & Capacity Building',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'cloud',
    icon: 'ai',
    title: 'Cloud & Data Analytics',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
]

export const RESULTS_CTA = {
  heading: 'Unique Service Combinations Lead to Faster, Better Results',
}

export const SERVICES_WHY_US_OVERLAY = {
  eyebrow: 'WHY US?',
  headingPrefix: "You'll Know What ",
  headingHighlight: 'Builds Resilience',
  subtitle: 'We are Transparent Like that. No Gimmicks.',
  buttonLabel: 'Schedule a Call',
  image:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop',
}
