import { IndustryHero } from './IndustryHero'
import { ChallengesZigzag } from './ChallengesZigzag'
import { CapabilitiesMatrix } from './CapabilitiesMatrix'
import { CaseStudyBanner } from './CaseStudyBanner'
import { IndustryCta } from '@components/shared/IndustryCta'
import type { IndustryDetailConfig } from '@app-types/index'

export function IndustryDetailPage({ config }: { config: IndustryDetailConfig }) {
  return (
    <>
      <IndustryHero
        eyebrow={config.eyebrow}
        title={config.title}
        tagline={config.tagline}
        heroImage={config.heroImage}
        stats={config.stats}
      />
      <ChallengesZigzag heading={config.challengesHeading} challenges={config.challenges} />
      <CapabilitiesMatrix heading={config.capabilitiesHeading} capabilities={config.capabilities} />
      <CaseStudyBanner {...config.caseStudy} />
      <IndustryCta heading={config.ctaHeading} subheading={config.ctaSubheading} />
    </>
  )
}
