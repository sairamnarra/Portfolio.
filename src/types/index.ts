export type CertificateCategory = 'all' | 'ai-ml' | 'data' | 'programming' | 'publication';

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  partner?: string;
  date: string;
  category: CertificateCategory;
  duration?: string;
  credentialId?: string;
  description: string;
  pdfUrl: string;
  previewImageUrl?: string;
  skills: string[];
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metrics?: string;
  tags: string[];
  highlights: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  publicationUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'internship' | 'academic' | 'project';
  description: string;
  highlights: string[];
  techStack: string[];
  certificate?: Certificate;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  honor?: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
