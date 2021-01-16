
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: "development",
  target: "web",
  externals: {
    ammo: "src/ammo/ammo.js"
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/index.html', to: 'index.html' },
        { from: 'src/index.css', to: 'index.css' },
        { from: 'src/ammo', to: 'ammo' }
      ],
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      }
    ]
  }
};