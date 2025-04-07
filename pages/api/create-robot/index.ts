// pages/api/hello.js

export default function handler(req, res) {
  // Verifica o método HTTP
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello, world!' });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
