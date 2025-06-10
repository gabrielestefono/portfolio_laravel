/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["gabrielestefono.webestcoding.com.br"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 439, 512, 1080],
  },
};

module.exports = nextConfig;
