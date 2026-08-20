import { AboutHero } from './AboutHero'
import { ValuesSection } from './ValuesSection'
import { HistorySection } from './HistorySection'
import { WhyUsSection } from './WhyUsSection'
import { AboutClosingCta } from './AboutClosingCta'

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <ValuesSection />
      <HistorySection />
      <WhyUsSection />
      <AboutClosingCta />
    </>
  )
}
