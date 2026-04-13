// src/types/index.ts

export interface Project {
  name: string
  description: string
  tags: string[]
  url: string
  featured: boolean
}

export interface WritingItem {
  title: string
  description: string
  url: string
}

export interface OSSPR {
  number: number
  title: string
  url: string
  status: 'Merged' | 'Open'
}

export interface OSSRepo {
  repo: string
  prs: OSSPR[]
}

export interface Skills {
  frameworks: string[]
  softSkills: string[]
}

export interface Photo {
  filename: string
  alt: string
  orientation: 'landscape' | 'portrait'
  featured: boolean
}
