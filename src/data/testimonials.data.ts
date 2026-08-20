import type { ReviewItem } from '@app-types/index'
import { CLIENT_LOGOS } from './home.data'

export const TESTIMONIALS_HERO = {
  eyebrow: 'TESTIMONIALS',
  headingPrefix: 'Verified Client ',
  headingAccent: 'Feedback',
  subtitle:
    "Discover how our expert technology consulting has helped businesses thrive, with trusted feedback from those who've worked with us.",
  googleScore: '4.9',
  googleLabel: 'GOOGLE REVIEWS',
}

export { CLIENT_LOGOS as TESTIMONIALS_CLIENT_LOGOS }

export const REVIEWS_SECTION = {
  eyebrow: 'REVIEWS',
  headingPrefix: 'Client ',
  headingAccent: 'Experiences',
  headingSuffix: ' That Speak for Themselves',
}

export const REVIEWS: ReviewItem[] = [
  {
    id: 'carlos',
    quote:
      'I hired Chiscript for a small cybersecurity audit & was very happy. He not only answered all my questions, but he didn\u2019t treat me like a "small project". I was very satisfied & would recommend.',
    author: 'Carlos Martines',
    role: 'H&N \\ CEO & PRESIDENT',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'ben',
    quote:
      'Partnering with Chiscript was a game-changer for us. They took the time to understand our infrastructure challenges and helped us streamline our operations for success.',
    author: 'Ben Limes',
    role: 'MEX \u2014 CEO',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'kate',
    quote:
      'Chiscript has been instrumental in our growth. Their team took the time to truly understand our systems and helped us eliminate operational inefficiencies.',
    author: 'Kate Smith',
    role: 'KONSTRUKTION \u2014 COO',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'suzane',
    quote:
      'Chiscript went above and beyond with our blockchain integration needs. They treated us like a priority and provided valuable insights that really helped our business grow. Highly recommend!',
    author: 'Suzane Claris',
    role: 'META MEX \u2014 CFO',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
  },
]

export const TESTIMONIALS_CTA = {
  eyebrow: 'TRUSTED PARTNER',
  heading: 'Building a Secure Digital Foundation',
  subtitle:
    'We help you achieve your vision and cultivate confidence and peace of mind across your digital transformation journey.',
  buttonLabel: 'Free Consultation',
  image:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop',
}
