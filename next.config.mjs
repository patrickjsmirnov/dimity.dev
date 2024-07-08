/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
