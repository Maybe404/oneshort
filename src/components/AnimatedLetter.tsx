import { motion, useTransform, type MotionValue } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  index: number
  total: number
  progress: MotionValue<number>
}

export function AnimatedLetter({ char, index, total, progress }: AnimatedLetterProps) {
  const charProgress = index / total
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1])

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  )
}
