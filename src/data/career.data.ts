import type { DifferenceCard } from '@app-types/index'
import { SITE_CONFIG } from '@config/site.config'

export const CAREERS_HERO = {
  eyebrow: 'CAREERS',
  headingPrefix: 'Get an Inside Look at ',
  headingAccent: 'Our Culture',
  headingSuffix: ' and Team',
  image:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop',
}

export const CULTURE_SECTION = {
  eyebrow: 'CULTURE & COMMUNITY',
  headingPrefix: 'We ',
  headingAccent: 'value',
  headingSuffix: ' our employees',
  paragraphs: [
    `At ${SITE_CONFIG.name}, we value our employees, community, industry peers, and students.`,
    'We believe in fostering lifelong learning, mentorship, and professional growth. Our collegial atmosphere encourages teamwork, where employees can leverage their technical and interpersonal skills to serve clients with care.',
    "Success here isn't driven by sales or commissions but by collaboration, independent thinking, and continuous improvement.",
    `We prioritize mutual respect, idea-sharing, and creativity—because every team member plays a vital role in our company's success. This is the culture that defines ${SITE_CONFIG.name}.`,
  ],
}

export const AWARDS_CTA = {
  eyebrow: 'AWARDS & RECOGNITION',
  heading: 'Outside Experts Agree – People Love it Here',
  paragraph: `${SITE_CONFIG.name} is consistently ranked as a top workplace—and not just overall, but also for women, the LGBTQ community, and underrepresented groups in tech. The biggest reason? Our people.`,
  buttonLabel: 'Open Positions',
  badgeTitle: 'Great Place To Work',
  badgeYear: '2025',
  image:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
}

export const DIFFERENCE_SECTION = {
  eyebrow: `THE ${SITE_CONFIG.name.toUpperCase()} DIFFERENCE`,
  headingPrefix: 'We Bring Our ',
  headingAccent: 'Heads and Hearts',
  headingSuffix: ' to Everything We Do',
}

export const DIFFERENCE_CARDS: DifferenceCard[] = [
  {
    id: 'people-first',
    icon: 'heart',
    title: 'People-First Culture',
    description:
      'Celebrate authenticity every day, as you engage, connect, and make an impact in your local team and community.',
  },
  {
    id: 'growth',
    icon: 'rocket',
    title: 'Personal Growth',
    description:
      'Stay curious and dream big. Customize your development with flexible, innovative options for learning, coaching, and mentoring.',
  },
  {
    id: 'pay',
    icon: 'coins',
    title: 'Performance Pay',
    description:
      "Earn competitive and equitable compensation that rewards your performance and allows you to share in the company's long-term success.",
  },
  {
    id: 'wellbeing',
    icon: 'party',
    title: 'Well-Being Focus',
    description:
      'Thrive holistically with robust, individualized benefits that support your emotional, mental, financial, physical, and social well-being.',
    highlighted: true,
  },
]

export const OPEN_POSITIONS_CTA = {
  eyebrow: 'OPEN POSITIONS',
  headingPrefix: 'Join the ',
  headingAccent: `${SITE_CONFIG.name} Family`,
  paragraph:
    'We are looking for smart, engaged, caring professionals who value client success and technical excellence equally. We offer the right candidates attractive benefits, a collegial, challenging work environment and uncommon opportunities for professional growth.',
  positions: [
    'Cybersecurity Analyst',
    'Blockchain Engineer',
    'Software Developer',
    'IT Consultant',
  ],
}