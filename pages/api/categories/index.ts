import { Backend } from "@/helpers/Backend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const backend = new Backend();
    const categories = await backend.categories();
    return res.json(categories);
  }
}
