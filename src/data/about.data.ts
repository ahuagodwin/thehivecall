import type { StatItem, ValueItem, HistoryEra, QuoteItem } from '@app-types/index'
import { SITE_CONFIG } from '@config/site.config'

export const ABOUT_HERO = {
  eyebrow: 'WHO WE ARE',
  headingPrefix: 'Building the Future Through ',
  headingAccent: 'Technology',
  image:
    'https://images.pexels.com/photos/8112106/pexels-photo-8112106.jpeg?q=80&w=2000&auto=format&fit=crop',
}

export interface TwoToneStat extends StatItem {
  suffix?: string
}

export const ABOUT_TOP_STATS: TwoToneStat[] = [
  { id: 'projects', value: '100+', label: 'DIGITAL PROJECTS DELIVERED' },
  { id: 'industries', value: '30+', label: 'INDUSTRIES SUPPORTED' },
  { id: 'clients', value: '90%', label: 'CLIENT SATISFACTION & RETENTION' },
  { id: 'solutions', value: '50+', label: 'TECHNOLOGY SOLUTIONS DELIVERED' },
]

export const VALUES_SECTION = {
  eyebrow: 'OUR VALUES',
  headingPrefix: 'Technology Built on ',
  headingAccent: 'Trust',
  headingSuffix: ', Excellence & Innovation',
  paragraph:
    'We combine technical expertise, strategic thinking, and a deep understanding of our clients’ goals to deliver secure, practical, and scalable technology solutions that create lasting business value.',
}

export const VALUES: ValueItem[] = [
  {
    id: 'integrity',
    icon: 'shield',
    title: 'Integrity',
    description:
      'We operate with transparency, honesty, and accountability in every relationship and project.',
  },
  {
    id: 'innovation',
    icon: 'pie',
    title: 'Innovation',
    description:
      'We embrace emerging technologies and creative thinking to solve complex business challenges.',
  },
  {
    id: 'personalized',
    icon: 'layers',
    title: 'Client-Centered',
    description:
      'Every solution is tailored to the unique goals, challenges, and opportunities of our clients.',
  },
  {
    id: 'excellence',
    icon: 'star',
    title: 'Excellence',
    description:
      'We maintain high standards of quality, security, performance, and continuous improvement.',
  },
]

export const HISTORY_SECTION = {
  eyebrow: 'OUR JOURNEY',
  headingPrefix: 'Growing Through ',
  headingAccent: 'Innovation',
  image:
    'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?q=80&w=2000&auto=format&fit=crop',
}

export const HISTORY_ERAS: HistoryEra[] = [
  {
    id: 'foundation',
    year: '2018',
    badge: '2018',
    title: 'The Foundation',
    description:
      'TheHiveCall began with a vision to help businesses use technology more securely, efficiently, and strategically.',
  },
  {
    id: 'expansion',
    year: '2020',
    badge: '2020',
    title: 'Expanding Our Capabilities',
    description:
      'We expanded our expertise across software development, cybersecurity, technology consulting, and digital solutions.',
  },
  {
    id: 'fintech',
    year: '2023',
    badge: '2023',
    title: 'Fintech & Digital Innovation',
    description:
      'We strengthened our focus on fintech, financial technology, digital platforms, and secure solutions for modern businesses.',
  },
  {
    id: 'today',
    year: '2026',
    badge: '2026',
    title: 'Building What Comes Next',
    description:
      'Today, TheHiveCall LLC continues to help organizations transform ideas into secure, scalable, and innovative technology solutions.',
  },
]

export const WHY_US = {
  eyebrow: 'WHY CHOOSE US',
  headingPrefix: 'Your Goals. Our ',
  headingAccent: 'Technology Expertise',
  headingSuffix: '.',
  paragraph:
    'We combine strategic guidance with hands-on technical expertise to deliver solutions that solve real business problems. From software and cybersecurity to fintech and digital transformation, we work closely with your team to create secure, scalable, and practical outcomes.',
  buttonLabel: 'Talk to Our Experts',
  pillLinks: [
    'Cybersecurity',
    'Fintech & Finance',
    'Software Development',
    'Technology Consultancy',
  ],
}

export const ABOUT_QUOTE: QuoteItem = {
  quote:
    'Our mission is to help businesses turn technology into a strategic advantage through secure, innovative, and practical digital solutions.',
  author: 'TheHiveCall Team',
  role: 'THE HIVE CALL LLC',
  avatar:
    'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?q=80&w=200&auto=format&fit=crop',
}

export const ABOUT_CTA_IMAGE =
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?q=80&w=1200&auto=format&fit=crop'

export const ABOUT_REPORT_CARD = {
  year: '2026',
  title: 'Technology, Cybersecurity & Digital Innovation Insights',
  href: '/insights',
}

export const ABOUT_STRINGS = {
  legalName: SITE_CONFIG.legalName,
}