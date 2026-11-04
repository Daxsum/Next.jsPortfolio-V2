import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'
import siteMetadata from '@/data/siteMetadata'
import eduactionData from '@/data/educationData'
import SkillsSection from '@/components/home/SkillsSection'
import ExperienceTimeline from '@/components/home/ExperienceTimeline'

const COURSE_GROUPS = [
  { label: 'Fundamentals', courses: ['C++', 'Java', 'Data Structure', 'Algorithm'] },
  {
    label: 'Software engineering',
    courses: ['Software Engineering', 'Compilers', 'Oprating Systems'],
  },
  {
    label: 'Systems & hardware',
    courses: [
      'Computer Archtecture',
      'Microcontrollers and interfacing',
      'Digital logic Design',
      'VLSI',
    ],
  },
]

export default function Resume() {
  return (
    <>
      <PageSEO
        title={`Resume - ${siteMetadata.author}`}
        description="Skills, experience, and education"
      />
      <div className="space-y-4 py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Resume"
            title="Skills, experience & education"
            description="The short version: what I'm good at, where I've used it, and where I learned the fundamentals."
          />
        </Reveal>
      </div>

      <SkillsSection />
      <ExperienceTimeline />

      <div className="space-y-10 py-16">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Education" />
        </Reveal>
        {eduactionData.map((d) => (
          <Reveal key={d.name} delay={80}>
            <div className="grid grid-cols-1 gap-8 rounded-3xl border border-gray-200 p-8 dark:border-gray-800 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Image
                  src={d.avatar}
                  alt="avatar"
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-full object-cover"
                />
                <h3 className="pt-4 text-lg font-bold text-gray-900 dark:text-gray-100">
                  {d.name.trim()}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {d.occupation.trim()}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{d.year}</div>
              </div>
              <div className="space-y-5 sm:col-span-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Six years of formal computer engineering, covering everything from algorithms
                  down to digital logic and VLSI, before I moved full-time into web development.
                </p>
                {COURSE_GROUPS.map((group) => (
                  <div key={group.label} className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      {group.label}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.courses.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  )
}
