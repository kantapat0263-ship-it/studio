import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Type errors now fail the build so broken code can't ship.
  eslint: {
    // No ESLint config is set up in this project yet; skip it during builds
    // rather than failing. Add eslint-config-next to enable linting here.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img2.pic.in.th',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img1.pic.in.th',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
