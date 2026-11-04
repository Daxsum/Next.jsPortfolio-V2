import workExpriance from '@/data/workExprianceData'
import { SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'

interface Props {
  limit?: number
}

const ExperienceTimeline = ({ limit }: Props) => {
  const items = limit ? workExpriance.slice(0, limit) : workExpriance

  return (
    <div className="space-y-10 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="From motion graphics to DevOps to senior full-stack roles. I've been in the industry since 2017."
        />
      </Reveal>
      <div className="space-y-10 border-l border-gray-200 pl-8 dark:border-gray-700">
        {items.map((w, i) => (
          <Reveal key={`${w.name}-${w.year}`} delay={Math.min(i, 5) * 60}>
            <div className="relative">
              <div className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-primary-500 ring-4 ring-primary-100 dark:ring-primary-900/40" />
              <div className="text-sm font-semibold text-primary-500">{w.year}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {w.name.trim()}
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400">{w.occupation.trim()}</div>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {w.message
                  .filter((m) => !m.startsWith('#'))
                  .map((m, mi) => (
                    <li key={mi} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                      <span>{m}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default ExperienceTimeline
