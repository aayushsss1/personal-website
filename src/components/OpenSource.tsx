import oss from '@/data/oss.json'
import { OSSRepo, OSSPR } from '@/types'
import ScrollReveal from './ScrollReveal'

export default function OpenSource() {
  return (
    <section id="open-source" className="px-6 md:px-16 lg:px-32 py-24 md:py-36">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">
            Open Source
          </h2>
          <p className="text-text-secondary mb-16 leading-relaxed">
            I contribute to MLOps, DevOps, and platform projects. Always open to collaborating.
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          {(oss as OSSRepo[]).map((repo) => (
            <ScrollReveal key={repo.repo}>
              <div>
                <h3 className="text-xs tracking-widest uppercase text-accent mb-4">
                  {repo.repo}
                </h3>
                <ul className="space-y-3">
                  {repo.prs.map((pr: OSSPR) => (
                    <li key={pr.number} className="flex items-baseline gap-3">
                      <span className="text-text-secondary text-xs shrink-0">
                        #{pr.number}
                      </span>
                      <a
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-primary hover:text-accent transition-colors duration-200 text-sm flex-1 break-words"
                      >
                        {pr.title}
                      </a>
                      <span
                        className={`text-xs shrink-0 ${
                          pr.status === 'Merged'
                            ? 'text-accent'
                            : 'text-text-secondary'
                        }`}
                      >
                        {pr.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
