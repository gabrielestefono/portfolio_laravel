import { AuthenticationBackend } from "./AuthenticationBackend";

export interface TecnologiaPivot {
  projeto_id: number;
  tecnologia_id: number;
}

export interface Tecnologia {
  id: number;
  nome: string;
  created_at: string;
  updated_at: string;
  pivot: TecnologiaPivot;
}

export interface Categoria {
  id: number;
  nome: string;
  created_at: string;
  updated_at: string;
}

export interface Imagem {
  id: number;
  imageable_type: string;
  imageable_id: number;
  filename: string;
  created_at: string;
  updated_at: string;
}

export interface Projeto {
  id: number;
  nome: string;
  descricao_breve: string;
  descricao: string;
  link_github: string;
  link_site: string;
  categoria_id: number;
  created_at: string;
  updated_at: string;
  categoria: Categoria;
  tecnologias: Tecnologia[];
  imagens: Imagem[];
}

export class ProjetosBackend {
  private readonly auth: AuthenticationBackend;

  private readonly url: string;

  constructor() {
    this.auth = new AuthenticationBackend();
    this.url = this.auth.getUrl();
  }

  public async listarProjetos() {
    try {
      const token = await this.auth.getToken();
      const response = await fetch(`${this.url}project`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        return [];
      }
      const data: Projeto[] = await response.json();

      return data;
    } catch (error: unknown) {
      return error ? [] : [];
    }
  }
}
