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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
