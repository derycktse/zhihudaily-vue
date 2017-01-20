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
		
	})

}

indexHTML = fs.readFileSync(resolve('./src/index.html'), 'utf-8')

// console.log(indexHTML)

app.get('*', (req, res) => {

	res.setHeader('ContentType', 'text/html')

	const context = {
		url: req.url
	}


	res.write(indexHTML)
	return res.end('hello world')
})


const port = process.env.PORT || 8081
app.listen(port, () => {
	console.log(`server started at localhost:${port}`)
})

console.log(process.env.PORT)