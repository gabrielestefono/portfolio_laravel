import { NextApiRequest, NextApiResponse } from "next";
import { AuthenticationBackend } from "./AuthenticationBackend";

interface PostPivot {
  post_id: number;
  tag_id: number;
}

export interface Tag {
  id: number;
  label: string;
  created_at: string;
  updated_at: string;
  pivot: PostPivot;
}

export interface Post {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  thumbnail_post: string;
  reading_time: number;
  slug: string;
  created_at: string;
  date: string;
  tags: Tag[];
}

export interface BlogPost {
  highlights: Post[];
  latestPosts: Post[];
  allTags: Tag[];
  slug?: string;
}

export class BlogBackend {
  private readonly auth: AuthenticationBackend;

  private readonly url: string;

  constructor() {
    this.auth = new AuthenticationBackend();
    this.url = this.auth.getUrl();
  }

  private defineQueryTags(query: NextApiRequest["query"]): string {
    if (!query?.["tag"]) {
      return "";
    }
    if (Array.isArray(query["tag"])) {
      return query["tag"]
        .map((tag, index) => (index === 0 ? `?tag=${tag}` : `&tag=${tag}`))
        .join("");
    }
    return `?tag=${query["tag"]}`;
  }

  private async posts(): Promise<BlogPost | undefined> {
    try {
      const token = await this.auth.getToken();
      const response = await fetch(`${this.url}posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        return undefined;
      }
      const data: BlogPost = await response.json();
      return data;
    } catch (error) {
      return undefined;
    }
  }

  private async postsWithParam(slug: string): Promise<BlogPost | undefined> {
    try {
      const token = await this.auth.getToken();
      const response = await fetch(`${this.url}posts/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        return undefined;
      }
      const data: BlogPost = await response.json();
      return data;
    } catch (error) {
      return undefined;
    }
  }

  private async post(res: NextApiResponse, slug: string): Promise<void> {
    if (!slug) {
      return res.status(422).json(["Busca inválida"]);
    }
    try {
      const token = await this.auth.getToken();
      const response = await fetch(`${this.url}post/${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        res.status(401);
        return;
      }
      const data: Post = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      });
    }
  }

  private async postList(
    res: NextApiResponse,
  ): Promise<{ slug: string; title: string }[]> {
    try {
      const token = await this.auth.getToken();
      const response = await fetch(`${this.url}post-list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        res.status(401).json({ error: "Unauthorized access" });
        return [];
      }
      const data: { slug: string; title: string }[] = await response.json();
      res.status(200).json(data);
      return data;
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      });
      return [];
    }
  }

  public async getPosts(): Promise<BlogPost | undefined> {
    return await this.posts();
  }

  public async getPostsWithParams(slug: string): Promise<BlogPost | undefined> {
    return await this.postsWithParam(slug);
  }

  public async getPost(res: NextApiResponse, slug: string): Promise<void> {
    return await this.post(res, slug);
  }

  public async getPostList(
    res: NextApiResponse,
  ): Promise<{ slug: string; title: string }[]> {
    return await this.postList(res);
  }
}
