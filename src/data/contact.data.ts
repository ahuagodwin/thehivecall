import type { ContactInfoItem, OfficeLocation } from '@app-types/index'
import { SITE_CONFIG } from '@config/site.config'

export const CONTACT_HERO = {
  eyebrow: 'CONTACT US',
  headingPrefix: "Let's ",
  headingAccent: 'Connect',
  subtitle: 'We look forward to learning about your technology and digital transformation goals.',
}

export const CONTACT_INFO_ITEMS: ContactInfoItem[] = [
  {
    id: 'location',
    icon: 'pin',
    label: SITE_CONFIG.address.city,
    valueLines: [SITE_CONFIG.address.line],
  },
  {
    id: 'phone',
    icon: 'phone',
    label: 'Our Phone',
    valueLines: [SITE_CONFIG.phone],
  },
  {
    id: 'email',
    icon: 'mail',
    label: 'Our Email',
    valueLines: [SITE_CONFIG.email],
  },
]

export const CONTACT_FORM_COPY = {
  eyebrow: 'CONTACT US',
  heading: 'Get in Touch',
  subtitle: "Have a question or feedback?\nFill out the form below, and we'll respond promptly!",
  submitLabel: 'Submit',
  image:
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
}

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'hq',
    tag: 'HEADQUARTERS',
    isHeadquarters: true,
    name: SITE_CONFIG.legalName,
    addressLines: [SITE_CONFIG.address.city, SITE_CONFIG.address.line],
    directionsUrl: 'https://maps.google.com/?q=Port+Harcourt,+Rivers+State,+Nigeria',
  },
  {
    id: 'lagos',
    tag: 'OFFICE',
    name: 'Lagos',
    addressLines: ['Lagos, Nigeria', 'Victoria Island, Lagos'],
    phone: SITE_CONFIG.phone,
    directionsUrl: 'https://maps.google.com/?q=Victoria+Island,+Lagos,+Nigeria',
  },
  {
    id: 'london',
    tag: 'OFFICE',
    name: 'London',
    addressLines: ['London, United Kingdom', 'Canary Wharf, London'],
    phone: SITE_CONFIG.phone,
    directionsUrl: 'https://maps.google.com/?q=Canary+Wharf,+London,+UK',
  },
]

export const SCHEDULE_CTA = {
  eyebrow: 'FREE CONSULTATION',
  heading: 'Schedule a Free Consultation at Your Preferred Time',
  buttonLabel: 'Free Consultation',
  image:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop',
}
