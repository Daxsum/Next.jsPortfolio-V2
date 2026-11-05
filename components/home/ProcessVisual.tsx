import { useEffect, useState } from 'react'

const HOLD_MS = 6000

const IconUnderstand = ({ color }: { color: string }) => (
  <svg viewBox="0 0 48 48" className="h-20 w-20 sm:h-24 sm:w-24" fill="none">
    <circle cx="20" cy="20" r="12" stroke={color} strokeWidth="2" />
    <line x1="29" y1="29" x2="40" y2="40" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="20" y1="14" x2="20" y2="26" stroke={color} strokeWidth="1.5" opacity="0.6" />
    <line x1="14" y1="20" x2="26" y2="20" stroke={color} strokeWidth="1.5" opacity="0.6" />
  </svg>
)

const IconArchitect = ({ color }: { color: string }) => (
  <svg viewBox="0 0 48 48" className="h-20 w-20 sm:h-24 sm:w-24" fill="none">
    <rect x="8" y="8" width="32" height="32" rx="3" stroke={color} strokeWidth="2" />
    <line x1="8" y1="20" x2="40" y2="20" stroke={color} strokeWidth="1.2" opacity="0.6" />
    <line x1="8" y1="30" x2="40" y2="30" stroke={color} strokeWidth="1.2" opacity="0.6" />
    <line x1="20" y1="8" x2="20" y2="40" stroke={color} strokeWidth="1.2" opacity="0.6" />
    <line x1="30" y1="8" x2="30" y2="40" stroke={color} strokeWidth="1.2" opacity="0.6" />
  </svg>
)

const IconBuild = ({ color }: { color: string }) => (
  <svg viewBox="0 0 48 48" className="h-20 w-20 sm:h-24 sm:w-24" fill="none">
    <circle cx="24" cy="24" r="9" stroke={color} strokeWidth="2" />
    <circle cx="24" cy="24" r="3" fill={color} />
    {Array.from({ length: 8 }).map((_, i) => (
      <rect
        key={i}
        x="22.5"
        y="4"
        width="3"
        height="7"
        rx="1"
        fill={color}
        transform={`rotate(${i * 45} 24 24)`}
      />
    ))}
  </svg>
)

const IconShip = ({ color }: { color: string }) => (
  <svg viewBox="0 0 48 48" className="h-20 w-20 sm:h-24 sm:w-24" fill="none">
    <path
      d="M24 6c6 5 8 12 8 18 0 4-2 7-8 10-6-3-8-6-8-10 0-6 2-13 8-18Z"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="20" r="3" stroke={color} strokeWidth="1.5" />
    <path d="M16 30 10 40M32 30 38 40" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const PHASES = [
  {
    title: 'Understand',
    description: 'Read the existing code, find the real constraint before writing anything.',
    color: '#f59e0b',
    Icon: IconUnderstand,
  },
  {
    title: 'Architect',
    description: 'Pick the data model and pattern that fits the problem, not the trend.',
    color: '#60a5fa',
    Icon: IconArchitect,
  },
  {
    title: 'Build',
    description: 'Ship with security and privacy habits built in from the first commit.',
    color: '#2dd4bf',
    Icon: IconBuild,
  },
  {
    title: 'Ship & support',
    description: 'Deploy, watch the logs, stay around for what comes after launch.',
    color: '#e879f9',
    Icon: IconShip,
  },
]

const ProcessVisual = () => {
  const [phase, setPhase] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setPhase((p) => (p + 1) % PHASES.length)
    }, HOLD_MS)
    return () => clearInterval(id)
  }, [paused, phase])

  const active = PHASES[phase]

  return (
    <div
      className="relative h-[420px] overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 text-white sm:h-[480px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* orbit rings */}
      <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="absolute h-[78%] w-[78%] animate-[process-orbit_60s_linear_infinite] rounded-full border border-white/5" />
        <span className="absolute h-[54%] w-[54%] animate-[process-orbit_90s_linear_infinite_reverse] rounded-full border border-dashed border-white/[0.07]" />
      </div>

      {/* phase-tinted glow, crossfades */}
      {PHASES.map((p, i) => (
        <div
          key={p.title}
          aria-hidden
          className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === phase ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `radial-gradient(60% 55% at 50% 38%, ${p.color}33, transparent 70%)`,
          }}
        />
      ))}

      {/* center icon, crossfades */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center pb-16">
        {PHASES.map((p, i) => {
          const Icon = p.Icon
          return (
            <div
              key={p.title}
              className={`[grid-area:1/1] transition-all duration-700 ease-out ${
                i === phase ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
            >
              <Icon color={p.color} />
            </div>
          )
        })}
      </div>

      {/* bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"
      />

      {/* top label + phase number */}
      <div className="pointer-events-none absolute inset-x-5 top-4 flex items-start justify-between">
        <span className="font-mono text-xs text-gray-400">How I work</span>
        <span className="font-mono text-5xl font-semibold tracking-tight text-white/[0.08] sm:text-6xl">
          0{phase + 1}
        </span>
      </div>

      {/* caption + tabs */}
      <div className="absolute inset-x-4 bottom-4 flex flex-col gap-3">
        <div className="mx-1 grid">
          {PHASES.map((p, i) => (
            <div
              key={p.title}
              className={`[grid-area:1/1] flex flex-col gap-1.5 transition-all duration-700 ease-out ${
                i === phase ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
            >
              <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gray-400">
                <span className="h-px w-6" style={{ background: p.color }} />
                Phase 0{i + 1} / 04
              </span>
              <p className="text-base font-medium leading-snug sm:text-lg">{p.description}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-1 overflow-x-auto rounded-full bg-white/10 p-1 backdrop-blur-md">
          {PHASES.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setPhase(i)}
              aria-pressed={i === phase}
              className={`relative h-10 min-w-0 flex-1 truncate rounded-full px-1.5 text-[11px] font-semibold transition-colors duration-300 sm:px-3 sm:text-sm ${
                i === phase ? 'bg-white text-gray-900' : 'text-white/70 hover:text-white'
              }`}
            >
              {p.title}
              {i === phase && !paused && (
                <span
                  key={phase}
                  className="absolute inset-x-3 bottom-1 h-0.5 origin-left rounded-full"
                  style={{
                    background: p.color,
                    animation: `process-progress ${HOLD_MS}ms linear`,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProcessVisual
