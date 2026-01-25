import { BlogBackend } from "@/helpers/BlogBackend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const backend = new BlogBackend();
    return await backend.getPostList(res);
  }
}
