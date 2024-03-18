import nrExternals from '@newrelic/next/load-externals';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    nrExternals(config, options);
    // Add any additional webpack config modifications here

    return config;
  },
};

export default nextConfig;
