/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.apnascanner.com",
      },
    ],
  },
};

module.exports = nextConfig;
