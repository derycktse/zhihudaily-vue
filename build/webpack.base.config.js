const path = require('path')


module.exports = {
	entry : {
		app : './src/client-entry.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name][chunkhash].js'

	}
}