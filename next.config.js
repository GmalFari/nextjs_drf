/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains:[
      // 'bayut-production.s3.eu-central-1.amazonaws.com',
    'fortestmimd.pythonanywhere.com','photos.app.goo.gl',
    'upcdn.io',
    'upload.io',
  ]
  } ,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },

}

module.exports = nextConfig
