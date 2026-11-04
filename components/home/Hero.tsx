import { Button } from '@/components/ui'
import Reveal from '@/components/Reveal'
import workExpriance from '@/data/workExprianceData'

const Hero = () => {
  const current = workExpriance[0]

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-400/30 via-primary-300/10 to-transparent blur-3xl dark:from-primary-500/20"
      />
      <div className="relative flex flex-col items-start gap-7 py-20 sm:py-28">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-gray-700 shadow-sm backdrop-blur dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {current.occupation.trim()}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
            I build full-stack products and telecom VAS platforms that{' '}
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              hold up under real traffic.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="max-w-2xl text-lg leading-8 text-gray-500 dark:text-gray-400">
            I&apos;m Kalab Tenadeg, a full-stack engineer in Addis Ababa. I design APIs, ship
            production web apps, and integrate telecom partners like Telebirr and M-Pesa for
            services that run every day, not just in a demo.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="#projects">View my work</Button>
            <Button href="/about" variant="outline">
              Start a project
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Hero
