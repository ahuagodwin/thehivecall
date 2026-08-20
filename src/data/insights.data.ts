import type { InsightArticle } from "@/types";

export const INSIGHTS_HERO = {
  eyebrow: 'INSIGHTS',
  headingPrefix: 'Ideas That ',
  headingAccent: 'Drive',
  headingSuffix: ' Innovation and Business Growth',
};

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'digital-security',
    tag: 'CYBERSECURITY',
    title: 'Building a Stronger Digital Security Strategy for Modern Businesses',
    image:
      'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'fintech',
    tag: 'FINTECH',
    title: 'The Future of Digital Finance: Technology, Security and Innovation',
    isReportCover: true,
    href: '#',
  },
  {
    id: 'digital-transformation',
    tag: 'DIGITAL TRANSFORMATION',
    title: 'How Businesses Can Turn Technology Into a Competitive Advantage',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?q=80&w=900&auto=format&fit=crop',
    href: '#',
  },
];