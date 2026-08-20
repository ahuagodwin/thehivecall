import type { ServiceDetailConfig } from '@app-types/index'

export const FINANCIAL_SERVICES_SERVICE: ServiceDetailConfig = {
  slug: 'financial-services-investment',
  hero: {
    eyebrow: 'SERVICES',
    title: 'Financial Services & Investment',
    ctaLabel: 'Free Consultation',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop',
  },
  approach: {
    eyebrow: 'OUR PHILOSOPHY',
    heading: 'Data-Driven Investment Approach',
    paragraph:
      'We thoroughly assess your current financial position, taking into account risk tolerance, growth objectives, and market conditions. Our dedicated team supports you through every stage of planning and significant investment milestones.',
    accordionItems: [
      {
        id: 'fiduciary',
        title: 'Fiduciary Advisory Standard',
        description:
          "We're legally and ethically bound to act in your best interest — not to sell you the product with the biggest commission.",
      },
      {
        id: 'diversified',
        title: 'Diversified Portfolio Strategy',
        description:
          'Every recommendation spans multiple asset classes, including digital assets, to reduce concentration risk.',
      },
      {
        id: 'no-hidden-fees',
        title: 'No Hidden Fee Structures',
        description:
          'One transparent fee schedule, disclosed upfront, with no surprise charges buried in the fine print.',
      },
    ],
    tags: [
      'Investment advisory',
      'Portfolio management',
      'Risk assessment',
      'Digital asset strategy',
      'Financial planning',
    ],
  },
  vision: {
    eyebrow: 'PREPARING FOR YOUR FUTURE',
    heading: 'Achieving Your Financial Vision',
    paragraph:
      'Planning for growth is essential to your long-term financial well-being. At Chiscript, our experienced team collaborates with you to identify your investment goals and crafts a tailored, comprehensive strategy to help you achieve them with confidence.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
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
          'Schedule a 30-minute call with our advisor to discuss your goals and how we can help. This phone or Zoom call also outlines who we are and our process.',
      },
      {
        id: 'organized-meeting',
        number: '02',
        title: 'Organized Meeting',
        description:
          "Meet with our team to gather the necessary data for your Financial Plan. We'll discuss your finances, lifestyle, and goals, including investments, assets, expenses, and income.",
      },
      {
        id: 'plan-meeting',
        number: '03',
        title: 'Plan Meeting',
        description:
          'Our advisor will present your personalized financial plan, ensuring it aligns with your evolving needs and goals, and provide clear steps to help you reach your objectives.',
      },
      {
        id: 'implementation',
        number: '04',
        title: 'Implementation',
        description:
          "Your advisor will send a copy of your plan with an actionable list of recommendations. We'll implement and manage these, keeping you updated.",
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
    headingHighlight: 'Builds Wealth',
    subtitle: 'We are Transparent Like that. No Gimmicks.',
    buttonLabel: 'Schedule a Call',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'A Chiscript advisor reviewing an investment plan with a client',
  },
}
