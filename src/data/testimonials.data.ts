import type { ReviewItem } from '@app-types/index'
import { CLIENT_LOGOS } from './home.data'

export const TESTIMONIALS_HERO = {
  eyebrow: 'CLIENT TESTIMONIALS',
  headingPrefix: 'What Our ',
  headingAccent: 'Clients Say',
  subtitle:
    'Discover how our technology solutions, consulting expertise, and strategic support help businesses solve challenges, improve operations, and achieve sustainable growth.',
  googleScore: '4.9',
  googleLabel: 'CLIENT REVIEWS',
};

export { CLIENT_LOGOS as TESTIMONIALS_CLIENT_LOGOS }

export const REVIEWS_SECTION = {
  eyebrow: 'CLIENT FEEDBACK',
  headingPrefix: 'Real ',
  headingAccent: 'Experiences',
  headingSuffix: ' From Businesses We Support',
};

export const REVIEWS: ReviewItem[] = [
  {
    id: 'michael',
    quote:
      'The team understood our business from the start and delivered a secure, reliable solution that improved the way we operate. Their technical expertise and attention to detail were exceptional.',
    author: 'Michael Adeyemi',
    role: 'FINTECH — CEO',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'sarah',
    quote:
      'Working with the team was a great experience. They turned our ideas into a practical digital solution and guided us through every stage of development.',
    author: 'Sarah Williams',
    role: 'TECH COMPANY — CTO',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'david',
    quote:
      'Their cybersecurity expertise gave us greater confidence in our digital infrastructure. They identified key risks and helped us build a stronger security foundation.',
    author: 'David Okafor',
    role: 'FINANCIAL SERVICES — CIO',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'jennifer',
    quote:
      'What stood out was their ability to combine business strategy with technology. They were responsive, professional, and focused on delivering measurable results.',
    author: 'Jennifer Carter',
    role: 'RETAIL & E-COMMERCE — COO',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  },
];

export const TESTIMONIALS_CTA = {
  eyebrow: 'LET’S BUILD TOGETHER',
  heading: 'Turn Your Technology Vision Into Reality',
  subtitle:
    'From strategy to implementation, we provide the expertise and technology solutions you need to build securely, scale confidently, and grow your business.',
  buttonLabel: 'Start a Conversation',
  image:
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?q=80&w=1400&auto=format&fit=crop',
};
