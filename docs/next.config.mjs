/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.buymeacoffee.com",
      },
    ],
    unoptimized: true,
  },
  output: "export",
  distDir: "page",
  basePath:
    process.env.NODE_ENV === "production" ? "/gabriel-logan" : undefined,
};

export default nextConfig;
