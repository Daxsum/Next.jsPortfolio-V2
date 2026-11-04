import { useMemo, useState } from 'react'
import projectsData from '@/data/projectsData'
import { Badge, Button, SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'
import Image from '@/components/Image'
import Link from '@/components/Link'

interface Props {
  limit?: number
  showFilters?: boolean
  showViewAll?: boolean
}

const ProjectsSection = ({ limit, showFilters = true, showViewAll = false }: Props) => {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))],
    []
  )
  const [active, setActive] = useState('All')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = active === 'All' ? projectsData : projectsData.filter((p) => p.category === active)
  const visible = limit ? filtered.slice(0, limit) : filtered

  return (
    <div id="projects" className="space-y-10 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Work"
          title="Projects that carry real traffic"
          description="Sixteen shipped builds, from telecom VAS integrations serving live subscribers to company platforms running day to day operations. Not mockups."
        />
      </Reveal>
      {showFilters && (
        <Reveal delay={80}>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge key={cat} active={active === cat} onClick={() => setActive(cat)}>
                {cat}
              </Badge>
            ))}
          </div>
        </Reveal>
      )}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.title} delay={(i % 6) * 70}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 transition-all duration-200 hover:-translate-y-1 hover:border-primary-500 hover:shadow-xl dark:border-gray-800 dark:hover:border-primary-400">
              <Link href={p.href} aria-label={`Link to ${p.title}`}>
                <Image
                  alt={p.title}
                  src={p.imgSrc}
                  width={544}
                  height={306}
                  className="h-48 w-full object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col space-y-3 p-6">
                <Badge>{p.category}</Badge>
                <h3 className="text-lg font-bold leading-6 text-gray-900 dark:text-gray-100">
                  <Link href={p.href}>{p.title}</Link>
                </h3>
                <p className="line-clamp-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {p.description}
                </p>
                {p.stack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                {p.caseStudy && expanded === p.title && (
                  <div className="space-y-3 border-t border-gray-100 pt-4 text-sm dark:border-gray-800">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">Role</div>
                      <p className="text-gray-500 dark:text-gray-400">{p.caseStudy.role}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        Challenge
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">{p.caseStudy.challenge}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        Approach
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">{p.caseStudy.approach}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        Outcome
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">{p.caseStudy.outcome}</p>
                    </div>
                  </div>
                )}

                <div className="mt-auto flex items-center justify-between pt-2">
                  <Link
                    href={p.href}
                    className="text-sm font-semibold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    View project &rarr;
                  </Link>
                  {p.caseStudy && (
                    <button
                      type="button"
                      onClick={() => setExpanded(expanded === p.title ? null : p.title)}
                      className="text-sm font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      {expanded === p.title ? 'Hide details' : 'Quick look'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {showViewAll && (
        <div>
          <Button href="/projects" variant="outline">
            View all projects
          </Button>
        </div>
      )}
    </div>
  )
}

export default ProjectsSection
