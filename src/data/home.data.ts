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
    badge: 'Trusted Partner',
    headingLines: ['Your Trusted', 'Technology Partner'],
    image:
      'https://finovate.vamtam.com/wp-content/uploads/2025/02/GettyImages-1364057902.jpg',
    ctaLabel: 'Free Consultation',
  },

    {
    id: 'financial-services',
    badge: 'Financial Services',
    headingLines: ['Powering Your', 'Business Finances'],
    image:
      'https://finovate.vamtam.com/wp-content/uploads/2025/02/GettyImages-1483243663.jpg?q=80&w=2000&auto=format&fit=crop',
    ctaLabel: 'Free Consultation',
  },
   {
    id: 'software',
    badge: 'Software Engineering',
    headingLines: ['Build Smarter,', 'Scale Faster'],
    image:
      'https://images.pexels.com/photos/6804612/pexels-photo-6804612.jpeg?q=80&w=2000&auto=format&fit=crop',
    ctaLabel: 'Explore Our Solutions',
  },
  {
    id: 'investing',
    badge: 'Investment & Training',
    headingLines: ['Invest Today,', 'Thrive Tomorrow'],
    image:
      'https://finovate.vamtam.com/wp-content/uploads/2025/02/GettyImages-2149615639.jpg?q=80&w=2000&auto=format&fit=crop',
    ctaLabel: 'Talk to an Advisor',
  },

  {
    id: 'cybersecurity',
    badge: 'Cyber Security',
    headingLines: ['Securing Your', 'Digital Future'],
    image:
      'https://images.pexels.com/photos/5475791/pexels-photo-5475791.jpeg?q=80&w=2000&auto=format&fit=crop',
    ctaLabel: 'Get a Security Audit',
  },
  {
    id: 'project',
    badge: 'Project Management',
    headingLines: ['Plan Smarter,', 'Deliver Better'],
    image:
      'https://images.pexels.com/photos/5686111/pexels-photo-5686111.jpeg?q=80&w=2000&auto=format&fit=crop',
    ctaLabel: 'Explore Solutions',
  },
]


export const INSIGHT_CARDS: InsightCard[] = [
  {
    id: 'who-we-are',
    tag: 'WHO WE ARE',
    title: 'Leading Provider of Cybersecurity and Technology Solutions',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    variant: 'light',
    href: '#philosophy',
  },
  {
    id: 'recognition',
    tag: 'RECOGNITION',
    title: 'Chiscript Technologies Named a Blockchain Innovation Partner',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
    variant: 'accent',
    href: '/insights',
  },
  {
    id: 'report',
    tag: 'REPORT',
    title: '2025 State of Digital Trust & Cybersecurity Report',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    variant: 'accentAlt',
    href: '/insights',
  },
]

export const SERVICES: ServiceItem[] = [
  {
    id: 'cybersecurity',
    icon: 'shield',
    title: 'Cybersecurity',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop',
    href: '#services',
  },
  {
    id: 'blockchain',
    icon: 'link',
    title: 'Blockchain Solutions',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=900&auto=format&fit=crop',
    href: '#services',
  },
  {
    id: 'software',
    icon: 'code',
    title: 'Software Development',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=900&auto=format&fit=crop',
    href: '#services',
  },
  {
    id: 'consultancy',
    icon: 'bank',
    title: 'IT Consultancy',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop',
    href: '#services',
  },
]

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    id: 'expertise',
    icon: 'coins',
    title: 'Deep expertise',
    description:
      "With the technologies, platforms and ecosystems shaping every client's industry",
  },
  {
    id: 'collaborative',
    icon: 'layers',
    title: 'Collaborative approach',
    description:
      'A hands-on, collaborative approach to building secure, scalable solutions for long-term success',
  },
  {
    id: 'evidence',
    icon: 'asterisk',
    title: 'Philosophy of evidence',
    description:
      'Data-driven insights tackling core issues through analysis, testing and research',
  },
  {
    id: 'knowhow',
    icon: 'bubbles',
    title: 'The know-how',
    description:
      'Turning insights into impactful action by overcoming technical and operational barriers',
  },
]

export const PHILOSOPHY_STATS: StatItem[] = [
  { id: 'clients', value: '150+', label: 'SATISFIED CLIENTS' },
  { id: 'secured', value: '$250M+', label: 'DIGITAL ASSETS SECURED' },
  { id: 'uptime', value: '99.9%', label: 'SYSTEM UPTIME DELIVERED' },
  { id: 'repeat', value: '>90%', label: 'REPEAT CLIENTS OR REFERRALS' },
]

export const CTA_HEADING = 'Empowering Businesses to Navigate the Digital Landscape With Confidence'
export const CTA_BUTTON_LABEL = 'Book a Consultation'

export const CTA_IMAGE =
  'https://finovate.vamtam.com/wp-content/uploads/2025/02/GettyImages-1394467242.jpg?q=80&w=2000&auto=format&fit=crop'

export const INDUSTRIES: IndustryItem[] = [
  { id: 'banking', label: 'Banking & Finance', href: '#' },
  { id: 'government', label: 'Government & Public Sector', href: '#' },
  { id: 'healthcare', label: 'Healthcare', href: '#' },
  { id: 'telecom', label: 'Telecommunications', href: '#' },
  { id: 'energy', label: 'Energy & Utilities', href: '#' },
  { id: 'education', label: 'Education', href: '#' },
]

export const RADAR_LEGEND = {
  primary: 'Security Operations',
  secondary: 'Digital Growth',
}

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
    id: 'hn',
    quote:
      "We wouldn't have gotten to where we are today without Chiscript. The team spent time understanding our infrastructure and where our vulnerabilities were.",
    author: 'Rebecca Roy',
    role: 'H&N — CEO & PRESIDENT',
    companyTag: 'H&N',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop',
    storyTag: 'SUCCESS STORY',
    storyTitle: 'Enterprise Security Overhaul Generates H&N Success in Healthcare',
    metricValue: '1.6x',
    metricLabel: 'reduction in security incidents realized within the first year.',
  },
  {
    id: 'konstruktion',
    quote:
      'Chiscript helped us re-architect our core banking platform from the ground up, cutting transaction processing time dramatically while giving leadership real-time visibility.',
    author: 'Daniel Ortiz',
    role: 'KONSTRUKTION — CTO',
    companyTag: 'KN',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop',
    storyTag: 'SUCCESS STORY',
    storyTitle: 'Core Platform Modernization Cuts Processing Time for Konstruktion',
    metricValue: '42%',
    metricLabel: 'reduction in transaction processing time within two release cycles.',
  },
  {
    id: 'metamex',
    quote:
      'The team embedded with ours for months, not weeks. That depth of partnership is why the blockchain integration actually stuck after they left.',
    author: 'Priya Nandan',
    role: 'META MEX — COO',
    companyTag: 'MM',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    storyTag: 'SUCCESS STORY',
    storyTitle: 'Blockchain Integration Sticks Long After Rollout',
    metricValue: '3.1x',
    metricLabel: 'ROI realized on the digital transformation program within 18 months.',
  },
]

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: 'hex', name: 'HEX Fond' },
  { id: 'mtgox', name: 'MTGox' },
  { id: 'savex', name: 'Savex Bank' },
  { id: 'konstruktion', name: 'KONSTRUKTION' },
  { id: 'coinbasee', name: 'Cooinbasee' },
  { id: 'metamex', name: 'Meta Mex' },
]
