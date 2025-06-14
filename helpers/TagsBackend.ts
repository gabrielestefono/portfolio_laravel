import { AuthenticationBackend } from "./AuthenticationBackend";

export class TagsBackend {
  private readonly auth: AuthenticationBackend;

  private readonly url: string;

  constructor() {
    this.auth = new AuthenticationBackend();
    this.url = this.auth.getUrl();
  }

  private async getTags(): Promise<string[]> {
    try {
      const token = await this.auth.getToken();
      const response = await fetch(`${this.url}tags`, {
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

  public async getAllTags(): Promise<string[]> {
    return await this.getTags();
  }
}
