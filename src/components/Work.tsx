import projects from '@/data/projects.json'
import writing from '@/data/writing.json'
import { Project, WritingItem } from '@/types'
import ScrollReveal from './ScrollReveal'

const sortedProjects = [...(projects as Project[])].sort((a, b) =>
  a.featured === b.featured ? 0 : a.featured ? -1 : 1
)

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <ScrollReveal>
      <h3 className="font-serif text-xl text-accent mb-8">{children}</h3>
    </ScrollReveal>
  )
}

function ProjectItem({ project, index }: { project: Project; index: number }) {
  return (
    <ScrollReveal delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
      <div className="py-5 border-b border-surface last:border-0">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <span className="text-text-primary hover:text-accent transition-colors duration-200 font-medium">
            {project.name}
          </span>
        </a>
        <p className="text-text-secondary text-sm mt-1 mb-2">{project.description}</p>
        <p className="text-text-secondary text-xs">{project.tags.join(', ')}</p>
      </div>
    </ScrollReveal>
  )
}

function WritingItemRow({ item, index }: { item: WritingItem; index: number }) {
  return (
    <ScrollReveal delay={(Math.min(index, 3) + 1) as 1 | 2 | 3 | 4}>
      <div className="py-5 border-b border-surface last:border-0">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-primary hover:text-accent transition-colors duration-200 font-medium"
        >
          {item.title}
        </a>
        <p className="text-text-secondary text-sm mt-1">{item.description}</p>
      </div>
    </ScrollReveal>
  )
}

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-16 lg:px-32 py-24 md:py-36">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-16">
            Work
          </h2>
        </ScrollReveal>

        <div className="mb-20">
          <SectionHeading>Projects</SectionHeading>
          {sortedProjects.map((project, i) => (
            <ProjectItem key={project.name} project={project} index={i} />
          ))}
        </div>

        <div>
          <SectionHeading>Writing</SectionHeading>
          {(writing as WritingItem[]).map((item, i) => (
            <WritingItemRow key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
