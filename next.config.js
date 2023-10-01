const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      process.env.NEXT_PUBLIC_APP_URL,
      `${process.env.NEXT_PUBLIC_S3_ENDPOINT}`.replace("https://", ""),
      "picsum.photos",
    ],
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(glsl|frag|vert)$/,
        use: [require.resolve("raw-loader"), require.resolve("glslify-loader")],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

// Potential fix integrated here
if (nextConfig.experimental) {
  const index = nextConfig.experimental.outputFileTracingIgnores?.indexOf(
    "node_modules/sharp/**/*"
  );
  if (index !== -1) {
    nextConfig.experimental.outputFileTracingIgnores.splice(index, 1);
  }
}

const payloadConfig = {
  configPath: path.resolve(__dirname, "./payload/payload.config.ts"),
  payloadPath: path.resolve(process.cwd(), "./payload.ts"),
};

const sentryConfig = withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: "barryandjamie",
    project: "alphe-nero",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
  }
);

module.exports = withPayload(sentryConfig, payloadConfig);
