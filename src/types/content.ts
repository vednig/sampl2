// ─── Project ────────────────────────────────────────────────────────────────

export type ProjectCategory = 'Residential' | 'Commercial' | 'Interior' | 'Cultural'
export type ProjectStatus   = 'Completed' | 'In Progress' | 'Concept'

export interface ProjectImage {
  url:      string
  alt:      string
  caption?: string
}

export interface Project {
  id:               string
  title:            string
  slug:             string
  location:         string
  year:             number
  category:         ProjectCategory
  status:           ProjectStatus
  description:      string
  shortDescription: string
  images:           ProjectImage[]
  featured:         boolean
  area?:            string
  client?:          string
  tags?:            string[]
}

// ─── Service ────────────────────────────────────────────────────────────────

export interface Service {
  id:          string
  title:       string
  description: string
  details:     string[]
  icon:        string
}

// ─── Studio ─────────────────────────────────────────────────────────────────

export interface TeamMember {
  name:  string
  role:  string
  image: string
}

export interface TimelineEntry {
  year:        number
  title:       string
  description: string
}

export interface Award {
  year:  number
  title: string
  body:  string
}

export interface StudioPhilosophy {
  headline: string
  body:     string[]
}

export interface StudioData {
  architectName: string
  role:          string
  bio:           string[]
  philosophy:    StudioPhilosophy
  team:          TeamMember[]
  timeline:      TimelineEntry[]
  awards:        Award[]
}

// ─── Journal ────────────────────────────────────────────────────────────────

export type JournalBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading';   text: string; level: 2 | 3 }
  | { type: 'image';     url: string;  alt: string; caption?: string }
  | { type: 'quote';     text: string; attribution?: string }

export interface JournalPost {
  id:          string
  title:       string
  slug:        string
  date:        string
  category:    string
  excerpt:     string
  content:     JournalBlock[]
  coverImage:  string
  readTime:    number
  author:      string
}

// ─── Site Config ─────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href:  string
}

export interface SocialLinks {
  instagram?: string
  linkedin?:  string
  pinterest?: string
}

export interface ContactAddress {
  street:  string
  city:    string
  country: string
  zip:     string
}

export interface SiteConfig {
  studio: {
    name:        string
    tagline:     string
    description: string
    founded:     number
  }
  contact: {
    email:   string
    phone:   string
    address: ContactAddress
    social:  SocialLinks
  }
  seo: {
    defaultTitle:  string
    titleTemplate: string
    description:   string
    ogImage:       string
  }
  nav: NavItem[]
}
