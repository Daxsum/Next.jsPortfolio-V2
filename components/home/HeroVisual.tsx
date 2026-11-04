const CODE_LINES: { text: string; className: string }[][] = [
  [
    { text: 'app', className: 'text-gray-300' },
    { text: '.post(', className: 'text-gray-500' },
    { text: "'/vas/telebirr'", className: 'text-emerald-400' },
    { text: ', async (req, res) => {', className: 'text-gray-500' },
  ],
  [
    { text: '  const', className: 'text-primary-400' },
    { text: ' { msisdn, amount }', className: 'text-gray-200' },
    { text: ' = req.body', className: 'text-gray-500' },
  ],
  [
    { text: '  await', className: 'text-primary-400' },
    { text: ' chargeSubscriber(msisdn, amount)', className: 'text-gray-200' },
  ],
  [
    { text: '  res', className: 'text-gray-300' },
    { text: '.json({ status: ', className: 'text-gray-500' },
    { text: "'ok'", className: 'text-emerald-400' },
    { text: ' })', className: 'text-gray-500' },
  ],
  [{ text: '})', className: 'text-gray-500' }],
]

const HeroVisual = () => (
  <div className="relative hidden flex-1 justify-end lg:flex" aria-hidden>
    <div className="animate-float w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl shadow-gray-900/20 dark:shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-gray-800 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-xs text-gray-500">webhook.ts</span>
      </div>
      <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
        {CODE_LINES.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {line.map((tok, j) => (
              <span key={j} className={tok.className}>
                {tok.text}
              </span>
            ))}
          </div>
        ))}
        <span className="inline-block h-4 w-2 animate-pulse bg-primary-400 align-middle" />
      </div>
    </div>
  </div>
)

export default HeroVisual
