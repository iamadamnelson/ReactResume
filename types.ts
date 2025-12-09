export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  repo?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}
