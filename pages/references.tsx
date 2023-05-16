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
    {testimonial.map((d)=><div className='signup-form
               max-w-full
               rounded-2xl
               mb-10
               backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-blue/60 to-white/20 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-white/20 shadow-xl ] transform transition duration-300 hover:scale-105'>
                <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            src={d.avatar}
            alt="avatar"
            width="192px"
            height="192px"
            className="h-48 w-48 rounded-full"
          />
          <h2 className="pt-4 pb-2 text-md font-bold leading-8 tracking-tight">{d.name}</h2>
          <div className="text-gray-500 dark:text-gray-400">{d.occupation}</div>
          <div className="text-gray-500 dark:text-gray-400">{d.name}</div>
          <SocialIcon kind="mail" href={`mailto:${d.email}`} />
          <SocialIcon kind="github" href={d.github} />
          <SocialIcon kind="linkedin" href={d.linkedin} />
          <div className="flex space-x-3 pt-6">
          </div>
        </div>
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
      <ul className="max-w-full space-y-1 text-gray-500 list-inside dark:text-gray-400">
      <li className="flex items-center">
          <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          {d.message}
      </li>
    </ul></div>
  </div>
      </div>)}
  
    
  </div>
</>
}
