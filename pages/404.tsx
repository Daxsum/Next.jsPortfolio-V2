import { Button } from '@/components/ui'
import Reveal from '@/components/Reveal'

export default function FourZeroFour() {
  return (
    <Reveal>
      <div className="flex flex-col items-start justify-start gap-6 py-24 md:flex-row md:items-center md:justify-center md:gap-10">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:border-gray-200 md:px-10 md:text-8xl md:leading-14 md:dark:border-gray-700">
          404
        </h1>
        <div className="max-w-md space-y-4">
          <p className="text-xl font-bold leading-normal text-gray-900 dark:text-gray-100 md:text-2xl">
            This page doesn&apos;t exist.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            The link might be broken, or the page moved. Here&apos;s the homepage instead.
          </p>
          <Button href="/">Back to homepage</Button>
        </div>
      </div>
    </Reveal>
  )
}
