const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      process.env.NEXT_PUBLIC_APP_URL,
      `${process.env.NEXT_PUBLIC_S3_ENDPOINT}`.replace("https://", ""),
    ],
  },
};

const payloadConfig = {
  configPath: path.resolve(__dirname, "./payload/payload.config.ts"),

  // Point to your exported, initialized Payload instance (optional, default shown below`)
  payloadPath: path.resolve(process.cwd(), "./payload.ts"),
};

module.exports = withPayload(nextConfig, payloadConfig);
