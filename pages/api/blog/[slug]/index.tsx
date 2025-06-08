import { BlogBackend } from "@/helpers/BlogBackend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const backend = new BlogBackend();
    const { slug } = req.query;
    if (typeof slug !== "string") {
      res.status(422);
      return;
    }
    return backend.getPost(res, slug);
  }
}
