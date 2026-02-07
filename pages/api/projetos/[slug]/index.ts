import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === "GET") {
    // Simulando dados de projetos
  }

  return response.status(405).json({ message: "Method Not Allowed" });
}
