import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    traceIgnore: [
      "node_modules/@fontsource/**",
      "node_modules/animate.css/**",
      "node_modules/swiper/**",
      "node_modules/gsap/**",
      "node_modules/@fancyapps/**",
      "node_modules/isotope-layout/**",
      "node_modules/react-icons/**",
      "node_modules/react-multi-carousel/**",
      "node_modules/yet-another-react-lightbox/**",
    ],
  },
};

export default nextConfig;