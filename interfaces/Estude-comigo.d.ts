export interface Roadmap {
  id: number;
  height: number;
  label: string;
  slug: string;
  id_category: number;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  created_at: string;
  updated_at: string;
  roadmap: Roadmap;
}
