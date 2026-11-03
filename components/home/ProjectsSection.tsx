import { useMemo, useState } from 'react'
import projectsData from '@/data/projectsData'
import { Badge, Button, SectionHeading } from '@/components/ui'
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

  const filtered = active === 'All' ? projectsData : projectsData.filter((p) => p.category === active)
  const visible = limit ? filtered.slice(0, limit) : filtered

  return (
    <div id="projects" className="space-y-10 py-16">
      <SectionHeading
        eyebrow="Work"
        title="Systems with real users"
        description="A selection of full-stack platforms, VAS integrations, and company websites I've built end to end."
      />
      {showFilters && (
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Badge key={cat} active={active === cat} onClick={() => setActive(cat)}>
              {cat}
            </Badge>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <div
            key={p.title}
            className="overflow-hidden rounded-2xl border border-gray-200 transition-colors duration-150 hover:border-primary-500 dark:border-gray-700 dark:hover:border-primary-400"
          >
            <Link href={p.href} aria-label={`Link to ${p.title}`}>
              <Image
                alt={p.title}
                src={p.imgSrc}
                width={544}
                height={306}
                className="h-48 w-full object-cover"
              />
            </Link>
            <div className="space-y-3 p-6">
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
              <Link
                href={p.href}
                className="inline-block text-sm font-semibold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                View project &rarr;
              </Link>
            </div>
          </div>
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
