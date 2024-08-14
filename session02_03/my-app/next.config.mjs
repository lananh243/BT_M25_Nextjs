/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "www.websiteessentials.com.au",
      },
      {
        protocol: "https",
        hostname: "img.ws.mms.shopee.vn",
      },
    ],
  },
};

export default nextConfig;
