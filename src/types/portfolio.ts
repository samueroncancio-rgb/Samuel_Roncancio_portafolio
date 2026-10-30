export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  repoUrl: string
  liveUrl?: string
  image: string
  featured?: boolean
  category?: string
  accentColor?: string
  iconName?: 'database' | 'cpu' | 'trending-up' | 'code-2' | 'activity' | 'layers'
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location: string
  type: string
  achievements: string[]
  skills?: string[]
  current?: boolean
}

export interface SpecialtyItem {
  id: string
  title: string
  description: string
  iconName: 'sparkles' | 'server' | 'cpu' | 'workflow' | 'bot' | 'layout'
  highlightTags: string[]
  accentColor: string
}

export interface SkillItem {
  name: string
  highlight?: boolean
  category: string
}

export interface SkillCategory {
  id: string
  title: string
  iconName: 'bot' | 'server' | 'layout' | 'cloud' | 'users'
  description?: string
  skills: SkillItem[]
}

export interface EducationItem {
  id: string
  degree: string
  institution: string
  period: string
  details?: string
  status?: string
  badge?: string
}

export interface LanguageItem {
  language: string
  proficiency: string
  level: string
  note: string
}

export interface PersonalInfo {
  name: string
  logoText: string
  roleBadge: string
  title: string
  subtitle: string
  shortDescription: string
  aboutText: string
  profileImage: string
  resumeUrl: string
  location: string
  email: string
  phone: string
  whatsappUrl: string
  githubUrl: string
  linkedinUrl: string
  availabilityStatus: string
  statusActive: boolean
}

export interface NavItem {
  label: string
  href: string
}
