import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import Hero from '@/components/home/Hero'
import HowIWork from '@/components/home/HowIWork'
import StatsBar from '@/components/home/StatsBar'
import ProjectsSection from '@/components/home/ProjectsSection'
import SkillsSection from '@/components/home/SkillsSection'
import ExperienceTimeline from '@/components/home/ExperienceTimeline'
import WritingSection from '@/components/home/WritingSection'

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <HowIWork />
      <StatsBar postsCount={posts.length} />
      <ProjectsSection limit={6} showFilters={false} showViewAll />
      <SkillsSection />
      <ExperienceTimeline limit={4} />
      <WritingSection posts={posts.slice(0, 3)} />
      <div className="my-16 flex flex-col items-center gap-6 rounded-2xl bg-gray-900 p-10 text-center dark:bg-gray-800">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Have a project in mind?
        </h2>
        <p className="max-w-md text-gray-300">
          Let&apos;s talk about what you&apos;re building and how I can help.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-colors duration-150 hover:bg-primary-100"
        >
          Let&apos;s work together
        </Link>
      </div>
    </>
  )
}
