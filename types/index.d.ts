export interface Dashboard {
  presentation: Presentation;
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
  initialDate: Date;
  projects: number;
  support: string;
}
