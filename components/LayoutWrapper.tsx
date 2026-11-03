import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { Button } from './ui'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex min-h-screen flex-col justify-between">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-200 bg-white/80 py-6 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
          <Link href="/" aria-label={siteMetadata.headerTitle} className="flex items-center">
            <img width={44} height={44} src="/static/images/logo.png" title="Kalab Tenadeg" className="rounded-full" />
            {typeof siteMetadata.headerTitle === 'string' && siteMetadata.headerTitle ? (
              <div className="ml-3 hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : null}
          </Link>
          <div className="flex items-center gap-2 text-base leading-5">
            <div className="hidden items-center gap-1 sm:flex">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-150 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <Button href="/about" className="hidden sm:inline-flex">
              Contact
            </Button>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
