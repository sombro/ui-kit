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
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.ProgressPlugin(function(percentage, message) {
            var MOVE_LEFT = new Buffer('1b5b3130303044', 'hex').toString();
            var CLEAR_LINE = new Buffer('1b5b304b', 'hex').toString();
            process.stdout.write(CLEAR_LINE + Math.round(percentage * 100) + '% :' + message + MOVE_LEFT);
        }),
        function() {
            this.plugin('done', function(stats) {
                console.log(stats.toString({
                    chunks: false,
                    colors: true,
                }));
            });
        },
	],
};
