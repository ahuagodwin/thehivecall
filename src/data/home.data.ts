import type {
  InsightCard,
  ServiceItem,
  PhilosophyPillar,
  StatItem,
  IndustryItem,
  RadarPoint,
  Testimonial,
  ClientLogo,
  HeroVariant,
} from '@app-types/index'

export const HERO_VARIANTS: HeroVariant[] = [
  {
    id: 'trusted-partner',
    badge: 'Technology Solutions',
    headingLines: ['Innovate Today,', 'Lead Tomorrow'],
    image:
      'https://images.pexels.com/photos/8112106/pexels-photo-8112106.jpeg?q=80&w=2000&auto=format&fit=crop',
    ctaLabel: 'Start a Conversation',
  },
  {
    id: 'software',
    badge: 'Custom Software',
    headingLines: ['Turn Ideas Into', 'Powerful Digital Products'],
    image:
      'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?q=80&w=2000&auto=format&fit=crop',
    ctaLabel: 'Build Your Solution',
  },
  {
    id: 'cybersecurity',
    badge: 'Cyber Security',
    headingLines: ['Stay Secure,', 'Stay Ahead'],
    image:
      'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?q=80&w=2000&auto=format&fit=crop',
    ctaLabel: 'Secure Your Business',
  },
  {
    id: 'banking',
    badge: 'Fintech & Finance',
    headingLines: ['Reimagining Finance', 'Through Technology'],
    image:
      'https://images.pexels.com/photos/37594389/pexels-photo-37594389.jpeg?q=80&w=2000&auto=format&fit=crop',
    ctaLabel: 'Discover Fintech',
  },
  {
    id: 'project',
    badge: 'Project Management',
    headingLines: ['From Strategy', 'to Successful Delivery'],
    image:
      'https://images.pexels.com/photos/5313133/pexels-photo-5313133.jpeg?q=80&w=2000&auto=format&fit=crop',
    ctaLabel: 'Manage With Confidence',
  },
  {
    id: 'digital',
    badge: 'Business Digitalization',
    headingLines: ['Transform Operations,', 'Unlock New Possibilities'],
    image:
      'https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg?q=80&w=2000&auto=format&fit=crop',
    ctaLabel: 'Transform Your Business',
  },
];


export const INSIGHT_CARDS: InsightCard[] = [
  {
    id: 'who-we-are',
    tag: 'ABOUT US',
    title: 'Building Innovative Technology Solutions for a Digital Future',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    variant: 'light',
    href: '#philosophy',
  },
  {
    id: 'recognition',
    tag: 'INNOVATION',
    title: 'Driving Digital Innovation Through Technology and Strategic Solutions',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop',
    variant: 'accent',
    href: '/insights',
  },
  {
    id: 'report',
    tag: 'INSIGHTS',
    title: 'Exploring Emerging Trends in Technology, Fintech and Digital Security',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
    variant: 'accentAlt',
    href: '/insights',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'cybersecurity',
    icon: 'shield',
    title: 'Cybersecurity',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=900&auto=format&fit=crop',
    href: '#services',
  },
  {
    id: 'fintech',
    icon: 'bank',
    title: 'Fintech & Finance',
    image:
      'https://images.pexels.com/photos/37594389/pexels-photo-37594389.jpeg?q=80&w=900&auto=format&fit=crop',
    href: '#services',
  },
  {
    id: 'software',
    icon: 'code',
    title: 'Software Development',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop',
    href: '#services',
  },
  {
    id: 'consultancy',
    icon: 'bank',
    title: 'IT Consultancy',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop',
    href: '#services',
  },
];

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    id: 'expertise',
    icon: 'coins',
    title: 'Technical Excellence',
    description:
      'Deep expertise in modern technologies, platforms and digital solutions that drive business growth',
  },
  {
    id: 'collaborative',
    icon: 'layers',
    title: 'Client-Centered Collaboration',
    description:
      'Working closely with our clients to understand their goals and deliver secure, scalable and practical solutions',
  },
  {
    id: 'evidence',
    icon: 'asterisk',
    title: 'Data-Driven Thinking',
    description:
      'Using research, analysis and measurable insights to solve complex challenges and make informed decisions',
  },
  {
    id: 'knowhow',
    icon: 'bubbles',
    title: 'Practical Innovation',
    description:
      'Combining technical expertise and strategic thinking to turn ideas into impactful digital solutions',
  },
];

export const PHILOSOPHY_STATS: StatItem[] = [
  { id: 'clients', value: '150+', label: 'SATISFIED CLIENTS' },
  { id: 'secured', value: '$250M+', label: 'DIGITAL ASSETS SECURED' },
  { id: 'uptime', value: '99.9%', label: 'SYSTEM UPTIME DELIVERED' },
  { id: 'repeat', value: '>90%', label: 'REPEAT CLIENTS OR REFERRALS' },
]

export const CTA_HEADING =
  'Transforming Ideas into Secure, Scalable, and Innovative Digital Solutions';

export const CTA_BUTTON_LABEL = 'Start Your Project';

export const CTA_IMAGE =
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop'

export const INDUSTRIES: IndustryItem[] = [
  { id: 'fintech', label: 'Fintech & Financial Services', href: '#' },
  { id: 'technology', label: 'Technology & Software', href: '#' },
  { id: 'healthcare', label: 'Healthcare & Life Sciences', href: '#' },
  { id: 'telecom', label: 'Telecommunications', href: '#' },
  { id: 'energy', label: 'Energy & Utilities', href: '#' },
  { id: 'government', label: 'Government & Public Sector', href: '#' },
];

export const RADAR_LEGEND = {
  primary: 'Technology & Security',
  secondary: 'Digital Innovation',
};

export const RADAR_DATA: RadarPoint[] = [
  { month: 'Jan', investments: 92, finance: 40 },
  { month: 'Feb', investments: 65, finance: 38 },
  { month: 'Mar', investments: 70, finance: 45 },
  { month: 'Apr', investments: 80, finance: 78 },
  { month: 'May', investments: 55, finance: 88 },
  { month: 'Jun', investments: 50, finance: 60 },
  { month: 'Jul', investments: 58, finance: 82 },
  { month: 'Aug', investments: 78, finance: 62 },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'fintech',
    quote:
      'Their team understood our business goals and delivered a secure, scalable fintech platform that improved our operations and customer experience.',
    author: 'Michael Adeyemi',
    role: 'FINTECH COMPANY — CEO',
    companyTag: 'FINTECH',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop',
    storyTag: 'SUCCESS STORY',
    storyTitle: 'Digital Finance Platform Built for Growth and Scale',
    metricValue: '45%',
    metricLabel: 'improvement in transaction processing efficiency.',
  },
  {
    id: 'software',
    quote:
      'From planning to deployment, the team demonstrated exceptional technical expertise. They transformed our ideas into a reliable software solution that our customers love.',
    author: 'Sarah Williams',
    role: 'TECH COMPANY — CTO',
    companyTag: 'TECH',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    storyTag: 'SUCCESS STORY',
    storyTitle: 'Custom Software Solution Accelerates Business Operations',
    metricValue: '2.4x',
    metricLabel: 'increase in operational efficiency after implementation.',
  },
  {
    id: 'security',
    quote:
      'Their cybersecurity team gave us the confidence to operate in a rapidly changing digital environment. Our systems are now more secure, resilient and prepared for emerging threats.',
    author: 'David Okafor',
    role: 'FINANCIAL SERVICES — CIO',
    companyTag: 'FINANCE',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1200&auto=format&fit=crop',
    storyTag: 'SUCCESS STORY',
    storyTitle: 'Strengthening Digital Security and Business Resilience',
    metricValue: '60%',
    metricLabel: 'reduction in identified security vulnerabilities.',
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: 'stripe', name: 'Stripe' },
  { id: 'google', name: 'Google' },
  { id: 'wise', name: 'Wise' },
  { id: 'paystack', name: 'Paystack' },
  { id: 'flutterwave', name: 'Flutterwave' },
   { id: 'baddietalk', name: 'BaddieTalk' },
]
