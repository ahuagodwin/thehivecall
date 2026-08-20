import { Hero } from './Hero'
import { InsightCards } from './InsightCards'
import { Services } from './Services'
import { Philosophy } from './Philosophy'
import { CtaBanner } from './CtaBanner'
import { Industries } from './Industries'
import { Testimonials } from './Testimonials'
import { ContactSection } from './ContactSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <InsightCards />
      <Services />
      <Philosophy />
      <CtaBanner />
      <Industries />
      <Testimonials />
      <ContactSection />
    </>
  )
}
