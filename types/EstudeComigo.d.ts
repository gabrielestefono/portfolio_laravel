export interface EstudeComigo {
  topicos: Topico[];
}

export interface Topico {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "#006732" | "#15295f";
  slug: string;
  created_at: string;
  updated_at: string;
}