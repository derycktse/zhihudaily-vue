const webpack = require('webpack')
const base = require('./webpack.base.config')
// const vueConfig = require('./vue-loader.config')

const config = Object.assign({}, base, {
	plugins : (base.plugins || []).concat([])
})

console.log(config)
module.exports = config