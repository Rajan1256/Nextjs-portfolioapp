/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

//module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  images: {
      domains: ["q3hwxssz.directus.app"],
      //formats: ["image/webp"],
  },
};
