const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  devtool : "source-maps",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
           
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: [{
              loader: 'style-loader' // inject CSS to page
               
              }, {
              loader: 'css-loader' // translates CSS into CommonJS modules
               
              },
              {
              loader: 'sass-loader' ,// compiles Sass to CSS
              options: {
                sourceMap: true
              }
            }
          ]
    
    }
  ]
  }
};