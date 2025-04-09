/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "aba57f763df38f62713ad7584ba232dc.r2.cloudflarestorage.com",
        pathname: '/drdubey-events-media/**',
      }
    ],
    domains: ['placehold.co'],
  },
};

module.exports = nextConfig;
