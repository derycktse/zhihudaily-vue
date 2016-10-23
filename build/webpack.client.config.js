const webpack = require('webpack')
const base = require('./webpack.base.config')
	// const vueConfig = require('./vue-loader.config')

const config = Object.assign({}, base, {
	plugins: (base.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'client-vendor-bundle.js'
		})
	])
})

console.log(config)
module.exports = config