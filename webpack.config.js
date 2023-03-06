const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  plugins: [
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/service-worker.ts',
      swDest: 'service-worker.js',
    }),
  ],
};
