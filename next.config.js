const path = require('path');


/** @type {import('next').NextConfig} */
const nextConfig = {
  // see https://vercel.com/guides/troubleshooting-function-250mb-limit
  // and https://nextjs.org/docs/app/api-reference/config/next-config-js/output#caveats
  outputFileTracingExcludes: {
      '/': [
        'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/linux/x64/libonnxruntime.so.1',
        'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/linux/x64/libonnxruntime.so.1.20.1',
        'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/linux/x64/libonnxruntime.so.1.*',
      ],
  },
  outputFileTracingIncludes: {
      '/': [
        // 'node_modules/@huggingface/transformers/**/libonnxruntime.so.1',
      ],
  },

  // Indicate that these packages should not be bundled by webpack
  // serverExternalPackages: [
  //   "onnxruntime-node",
  //   "@huggingface/transformers",
  //   // "sharp",
  // ],
  // webpack: (config) => {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       "onnxruntime-node": path.join(__dirname, 'node_modules/onnxruntime-node/dist/bindkjhings.js'),
  //     }

  //     return config;
  // },
};

module.exports = nextConfig;
