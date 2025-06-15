import { NextApiResponse } from "next";
import { AuthenticationBackend } from "./AuthenticationBackend";
import { Category, Roadmap } from "@/interfaces/Estude-comigo";

export class RoadmapBackend {
  private readonly auth: AuthenticationBackend;

  private readonly url: string;

  constructor() {
    this.auth = new AuthenticationBackend();
    this.url = this.auth.getUrl();
  }

  public async categories(): Promise<Category[]> {
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
        return [];
      }

      const data: Category[] = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  }

  public async getRoadmapsSlugs(): Promise<string[]> {
    try {
      const token = await this.auth.getToken();
      const response = await fetch(`${this.url}roadmaps`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        return [];
      }

      const data: string[] = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  }

  public async roadmap(slug: string): Promise<Roadmap | undefined> {
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
        return undefined;
      }

      const data: Roadmap = await response.json();
      return data;
    } catch (error) {
      return undefined;
    }
  }
}
