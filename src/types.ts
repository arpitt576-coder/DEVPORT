export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: number;
}
