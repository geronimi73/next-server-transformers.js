/** @type {import('next').NextConfig} */
const nextConfig = {
  // see https://vercel.com/guides/troubleshooting-function-250mb-limit
  // and https://nextjs.org/docs/app/api-reference/config/next-config-js/output#caveats
  outputFileTracingExcludes: {
      '/': [
        'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/*',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/linux/x64/onnxruntime_binding.node',
      ],
  },
  outputFileTracingIncludes: {
      '/': [
        'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/linux/x64/*',
      ],
  },

  // Indicate that these packages should not be bundled by webpack
  // serverExternalPackages: [
    // "onnxruntime-node",
    // "@huggingface/transformers",
    // "sharp",
  // ],
};

module.exports = nextConfig;
