import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { SectionHeading } from '@/components/ui'
import siteMetadata from '@/data/siteMetadata'
import eduactionData from '@/data/educationData'
import SkillsSection from '@/components/home/SkillsSection'
import ExperienceTimeline from '@/components/home/ExperienceTimeline'

export default function Resume() {
  return (
    <>
      <PageSEO title={`Resume - ${siteMetadata.author}`} description="Skills, experience, and education" />
      <div className="space-y-4 py-16">
        <SectionHeading eyebrow="Resume" title="Skills, experience & education" />
      </div>

      <SkillsSection />
      <ExperienceTimeline />

      <div className="space-y-10 py-16">
        <SectionHeading eyebrow="Education" title="Education" />
        {eduactionData.map((d) => (
          <div
            key={d.name}
            className="grid grid-cols-1 gap-8 rounded-2xl border border-gray-200 p-8 dark:border-gray-700 sm:grid-cols-3"
          >
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
              <div className="text-sm text-gray-500 dark:text-gray-400">{d.occupation.trim()}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{d.year}</div>
            </div>
            <div className="space-y-3 sm:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Favourite courses
              </h4>
              <div className="flex flex-wrap gap-2">
                {d.message.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
