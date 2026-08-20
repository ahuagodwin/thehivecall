import type { ServiceDetailConfig } from '@app-types/index'

export const SOFTWARE_DEVELOPMENT_SERVICE: ServiceDetailConfig = {
  slug: 'software-development',
  hero: {
    eyebrow: 'SERVICES',
    title: 'Software Development',
    ctaLabel: 'Free Consultation',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop',
  },
  approach: {
    eyebrow: 'OUR PHILOSOPHY',
    heading: 'Agile, Test-Driven Build Approach',
    paragraph:
      'We thoroughly assess your current systems, taking into account user needs, technical debt, and long-term scalability. Our dedicated team supports you through every stage of the build and significant release milestones.',
    accordionItems: [
      {
        id: 'fixed-sprint',
        title: 'Fixed-Sprint Delivery',
        description:
          'Work ships in predictable two-week increments, so you always know what\u2019s coming next and when.',
      },
      {
        id: 'code-ownership',
        title: 'Code You Actually Own',
        description:
          'Full source code, documentation, and IP rights transfer to you — no vendor lock-in, ever.',
      },
      {
        id: 'qa-built-in',
        title: 'QA Built Into Every Sprint',
        description:
          'Automated testing and code review happen continuously, not as an afterthought before launch.',
      },
    ],
    tags: [
      'Web & mobile apps',
      'API development',
      'Legacy system modernization',
      'Cloud-native architecture',
      'DevOps & CI/CD',
    ],
  },
  vision: {
    eyebrow: 'BUILDING FOR GROWTH',
    heading: 'Achieving Your Product Vision',
    paragraph:
      "Planning for scale is essential to your product's long-term success. At Chiscript, our experienced team collaborates with you to identify your product goals and crafts a tailored, comprehensive strategy to help you achieve them with confidence.",
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
  },
  process: {
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
          'Schedule a 30-minute call with our engineering lead to discuss your product goals and how we can help. This call also outlines who we are and our process.',
      },
      {
        id: 'organized-meeting',
        number: '02',
        title: 'Organized Meeting',
        description:
          "Meet with our team to gather the necessary data for your Technical Spec. We'll discuss your users, requirements, and existing systems.",
      },
      {
        id: 'plan-meeting',
        number: '03',
        title: 'Plan Meeting',
        description:
          'Our lead will present your personalized development plan, ensuring it aligns with your timeline, and provide clear delivery milestones.',
      },
      {
        id: 'implementation',
        number: '04',
        title: 'Implementation',
        description:
          "Your engineering team will send a copy of your plan with a sprint schedule. We'll build, test, and ship these, keeping you updated.",
      },
    ],
  },
  clientsSay: {
    eyebrow: 'TESTIMONIALS',
    headingPrefix: 'See What ',
    headingAccent: 'Our Clients',
    headingSuffix: ' Are Saying',
    buttonLabel: 'Read All Testimonials',
  },
  whyUs: {
    eyebrow: 'WHY US?',
    headingPrefix: "You'll Know What ",
    headingHighlight: 'Ships On Time',
    subtitle: 'We are Transparent Like that. No Gimmicks.',
    buttonLabel: 'Schedule a Call',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'Chiscript engineers pairing on a software release',
  },
}
