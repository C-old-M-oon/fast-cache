/* 
* @Author: leeZ
* @Date:   2018-06-13 21:36:36
* @Last Modified by:   leeZ
* @Last Modified time: 2018-06-13 21:38:30
*/

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './release/bundle.js'
  },
  module: {
    rules: [{
      test: '/\.js?$/',
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  }
}