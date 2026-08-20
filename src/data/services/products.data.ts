import type { ServiceDetailConfig } from '@app-types/index'

export const PRODUCTS_SERVICE: ServiceDetailConfig = {
  slug: 'products',
  hero: {
    eyebrow: 'SERVICES',
    title: 'Products',
    ctaLabel: 'Free Consultation',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop',
  },
  approach: {
    eyebrow: 'OUR PHILOSOPHY',
    heading: 'Modular, Ready-to-Deploy Approach',
    paragraph:
      'We thoroughly assess your current toolchain, taking into account integration needs, budget, and time-to-value. Our dedicated team supports you through every stage of rollout and significant adoption milestones.',
    accordionItems: [
      {
        id: 'configurable',
        title: 'Configurable, Not Custom-Built',
        description:
          'Our products are built to configure to your workflow in days, not months of custom development.',
      },
      {
        id: 'transparent-licensing',
        title: 'Transparent Licensing',
        description:
          'Simple, predictable pricing per seat or usage tier — no surprise add-on fees.',
      },
      {
        id: 'onboarding',
        title: 'Dedicated Onboarding Support',
        description:
          'A real person walks your team through setup and adoption, not just a help-center article.',
      },
    ],
    tags: [
      'Security dashboards',
      'Compliance management tools',
      'Digital asset management',
      'Analytics platforms',
      'Workflow automation',
    ],
  },
  vision: {
    eyebrow: 'READY TO DEPLOY',
    heading: 'Achieving Your Rollout Vision',
    paragraph:
      "Planning for adoption is essential to your team's long-term productivity. At Chiscript, our experienced team collaborates with you to identify your workflow goals and crafts a tailored, comprehensive rollout plan to help you achieve them with confidence.",
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
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
          'Schedule a 30-minute call with our product specialist to discuss your workflow and how we can help. This call also outlines who we are and our process.',
      },
      {
        id: 'organized-meeting',
        number: '02',
        title: 'Organized Meeting',
        description:
          "Meet with our team to gather the necessary data for your Rollout Plan. We'll discuss your team size, tools, and integration needs.",
      },
      {
        id: 'plan-meeting',
        number: '03',
        title: 'Plan Meeting',
        description:
          'Our specialist will present your personalized rollout plan, ensuring it aligns with your timeline, and provide clear onboarding steps.',
      },
      {
        id: 'implementation',
        number: '04',
        title: 'Implementation',
        description:
          "Your onboarding team will send a copy of your plan with a configuration checklist. We'll deploy and support these, keeping you updated.",
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
    headingHighlight: 'Fits Your Workflow',
    subtitle: 'We are Transparent Like that. No Gimmicks.',
    buttonLabel: 'Schedule a Call',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'A Chiscript product specialist onboarding a client team',
  },
}
