import Image from '@/components/Image'
import { Panel, SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'
import workExpriance from '@/data/workExprianceData'

const AboutSection = () => (
  <div className="py-16">
    <Reveal>
      <Panel className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-500/10"
        />
        <div className="relative grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <Image
              src="/static/images/my logo.png"
              alt="Kalab Tenadeg"
              width={120}
              height={120}
              className="h-28 w-28 rounded-2xl object-cover shadow-md"
            />
            <div className="text-center lg:text-left">
              <div className="font-bold text-gray-900 dark:text-gray-100">Kalab Tenadeg</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Addis Ababa, Ethiopia</div>
            </div>
          </div>
          <div className="space-y-5 lg:col-span-2">
            <SectionHeading eyebrow="About" title="From video editing to production systems" />
            <p className="text-gray-600 dark:text-gray-300">
              I didn&apos;t start in software. I spent my first few years editing video and
              building motion graphics, then moved into UI/UX design before writing my first line
              of production code in 2021. That path means I notice things a lot of backend-only
              engineers miss: how an interface feels under real use, not just how an API responds.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Since then I&apos;ve worked across the stack, {workExpriance.length}+ roles deep, on
              everything from ride-hailing admin panels to telecom VAS platforms integrating
              Telebirr and M-Pesa. I studied Computer Engineering at Addis Ababa Institute of
              Technology, and I still think like an engineer first: find the actual constraint,
              then build the simplest thing that holds up.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I care about code that&apos;s still easy to change a year after I write it, and
              about clients knowing what&apos;s happening with their project without having to
              chase me for an update.
            </p>
          </div>
        </div>
      </Panel>
    </Reveal>
  </div>
)

export default AboutSection
