export interface Dashboard {
  presentation: Presentation;
  skills: Skills;
  projects: Project[];
}

export interface Presentation {
  presentationTop: PresentationTop;
  presentationBottom: PresentationBottom;
}

export interface PresentationTop {
  greating: string;
  profession: string;
  description: Description[];
}

export interface Description {
  id: number;
  text: string;
}

export interface PresentationBottom {
  initialDate: number;
  projects: number;
  support: string;
}

export interface Skills {
  SkillsElements: SkillsElement[];
}

export interface SkillsElement {
  id: number;
  image: string;
  title: string;
  text: string;
  alt: string;
}

export interface Project {
  id: number;
  image: string;
  alt: string;
  title: string;
  link: string;
}
