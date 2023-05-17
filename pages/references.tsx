import siteMetadata from '@/data/siteMetadata'
import reference from '@/data/testimonialData'
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
      Testimonials
      </h1>
    </div>
    <div className='grid grid-flow-row gap-8 pt-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>

    {reference.map((d)=><div className='
               max-w-full
               rounded-2xl
               mb-10
               backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-blue/60 to-white/20 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-white/20 shadow-xl ] transform transition duration-300 hover:scale-105'>
                <div >
        <div className="flex flex-col ">
       
        <div className="text-6xl text-White-500 text-left leading-tight h-6 -mt-3">“</div>
        <div className="prose max-w-none text-justify pt-2   dark:prose-dark ">
          {d.message}
     </div>
     <div className="text-6xl text-white-500 text-right leading-tight h-3 -mt-3">”</div>
     <div className='flex gap-16 pt-5 items-center'>
       <div className='items-center'>
       
       <Image
         src={d.avatar}
         alt="avatar"
         width="92px"
         height="92px"
         className=" h-48 w-48 rounded-full"
       />
       </div>
       <div>
       <h2 className="pt-4 pb-2 text-md font-bold leading-8 tracking-tight whitespace-nowrap">{d.name}</h2>
            <div className="text-gray-500 dark:text-gray-400  whitespace-nowrap">{d.occupation}</div>
            <div className="text-gray-500 dark:text-gray-400  whitespace-nowrap">{d.company}</div>
            <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${d.email}`} />
            <SocialIcon kind="github" href={d.github} />
            <SocialIcon kind="linkedin" href={d.linkedin} />
            </div>
       </div>
            
          </div>
     </div>
  </div>
      </div>)}</div>
  
    
  </div>
</>
}
