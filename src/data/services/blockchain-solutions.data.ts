import type { ServiceDetailConfig } from '@app-types/index'

export const BLOCKCHAIN_SERVICE: ServiceDetailConfig = {
  slug: 'blockchain-solutions',
  hero: {
    eyebrow: 'SERVICES',
    title: 'Blockchain Solutions',
    ctaLabel: 'Free Consultation',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
  },
  approach: {
    eyebrow: 'OUR PHILOSOPHY',
    heading: 'Secure-by-Design Development Approach',
    paragraph:
      'We thoroughly assess your current infrastructure, taking into account scalability needs, regulatory requirements, and long-term maintainability. Our dedicated team supports you through every stage of the build and significant deployment milestones.',
    accordionItems: [
      {
        id: 'audited-contracts',
        title: 'Audited Smart Contracts',
        description:
          'Every contract we ship passes independent security audits before it touches mainnet — no exceptions.',
      },
      {
        id: 'chain-agnostic',
        title: 'Chain-Agnostic Engineering',
        description:
          "We build on the network that fits your use case, not the one we're most comfortable with.",
      },
      {
        id: 'compliance-aware',
        title: 'Compliance-Aware by Default',
        description:
          'AML/KYC and regulatory considerations are built into the architecture from day one, not bolted on afterward.',
      },
    ],
    tags: [
      'Smart contract development',
      'Tokenization',
      'DeFi architecture',
      'Wallet integration',
      'Blockchain audits',
    ],
  },
  vision: {
    eyebrow: 'BUILDING FOR SCALE',
    heading: 'Achieving Your Blockchain Vision',
    paragraph:
      "Planning for adoption is essential to your protocol's long-term success. At TheHiveCall, our experienced team collaborates with you to identify your product goals and crafts a tailored, comprehensive strategy to help you achieve them with confidence.",
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
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
          'Schedule a 30-minute call with our blockchain engineer to discuss your protocol goals and how we can help. This call also outlines who we are and our process.',
      },
      {
        id: 'organized-meeting',
        number: '02',
        title: 'Organized Meeting',
        description:
          "Meet with our team to gather the necessary data for your Architecture Plan. We'll discuss your chain, tokenomics, and integration needs.",
      },
      {
        id: 'plan-meeting',
        number: '03',
        title: 'Plan Meeting',
        description:
          'Our engineer will present your personalized technical architecture, ensuring it aligns with your roadmap, and provide clear implementation steps.',
      },
      {
        id: 'implementation',
        number: '04',
        title: 'Implementation',
        description:
          "Your engineering team will send a copy of your architecture with a deployment plan. We'll build, audit, and manage these, keeping you updated.",
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
    headingHighlight: 'Ships Securely',
    subtitle: 'We are Transparent Like that. No Gimmicks.',
    buttonLabel: 'Schedule a Call',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'TheHiveCall blockchain engineers reviewing a smart contract audit',
  },
}
