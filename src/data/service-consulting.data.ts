import type { AccordionItem, ProcessStep } from '@app-types/index'
import { REVIEWS, TESTIMONIALS_HERO } from './testimonials.data'

export const SERVICE_DETAIL_HERO = {
  eyebrow: 'SERVICES',
  title: 'IT Consultancy',
  ctaLabel: 'Free Consultation',
  image:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop',
}

export const APPROACH_SECTION = {
  eyebrow: 'OUR PHILOSOPHY',
  heading: 'Interactive Advisory Approach',
  paragraph:
    'We thoroughly assess your current technology landscape, taking into account both short- and long-term objectives, team dynamics, and evolving priorities. Our dedicated team supports you through every stage of the engagement and significant project milestones.',
  accordionItems: [
    {
      id: 'fixed-fee',
      title: 'Fixed-Fee Engagements',
      description:
        'Transparent, predictable pricing with no hidden costs or hourly surprises — you know exactly what you\u2019re paying for from day one.',
    },
    {
      id: 'vendor-neutral',
      title: 'Vendor-Neutral Advice',
      description:
        'We recommend the right tools and platforms for your needs, not the ones that pay us the biggest referral fee.',
    },
    {
      id: 'no-salespeople',
      title: 'Professionals Only, No Salespeople',
      description:
        'Every conversation is with a senior engineer or consultant — never a salesperson working off commission.',
    },
  ] as AccordionItem[],
  tags: [
    'Cloud migration',
    'System integration',
    'Technology audits',
    'Vendor selection',
    'Digital transformation roadmaps',
  ],
}

export const VISION_SPLIT_CTA = {
  eyebrow: 'PLANNING FOR SCALE',
  heading: 'Achieving Your Vision',
  paragraph:
    "Planning for growth is essential to your organization's long-term success. At Chiscript, our experienced team collaborates with you to identify your technology goals and crafts a tailored, comprehensive strategy to help you achieve them with confidence.",
  image:
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
}

export const PROCESS_SECTION = {
  eyebrow: 'OUR PROCESS',
  headingPrefix: 'How Can Our Team Help You to Reach ',
  headingAccent: 'Your Goals',
  ctaLabel: 'Free Consultation',
  steps: [
    {
      id: 'learning',
      number: '01',
      title: 'Learning About You',
      description:
        'Schedule a 30-minute call with our professional to discuss your goals and how we can help. This phone or Zoom call also outlines who we are and our process.',
    },
    {
      id: 'organized-meeting',
      number: '02',
      title: 'Organized Meeting',
      description:
        "Meet with our team to gather the necessary data for your Technology Roadmap. We'll discuss your systems, infrastructure, security posture, and goals.",
    },
    {
      id: 'plan-meeting',
      number: '03',
      title: 'Plan Meeting',
      description:
        'Our consultant will present your personalized technology roadmap, ensuring it aligns with your evolving needs and goals, and provide clear steps to help you reach your objectives.',
    },
    {
      id: 'implementation',
      number: '04',
      title: 'Implementation',
      description:
        "Your consultant will send a copy of your roadmap with an actionable list of recommendations. We'll implement and manage these, keeping you updated.",
    },
  ] as ProcessStep[],
}

export const CLIENTS_SAY_CTA = {
  eyebrow: 'TESTIMONIALS',
  headingPrefix: 'See What ',
  headingAccent: 'Our Clients',
  headingSuffix: ' Are Saying',
  buttonLabel: 'Read All Testimonials',
  googleScore: TESTIMONIALS_HERO.googleScore,
  googleLabel: TESTIMONIALS_HERO.googleLabel,
  reviews: REVIEWS,
}

export const SERVICE_WHY_US_OVERLAY = {
  eyebrow: 'WHY US?',
  headingPrefix: "You'll Know What ",
  headingHighlight: 'Drives Outcomes',
  subtitle: 'We are Transparent Like that. No Gimmicks.',
  buttonLabel: 'Schedule a Call',
  image:
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop',
}
