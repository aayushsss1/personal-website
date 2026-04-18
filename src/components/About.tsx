import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" aria-label="About" className="px-6 md:px-16 lg:px-32 py-24 md:py-36">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Photos */}
        <div className="flex gap-4 shrink-0">
          <ScrollReveal delay={1}>
            <div className="relative w-[180px] md:w-[220px] h-[340px] md:h-[420px] overflow-hidden">
              <Image
                src="/images/about-1.jpg"
                alt="Aayush in an open landscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 180px, 220px"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="relative w-[150px] md:w-[190px] h-[280px] md:h-[340px] mt-10 overflow-hidden">
              <Image
                src="/images/about-2.jpg"
                alt="Aayush looking out at a mountain vista"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, 190px"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Bio */}
        <ScrollReveal delay={1} className="flex-1 pt-4">
          <p className="font-serif text-2xl md:text-3xl text-text-primary leading-snug mb-6">
            I&apos;m Aayush. I build software in the ML and cloud-native space,
            shoot landscapes on a Fujifilm XT4, and travel whenever I get
            the chance.
          </p>
          <p className="text-text-secondary leading-relaxed">
            CS grad from the University at Buffalo. Most of my work has been
            in machine learning, platform engineering, and open source.
            I like building things that are well-made and hold up.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
