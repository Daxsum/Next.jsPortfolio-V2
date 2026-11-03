import { Button } from '@/components/ui'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start gap-6 py-24 md:flex-row md:items-center md:justify-center md:gap-10">
      <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:border-gray-200 md:px-10 md:text-8xl md:leading-14 md:dark:border-gray-700">
        404
      </h1>
      <div className="max-w-md space-y-4">
        <p className="text-xl font-bold leading-normal text-gray-900 dark:text-gray-100 md:text-2xl">
          Sorry, we couldn&apos;t find this page.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          But don&apos;t worry, you can find plenty of other things on my homepage.
        </p>
        <Button href="/">Back to homepage</Button>
      </div>
    </div>
  )
}
