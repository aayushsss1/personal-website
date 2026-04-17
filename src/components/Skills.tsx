import skills from '@/data/skills.json'
import { Skills as SkillsType } from '@/types'
import ScrollReveal from './ScrollReveal'

const { frameworks, softSkills } = skills as SkillsType

export default function Skills() {
  return (
    <section className="px-6 md:px-16 lg:px-32 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-12">
            Skills
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div>
            <ScrollReveal delay={1}>
              <h3 className="text-xs tracking-widest uppercase text-accent mb-6">
                Frameworks
              </h3>
              <ul className="space-y-2">
                {frameworks.map((item) => (
                  <li key={item} className="text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={2}>
              <h3 className="text-xs tracking-widest uppercase text-accent mb-6">
                Soft Skills
              </h3>
              <ul className="space-y-2">
                {softSkills.map((item) => (
                  <li key={item} className="text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
