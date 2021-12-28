import path from 'path';

const tmplLoaderPath = path.resolve('adblockplusui', 'adblockpluschrome', 'build', 'utils', 'wp-template-loader');

export default {
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(''),
  },
  node: {
    global: false,
  },
  resolve: {
    alias: {
      events$: 'events.js',
      punycode$: 'punycode.js',
      url$: 'url.js',
      prefs: path.resolve('', 'adblockplusui/adblockpluschrome/lib/prefs.js'),
      './options': path.resolve('', 'adblock-betafish/alias/options.js'),
      './icon': path.resolve('', 'adblock-betafish/alias/icon.js'),
      subscriptionInit: path.resolve('', 'adblock-betafish/alias/subscriptionInit.js'),
      './filterListener': path.resolve('', 'adblock-betafish/alias/filterListener.js'),
      './requestBlocker.js': path.resolve('', 'adblock-betafish/alias/requestBlocker.js'),
      uninstall: path.resolve('', 'adblock-betafish/alias/uninstall.js'),
      './recommendations': path.resolve('', 'adblock-betafish/alias/recommendations.js'),
      notificationHelper: path.resolve('', 'adblock-betafish/alias/notificationHelper.js'),
    },
    modules: [
      'adblockplusui/adblockpluschrome/lib',
      'adblockplusui/adblockpluschrome/adblockpluscore/lib',
      'adblockplusui/lib',
      'build/templates',
      'node_modules',
    ],
  },
  resolveLoader: {
    alias: {
      'wp-template-loader': tmplLoaderPath,
    },
  },
};
