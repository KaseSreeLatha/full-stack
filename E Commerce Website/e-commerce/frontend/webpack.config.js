// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans up the output directory on each build
  },

  // Mode can be set to 'development' for dev builds or 'production' for production builds
  mode: 'development', // Set to 'production' for a production build

  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Matches JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JSX and modern JS features
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Matches CSS files
        use: [
          'style-loader', 
          'css-loader', 
          {
            loader: 'postcss-loader', // Enables PostCSS
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i, // Matches image files
        type: 'asset/resource', // Handles images
      },
    ],
  },

  // Development server configuration
  devServer: {
    static: path.resolve(__dirname, 'public'), // Serves static files from the public directory
    port: 3000, // Port number for the development server
    open: true, // Opens the browser on server start
    historyApiFallback: true, // Enables client-side routing compatibility
  },

  // Plugins configuration
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template HTML file
      favicon: './public/favicon.ico', // Path to favicon
    }),
  ],

  // Resolve settings for module imports
  resolve: {
    extensions: ['.js', '.jsx'], // Allows importing files without specifying their extension
  },
};
