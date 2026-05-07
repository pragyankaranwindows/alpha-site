/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repo name is 'alpha-site', add the basePath:
  // basePath: '/alpha-site', 
};

export default nextConfig;
