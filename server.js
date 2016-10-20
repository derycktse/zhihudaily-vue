/*jshint esversion: 6 */

process.env.VUE_ENV = 'server'

const isProd = process.env.NODE_ENV === 'production'

const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const express = require('express')
// const favicon = require('serve-favicon')
// const serialize = require('serialize-javascript')



const app = express()

const html = (() => {
	const template =  fs.readFileSync(resolve('./index.html'), 'utf-8')
	const i = template.indexOf('{{ APP }}')
	const style = isProd ? '<link rel="stylesheet" href="/dist/styles.css">' : '' 

	return {
		head : template.slice(0, i ).replace('{{ STYLE }}', style),
		tail : template.slice(i + '{{ APP }}'.length)
	}
})()

console.log('isProd:'+isProd)