const path = require('path')
const webpack = require('webpack')

// const webConfig = require('./vue-loader.config')


module.exports = {

	entry: {
		app: './src/client-entry.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: 'client-bundle.js'
	},
	module: {

	}
}