import { useState, type FormEvent } from 'react'
import { Eyebrow } from '@common/Eyebrow'
import { PhoneIcon } from '@common/Icon'
import { SITE_CONFIG } from '@config/site.config'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { sendContactForm, resetContactStatus } from '@store/slices/contactSlice'
import type { ContactFormValues } from '@app-types/index'

const EMPTY_FORM: ContactFormValues = { name: '', email: '', phone: '', company: '', message: '' }

interface ContactFormPanelProps {
  eyebrow: string
  heading: string
  subtitle: string
  submitLabel: string
  submitVariant?: 'lime' | 'dark'
  image: string
  imageAlt?: string
}

export function ContactFormPanel({
  eyebrow,
  heading,
  subtitle,
  submitLabel,
  submitVariant = 'dark',
  image,
  imageAlt = 'Two colleagues collaborating at a meeting table',
}: ContactFormPanelProps) {
  const dispatch = useAppDispatch()
  const status = useAppSelector((s) => s.contact.status)
  const [form, setForm] = useState<ContactFormValues>(EMPTY_FORM)

  const handleChange =
    (field: keyof ContactFormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email) return
    dispatch(sendContactForm(form))
      .unwrap()
      .then(() => setForm(EMPTY_FORM))
      .catch(() => {
        /* error state is already reflected via status */
      })
  }

  const handleFocusAfterSuccess = () => {
    if (status === 'success' || status === 'error') dispatch(resetContactStatus())
  }

  return (
    <div className="overflow-hidden rounded-[32px] border border-ink/10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-cream p-8 md:p-14">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-medium text-ink md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-md whitespace-pre-line text-ink/60">{subtitle}</p>

          <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Your name">
              <input
                required
                value={form.name}
                onChange={handleChange('name')}
                onFocus={handleFocusAfterSuccess}
                placeholder="e.g. John Smith"
                className="input-field"
              />
            </Field>
            <Field label="Email address">
              <input
                required
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                onFocus={handleFocusAfterSuccess}
                placeholder="e.g. john@email.com"
                className="input-field"
              />
            </Field>
            <Field label="Phone number">
              <input
                value={form.phone}
                onChange={handleChange('phone')}
                onFocus={handleFocusAfterSuccess}
                placeholder="e.g. +1 222 444 66"
                className="input-field"
              />
            </Field>
            <Field label="Company name">
              <input
                value={form.company}
                onChange={handleChange('company')}
                onFocus={handleFocusAfterSuccess}
                placeholder="e.g. Execor"
                className="input-field"
              />
            </Field>
            <Field label="Your message" className="sm:col-span-2">
              <textarea
                value={form.message}
                onChange={handleChange('message')}
                onFocus={handleFocusAfterSuccess}
                placeholder="Type here …"
                rows={4}
                className="input-field resize-none"
              />
            </Field>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className={
                  submitVariant === 'lime'
                    ? 'rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-lime-dark disabled:opacity-60'
                    : 'rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-ink-light disabled:opacity-60'
                }
              >
                {status === 'loading' ? 'Sending…' : submitLabel}
              </button>
              {status === 'success' && (
                <p className="mt-3 text-sm font-medium text-ink/70">
                  Thanks — we&apos;ll be in touch within one business day.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-3 text-sm font-medium text-red-600">
                  Something went wrong — please try again.
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="relative min-h-[320px] lg:min-h-full">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-6 bottom-6 flex items-center gap-4 rounded-full bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
              <PhoneIcon className="h-4.5 w-4.5" />
            </span>
            <p className="text-sm text-ink/80">
              Call us at{' '}
              <a
                href={`tel:${SITE_CONFIG.callNumber}`}
                className="font-semibold text-ink underline underline-offset-2"
              >
                {SITE_CONFIG.callNumber}
              </a>{' '}
              or fill out our form, and we&apos;ll contact you within one business day.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  children,
  className,
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <label className={`flex flex-col gap-2 text-sm font-medium text-ink/80 ${className ?? ''}`}>
      {label}
      {children}
    </label>
  )
}
