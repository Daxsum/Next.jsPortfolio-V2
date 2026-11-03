import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-2 mb-2 inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-600 transition-colors duration-150 hover:bg-primary-100 dark:bg-gray-800 dark:text-primary-400 dark:hover:bg-gray-700"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
