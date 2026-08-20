import { Container } from '@common/Container'
import { Reveal } from '@common/Reveal'
import { ContactFormPanel } from '@components/shared/ContactFormPanel'
import { CONTACT_FORM_COPY } from '@data/contact.data'

export function ContactFormSection() {
  return (
    <section id="contact-form" className="bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <ContactFormPanel
            eyebrow={CONTACT_FORM_COPY.eyebrow}
            heading={CONTACT_FORM_COPY.heading}
            subtitle={CONTACT_FORM_COPY.subtitle}
            submitLabel={CONTACT_FORM_COPY.submitLabel}
            submitVariant="dark"
            image={CONTACT_FORM_COPY.image}
          />
        </Reveal>
      </Container>
    </section>
  )
}
