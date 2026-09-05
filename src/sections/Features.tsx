import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'

const CARD_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

const ICON_STORYBOARD =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85'
const ICON_CRITIQUES =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85'
const ICON_CAPSULE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85'

const CARD_EASE = [0.22, 1, 0.36, 1] as const

interface FeatureCardData {
  number: string
  title: string
  icon: string
  items: string[]
  cta: string
  href: string
}

const FEATURE_CARDS: FeatureCardData[] = [
  {
    number: '01',
    title: 'Projects.',
    icon: ICON_STORYBOARD,
    items: [
      'Web apps and tools built end to end',
      'Open source on GitHub as Maybe404',
      'Small scope, finished, and actually shipped',
      'Each one has a short write-up of what I learned',
    ],
    cta: 'View projects',
    href: 'https://github.com/Maybe404',
  },
  {
    number: '02',
    title: 'Writing.',
    icon: ICON_CRITIQUES,
    items: [
      'Notes on bugs I hit and how I fixed them',
      'Longer posts on tools, workflow, and taste',
      'Written for the version of me from six months ago',
    ],
    cta: 'Read posts',
    href: '#',
  },
  {
    number: '03',
    title: 'Toolbox.',
    icon: ICON_CAPSULE,
    items: [
      'TypeScript, React, and whatever the job needs',
      'A terminal, an editor, and too many tabs',
      'The setup I actually use, kept up to date',
    ],
    cta: 'See what I use',
    href: '#',
  },
]

interface CardShellProps {
  index: number
  isInView: boolean
  className?: string
  children: React.ReactNode
}

function CardShell({ index, isInView, className = '', children }: CardShellProps) {
  return (
    <motion.article
      className={`relative h-[420px] overflow-hidden rounded-2xl lg:h-full ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: CARD_EASE }}
    >
      {children}
    </motion.article>
  )
}

function VideoCard({ index, isInView }: { index: number; isInView: boolean }) {
  return (
    <CardShell index={index} isInView={isInView} className="bg-[#212121]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={CARD_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <p
        className="absolute bottom-6 left-6 right-6 text-lg font-normal leading-tight sm:text-xl md:text-2xl"
        style={{ color: '#E1E0CC' }}
      >
        Selected work.
      </p>
    </CardShell>
  )
}

function FeatureCard({ data, index, isInView }: { data: FeatureCardData; index: number; isInView: boolean }) {
  return (
    <CardShell index={index} isInView={isInView} className="flex flex-col bg-[#212121] p-6 sm:p-7">
      <img
        src={data.icon}
        alt=""
        loading="lazy"
        className="h-10 w-10 rounded object-cover sm:h-12 sm:w-12"
      />

      <div className="mt-8 flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-normal sm:text-xl" style={{ color: '#E1E0CC' }}>
          {data.title}
        </h3>
        <span className="text-xs text-gray-500">{data.number}</span>
      </div>

      <ul className="mt-6 flex flex-col gap-3">
        {data.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
            <span className="text-sm leading-snug text-gray-400">{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={data.href}
        target={data.href.startsWith('http') ? '_blank' : undefined}
        rel={data.href.startsWith('http') ? 'noreferrer' : undefined}
        className="group mt-auto inline-flex items-center gap-2 pt-8 text-sm text-primary transition-colors hover:text-[#E1E0CC]"
      >
        {data.cta}
        <ArrowRight
          className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </a>
    </CardShell>
  )
}

export function Features() {
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, margin: '-100px' })

  return (
    <section id="work" className="relative min-h-screen scroll-mt-6 overflow-hidden bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto mb-14 max-w-4xl text-center sm:mb-20">
          <WordsPullUpMultiStyle
            className="text-xl font-normal leading-tight sm:text-2xl md:text-3xl lg:text-4xl"
            segments={[
              { text: 'Things I make, write, and keep coming back to.', className: 'text-[#E1E0CC]' },
              { text: 'Small tools. Honest notes. Late-night experiments.', className: 'text-gray-500' },
            ]}
          />
        </header>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4"
        >
          <VideoCard index={0} isInView={isInView} />
          {FEATURE_CARDS.map((card, i) => (
            <FeatureCard key={card.number} data={card} index={i + 1} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
