import { SectionHeading } from '@/components/ui'

const steps = [
  {
    step: '01',
    title: 'Understand',
    description:
      'Analyse the requirements, the existing codebase, and the constraints before writing a line of code.',
  },
  {
    step: '02',
    title: 'Architect',
    description:
      'Pick the design pattern and data model that fits the problem, and plan for a codebase that stays readable and maintainable as it grows.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Implement with security and data-privacy best practices in mind, keeping the team in the loop with 24/7 responsive communication.',
  },
  {
    step: '04',
    title: 'Ship & Support',
    description:
      'Deploy, monitor, and stay available for fixes and improvements long after the first release.',
  },
]

const HowIWork = () => (
  <div className="space-y-10 py-16">
    <SectionHeading eyebrow="Process" title="How I work" />
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s) => (
        <div key={s.step} className="space-y-2">
          <div className="text-sm font-semibold text-primary-500">{s.step}</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{s.title}</h3>
          <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">{s.description}</p>
        </div>
      ))}
    </div>
  </div>
)

export default HowIWork
