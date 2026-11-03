import { Stat } from '@/components/ui'
import projectsData from '@/data/projectsData'
import workExpriance from '@/data/workExprianceData'

const FIRST_ENGINEERING_ROLE_YEAR = 2021

interface Props {
  postsCount: number
}

const StatsBar = ({ postsCount }: Props) => {
  const yearsEngineering = new Date().getFullYear() - FIRST_ENGINEERING_ROLE_YEAR
  const companyCount = new Set(workExpriance.map((w) => w.occupation.trim())).size

  const stats = [
    { value: `${projectsData.length}`, label: 'Projects delivered' },
    { value: `${yearsEngineering}+`, label: 'Years in software engineering' },
    { value: `${companyCount}`, label: 'Companies worked with' },
    { value: `${postsCount}`, label: 'Articles published' },
  ]

  return (
    <div className="grid grid-cols-2 gap-8 border-y border-gray-200 py-12 dark:border-gray-700 sm:grid-cols-4">
      {stats.map((s) => (
        <Stat key={s.label} value={s.value} label={s.label} />
      ))}
    </div>
  )
}

export default StatsBar
