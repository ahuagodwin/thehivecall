import type { TeamMember, TeamMemberStructure } from '@app-types/index'

export const TEAM_HERO = {
  eyebrow: 'TEAM',
  headingPrefix: 'A ',
  headingAccent: 'Culture',
  headingSuffix: ' Built on Collaboration and Passion',
  image:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop',
}

export const OUR_PEOPLE = {
  eyebrow: 'OUR PEOPLE',
  headingAccent: 'Empowering',
  headingSuffix: ' with Expertise & Experience',
  paragraph:
    'Our team is made up of seasoned technology professionals with extensive experience in cybersecurity, software engineering, blockchain, and IT consultancy. We are dedicated to leveraging our knowledge and skills to support and guide businesses, helping them navigate challenges and achieve digital success.',
}

export const LEADERSHIP: TeamMemberStructure[] = [
  {
    caption: 'Leadership',
    team: [
      {
        id: 'chidi',
        name: 'Chidi Ahua',
        role: 'Co-FOUNDER & CEO',
        avatar:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
      },

      {
        id: 'chidera',
        name: 'Chidera Chukwunyere',
        role: 'Head, Human Resources',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      },

      {
        id: 'seun',
        name: 'Seun Olagunle',
        role: 'CHIEF TECHNOLOGY OFFICER',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      },
      {
        id: 'cynthia',
        name: 'Cynthia Nwobodo',
        role: 'HEAD, CYBERSECURITY',
        avatar:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      },

      {
        id: 'olivia',
        name: 'Olivia Ezebalike',
        role: 'Head, Operations',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      },

      {
        id: 'rita',
        name: 'Rita Paul',
        role: 'Chief Financial Officer',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      },
      {
        id: 'tunde',
        name: 'Tunde Bakare',
        role: 'VP OF ENGINEERING',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      },

      {
        id: 'bright',
        name: 'Bright Chimezie',
        role: 'Head, Product Design ( UI/UX )',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      },
    ],
  },
  {
    caption: 'Advisors',
    team: [
      {
        id: 'sarah',
        name: 'Sarah Mitchell',
        role: 'PARTNER / ADVISOR',
        avatar:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
      },
      {
        id: 'david',
        name: 'David Chen',
        role: 'PARTNER / ADVISOR',
        avatar:
          'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
      },
      {
        id: 'amara',
        name: 'Amara Johnson',
        role: 'PARTNER / ADVISOR',
        avatar:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop',
      },
      {
        id: 'kwame',
        name: 'Kwame Mensah',
        role: 'PARTNER / ADVISOR',
        avatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
      },
    ],
  },
]

export const TEAM_CLOSING = {
  quote:
    "At Chiscript, our culture is built on client-first values, continuous improvement, and passion for our work. If you're seeking intellectual challenge and a company that feels like home, Chiscript is the place for you.",
  author: 'Ngozi Bello',
  role: 'HEAD OF CYBERSECURITY',
  image:
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop',
  careersLabel: 'Careers',
}
