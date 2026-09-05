import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  /** Renders a superscript asterisk after the last letter of the final word. */
  showAsterisk?: boolean
  style?: React.CSSProperties
}

const PULL_UP_EASE = [0.16, 1, 0.3, 1] as const

export function WordsPullUp({ text, className = '', showAsterisk = false, style }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(' ')

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        const withAsterisk = showAsterisk && isLast
        const head = withAsterisk ? word.slice(0, -1) : word
        const tail = withAsterisk ? word.slice(-1) : ''

        return (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block whitespace-nowrap pr-[0.2em] last:pr-0"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: PULL_UP_EASE }}
          >
            {head}
            {withAsterisk && (
              <span className="relative inline-block">
                {tail}
                <span
                  aria-hidden="true"
                  className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] leading-none"
                >
                  *
                </span>
              </span>
            )}
          </motion.span>
        )
      })}
    </div>
  )
}
