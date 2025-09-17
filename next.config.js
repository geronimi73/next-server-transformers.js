/** @type {import('next').NextConfig} */
const nextConfig = {
  // see https://vercel.com/guides/troubleshooting-function-250mb-limit
  // and https://nextjs.org/docs/app/api-reference/config/next-config-js/output#caveats
  outputFileTracingExcludes: {
      '/': [
        // 'node_modules/@huggingface/transformers/**/*.so',
        // 'node_modules/@huggingface/transformers/.cache',
        // 'node_modules/@huggingface/transformers/.cache/*',
        // 'node_modules/@huggingface/transformers/.cache/**/*',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/build',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/build/*',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/.cache/*',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/dist/*',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/lib/*',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/darwin/*',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/darwin/**/*',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/darwin/**',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/win32/*',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/win32/**/*',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/win32/**',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/linux/arm64/*',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/linux/x64/*',
        // 'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/linux/x64/onnxruntime_binding.node',
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
