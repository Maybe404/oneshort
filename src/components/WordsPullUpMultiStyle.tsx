import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface TextSegment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[]
  className?: string
  style?: React.CSSProperties
}

const PULL_UP_EASE = [0.16, 1, 0.3, 1] as const

export function WordsPullUpMultiStyle({ segments, className = '', style }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const words = segments.flatMap((segment) =>
    segment.text
      .split(' ')
      .filter(Boolean)
      .map((word) => ({ word, className: segment.className ?? '' })),
  )

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map(({ word, className: wordClass }, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={`inline-block whitespace-nowrap pr-[0.25em] last:pr-0 ${wordClass}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: PULL_UP_EASE }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
