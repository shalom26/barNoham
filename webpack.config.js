"use strict";
const _ = require('lodash');
const path = require('path');
const ENV = require('./buildUtils/getEnv');

const config = {
	entry: {
		app: ['./src/vendor.js', './src/application.js']
	},
	context: __dirname,
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].js'

	},
	devtool: (ENV !== 'production') ? 'inline-source-map' : "sourcemap", // or null
	devServer: {
		port:8000,
		contentBase: './dist',
		proxy: {
			'/api*': {
				target: 'http://localhost:80'
			}
		}
	},
	resolve: {
		root: __dirname,
		alias: {
			angular: path.join(__dirname, './node_modules/angular/index.js')
		},
		modulesDirectories: ["node_modules", "bower_components"],
		externals: []
	},
	stats: {
		modules: true,
		chunks: true,
		reasons: true
	}
};
const plugins = require('./buildUtils/webpack.plugins')(ENV, __dirname);
config.plugins = _.values(plugins);
config.module = {
	loaders: _.values(require('./buildUtils/webpack.loaders')(ENV, plugins))
};
module.exports = config;

