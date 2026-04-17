import ScrollReveal from './ScrollReveal'

const items = [
  { label: 'Location', value: 'Buffalo, New York', href: null },
  {
    label: 'Email',
    value: 'aayushsubramaniam@gmail.com',
    href: 'mailto:aayushsubramaniam@gmail.com',
  },
  {
    label: 'Code',
    value: 'github.com/aayushsss1',
    href: 'https://github.com/aayushsss1',
  },
  {
    label: 'LinkedIn',
    value: 'Aayush Subramaniam',
    href: 'https://linkedin.com/in/aayush-subramaniam',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 lg:px-32 py-24 md:py-36">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-text-secondary text-sm tracking-widest uppercase mb-12">
            Find me here.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.label} delay={(Math.min(i, 4) + 1) as 1 | 2 | 3 | 4}>
              <div>
                <p className="text-xs tracking-widest uppercase text-accent mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-accent transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-text-primary">{item.value}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
