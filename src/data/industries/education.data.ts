import type { IndustryDetailConfig } from '@app-types/index'

export const EDUCATION_INDUSTRY: IndustryDetailConfig = {
  slug: 'education',
  eyebrow: 'EDUCATION',
  title: 'Education',
  tagline: 'Equipping schools and institutions with secure, modern digital learning infrastructure.',
  heroImage:
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop',
  stats: [
    { value: '50+', label: 'INSTITUTIONS TRAINED' },
    { value: '10K+', label: 'LEARNERS CERTIFIED' },
    { value: '100%', label: 'DATA PRIVACY COMPLIANT' },
  ],
  challengesHeading: 'The Challenges Educational Institutions Face Today',
  challenges: [
    {
      id: 'under-resourced-it',
      title: 'Under-Resourced IT Teams',
      description:
        'Most schools operate with lean IT staff and limited budgets. We provide managed support that extends their capacity without the overhead.',
      image:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'student-privacy',
      title: 'Student Data Privacy',
      description:
        'Education systems hold sensitive data on minors, with strict privacy obligations. We architect systems that protect it by default.',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'digital-skills-gap',
      title: 'Digital Skills Gaps',
      description:
        'Technology adoption outpaces training. We close the gap with hands-on, practitioner-led programs for staff and students alike.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    },
  ],
  capabilitiesHeading: 'What We Bring to Education',
  capabilities: [
    {
      id: 'learning-infrastructure',
      title: 'Learning Infrastructure',
      items: [
        'Learning management systems',
        'Digital classroom tools',
        'Campus network design',
        'Cloud infrastructure for schools',
      ],
    },
    {
      id: 'security-privacy',
      title: 'Security & Privacy',
      items: [
        'Student data protection',
        'Access control for campus systems',
        'Ransomware defense for schools',
        'Compliance with education data laws',
      ],
    },
    {
      id: 'capacity-building',
      title: 'Capacity Building',
      items: [
        'Cybersecurity bootcamps for students',
        'Staff digital literacy training',
        'IT certification programs',
        'STEM curriculum support',
      ],
    },
  ],
  caseStudy: {
    quote: 'Our staff finally feel confident using technology instead of afraid of it.',
    author: 'Michael Adebayo',
    role: 'REGIONAL SCHOOL NETWORK \u2014 IT DIRECTOR',
    metricValue: '90%',
    metricLabel: 'of staff completed certification within the first term.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop',
  },
  ctaHeading: 'Ready to Empower Your Institution?',
  ctaSubheading: "Let's talk about building secure, future-ready learning environments.",
}
