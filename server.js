const fs = require('fs')
const path = require('path')
const express = require('express')
const resolve = file => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENV === 'production'


const app = express()

//读取模版的信息
let indexHTML
let renderer

if (isProd) {} else {
	require('./build/setup-dev-server')(app, {
		bundleUpdated: bundle => {
			renderer = createRenderer(bundle)
		},
		indexUpdated: index => {
			indexHTML = parseIndex(index)
		}

	})

}

function createRenderer(bundle) {
	return require('vue-server-renderer').createBundleRenderer(bundle, {

	})

}

function parseIndex(template) {
	const contentMarker = '<!-- APP -->'
	const i = template.indexOf(contentMarker)
	return {
		head: template.slice(0, i),
		tail: template.slice(i + contentMarker.length)
	}
}

// indexHTML = fs.readFileSync(resolve('./src/index.html'), 'utf-8')

// console.log(indexHTML)

app.get('*', (req, res) => {

	if (!renderer) {
		return res.end('waiting for compilation... refresh in a moment.')
	}

	res.setHeader('ContentType', 'text/html')

	const context = {
		url: req.url
	}
	const renderStream = renderer.renderToStream(context)

	renderStream.once('data', () => {
		res.write(indexHTML.head +'<!-- deryck header text test -->')
	})

	renderStream.on('data', chunk => {
		res.write(chunk)
	})

	renderStream.on('end', () => {
		res.end(indexHTML.tail)
	})



})


const port = process.env.PORT || 8081
app.listen(port, () => {
	console.log(`server started at localhost:${port}`)
})

console.log(process.env.PORT)