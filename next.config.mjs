/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve source images directly (no server-side /_next/image sharp step).
    // Faster first paint for image-heavy marketing pages; swap to optimized
    // once real, self-hosted photography is in place.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
