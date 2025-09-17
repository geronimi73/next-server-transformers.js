/** @type {import('next').NextConfig} */
const nextConfig = {
  // see https://vercel.com/guides/troubleshooting-function-250mb-limit
  // and https://nextjs.org/docs/app/api-reference/config/next-config-js/output#caveats
  outputFileTracingExcludes: {
      '/': [
        'node_modules/@huggingface/transformers/node_modules/onnxruntime-node/bin/napi-v3/linux/x64/!(libonnxruntime.so.1|onnxruntime_binding.node)',
      ],
  },
};

module.exports = nextConfig;
