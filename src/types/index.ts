export interface NavLink {
  id: string
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

export interface HeroVariant {
  id: string
  badge: string
  headingLines: string[]
  image: string
  ctaLabel: string
}

export interface OfficeLocation {
  id: string
  tag: string
  isHeadquarters?: boolean
  name: string
  addressLines: string[]
  phone?: string
  directionsUrl: string
}

export interface ContactInfoItem {
  id: string
  icon: 'pin' | 'phone' | 'mail'
  label: string
  valueLines: string[]
}

export interface InsightArticle {
  id: string
  tag: string
  title: string
  href: string
  image?: string
  isReportCover?: boolean
}

export interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  href?: string
}

export interface TeamMemberStructure {
  caption: string
  team: TeamMember[]
}

export interface ValueItem {
  id: string
  icon: string
  title: string
  description: string
}

export interface HistoryEra {
  id: string
  year: string
  badge: string
  title: string
  description: string
}

export interface QuoteItem {
  quote: string
  author: string
  role: string
  avatar: string
}

export interface ReviewItem {
  id: string
  quote: string
  author: string
  role: string
  avatar: string
}

export interface StatItem {
  id: string
  value: string
  label: string
}

export interface PhilosophyPillar {
  id: string
  icon: string
  title: string
  description: string
}

export interface ServiceItem {
  id: string
  icon: string
  title: string
  image: string
  href: string
}

export interface InsightCard {
  id: string
  tag: string
  title: string
  image: string
  variant: 'light' | 'accent' | 'accentAlt'
  href: string
}

export interface IndustryItem {
  id: string
  label: string
  href: string
}

export interface RadarPoint {
  month: string
  investments: number
  finance: number
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  companyTag: string
  image: string
  storyTag: string
  storyTitle: string
  metricValue: string
  metricLabel: string
}

export interface ClientLogo {
  id: string
  name: string
}

export interface ContactFormValues {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

export type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error'

export interface NewsletterFormValues {
  email: string
}


export interface DifferenceCard {
  id: string
  icon: string
  title: string
  description: string
  highlighted?: boolean
}

export interface AccordionItem {
  id: string
  title: string
  description: string
}

export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
}



export interface ServiceHeroData {
  eyebrow: string
  title: string
  ctaLabel: string
  image: string
}

export interface ServiceApproachData {
  eyebrow: string
  heading: string
  paragraph: string
  accordionItems: AccordionItem[]
  tags: string[]
}

export interface ServiceVisionData {
  eyebrow: string
  heading: string
  paragraph: string
  image: string
}

export interface ServiceProcessData {
  eyebrow: string
  headingPrefix: string
  headingAccent: string
  ctaLabel: string
  steps: ProcessStep[]
}

export interface ServiceClientsSayData {
  eyebrow: string
  headingPrefix: string
  headingAccent: string
  headingSuffix: string
  buttonLabel: string
}

export interface ServiceWhyUsData {
  eyebrow: string
  headingPrefix: string
  headingHighlight: string
  subtitle: string
  buttonLabel: string
  image: string
  imageAlt: string
}

export interface ServiceDetailConfig {
  slug: string
  hero: ServiceHeroData
  approach: ServiceApproachData
  vision: ServiceVisionData
  process: ServiceProcessData
  clientsSay: ServiceClientsSayData
  whyUs: ServiceWhyUsData
}


export interface IndustryStat {
  value: string
  label: string
}

export interface IndustryChallenge {
  id: string
  title: string
  description: string
  image: string
}

export interface CapabilityCategory {
  id: string
  title: string
  items: string[]
}

export interface IndustryCaseStudy {
  quote: string
  author: string
  role: string
  metricValue: string
  metricLabel: string
  image: string
}

export interface IndustryDetailConfig {
  slug: string
  eyebrow: string
  title: string
  tagline: string
  heroImage: string
  stats: IndustryStat[]
  challengesHeading: string
  challenges: IndustryChallenge[]
  capabilitiesHeading: string
  capabilities: CapabilityCategory[]
  caseStudy: IndustryCaseStudy
  ctaHeading: string
  ctaSubheading: string
}

export interface IndustryOverviewCard {
  id: string
  slug: string
  title: string
  tagline: string
  image: string
  size: 'large' | 'small'
}