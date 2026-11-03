import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { Button, SectionHeading } from '@/components/ui'
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
      <SectionHeading eyebrow="Writing" title="Latest articles" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {posts.map((post) => {
          const { slug, date, title, summary, tags } = post
          return (
            <div
              key={slug}
              className="space-y-3 rounded-2xl border border-gray-200 p-6 dark:border-gray-700"
            >
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
