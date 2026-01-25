import { ContactBackend } from "@/helpers/ContactBackend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === "POST") {
    const backend = new ContactBackend();
    return await backend.createContact(request, response);
  }
}
