import { SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'

const steps = [
  {
    step: '01',
    title: 'Understand',
    description:
      'I start by reading the existing code and asking the questions that actually change the build: who uses this, what breaks it, what does success look like in three months.',
  },
  {
    step: '02',
    title: 'Architect',
    description:
      'I pick the data model and design pattern for the problem in front of me, not the trendiest one, so the codebase is still easy to change long after launch.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'I write code with security and data-privacy habits built in from the first commit, and I keep you in the loop instead of disappearing until the demo.',
  },
  {
    step: '04',
    title: 'Ship & support',
    description:
      'I deploy, watch the logs, and stay around for the bug reports and the next feature request. Shipping is the start of the relationship, not the end.',
  },
]

const HowIWork = () => (
  <div className="space-y-12 py-16">
    <Reveal>
      <SectionHeading eyebrow="Process" title="How I work" />
    </Reveal>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <Reveal key={s.step} delay={i * 100}>
          <div className="group space-y-3 rounded-2xl border border-gray-200 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary-400 hover:shadow-lg dark:border-gray-800 dark:hover:border-primary-500">
            <div className="text-sm font-bold text-primary-500">{s.step}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{s.title}</h3>
            <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">{s.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
)

export default HowIWork
