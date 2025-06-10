/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "gabrielestefono.webestcoding.com.br"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "gabrielestefono.webestcoding.com.br",
        pathname: "/storage/**",
      },
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 439, 512],
  },
};

module.exports = nextConfig;
