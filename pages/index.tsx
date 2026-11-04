import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Reveal from '@/components/Reveal'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import Hero from '@/components/home/Hero'
import HowIWork from '@/components/home/HowIWork'
import StatsBar from '@/components/home/StatsBar'
import AboutSection from '@/components/home/AboutSection'
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
      <AboutSection />
      <ProjectsSection limit={6} showFilters={false} showViewAll />
      <SkillsSection />
      <ExperienceTimeline limit={4} />
      <WritingSection posts={posts.slice(0, 3)} />
      <Reveal>
        <div className="relative my-16 overflow-hidden rounded-3xl bg-gray-900 p-10 text-center dark:bg-gray-800 sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl"
          />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Got something worth building?
            </h2>
            <p className="max-w-md text-gray-300">
              Tell me what you&apos;re trying to ship. I&apos;ll tell you honestly whether I&apos;m
              the right person for it.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-100"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  )
}
