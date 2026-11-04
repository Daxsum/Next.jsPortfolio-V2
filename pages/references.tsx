import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import testimonialData from '@/data/testimonialData'
import { PageSEO } from '@/components/SEO'
import { SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'
import SocialIcon from '@/components/social-icons'

export default function Testimonials() {
  return (
    <>
      <PageSEO
        title={`Testimonials - ${siteMetadata.author}`}
        description="What people say about working with me"
      />
      <div className="space-y-10 py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonial"
            title="What people say"
            description="Feedback from people who've actually worked with me, not pulled quotes."
          />
        </Reveal>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonialData.map((d, i) => (
            <Reveal key={d.name} delay={i * 90}>
              <div className="flex h-full flex-col justify-between space-y-6 rounded-3xl border border-gray-200 p-8 dark:border-gray-800">
                <div className="text-4xl leading-none text-primary-500/40">&ldquo;</div>
                <p className="-mt-6 text-lg leading-7 text-gray-600 dark:text-gray-300">
                  {d.message}
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
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}
