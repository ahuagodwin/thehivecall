import type { IndustryDetailConfig } from '@app-types/index'
import { TESTIMONIALS } from '@data/home.data'

const hnStory = TESTIMONIALS[0]

export const HEALTHCARE_INDUSTRY: IndustryDetailConfig = {
  slug: 'healthcare',
  eyebrow: 'HEALTHCARE',
  title: 'Healthcare',
  tagline: 'Protecting patient data and powering the systems modern care depends on.',
  heroImage:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop',
  stats: [
    { value: '500K+', label: 'PATIENT RECORDS SECURED' },
    { value: 'HIPAA', label: 'COMPLIANT BY DESIGN' },
    { value: '99.9%', label: 'UPTIME FOR CARE TEAMS' },
  ],
  challengesHeading: 'The Challenges Healthcare Providers Face Today',
  challenges: [
    {
      id: 'patient-privacy',
      title: 'Patient Data Privacy',
      description:
        'Health data is among the most sensitive information there is. We build systems that protect it at every layer, from storage to transmission.',
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'interoperability',
      title: 'Interoperability Gaps',
      description:
        'Disconnected systems slow down care and create risk. We integrate EHRs, labs, and devices into one coherent, secure data flow.',
      image:
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'ransomware',
      title: 'Ransomware Targeting Care',
      description:
        'Healthcare is one of the most-targeted sectors for ransomware. We build layered defenses that keep critical systems running when it matters most.',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    },
  ],
  capabilitiesHeading: 'What We Bring to Healthcare',
  capabilities: [
    {
      id: 'clinical-systems',
      title: 'Clinical Systems',
      items: [
        'EHR integration',
        'Telehealth platforms',
        'Clinical decision support',
        'Medical device connectivity',
      ],
    },
    {
      id: 'data-security',
      title: 'Data Security & Compliance',
      items: [
        'HIPAA compliance audits',
        'Patient data encryption',
        'Access control systems',
        'Breach response planning',
      ],
    },
    {
      id: 'operational-efficiency',
      title: 'Operational Efficiency',
      items: [
        'Patient scheduling systems',
        'Revenue cycle automation',
        'Analytics dashboards',
        'Staff workflow tools',
      ],
    },
  ],
  caseStudy: {
    quote:
      'We wouldn\u2019t have gotten to where we are today without TheHiveCall. The team spent time understanding our infrastructure and where our vulnerabilities were.',
    author: hnStory.author,
    role: hnStory.role,
    metricValue: hnStory.metricValue,
    metricLabel: hnStory.metricLabel,
    image: hnStory.image,
  },
  ctaHeading: 'Ready to Secure Your Care Systems?',
  ctaSubheading: "Let's talk about protecting patient data without slowing down care.",
}
