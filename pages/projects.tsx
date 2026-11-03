import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import ProjectsSection from '@/components/home/ProjectsSection'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ProjectsSection />
    </>
  )
}
