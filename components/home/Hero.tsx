import { Button } from '@/components/ui'
import workExpriance from '@/data/workExprianceData'

const Hero = () => {
  const current = workExpriance[0]

  return (
    <div className="flex flex-col items-start gap-6 py-16 sm:py-24">
      <div className="text-sm font-semibold uppercase tracking-widest text-primary-500">
        {current.occupation.trim()}
      </div>
      <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
        Hi, I&apos;m Kalab Tenadeg — a{' '}
        <span className="text-primary-500">Full Stack Engineer</span> building web platforms and
        VAS systems that run in production.
      </h1>
      <p className="max-w-2xl text-lg leading-7 text-gray-500 dark:text-gray-400">
        I design, build, and ship RESTful APIs, telecom VAS integrations, and full-stack web
        applications end to end — from responsive front ends to the backend logic and
        infrastructure that keeps them running.
      </p>
      <div className="flex flex-wrap gap-4 pt-2">
        <Button href="#projects">View my work</Button>
        <Button href="/about" variant="outline">
          Let&apos;s work together
        </Button>
      </div>
    </div>
  )
}

export default Hero
