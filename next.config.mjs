/** @type {import('next').NextConfig} */
const nrExternals = require('@newrelic/next/load-externals')
const nextConfig = {
  reactStrictMode: true,
  webpack: nrExternals 
};


export default nextConfig;
