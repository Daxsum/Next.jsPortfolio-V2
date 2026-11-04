import Link from '@/components/Link'
import { Button } from '@/components/ui'
import Reveal from '@/components/Reveal'

const Hero = () => {
  return (
    <div className="flex flex-col items-start gap-6 py-24 sm:py-32">
      <Reveal>
        <h1 className="max-w-3xl text-4xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
          Full-stack engineer building the systems your product runs on.
        </h1>
      </Reveal>
      <Reveal delay={100}>
        <p className="max-w-2xl text-lg leading-8 text-gray-500 dark:text-gray-400">
          5+ years building production web apps and telecom VAS platforms. I&apos;m Kalab
          Tenadeg, based in Addis Ababa, and I design APIs, ship full-stack products, and
          integrate telecom partners like Telebirr and M-Pesa for services that run every day,
          not just in a demo.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <div className="flex flex-wrap items-center gap-6 pt-2">
          <Button href="#projects">View selected work</Button>
          <Link
            href="/about"
            className="text-sm font-semibold text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
          >
            Let&apos;s work together &rarr;
          </Link>
        </div>
      </Reveal>
    </div>
  )
}

export default Hero
