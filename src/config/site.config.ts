export const SITE_CONFIG = {
  name: 'The Hive Call',
  legalName: 'The Hive Call LLC',
  tagline: 'Transforming Ideas Through Secure, Innovative Technology',
  email: 'info@thehivecall.com',
  phone: '+2348138885517',
  callNumber: '+2348138885517',
  address: {
    city: 'Atlanta,',
    line: 'Georgia, USA',
  },
  socials: {
    x: 'https://x.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
  },
  copyright: '© 2026 THE HIVE CALL LLC. ALL RIGHTS RESERVED',
} as const;

export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api',
  timeoutMs: 8000,
} as const
