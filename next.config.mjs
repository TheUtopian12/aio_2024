
const nextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.themoviedb.org',

      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org'
      }
    ],
  },
};

export default nextConfig;
