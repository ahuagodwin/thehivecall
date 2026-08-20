import { ServicesHero } from './ServicesHero'
import { WhatWeDoSection } from './WhatWeDoSection'
import { WhyChooseUsSection } from './WhyChooseUsSection'
import { FullServicesGrid } from './FullServicesGrid'
import { ResultsCta } from './ResultsCta'
import { SERVICES_WHY_US_OVERLAY } from '@/data/services-page.data'
import { WhyUsOverlay } from '../shared/WhyUsOverlay'

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <FullServicesGrid />
      <ResultsCta />
      <WhyUsOverlay
        eyebrow={SERVICES_WHY_US_OVERLAY.eyebrow}
        headingPrefix={SERVICES_WHY_US_OVERLAY.headingPrefix}
        headingHighlight={SERVICES_WHY_US_OVERLAY.headingHighlight}
        subtitle={SERVICES_WHY_US_OVERLAY.subtitle}
        buttonLabel={SERVICES_WHY_US_OVERLAY.buttonLabel}
        image={SERVICES_WHY_US_OVERLAY.image}
        imageAlt="TheHiveCall colleagues shaking hands after a successful engagement"
      />
    </>
  )
}
