import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import { Container } from '@common/Container'
import { Eyebrow } from '@common/Eyebrow'
import { CircleArrow } from '@common/CircleArrow'
import { Reveal } from '@common/Reveal'
import { staggerFast, fadeUp } from '@constants/motion'
import { INDUSTRIES, RADAR_DATA, RADAR_LEGEND } from '@data/home.data'

export function Industries() {
  const navigate = useNavigate()

  return (
    <section id="industries" className="border-t border-ink/10 bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <Eyebrow>INDUSTRIES</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-xl font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
            Innovating Across Industries and Business Challenges
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal delay={0.1} className="mx-auto h-[380px] w-full max-w-md md:h-[440px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={RADAR_DATA} outerRadius="72%">
                <PolarGrid stroke="#16302b" strokeOpacity={0.12} />
                <PolarAngleAxis
                  dataKey="month"
                  tick={{ fill: '#16302b', fontSize: 12, opacity: 0.6 }}
                />
                <Radar
                  name={RADAR_LEGEND.primary}
                  dataKey="investments"
                  stroke="#16302b"
                  fill="#16302b"
                  fillOpacity={0.35}
                  strokeWidth={2}
                  animationDuration={1400}
                />
                <Radar
                  name={RADAR_LEGEND.secondary}
                  dataKey="finance"
                  stroke="#b3dd3a"
                  fill="#c6ef4f"
                  fillOpacity={0.55}
                  strokeWidth={2}
                  animationDuration={1400}
                  animationBegin={150}
                />
              </RadarChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center justify-center gap-8 text-xs font-semibold uppercase tracking-wide text-ink/60">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-ink" /> {RADAR_LEGEND.primary}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-lime" /> {RADAR_LEGEND.secondary}
              </span>
            </div>
          </Reveal>

          <div>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerFast}
              className="divide-y divide-ink/10"
            >
              {INDUSTRIES.map((industry) => (
                <motion.li key={industry.id} variants={fadeUp}>
                  <a
                    href={industry.href}
                    className="group flex items-center justify-between py-5 text-xl font-display text-ink transition-colors hover:text-ink/70 md:text-2xl"
                  >
                    {industry.label}
                    <CircleArrow tone="onLight" size="sm" className="border border-ink/10" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <button
              onClick={() => navigate('/contact-us')}
              className="mt-8 rounded-full bg-lime px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-lime-dark"
            >
              Discover More
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
