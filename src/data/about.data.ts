import type { StatItem, ValueItem, HistoryEra, QuoteItem } from '@app-types/index'
import { SITE_CONFIG } from '@config/site.config'

export const ABOUT_HERO = {
  eyebrow: 'WHO WE ARE',
  headingPrefix: 'A Trusted Partner Committed to Your ',
  headingAccent: 'Digital Success',
  image:
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop',
}

export interface TwoToneStat extends StatItem {
  suffix?: string
}

export const ABOUT_TOP_STATS: TwoToneStat[] = [
  { id: 'secured', value: '$250', suffix: 'M+', label: 'DIGITAL ASSETS SECURED' },
  { id: 'delivered', value: '$6', suffix: 'bn', label: 'SAVED FOR CLIENTS ANNUALLY' },
  { id: 'repeat', value: '90%', label: 'REPEAT CLIENTS OR REFERRALS' },
  { id: 'professionals', value: '120+', label: 'PROFESSIONALS' },
]

export const VALUES_SECTION = {
  eyebrow: 'VALUES',
  headingPrefix: 'We Operate with Unwavering ',
  headingAccent: 'Honesty',
  headingSuffix: ' & Integrity',
  paragraph:
    'We offer a deeply personalized approach, providing objective, secure, and reliable technology solutions, seamless implementation, and exclusive access to cutting-edge innovation, all designed to help clients reach their goals and build lasting digital resilience.',
}

export const VALUES: ValueItem[] = [
  {
    id: 'fiduciary',
    icon: 'shield',
    title: 'Fiduciary',
    description: "A commitment to acting in your best interest for long-term digital wellbeing.",
  },
  {
    id: 'integrated',
    icon: 'pie',
    title: 'Integrated',
    description:
      'Comprehensive technology services, tailored solutions, and exclusive access to emerging innovation.',
  },
  {
    id: 'personalized',
    icon: 'layers',
    title: 'Highly Personalized',
    description:
      'A customized approach driven by proactive ideas and strategic problem-solving.',
  },
  {
    id: 'experienced',
    icon: 'star',
    title: 'Experienced',
    description:
      'A highly dedicated team, supported by our extensive network of trusted professionals.',
  },
]

export const HISTORY_SECTION = {
  eyebrow: 'OUR HISTORY',
  headingPrefix: "Here's How We Got ",
  headingAccent: 'Started',
  image:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop',
}

export const HISTORY_ERAS: HistoryEra[] = [
  {
    id: '2014',
    year: '2014',
    badge: '2014',
    title: 'The Beginning',
    description:
      'Our story begins in 2014, when a small team of engineers founded Chiscript as a boutique cybersecurity consultancy.',
  },
  {
    id: '2018',
    year: '2018',
    badge: '2018',
    title: 'Expanding Our Reach',
    description:
      'By 2018, Chiscript had grown into a full technology consultancy, adding software development and IT advisory to our services.',
  },
  {
    id: '2021',
    year: '2021',
    badge: '2021',
    title: 'Entering Blockchain & Fintech',
    description:
      'In 2021, we launched our blockchain and financial services division, helping clients build secure, compliant digital-asset infrastructure.',
  },
  {
    id: '2024',
    year: '2024',
    badge: '2024',
    title: 'Going Global',
    description:
      'Today, Chiscript Technologies Ltd serves clients across banking, government, healthcare, and telecoms from offices spanning three continents.',
  },
]

export const WHY_US = {
  eyebrow: 'WHY US',
  headingPrefix: 'We Always Put ',
  headingAccent: 'Your Interests',
  headingSuffix: ' First',
  paragraph:
    'Driven by a relentless focus on "why," we integrate our services to uncover, design, and deliver the most impactful technology outcomes for you. Instead of relying on predefined processes, we take a hands-on approach—collaborating closely with your teams to craft secure, practical, end-to-end solutions tailored to your needs.',
  buttonLabel: 'Free Consultation',
  pillLinks: [
    'Cybersecurity',
    'Blockchain Solutions',
    'Software Development',
    'IT Consultancy',
  ],
}

export const ABOUT_QUOTE: QuoteItem = {
  quote:
    'Our purpose is to help businesses and individuals navigate the digital landscape with confidence, security, and innovation.',
  author: 'Chidi Ahia',
  role: 'CO-FOUNDER & CEO',
  avatar:
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
}

export const ABOUT_CTA_IMAGE =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop'

export const ABOUT_REPORT_CARD = {
  year: '2025',
  title: 'State of Cybersecurity & Digital Trust Report',
  href: '/insights',
}

export const ABOUT_STRINGS = {
  legalName: SITE_CONFIG.legalName,
}
