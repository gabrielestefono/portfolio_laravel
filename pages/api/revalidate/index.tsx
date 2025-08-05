import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Verifique um token de segurança opcional
  const token = req.query.secret;
  if (token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const path = req.query.path as string;

    if (!path) {
      return res.status(400).json({ message: 'Path is required' });
    }

    // Força a revalidação da página especificada
    await res.revalidate(path);

    return res.json({ revalidated: true, path });
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Error revalidating', error: err });
  }
}
