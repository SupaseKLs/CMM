module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://x4ehc5amz7.execute-api.ap-southeast-2.amazonaws.com/vfx/:path*', // Forward to your API
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cmmworkspace.blob.core.windows.net',
      },
    ],
  },
};
