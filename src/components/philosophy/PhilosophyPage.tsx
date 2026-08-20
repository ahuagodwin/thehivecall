import { PhilosophyHero } from './PhilosophyHero'
import { CorePrinciplesSection } from './CorePrinciplesSection'
import { MissionSection } from './MissionSection'
import { WhyUsOverlaySection } from './WhyUsOverlaySection'

export function PhilosophyPage() {
  return (
    <>
      <PhilosophyHero />
      <CorePrinciplesSection />
      <MissionSection />
      <WhyUsOverlaySection />
    </>
  )
}
