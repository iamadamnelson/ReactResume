export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string; // Internal Route link
  liveUrl?: string; // External Live Demo link
  repo?: string;
}

export interface InterestItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}