import type { IndustryOverviewCard } from '@app-types/index'

export const INDUSTRIES_HERO = {
  eyebrow: 'INDUSTRIES',
  headingPrefix: 'One Standard of Excellence, ',
  headingAccent: 'Six Industries',
  subtitle:
    'From core banking to critical infrastructure, we bring the same rigor, security-first thinking, and hands-on partnership to every sector we serve.',
}

export const INDUSTRY_CARDS: IndustryOverviewCard[] = [
  {
    id: 'banking',
    slug: 'banking-finance',
    title: 'Banking & Finance',
    tagline: 'Securing transactions and modernizing core banking systems.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop',
    size: 'large',
  },
  {
    id: 'government',
    slug: 'government-public-sector',
    title: 'Government & Public Sector',
    tagline: 'Modern, citizen-first digital services for public institutions.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    title: 'Healthcare',
    tagline: 'Protecting patient data and powering modern care.',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 'telecom',
    slug: 'telecommunications',
    title: 'Telecommunications',
    tagline: 'Resilient networks and secure infrastructure at scale.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 'energy',
    slug: 'energy-utilities',
    title: 'Energy & Utilities',
    tagline: 'Securing critical infrastructure and modernizing the grid.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 'education',
    slug: 'education',
    title: 'Education',
    tagline: 'Secure, modern digital learning infrastructure.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },

   {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'E-commerce & Retail',
    tagline: 'Building secure, scalable digital commerce and retail experiences.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },

  {
    id: 'beauty',
    slug: 'beauty-personal-care',
    title: 'Beauty & Personal Care',
    tagline: 'Digital solutions that elevate beauty brands, customer experiences, and commerce.',
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },

  {
    id: 'real-estate',
    slug: 'real-estate-construction',
    title: 'Real Estate & Construction',
    tagline: 'Modern platforms for property management, development, and construction operations.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    size: 'small',
  },
]

export const INDUSTRIES_TICKER = [
  '40+ Financial Institutions Served',
  '500K+ Patient Records Secured',
  '10M+ Telecom Subscribers Supported',
  '20+ Utility Providers Served',
  '50+ Educational Institutions Trained',
  '15+ Government Agencies Served',
]

export const INDUSTRIES_CTA = {
  heading: "Don't See Your Industry Listed?",
  subheading:
    "Our approach translates across sectors. Tell us about your challenge and we'll show you how.",
}
