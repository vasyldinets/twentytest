const path = require('path');
const defaults = require('@wordpress/scripts/config/webpack.config.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

if ( process.env.NODE_ENV !== 'production' ) {
	defaults.plugins = [
    ...defaults.plugins,
    new BrowserSyncPlugin({
       proxy: process.env.DEVELOPMENT_SYNC_PROXY,
       host: 'localhost',
       port: 3000,
       open: 'local',
    }),
  ]
}

module.exports = {
  ...defaults,
  entry: {
    scripts: path.resolve( process.cwd(), 'src', 'index.tsx' )
  },
  output: {
    filename: '[name].js',
    path: path.resolve( process.cwd(), 'public' ),
  },
  module: {
    ...defaults.module,
    rules: [
      ...defaults.module.rules,
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json',
              transpileOnly: true,
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', ...(defaults.resolve ? defaults.resolve.extensions || ['.js', '.jsx'] : [])]
  }
};
