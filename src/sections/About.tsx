import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { ScrollRevealText } from '../components/ScrollRevealText'

const BODY_TEXT =
  'I started out copying other people\'s code and breaking it on purpose to see what happened. That habit never left. These days I build web apps and developer tools, write about what I learn along the way, and keep a long list of half-finished ideas that I slowly turn into real ones.'

export function About() {
  return (
    <section id="about" className="scroll-mt-6 bg-black px-4 py-6 md:px-6 md:py-10">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-20 text-center sm:px-10 sm:py-28 md:rounded-[2rem] md:px-16 md:py-36">
        <p className="mb-8 text-[10px] uppercase tracking-[0.2em] text-primary sm:mb-10 sm:text-xs">
          About me
        </p>

        <h2 className="mx-auto max-w-3xl">
          <WordsPullUpMultiStyle
            className="text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
            style={{ color: '#E1E0CC' }}
            segments={[
              { text: "I'm maybe404,", className: 'font-normal' },
              { text: 'a self-taught developer.', className: 'font-serif italic' },
              {
                text: 'I build for the web, write about the process, and ship things that are small on purpose.',
                className: 'font-normal',
              },
            ]}
          />
        </h2>

        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 md:mt-20">
          <ScrollRevealText
            text={BODY_TEXT}
            className="text-xs leading-relaxed text-[#DEDBC8] sm:text-sm md:text-base"
          />
        </div>
      </div>
    </section>
  )
}
