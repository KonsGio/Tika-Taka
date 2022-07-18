/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors:true,
  },
  reactStrictMode: true,
  swcMinify: true,
      // Link found in error page under image hostname add this here
      // images:{
      //   domains:['avatars.githubusercontent.com']
      // }

  images:{
    domains:['avatars.githubusercontent.com',
    'lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
