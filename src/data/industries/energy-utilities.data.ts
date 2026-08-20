import type { IndustryDetailConfig } from '@app-types/index'

export const ENERGY_UTILITIES_INDUSTRY: IndustryDetailConfig = {
  slug: 'energy-utilities',
  eyebrow: 'ENERGY & UTILITIES',
  title: 'Energy & Utilities',
  tagline: 'Securing critical infrastructure and modernizing the systems powering everyday life.',
  heroImage:
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
  stats: [
    { value: '20+', label: 'UTILITY PROVIDERS SERVED' },
    { value: 'OT/IT', label: 'SECURITY CONVERGENCE EXPERTISE' },
    { value: '24/7', label: 'GRID MONITORING SUPPORT' },
  ],
  challengesHeading: 'The Challenges Energy Providers Face Today',
  challenges: [
    {
      id: 'ot-it-convergence',
      title: 'OT/IT Convergence Risk',
      description:
        'As operational technology connects to IT networks, attack surfaces grow. We secure the convergence without disrupting operations.',
      image:
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'aging-grid',
      title: 'Aging Grid Infrastructure',
      description:
        'Much of the grid runs on infrastructure built decades ago. We modernize monitoring and control systems in phases that respect uptime requirements.',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'regulatory-pressure',
      title: 'Regulatory & Compliance Pressure',
      description:
        'Energy providers face strict regulatory oversight. We build compliance into monitoring and reporting systems from day one.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    },
  ],
  capabilitiesHeading: 'What We Bring to Energy & Utilities',
  capabilities: [
    {
      id: 'smart-grid',
      title: 'Smart Grid & Infrastructure',
      items: [
        'Smart grid deployment',
        'SCADA system modernization',
        'Renewable energy integration',
        'Grid monitoring platforms',
      ],
    },
    {
      id: 'critical-infra-security',
      title: 'Critical Infrastructure Security',
      items: [
        'OT/IT network segmentation',
        'Industrial control system security',
        'Threat detection for SCADA',
        'Incident response for utilities',
      ],
    },
    {
      id: 'operational-analytics',
      title: 'Operational Analytics',
      items: [
        'Predictive maintenance systems',
        'Energy usage analytics',
        'Outage management platforms',
        'Demand forecasting tools',
      ],
    },
  ],
  caseStudy: {
    quote: 'We finally have visibility across our OT and IT environments in one place.',
    author: 'Grace Adeyemi',
    role: 'REGIONAL UTILITY PROVIDER \u2014 DIRECTOR OF INFRASTRUCTURE',
    metricValue: '35%',
    metricLabel: 'reduction in unplanned outages within the first year of deployment.',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600&auto=format&fit=crop',
  },
  ctaHeading: 'Ready to Modernize Critical Infrastructure?',
  ctaSubheading: "Let's talk about securing the systems that power everyday life.",
}
