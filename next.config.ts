import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SIGNING_SECRET: process.env.CLERK_WEBHOOK_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
  },
  reactStrictMode: true,
  /* config options here */
};

export default nextConfig;
