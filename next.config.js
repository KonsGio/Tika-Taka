/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
      // Link found in error page under image hostname add this here
      // images:{
      //   domains:['avatars.githubusercontent.com']
      // }

  images:{
    domains:['avatars.githubusercontent.com']
  }
}

module.exports = nextConfig
