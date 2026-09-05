import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { AnimatedLetter } from './AnimatedLetter'

interface ScrollRevealTextProps {
  text: string
  className?: string
}

export function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = Array.from(text)

  return (
    <p ref={ref} className={className} aria-label={text}>
      {chars.map((char, i) => (
        <AnimatedLetter key={i} char={char} index={i} total={chars.length} progress={scrollYProgress} />
      ))}
    </p>
  )
}
