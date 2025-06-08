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
  searched: boolean;
  queryString: string;
  query: { tag: string[] };
}

export class BlogBackend {
  private readonly auth: AuthenticationBackend;

  private readonly url: string;

  constructor() {
    this.auth = new AuthenticationBackend();
    this.url = this.auth.getUrl();
  }

  private defineQueryTags(query: NextApiRequest["query"]): string {
    if (!query?.tag) {
      return "";
    }
    if (Array.isArray(query.tag)) {
      return query.tag
        .map((tag, index) => (index === 0 ? `?tag=${tag}` : `&tag=${tag}`))
        .join("");
    }
    return `?tag=${query.tag}`;
  }

  private async posts(
    res: NextApiResponse,
    query: NextApiRequest["query"]
  ): Promise<void> {
    const queryTags = this.defineQueryTags(query);
    try {
      const token = await this.auth.getToken();
      const response = await fetch(`${this.url}posts${queryTags}`, {
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
      const data: BlogPost = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error),
      });
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

  public async getPosts(
    res: NextApiResponse,
    query: NextApiRequest["query"]
  ): Promise<void> {
    return await this.posts(res, query);
  }

  public async getPost(res: NextApiResponse, slug: string): Promise<void> {
    return await this.post(res, slug);
  }
}
