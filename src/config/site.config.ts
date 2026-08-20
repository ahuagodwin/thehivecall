export const SITE_CONFIG = {
  name: 'Chiscript',
  legalName: 'Chiscript Technologies Ltd',
  tagline: 'Empowering Businesses Through Secure, Innovative Technology',
  email: 'info@chiscript.com',
  phone: '+234 803 800 8808',
  callNumber: '+234 803 800 8808',
  address: {
    city: 'Port Harcourt,',
    line: 'Rivers State, Nigeria',
  },
  socials: {
    x: 'https://x.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
  },
  copyright: '© 2026 CHISCRIPT TECHNOLOGIES LTD. ALL RIGHTS RESERVED',
} as const

export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL ?? '/api',
  timeoutMs: 8000,
} as const
