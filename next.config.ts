import { NextConfig } from "next"

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  typedRoutes: true,
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://api.themoviedb.org/3/:path*",
      },
    ]
  },
}

export default nextConfig
