import type { ContactInfoItem, OfficeLocation } from '@app-types/index'
import { SITE_CONFIG } from '@config/site.config'

export const CONTACT_HERO = {
  eyebrow: 'GET IN TOUCH',
  headingPrefix: "Let's ",
  headingAccent: 'Build Together',
  subtitle:
    'Tell us about your business goals, technology challenges, or next big idea. Our team is ready to help you turn them into practical digital solutions.',
};

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
  eyebrow: 'LETS TALK',
  heading: 'Start a Conversation',
  subtitle:
    "Have a project, idea, or technology challenge in mind?\nTell us what you need, and our team will get back to you shortly.",
  submitLabel: 'Send Message',
  image:
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?q=80&w=1400&auto=format&fit=crop',
};

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
    id: 'georgia',
    tag: 'OFFICE',
    name: 'Georgia',
    addressLines: ['Georgia, USA', 'Atlanta, Georgia'],
    phone: SITE_CONFIG.phone,
    directionsUrl: 'https://maps.google.com/?q=Atlanta,+Georgia,+USA',
  },
  {
    id: 'london',
    tag: 'OFFICE',
    name: 'London',
    addressLines: ['London, United Kingdom', 'Canary Wharf, London'],
    phone: SITE_CONFIG.phone,
    directionsUrl: 'https://maps.google.com/?q=Canary+Wharf,+London,+UK',
  },
];

export const SCHEDULE_CTA = {
  eyebrow: 'LET’S WORK TOGETHER',
  heading: 'Let’s Build the Right Technology Solution for Your Business',
  buttonLabel: 'Talk to Our Experts',
  image:
    'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?q=80&w=1400&auto=format&fit=crop',
};
