import { Stat } from '@/components/ui'
import Reveal from '@/components/Reveal'
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
    { value: `${projectsData.length}`, label: 'Projects shipped' },
    { value: `${yearsEngineering}+`, label: 'Years writing production code' },
    { value: `${companyCount}`, label: 'Companies I’ve built for' },
    { value: `${postsCount}`, label: 'Technical articles written' },
  ]

  return (
    <div className="grid grid-cols-2 gap-8 border-y border-gray-200 py-12 dark:border-gray-800 sm:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 80}>
          <Stat value={s.value} label={s.label} />
        </Reveal>
      ))}
    </div>
  )
}

export default StatsBar
