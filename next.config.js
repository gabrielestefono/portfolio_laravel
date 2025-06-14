/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL("https://gabrielestefono.webestcoding.com.br/storage/**"),
      new URL("http://localhost:8000/storage/**"),
    ],
  },
};

module.exports = nextConfig;
