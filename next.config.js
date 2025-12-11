/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
};

export default nextConfig;
