const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: ['babel-polyfill', './src/main.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'vxpay.min.js',
		library: 'VX'
	},
	watch: false,
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	plugins: [
		new UglifyJsPlugin()
	]
};
