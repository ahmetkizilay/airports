module.exports = {
  entry: './app/index.jsx',
  output: {
    filename: 'bundle.js',
    path: 'assets/',
    publicPath: 'http://localhost:8080/'
  },
  module: {
    loaders: [{
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      }
    ]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['', 'js', 'jsx']
  }
}
