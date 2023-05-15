import siteMetadata from '@/data/siteMetadata'
import testimonial from '@/data/testimonialData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

export default function Resume() {
  return  <>
  <PageSEO title={`About - kalab tenadeg`} description={`Testimonial - kalab tenadeg`} /> 
    <div className="divide-y">
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Testimonial
      </h1>
    </div>
    {testimonial.map((d)=><div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
      <div className="flex flex-col items-center pt-8">
        <Image
          src={d.avatar}
          alt="avatar"
          width="192px"
          height="192px"
          className="h-48 w-48 rounded-full"
        />
        <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{d.name}</h3>
        <div className="text-gray-500 dark:text-gray-400">{d.occupation}</div>
        <div className="text-gray-500 dark:text-gray-400">{d.company}</div>
        <div className="flex space-x-3 pt-6">
          <SocialIcon kind="mail" href={`mailto:${d.email}`} />
          <SocialIcon kind="github" href={d.github} />
          <SocialIcon kind="linkedin" href={d.linkedin} />
          {/* <SocialIcon kind="twitter" href={d.twitter} /> */}
        </div>
      </div>
      <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{d.message}</div>
    </div>)}
    
  </div>
</>
}
