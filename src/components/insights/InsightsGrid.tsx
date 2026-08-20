import { motion } from 'framer-motion'
import { Container } from '@common/Container'
import { CircleArrow } from '@common/CircleArrow'
import { ReportCoverArt } from './ReportCoverArt'
import { staggerContainer, fadeUp } from '@constants/motion'
import { INSIGHTS_ARTICLES } from '@data/insights.data'

export function InsightsGrid() {
  return (
    <section className="bg-cream pb-24 md:pb-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {INSIGHTS_ARTICLES.map((article) => (
            <motion.a
              key={article.id}
              href={article.href}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex flex-col justify-between rounded-3xl bg-white p-6"
            >
              {article.isReportCover ? (
                <ReportCoverArt title={article.title} />
              ) : (
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-56 w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
                />
              )}

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-ink/50">
                {article.tag}
              </p>
              <h3 className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                {article.title}
              </h3>

              <div className="mt-8 flex justify-end">
                <CircleArrow tone="onLight" size="sm" className="border border-ink/10" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
