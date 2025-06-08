import { Backend } from "@/helpers/RoadmapBackend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "GET") {
    const backend = new Backend();
    const query = request.query;
    const { slug } = query as { slug: string | null | undefined };
    if (!slug) {
      return response.status(400);
    }
    return await backend.roadmaps(slug, response);
  }
}
