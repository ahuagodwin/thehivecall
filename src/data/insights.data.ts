import type { InsightArticle } from '@app-types/index'

export const INSIGHTS_HERO = {
  eyebrow: 'INSIGHTS',
  headingPrefix: 'Hear ',
  headingAccent: 'Directly',
  headingSuffix: ' From Chiscript Experts',
}

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'zero-trust',
    tag: 'CYBERSECURITY',
    title: 'Use Zero Trust Architecture to Maximize Your Security Posture',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'report-2025',
    tag: 'REPORT',
    title: 'State of Cybersecurity & Digital Trust',
    isReportCover: true,
    href: '#',
  },
  {
    id: 'cyber-threats',
    tag: 'ADVISE',
    title: 'How to Overcome the Impact of Emerging Cyber Threats',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
]
