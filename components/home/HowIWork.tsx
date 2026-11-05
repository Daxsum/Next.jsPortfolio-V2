import { SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'
import ProcessVisual from '@/components/home/ProcessVisual'

const HowIWork = () => (
  <div className="space-y-10 py-16">
    <Reveal>
      <SectionHeading
        eyebrow="Process"
        title="How I work"
        description="Four phases, every project, whether it's a two-week fix or a platform build."
      />
    </Reveal>
    <Reveal delay={100}>
      <ProcessVisual />
    </Reveal>
  </div>
)

export default HowIWork
