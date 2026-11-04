const ICON_MAP: Record<string, { label: string; color: string }> = {
  figma: { label: 'Fg', color: '#A259FF' },
  html: { label: 'H', color: '#E34F26' },
  css: { label: 'C', color: '#1572B6' },
  'tailwind css': { label: 'Tw', color: '#06B6D4' },
  javascript: { label: 'Js', color: '#CA8A04' },
  typescript: { label: 'Ts', color: '#3178C6' },
  python: { label: 'Py', color: '#3776AB' },
  react: { label: 'Re', color: '#0891B2' },
  redux: { label: 'Rx', color: '#764ABC' },
  'next.js': { label: 'N', color: '#111827' },
  express: { label: 'Ex', color: '#4B5563' },
  postgresql: { label: 'Pg', color: '#4169E1' },
  mongodb: { label: 'Mo', color: '#47A248' },
  'three.js': { label: '3js', color: '#1F2937' },
  docker: { label: 'Do', color: '#2496ED' },
  aws: { label: 'AWS', color: '#C2410C' },
  nignx: { label: 'Ng', color: '#009639' },
  apache: { label: 'Ap', color: '#D22128' },
  'digital ocean': { label: 'DO', color: '#0080FF' },
  vercel: { label: 'Ve', color: '#111827' },
  netlify: { label: 'Nf', color: '#00A99D' },
  'node.js': { label: 'No', color: '#339933' },
  sass: { label: 'Sa', color: '#CC6699' },
  git: { label: 'Gi', color: '#F05032' },
  mysql: { label: 'My', color: '#4479A1' },
  graphql: { label: 'Gq', color: '#D6249F' },
  posthog: { label: 'Ph', color: '#F54E00' },
}

interface Props {
  skill: string
  className?: string
}

const SkillIcon = ({ skill, className = '' }: Props) => {
  const key = skill.trim().toLowerCase()
  const icon = ICON_MAP[key] ?? { label: key.slice(0, 2).toUpperCase(), color: '#6B7280' }

  return (
    <span
      className={`inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-[10px] font-bold leading-none text-white ${className}`}
      style={{ backgroundColor: icon.color }}
      aria-hidden
    >
      {icon.label}
    </span>
  )
}

export default SkillIcon
