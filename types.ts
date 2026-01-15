import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  tech: string[];
  description: string;
  result: string;
  demoLink?: string;
  image: string;
  // New fields for detailed view
  problem: string;
  solution: string;
  features: string[];
  githubLink?: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}