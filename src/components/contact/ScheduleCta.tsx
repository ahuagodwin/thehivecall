import { SplitImageCta } from '@components/shared/SplitImageCta'
import { SCHEDULE_CTA } from '@data/contact.data'

export function ScheduleCta() {
  return (
    <SplitImageCta
      eyebrow={SCHEDULE_CTA.eyebrow}
      heading={SCHEDULE_CTA.heading}
      buttonLabel={SCHEDULE_CTA.buttonLabel}
      buttonHref="#contact-form"
      image={SCHEDULE_CTA.image}
      imageAlt="Two colleagues shaking hands in an office"
    />
  )
}
