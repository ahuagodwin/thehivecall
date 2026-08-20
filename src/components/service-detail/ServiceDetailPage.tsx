import { ServiceDetailHero } from './ServiceDetailHero'
import { ApproachSection } from './ApproachSection'
import { VisionSplitCta } from './VisionSplitCta'
import { ProcessSection } from './ProcessSection'
import { ClientsSayCta } from './ClientsSayCta'
import { WhyUsOverlay } from '@components/shared/WhyUsOverlay'
import type { ServiceDetailConfig } from '@app-types/index'

export function ServiceDetailPage({ config }: { config: ServiceDetailConfig }) {
  return (
    <>
      <ServiceDetailHero {...config.hero} />
      <ApproachSection {...config.approach} />
      <VisionSplitCta {...config.vision} />
      <ProcessSection {...config.process} />
      <ClientsSayCta {...config.clientsSay} />
      <WhyUsOverlay {...config.whyUs} />
    </>
  )
}
