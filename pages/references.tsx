import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import testimonialData from '@/data/testimonialData'
import { PageSEO } from '@/components/SEO'
import { SectionHeading } from '@/components/ui'
import SocialIcon from '@/components/social-icons'

export default function Testimonials() {
  return (
    <>
      <PageSEO title={`Testimonials - ${siteMetadata.author}`} description="What people say about working with me" />
      <div className="space-y-10 py-16">
        <SectionHeading eyebrow="Testimonial" title="What people say" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonialData.map((d) => (
            <div
              key={d.name}
              className="flex flex-col justify-between space-y-6 rounded-2xl border border-gray-200 p-8 dark:border-gray-700"
            >
              <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">
                &ldquo;{d.message}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={d.avatar}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900 dark:text-gray-100">{d.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {d.occupation} {d.company}
                  </div>
                  <div className="flex gap-3 pt-1">
                    <SocialIcon kind="mail" href={`mailto:${d.email.trim()}`} size={5} />
                    <SocialIcon kind="github" href={d.github} size={5} />
                    <SocialIcon kind="linkedin" href={d.linkedin} size={5} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
