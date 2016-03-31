"use strict";

module.exports = function (ENV, plugins) {
	const TEST = (ENV === 'test');
	const loaders = {
		"angular": {
			test: require.resolve('angular'),
			loader: "expose?angular"
		},
		"es6": {
			test: /\.js$/,
			loader: 'babel',
			exclude: [/node_modules/, /bower_components/]
		},
		"html": {
			test: /\.html$/, loader: "html", query: {
				minimize: true
			}
		},
		"css": {test: /\.css$/, loader: TEST ? 'empty' : 'style!css?sourceMap'},
		"sass": {
			test: /\.scss/,
			loader: TEST ? 'empty' : plugins.extract.extract('style', 'css?sourceMap!sass?sourceMap') //'style!css?sourceMap!less?sourceMap'},
		},
		"woff": {
			test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?name=assets/fonts/[name].[ext]?[hash]&limit=10000&minetype=application/font-woff"
		},
		"woff2": {
			test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?name=assets/fonts/[name].[ext]?[hash]&limit=10000&minetype=application/font-woff"
		},
		"ttf": {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?name=assets/fonts/[name].[ext]?[hash]&limit=10000&minetype=application/octet-stream"
		},
		"eot": {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=assets/fonts/[name].[ext]?[hash]"},
		"svg": {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?name=assets/fonts/[name].[ext]?[hash]&limit=10000&minetype=image/svg+xml"
		},
		"png": {
			test: /\.png(\?.*)?$/,
			loader: "url?&name=assets/images/[name].[ext]?[hash]&limit=10000&mimetype=image/png"
		},
		"jpg": {
			test: /\.(jpeg|jpg)(\?.*)?$/,
			loader: "file?&name=assets/images/[name].[ext]?[hash]&mimetype=image/jpeg"
		},
		"gif": {
			test: /\.gif(\?.*)?$/,
			loader: "url?limit=10000&name=assets/images/[name].[ext]?[hash]&mimetype=image/gif"
		}
	};
	return loaders;
};