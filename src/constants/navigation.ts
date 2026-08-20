import type { NavLink } from '@app-types/index'
import { paths } from './paths'

export const NAV_LINKS: NavLink[] = [
  {
    id: "home",
    label: "Home",
    href: paths.homeIndex,
  },
  {
    id: "services",
    label: "Services",
    href: paths.services,
    // children: [
    //   { label: "Cybersecurity", href: paths.cybersecurity },
    //   { label: "Blockchain Solutions", href: paths.blockchainSolutions },
    //   { label: "Software Development", href: paths.softwareDevelopment },
    //   { label: "IT Consultancy", href: paths.itConsultancy },
    //   { label: "Products", href: paths.products },
    //   { label: "Financial Services & Investment", href: paths.financialServicesInvestment },
    //   { label: "Training & Capacity Building", href: paths.trainingCapacityBuilding },
    // ],
  },
  {
    id: "industries",
    label: "Industries",
    href: paths.industries,
    // children: [
    //   { label: 'Banking & Finance', href: '/industries/banking-finance' },
    //   { label: 'Government & Public Sector', href: '/industries/government-public-sector' },
    //   { label: 'Healthcare', href: '/industries/healthcare' },
    //   { label: 'Telecommunications', href: '/industries/telecommunications' },
    //   { label: 'Energy & Utilities', href: '/industries/energy-utilities' },
    //   { label: 'Education', href: '/industries/education' },
    // ],
  },
  {
    id: "about",
    label: "About",
    href: paths.about,
    children: [
      { label: "Who We Are", href: paths.about },
      { label: "Our philosophy", href: paths.philosophy },
      { label: "Our team", href: paths.team },
      { label: "Careers", href: paths.careers },
    ],
  },
  {
    id: "insights",
    label: "Insights",
    href: paths.insights,
  },
  {
    id: "testimonial",
    label: "Testimonial",
    href: paths.testimonials,
  },
]

export const FOOTER_INDUSTRY_LINKS = [
  'Banking & Finance',
  'Government & Public Sector',
  'Healthcare',
  'Telecommunications',
  'Energy & Utilities',
  'Education',
]

export const FOOTER_SERVICE_LINKS = [
  'Cybersecurity',
  'Blockchain Solutions',
  'Software Development',
  'IT Consultancy',
  'Products',
  'Financial Services & Investment',
  'Training & Capacity Building',
]

export const FOOTER_QUICK_LINKS = [
  'Our philosophy',
  'Insights',
  'Success story',
  'Careers',
  'Our team',
]
