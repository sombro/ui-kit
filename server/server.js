/* eslint-disable no-var, strict */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../configs/webpack.config.js');

new WebpackDevServer(webpack(config), {
	quiet: false,
	noInfo: true,
	stats: {
		colors: true
	},
}).listen(5000, 'localhost', function (err) {
	if (err) {
	  console.log(err);
	}
	console.log('Listening at localhost:5000');
  });
