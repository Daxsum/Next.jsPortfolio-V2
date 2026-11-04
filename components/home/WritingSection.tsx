import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { Button, SectionHeading } from '@/components/ui'
import Reveal from '@/components/Reveal'
import formatDate from '@/lib/utils/formatDate'
import { CoreContent } from '@/lib/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

interface Props {
  posts: CoreContent<Blog>[]
}

const WritingSection = ({ posts }: Props) => {
  if (!posts.length) return null

  return (
    <div className="space-y-10 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Writing"
          title="Notes from the keyboard"
          description="I write up what I learn while building, mostly so future-me doesn't have to re-learn it."
        />
      </Reveal>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {posts.map((post, i) => {
          const { slug, date, title, summary, tags } = post
          return (
            <Reveal key={slug} delay={i * 90}>
              <div className="h-full space-y-3 rounded-2xl border border-gray-200 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary-400 hover:shadow-lg dark:border-gray-800 dark:hover:border-primary-500">
                <time dateTime={date} className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(date)}
                </time>
                <h3 className="text-lg font-bold leading-6 text-gray-900 dark:text-gray-100">
                  <Link href={`/blog/${slug}`}>{title}</Link>
                </h3>
                <p className="line-clamp-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {summary}
                </p>
                <div className="flex flex-wrap">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
      <Button href="/blog" variant="outline">
        View all articles
      </Button>
    </div>
  )
}

export default WritingSection
