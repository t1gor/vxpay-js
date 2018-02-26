const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: ['babel-polyfill', 'url-polyfill', './src/main.js'],
	output: {
		path: path.resolve(__dirname, 'example'),
		filename: 'vxpay.min.js',
		library: 'VX'
	},
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
	devServer: {
		contentBase: path.resolve(__dirname, './example'),
		hot: true
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	plugins: [
		// new UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			filename: './example/index.html',
			template: './example/index.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};
