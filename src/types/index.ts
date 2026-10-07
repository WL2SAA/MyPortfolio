export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'AI & Agents' | 'Tools & Platforms' | 'Games & Web' | 'Wallpapers';
  link: string;
  github?: string;
  tags: string[];
  featured?: boolean;
  status: 'Live' | 'In Progress' | 'Open Source' | 'Sunsetted';
  highlight?: string;
}

export interface Venture {
  id: string;
  name: string;
  tagline: string;
  description: string;
  link: string;
  status: 'Active' | 'In Development' | 'Parent Company' | 'Shut Down';
  role: string;
  tags: string[];
  metrics?: string;
  accent: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    description?: string;
    featured?: boolean;
  }[];
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: string;
  copyable?: boolean;
  badge?: string;
}

export interface TerminalCommand {
  command: string;
  description: string;
  output: string | string[] | React.ReactNode;
}
