import type { IndustryDetailConfig } from '@app-types/index'

export const GOVERNMENT_INDUSTRY: IndustryDetailConfig = {
  slug: 'government-public-sector',
  eyebrow: 'GOVERNMENT & PUBLIC SECTOR',
  title: 'Government & Public Sector',
  tagline: 'Modern, secure, citizen-first digital services for public institutions.',
  heroImage:
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop',
  stats: [
    { value: '15+', label: 'GOVERNMENT AGENCIES SERVED' },
    { value: '100%', label: 'DATA SOVEREIGNTY COMPLIANT' },
    { value: '24/7', label: 'CRITICAL SYSTEMS MONITORING' },
  ],
  challengesHeading: 'The Challenges Public Institutions Face Today',
  challenges: [
    {
      id: 'aging-infrastructure',
      title: 'Aging Public Infrastructure',
      description:
        "Many public systems run on outdated technology that's costly to maintain and vulnerable to attack. We modernize with continuity as the top priority.",
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'data-sovereignty',
      title: 'Data Sovereignty & Privacy',
      description:
        'Citizen data must stay protected and within jurisdiction. We architect systems that meet data residency and privacy requirements by design.',
      image:
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'limited-budgets',
      title: 'Limited Budgets, High Stakes',
      description:
        'Public sector projects demand accountability and value. We deliver phased, fixed-fee engagements that make every allocation count.',
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop',
    },
  ],
  capabilitiesHeading: 'What We Bring to Government & Public Sector',
  capabilities: [
    {
      id: 'digital-services',
      title: 'Digital Government Services',
      items: [
        'E-government portals',
        'Citizen identity systems',
        'Digital service delivery',
        'Case management systems',
      ],
    },
    {
      id: 'security-resilience',
      title: 'Security & Resilience',
      items: [
        'Critical infrastructure protection',
        'National data security standards',
        'Incident response planning',
        'Business continuity systems',
      ],
    },
    {
      id: 'transparency',
      title: 'Transparency & Efficiency',
      items: [
        'Public procurement platforms',
        'Budget & audit tracking tools',
        'Open data initiatives',
        'Process automation',
      ],
    },
  ],
  caseStudy: {
    quote: 'The team treated our constraints as design requirements, not excuses. That respect made all the difference.',
    author: 'Daniel Ortiz',
    role: 'KONSTRUKTION \u2014 CTO',
    metricValue: '42%',
    metricLabel: 'reduction in processing time within two release cycles.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop',
  },
  ctaHeading: 'Ready to Modernize Public Services?',
  ctaSubheading: "Let's talk about secure, citizen-first digital transformation.",
}
