import skills from '@/data/skills.json'
import { Skills as SkillsType } from '@/types'
import ScrollReveal from './ScrollReveal'

const { languages, aiAndML, cloudAndDevOps, dataScience, softSkills } = skills as SkillsType

function SkillGroup({
  label,
  items,
  delay = 0,
}: {
  label: string
  items: string[]
  delay?: 0 | 1 | 2 | 3 | 4
}) {
  return (
    <ScrollReveal delay={delay}>
      <h3 className="text-xs tracking-widest uppercase text-accent mb-5">{label}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-text-secondary">
            {item}
          </li>
        ))}
      </ul>
    </ScrollReveal>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 lg:px-32 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-12">
            Skills
          </h2>
        </ScrollReveal>

        {/* Languages — horizontal pill row, no label */}
        <ScrollReveal delay={1}>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-12">
            {languages.map((lang) => (
              <span key={lang} className="text-text-secondary">
                {lang}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Main technical grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
          <SkillGroup label="AI & ML" items={aiAndML} delay={1} />
          <SkillGroup label="Cloud & DevOps" items={cloudAndDevOps} delay={2} />
        </div>

        {/* Supporting grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <SkillGroup label="Data Science" items={dataScience} delay={1} />
          <SkillGroup label="Soft Skills" items={softSkills} delay={2} />
        </div>
      </div>
    </section>
  )
}
