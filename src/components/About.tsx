import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" aria-label="About" className="px-6 md:px-16 lg:px-32 py-24 md:py-36">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Photos */}
        <div className="flex gap-4 shrink-0">
          <ScrollReveal delay={1}>
            <div className="relative w-[260px] md:w-[320px] h-[220px] md:h-[270px] overflow-hidden rounded-sm">
              <Image
                src="/images/about-sunset.jpg"
                alt="Aayush silhouetted against a vivid Pacific sunset"
                fill
                className="object-cover object-[80%_50%]"
                sizes="(max-width: 768px) 640px, 768px"
                quality={95}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="relative w-[260px] md:w-[320px] h-[290px] md:h-[355px] mt-20 overflow-hidden rounded-sm">
              <Image
                src="/images/about-face.jpg"
                alt="Aayush in New York City at night with the lit-up skyline behind him"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 640px, 768px"
                quality={95}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Bio */}
        <ScrollReveal delay={1} className="flex-1 pt-4">
          <p className="font-serif text-2xl md:text-3xl text-text-primary leading-snug mb-6">
            I&apos;m Aayush. I build and ship software in the AI and
            cloud-native space, shoot landscapes, and travel whenever I get
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
