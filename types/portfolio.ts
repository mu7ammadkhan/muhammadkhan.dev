export type Project = {
  id: string;
  title: string;
  year: string;
  category: string;
  headline: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  role: string[];
  technologies: string[];
  features: string[];
  image: string;
  featured?: boolean;
  commercial?: boolean;
};
