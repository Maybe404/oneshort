import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WordsPullUp } from '../components/WordsPullUp'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Uses', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section className="relative h-screen w-full bg-black p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Noise + gradient overlays */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar */}
        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <ul className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="whitespace-nowrap text-[10px] transition-colors duration-300 sm:text-xs md:text-sm"
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom-aligned hero content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-6">
            <div className="col-span-12 lg:col-span-8">
              <WordsPullUp
                text="maybe404"
                showAsterisk
                className="select-none text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] sm:text-[19vw] md:text-[17vw] lg:text-[14vw] xl:text-[13.5vw] 2xl:text-[14vw]"
                style={{ color: '#E1E0CC' }}
              />
            </div>

            <div className="col-span-12 flex flex-col gap-5 sm:gap-6 lg:col-span-4 lg:pb-[2vw]">
              <motion.p
                className="max-w-md text-xs text-primary/70 sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
              >
                I'm maybe404, a developer who likes building small, sharp things for the web. This
                is where I keep my projects, notes from things I've broken and fixed, and the
                occasional experiment that turned out better than expected.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              >
                <a
                  id="contact"
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 text-sm font-medium text-black transition-all duration-300 hover:gap-3 sm:text-base"
                >
                  Say hello
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4 text-primary" strokeWidth={2} />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
