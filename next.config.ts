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
    domains: ['images.unsplash.com', 'cmmworkspace.blob.core.windows.net'], // ✅ แก้ไขให้ถูกต้อง
  },
};
