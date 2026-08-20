import type { ServiceDetailConfig } from '@app-types/index'

export const CYBERSECURITY_SERVICE: ServiceDetailConfig = {
  slug: 'cybersecurity',
  hero: {
    eyebrow: 'SERVICES',
    title: 'Cybersecurity',
    ctaLabel: 'Free Consultation',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
  },
  approach: {
    eyebrow: 'OUR PHILOSOPHY',
    heading: 'Proactive Defense-in-Depth Approach',
    paragraph:
      'We thoroughly assess your current security posture, taking into account external threats, internal vulnerabilities, compliance requirements, and evolving risks. Our dedicated team supports you through every stage of the engagement and significant security milestones.',
    accordionItems: [
      {
        id: 'monitoring',
        title: '24/7 Threat Monitoring',
        description:
          'Round-the-clock detection and response from our security operations team, so incidents are contained before they become breaches.',
      },
      {
        id: 'compliance',
        title: 'Compliance-First Methodology',
        description:
          'Every engagement is mapped against relevant standards — ISO 27001, SOC 2, PCI DSS — so your security posture and your audits move together.',
      },
      {
        id: 'no-fear',
        title: 'No Fear-Mongering, Just Facts',
        description:
          'We report real risk in plain language, prioritized by actual business impact, not vendor scare tactics.',
      },
    ],
    tags: [
      'Penetration testing',
      'Security audits',
      'Incident response',
      'Identity & access management',
      'Zero trust architecture',
    ],
  },
  vision: {
    eyebrow: 'PREPARING FOR THREATS',
    heading: 'Achieving Your Security Vision',
    paragraph:
      "Planning for resilience is essential to your organization's long-term security. At TheHiveCall, our experienced team collaborates with you to identify your risk landscape and crafts a tailored, comprehensive strategy to help you defend it with confidence.",
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
  },
  process: {
    eyebrow: 'OUR PROCESS',
    headingPrefix: 'How Can Our Team Help You to Reach Your ',
    headingAccent: 'Security Goals',
    ctaLabel: 'Free Consultation',
    steps: [
      {
        id: 'learning',
        number: '01',
        title: 'Learning About You',
        description:
          'Schedule a 30-minute call with our security professional to discuss your risk landscape and how we can help. This call also outlines who we are and our process.',
      },
      {
        id: 'organized-meeting',
        number: '02',
        title: 'Organized Meeting',
        description:
          "Meet with our team to gather the necessary data for your Security Assessment. We'll discuss your infrastructure, applications, and existing controls.",
      },
      {
        id: 'plan-meeting',
        number: '03',
        title: 'Plan Meeting',
        description:
          'Our analyst will present your personalized security roadmap, ensuring it aligns with your risk tolerance and compliance needs, and provide clear remediation steps.',
      },
      {
        id: 'implementation',
        number: '04',
        title: 'Implementation',
        description:
          "Your security team will send a copy of your roadmap with a prioritized list of fixes. We'll implement and monitor these, keeping you updated.",
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
    headingHighlight: 'Closes Gaps',
    subtitle: 'We are Transparent Like that. No Gimmicks.',
    buttonLabel: 'Schedule a Call',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
    imageAlt: 'TheHiveCall security analysts reviewing a client\u2019s risk assessment',
  },
}
