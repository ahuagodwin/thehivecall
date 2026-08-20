import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '@common/Container'
import { Logo } from '@common/Logo'
import { CircleArrow } from '@common/CircleArrow'
import { Reveal } from '@common/Reveal'
import { SITE_CONFIG } from '@config/site.config'
import { FOOTER_INDUSTRY_LINKS, FOOTER_SERVICE_LINKS, FOOTER_QUICK_LINKS } from '@constants/navigation'
import { isValidEmail } from '@lib/utils'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { sendNewsletterSignup } from '@store/slices/newsletterSlice'

export function Footer() {
  const dispatch = useAppDispatch()
  const status = useAppSelector((s) => s.newsletter.status)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setTouched(true)
    if (!isValidEmail(email)) return
    dispatch(sendNewsletterSignup(email))
  }

  return (
    <footer className="bg-ink pt-24 text-white">
      <Container>
        <Reveal className="-mb-20 rounded-[28px] bg-ink-soft px-8 py-10 shadow-2xl md:px-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-md text-lg text-white/90">
              Subscribe to TheHiveCall Insights, our monthly look at the key technology, cybersecurity, fintech, and digital transformation trends shaping modern businesses.
            </p>
            <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full rounded-full border-0 bg-white px-6 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-lime"
                />
                {touched && !isValidEmail(email) && (
                  <p className="mt-1.5 pl-2 text-xs text-lime">Enter a valid email to subscribe.</p>
                )}
                {status === 'success' && (
                  <p className="mt-1.5 pl-2 text-xs text-lime">You&apos;re subscribed — welcome aboard.</p>
                )}
              </div>
              <button
                type="submit"
                aria-label="Subscribe"
                className="shrink-0"
              >
                <CircleArrow tone="onDark" />
              </button>
            </form>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 pb-16 pt-40 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <button onClick={() => navigate('/')} className="inline-flex">
              <Logo light />
            </button>
            <p className="mt-6 text-white/70">
              {SITE_CONFIG.address.city}
              <br />
              {SITE_CONFIG.address.line}
            </p>
            <p className="mt-4 text-white/70">
              {SITE_CONFIG.email}
              <br />
              {SITE_CONFIG.phone}
            </p>
            <button
              onClick={() => navigate('/contact-us')}
              className="mt-6 inline-flex items-center gap-2.5"
            >
              <span className="rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink">
                Contact Us
              </span>
              <CircleArrow tone="onDark" size="sm" />
            </button>
          </div>

          <FooterColumn title="Industries" items={FOOTER_INDUSTRY_LINKS} />
          <FooterColumn title="Services" items={FOOTER_SERVICE_LINKS} />
          <FooterColumn title="Quick Links" items={FOOTER_QUICK_LINKS} />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/50 md:flex-row">
          <p className="uppercase tracking-wide">{SITE_CONFIG.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="uppercase tracking-wide hover:text-white">Terms</a>
            <a href="#" className="uppercase tracking-wide hover:text-white">Privacy</a>
          </div>
          <div className="flex items-center gap-3">
            <SocialDot label="X" href={SITE_CONFIG.socials.x} />
            <SocialDot label="in" href={SITE_CONFIG.socials.linkedin} />
            <SocialDot label="f" href={SITE_CONFIG.socials.facebook} />
          </div>
        </div>
      </Container>
    </footer>
  )
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">{title}</p>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-white/80 transition-colors hover:text-lime">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialDot({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-semibold transition-colors hover:border-lime hover:text-lime"
    >
      {label}
    </a>
  )
}
