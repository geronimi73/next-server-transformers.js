/** @type {import('next').NextConfig} */
const nextConfig = {
  // see https://vercel.com/guides/troubleshooting-function-250mb-limit
  // and https://nextjs.org/docs/app/api-reference/config/next-config-js/output#caveats
  outputFileTracingExcludes: {
      '/': [
        'node_modules/@huggingface/transformers/node_modules/onnxruntime-node',
      ],
  },
  outputFileTracingIncludes: {
      '/': [
        // 'node_modules/@huggingface/transformers/**/libonnxruntime.so.1',
      ],
  },

  // Indicate that these packages should not be bundled by webpack
  // serverExternalPackages: [
    // "onnxruntime-node",
    // "@huggingface/transformers",
    // "sharp",
  // ],
  webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        // "onnxruntime-node": path.join(__dirname, 'node_modules/@huggingface/transformers/node_modules/onnxruntime-web/dist/ort.all.bundle.min.mjs'),
        "onnxruntime-node": false,
      }

      return config;
  },


};

module.exports = nextConfig;
