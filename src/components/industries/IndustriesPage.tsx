import { IndustriesHero } from './IndustriesHero'
import { IndustriesBentoGrid } from './IndustriesBentoGrid'
import { IndustriesStatsMarquee } from './IndustriesStatsMarquee'
import { IndustryCta } from '@components/shared/IndustryCta'
import { INDUSTRIES_CTA } from '@data/industries-page.data'

export function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustriesBentoGrid />
      <IndustriesStatsMarquee />
      <div className='pt-5'>
            <IndustryCta heading={INDUSTRIES_CTA.heading} subheading={INDUSTRIES_CTA.subheading} />
      </div>
    </>
  )
}
