import { ProjetosBackend } from "@/helpers/ProjetosBackend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === "GET") {
    const projetosClass = new ProjetosBackend();

    const data = await projetosClass.listarProjetos();

    return response.status(200).json(data);
  }

  return response.status(405).json({ message: "Method Not Allowed" });
}
