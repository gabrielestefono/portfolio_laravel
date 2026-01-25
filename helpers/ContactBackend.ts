import { NextApiRequest, NextApiResponse } from "next";
import { AuthenticationBackend } from "./AuthenticationBackend";

export class ContactBackend {
  private readonly auth: AuthenticationBackend;

  private readonly url: string;

  constructor() {
    this.auth = new AuthenticationBackend();
    this.url = this.auth.getUrl();
  }

  public async createContact(
    request: NextApiRequest,
    response: NextApiResponse,
  ): Promise<any> {
    try {
      const token = await this.auth.getToken();
      const result = await fetch(`${this.url}contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(request.body),
      });
      if (!result.ok) {
        response.status(result.status).end();
      }
      const data = await result.json();
      return response.status(201).json(data);
    } catch (error) {
      return response.status(500).end();
    }
  }
}
