/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firstdrops.ng",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "firstdrops.ng",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost:**",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
}

export default nextConfig
