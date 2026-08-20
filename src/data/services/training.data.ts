import type { ServiceDetailConfig } from '@app-types/index'

export const TRAINING_SERVICE: ServiceDetailConfig = {
  slug: 'training-capacity-building',
  hero: {
    eyebrow: 'SERVICES',
    title: 'Training & Capacity Building',
    ctaLabel: 'Free Consultation',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop',
  },
  approach: {
    eyebrow: 'OUR PHILOSOPHY',
    heading: 'Hands-On Learning Approach',
    paragraph:
      "We thoroughly assess your team's current skill gaps, taking into account role requirements, technology stack, and long-term career growth. Our dedicated team supports you through every stage of the learning journey and significant certification milestones.",
    accordionItems: [
      {
        id: 'practitioner-led',
        title: 'Practitioner-Led Curriculum',
        description:
          'Every course is taught by engineers and consultants who do this work daily, not full-time trainers reading slides.',
      },
      {
        id: 'hands-on-labs',
        title: 'Hands-On Labs, Not Just Theory',
        description:
          'Learners build real projects in real environments — cybersecurity labs, blockchain testnets, live codebases.',
      },
      {
        id: 'certification-aligned',
        title: 'Certification-Aligned Tracks',
        description:
          'Programs map directly to recognized industry certifications, so learning translates into credentials.',
      },
    ],
    tags: [
      'Cybersecurity bootcamps',
      'Software development training',
      'Blockchain fundamentals',
      'IT certification prep',
      'Corporate upskilling',
    ],
  },
  vision: {
    eyebrow: 'INVESTING IN PEOPLE',
    heading: "Achieving Your Team's Potential",
    paragraph:
      "Planning for capability is essential to your organization's long-term success. At Chiscript, our experienced team collaborates with you to identify your skill gaps and crafts a tailored, comprehensive training strategy to help you close them with confidence.",
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
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
          "Schedule a 30-minute call with our training lead to discuss your team's goals and how we can help. This call also outlines who we are and our process.",
      },
      {
        id: 'organized-meeting',
        number: '02',
        title: 'Organized Meeting',
        description:
          "Meet with our team to gather the necessary data for your Training Plan. We'll discuss your team's current skills, tools, and objectives.",
      },
      {
        id: 'plan-meeting',
        number: '03',
        title: 'Plan Meeting',
        description:
          "Our lead will present your personalized curriculum, ensuring it aligns with your team's schedule and goals, and provide clear learning milestones.",
      },
      {
        id: 'implementation',
        number: '04',
        title: 'Implementation',
        description:
          "Your training lead will send a copy of your curriculum with a session schedule. We'll deliver and track these, keeping you updated.",
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
    headingHighlight: 'Builds Capability',
    subtitle: 'We are Transparent Like that. No Gimmicks.',
    buttonLabel: 'Schedule a Call',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'A Chiscript trainer leading a hands-on workshop',
  },
}
