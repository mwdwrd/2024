/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  sassOptions: {
    includePaths: ['./styles'],
    prependData: `@import "@/styles/mixins.scss";`,
  },
};

export default nextConfig;
