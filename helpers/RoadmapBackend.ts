import { NextApiResponse } from "next";
import { AuthenticationBackend } from "./AuthenticationBackend";
import { Category, Roadmap } from "@/interfaces/Estude-comigo";

export class Backend {
  private readonly auth: AuthenticationBackend;

  private readonly url: string;

  constructor() {
    this.auth = new AuthenticationBackend();
    this.url = this.auth.getUrl();
  }

  public async categories(): Promise<Category[] | string> {
    try {
      const token = await this.auth.getToken();
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
      const token = await this.auth.getToken();
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
