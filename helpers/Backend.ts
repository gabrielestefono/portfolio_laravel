import { NextApiResponse } from "next";

interface LoginResponse {
  token: string;
}

interface Category {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  created_at: string;
  updated_at: string;
}

interface Roadmap {
  id: number;
  height: number;
  label: string;
  slug: string;
  category_id: number;
  created_at: string;
  updated_at: string;
}

export class Backend {
  private readonly email: string;
  private readonly password: string;
  private readonly url: string;

  constructor() {
    const url = process.env.BACKEND_URL;
    const password = process.env.BACKEND_PASSWORD;
    const email = process.env.BACKEND_EMAIL;
    if (!url || !password || !email) {
      throw new Error("Credenciais não encontradas!");
    }
    this.email = email;
    this.password = password;
    this.url = url;
  }

  private async login(): Promise<string> {
    try {
      const response = await fetch(`${this.url}auth/login`, {
        method: "POST",
        body: JSON.stringify({ email: this.email, password: this.password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        return "Falha ao autenticar";
      }

      const data: LoginResponse = await response.json();
      return data.token;
    } catch (error) {
      console.error(error);
    }
  }

  public async categories(): Promise<Category[] | string> {
    try {
      const token = await this.login();
      const response = await fetch(`${this.url}category`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        return "Categoria não encontrada!";
      }

      const data: Category[] = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  public async roadmaps(slug: string, res: NextApiResponse): Promise<void> {
    try {
      const token = await this.login();
      const response = await fetch(`${this.url}roadmap/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        res.status(404).end();
        return;
      }

      const data: Roadmap = await response.json();
      res.status(200).json(data);
      return;
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
