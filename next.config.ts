/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',  // <-- เพิ่มบรรทัดนี้
      },
      {
        protocol: 'https',
        hostname: 'cmmworkspace.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'eldxcanxwvrnsvxkoaiv.supabase.co',
      },
    ],
  },
};
