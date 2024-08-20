/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "topdev.vn",
      },
      {
        protocol: "https",
        hostname: "resources.iostream.co",
      },
      {
        protocol: "https",
        hostname: "cdn2.fptshop.com.vn",
      },
      {
        protocol: "https",
        hostname: "cdn2.fptshop.com.vn",
      },
    ],
  },
};

export default nextConfig;
