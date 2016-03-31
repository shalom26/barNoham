"use strict";
const webpack = require('webpack');
const args = require('yargs').argv;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const SplitByPathPlugin = require('webpack-split-by-path');


module.exports = function (ENV, rootPath) {
    const plugins = {

        'resolver': new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        ),
        "copy": new CopyWebpackPlugin([
            {from: path.join(rootPath, 'static'), to: ''},
        ]),
        "html": new HtmlWebpackPlugin({ // https://github.com/ampedandwired/html-webpack-plugin
            minify: (ENV === 'production') ? {removeComments: true} : false, // https://github.com/kangax/html-minifier#options-quick-reference
            hash: true,
            template: './buildUtils/index.tmpl.html',
            //     chunks:'viewer',  // for when doing webworkers
            filename: 'index.html'
        }),
        "define": new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(ENV)
            }
        })
    };

    if (ENV !== 'test') {
        plugins.extract = new ExtractTextPlugin("[name].css");
        plugins.moment = new webpack.ProvidePlugin({
            moment: "moment",
            "window.moment": "moment"
        });
        plugins.split = new SplitByPathPlugin([
            {name: 'vendor', path: path.join(rootPath, 'node_modules/')},
            {name: 'templates', path: [/\.html$/]}
        ]);
    }

    if (ENV === 'production') {
        console.log('adding production plugins!');
        plugins.clean = new CleanWebpackPlugin(['dist'], {
            root: rootPath,
            verbose: true,
            dry: false
        });

        plugins.occurance = new webpack.optimize.OccurenceOrderPlugin();
        plugins.deDupe = new webpack.optimize.DedupePlugin();
        plugins.uglify = new webpack.optimize.UglifyJsPlugin({
            compress: true,
            mangle: false,
            comments: false
        })
    }
    return plugins;
};