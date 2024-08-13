/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rikkei.edu.vn",
      },
    ],
  },
};

export default nextConfig;
