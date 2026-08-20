import { motion } from 'framer-motion'
import { CircleArrow } from '@common/CircleArrow'
import { staggerContainer, fadeUp } from '@constants/motion'
import type { TeamMember } from '@app-types/index'

interface TeamGridProps {
  label: string
  members: TeamMember[]
}

export function TeamGrid({ label, members }: TeamGridProps) {
  return (
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">{label}</p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {members.map((member) => (
            <motion.a
              key={member.id}
              href={member.href ?? '#'}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl bg-white p-4"
            >
              <div className="overflow-hidden rounded-xl bg-cream">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
                <div>
                  <p className="font-display text-lg font-medium text-ink">{member.name}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink/50">
                    {member.role}
                  </p>
                </div>
                <CircleArrow tone="onLight" size="sm" className="border border-ink/10" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
  )
}
