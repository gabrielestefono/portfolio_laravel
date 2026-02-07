// @ts-nocheck

interface LoginResponse {
  token: string;
}

export class AuthenticationBackend {
  private readonly email: string;

  private readonly password: string;

  private readonly url: string;

  public readonly frontendUrl: string|undefined;

  constructor() {
    const url = process.env.BACKEND_URL;
    const password = process.env.BACKEND_PASSWORD;
    const email = process.env.BACKEND_EMAIL;
    this.frontendUrl = process.env.FRONTEND_URL;
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
      return error ? "Erro de rede ou servidor" : "Erro desconhecido";
    }
  }

  public async getToken(): Promise<string> {
    return this.login();
  }

  public getUrl(): string {
    return this.url;
  }
}
