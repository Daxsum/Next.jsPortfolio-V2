import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 py-10 dark:border-gray-800">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div className="space-y-2">
          <div className="font-bold text-gray-900 dark:text-gray-100">{siteMetadata.author}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Built with Next.js &amp; Tailwind CSS.
          </div>
          <div className="flex justify-center gap-4 sm:justify-start">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
            <SocialIcon kind="github" href={siteMetadata.github} size={5} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 sm:justify-end">
          <Link href="/" className="hover:text-primary-500">
            Home
          </Link>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href} className="hover:text-primary-500">
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
        {`© ${new Date().getFullYear()} ${siteMetadata.author}. All rights reserved.`}
      </div>
    </footer>
  )
}
