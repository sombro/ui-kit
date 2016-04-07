/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:5000',
		'webpack/hot/dev-server',
		'./client/'
	],
	output: {
		path: '/build/',
		filename: 'index.js'
	},
	resolve: {
		root: [
			path.resolve('./client/'),
		],
	},
	devtool: '#inline-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file',
            },
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loaders: ['babel'],
			},
			{
                test: /\.json$/,
                loaders: ['json'],
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss'],
            },
            {
                test: /\.scss/,
                loaders: ['style', 'css', 'postcss', 'resolve-url', 'sass'],
            },
		]
	},
	postcss: function () {
		return [
			autoprefixer({ browsers: ['last 2 versions', 'ie 9'] }),
		]
	},
};
