import type { DifferenceCard } from '@app-types/index'
import { SITE_CONFIG } from '@config/site.config'

export const CAREERS_HERO = {
  eyebrow: 'CAREERS',
  headingPrefix: 'Build Your Career in ',
  headingAccent: 'Technology',
  headingSuffix: ' That Makes an Impact',
  image:
    'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?q=80&w=2000&auto=format&fit=crop',
}

export const CULTURE_SECTION = {
  eyebrow: 'OUR CULTURE',
  headingPrefix: 'Grow, ',
  headingAccent: 'Create',
  headingSuffix: ' and Make an Impact',
  paragraphs: [
    `At ${SITE_CONFIG.name}, we believe great technology starts with great people.`,
    'We create an environment where curiosity, collaboration, and continuous learning are encouraged. Our team members have the opportunity to work on meaningful projects while developing their technical, creative, and leadership skills.',
    'We value ownership, open communication, and independent thinking. Everyone is encouraged to share ideas, challenge assumptions, and contribute to better solutions.',
    `Whether you're an experienced professional or building your career, ${SITE_CONFIG.name} provides an environment where you can learn, contribute, and grow.`,
  ],
}

export const AWARDS_CTA = {
  eyebrow: 'PEOPLE & CULTURE',
  heading: 'A Workplace Built for Growth',
  paragraph:
    `We believe our strongest advantage is our people. ${SITE_CONFIG.name} is committed to creating a supportive, inclusive, and collaborative environment where talented professionals can do their best work.`,
  buttonLabel: 'View Open Positions',
  badgeTitle: 'People First',
  badgeYear: '2026',
  image:
    'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?q=80&w=1200&auto=format&fit=crop',
}

export const DIFFERENCE_SECTION = {
  eyebrow: `THE ${SITE_CONFIG.name.toUpperCase()} DIFFERENCE`,
  headingPrefix: 'More Than a ',
  headingAccent: 'Workplace',
  headingSuffix: ' — A Team Built to Grow',
}

export const DIFFERENCE_CARDS: DifferenceCard[] = [
  {
    id: 'people-first',
    icon: 'heart',
    title: 'People First',
    description:
      'We create a respectful and collaborative environment where every team member is valued, heard, and empowered to contribute.',
  },
  {
    id: 'growth',
    icon: 'rocket',
    title: 'Continuous Growth',
    description:
      'Learn new technologies, develop your skills, and take on meaningful challenges that support your personal and professional growth.',
  },
  {
    id: 'innovation',
    icon: 'coins',
    title: 'Innovation & Ownership',
    description:
      'Bring your ideas to the table, solve challenging problems, and take ownership of the solutions you help create.',
  },
  {
    id: 'wellbeing',
    icon: 'party',
    title: 'Work-Life Balance',
    description:
      'We support sustainable performance through flexibility, teamwork, professional development, and a healthy working environment.',
    highlighted: true,
  },
]

export const OPEN_POSITIONS_CTA = {
  eyebrow: 'JOIN OUR TEAM',
  headingPrefix: 'Build the Future with ',
  headingAccent: SITE_CONFIG.name,
  paragraph:
    'We are always looking for talented, curious, and motivated professionals who want to solve meaningful problems and build innovative technology. Explore opportunities to grow your career while making a real impact.',
  positions: [
    'Software Engineer',
    'Cybersecurity Specialist',
    'Fintech & Payments Engineer',
    'Product Designer (UI/UX)',
    'Cloud & DevOps Engineer',
    'Technology Consultant',
  ],
}