import { SplitImageCta } from '@components/shared/SplitImageCta'
import { TESTIMONIALS_CTA } from '@data/testimonials.data'

export function TestimonialsCta() {
  return (
    <SplitImageCta
      eyebrow={TESTIMONIALS_CTA.eyebrow}
      heading={TESTIMONIALS_CTA.heading}
      subtitle={TESTIMONIALS_CTA.subtitle}
      buttonLabel={TESTIMONIALS_CTA.buttonLabel}
      buttonHref="/contact-us"
      image={TESTIMONIALS_CTA.image}
      imageAlt="Advisors reviewing financial plans with a client"
    />
  )
}
