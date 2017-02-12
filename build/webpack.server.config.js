const webpack = require('webpack')
const base = require('./webpack.base.config')


module.exports = Object.assign({}, base, {
	target: 'node',
	// devtool: false,
	entry: './src/server-entry.js',
	output: Object.assign({}, base.output, {
		filename: 'server-bundle.js',
		libraryTarget: 'commonjs2'
	})
})