/** @type {import("next").NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa"

const withPWA = withPWAInit({
  dest: "public"
})

export default withPWA({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
})
