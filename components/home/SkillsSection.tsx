import skills from '@/data/skills'
import { SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'

const CATEGORY_MAP: Record<string, string> = {
  figma: 'Design',
  html: 'Frontend',
  css: 'Frontend',
  'tailwind css': 'Frontend',
  javascript: 'Frontend',
  typescript: 'Frontend',
  react: 'Frontend',
  redux: 'Frontend',
  'next.js': 'Frontend',
  'three.js': 'Frontend',
  python: 'Backend',
  express: 'Backend',
  postgresql: 'Database',
  mongodb: 'Database',
  docker: 'Infrastructure',
  aws: 'Infrastructure',
  nignx: 'Infrastructure',
  apache: 'Infrastructure',
  'digital ocean': 'Infrastructure',
  vercel: 'Infrastructure',
  netlify: 'Infrastructure',
}

const CATEGORY_ORDER = ['Frontend', 'Backend', 'Database', 'Infrastructure', 'Design']

const SkillsSection = () => {
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: skills.filter((s) => CATEGORY_MAP[s.skill.trim().toLowerCase()] === category),
  })).filter((g) => g.items.length > 0)

  return (
    <div className="space-y-10 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Tools I use often enough to be fast with, not a buzzword list."
        />
      </Reveal>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {grouped.map((g, gi) => (
          <Reveal key={g.category} delay={gi * 90}>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                {g.category}
              </h3>
              <div className="space-y-3">
                {g.items.map((s) => (
                  <div key={s.id} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {s.skill.trim()}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">{s.persent}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 transition-all duration-1000 ease-out"
                        style={{ width: `${s.persent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection
