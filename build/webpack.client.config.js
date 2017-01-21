const webpack = require('webpack')
const base = require('./webpack.base.config')

const config = Object.assign({}, base, {
	plugins: (base.plugins || []).concat([
		// new webpack.DefinePlugin({
		// 	'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV || 'development'),
		// 	'process.env.VUE_ENV' : '"client"'
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name : 'vendor'
		// }),
		// //generate output HTML
		// new HTMLPlugin({
		// 	template : 'src/index.template.html'
		// })
	])
})


module.exports = config