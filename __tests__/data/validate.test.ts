// __tests__/data/validate.test.ts
import projects from '@/data/projects.json'
import writing from '@/data/writing.json'
import oss from '@/data/oss.json'
import skills from '@/data/skills.json'
import photos from '@/data/photos.json'

describe('projects.json', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.length).toBeGreaterThan(0)
  })
  it('each project has required fields', () => {
    projects.forEach((p: any) => {
      expect(typeof p.name).toBe('string')
      expect(typeof p.description).toBe('string')
      expect(Array.isArray(p.tags)).toBe(true)
      expect(typeof p.url).toBe('string')
      expect(typeof p.featured).toBe('boolean')
    })
  })
})

describe('writing.json', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(writing)).toBe(true)
    expect(writing.length).toBeGreaterThan(0)
  })
  it('each item has required fields', () => {
    writing.forEach((w: any) => {
      expect(typeof w.title).toBe('string')
      expect(typeof w.description).toBe('string')
      expect(typeof w.url).toBe('string')
    })
  })
})

describe('oss.json', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(oss)).toBe(true)
    expect(oss.length).toBeGreaterThan(0)
  })
  it('each repo has name and prs array', () => {
    oss.forEach((r: any) => {
      expect(typeof r.repo).toBe('string')
      expect(Array.isArray(r.prs)).toBe(true)
      r.prs.forEach((pr: any) => {
        expect(typeof pr.number).toBe('number')
        expect(typeof pr.title).toBe('string')
        expect(typeof pr.url).toBe('string')
        expect(['Merged', 'Open']).toContain(pr.status)
      })
    })
  })
})

describe('skills.json', () => {
  it('has frameworks and softSkills arrays', () => {
    expect(Array.isArray((skills as any).frameworks)).toBe(true)
    expect(Array.isArray((skills as any).softSkills)).toBe(true)
  })
})

describe('photos.json', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(photos)).toBe(true)
    expect(photos.length).toBeGreaterThan(0)
  })
  it('each photo has required fields', () => {
    photos.forEach((p: any) => {
      expect(typeof p.filename).toBe('string')
      expect(typeof p.alt).toBe('string')
      expect(['landscape', 'portrait']).toContain(p.orientation)
      expect(typeof p.featured).toBe('boolean')
    })
  })
  it('has at least 3 featured photos', () => {
    // The home page 1+2 grid requires at least 3 featured photos (uses first 3).
    const featured = photos.filter((p: any) => p.featured)
    expect(featured.length).toBeGreaterThanOrEqual(3)
  })
  it('first featured photo is landscape orientation', () => {
    const featured = photos.filter((p: any) => p.featured)
    expect(featured[0].orientation).toBe('landscape')
  })
})
