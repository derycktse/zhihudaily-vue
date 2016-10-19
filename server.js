process.env.VUE_ENV = 'server'

const isProd = process.env.NODE_ENV === 'production'

const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const express = require('express')
const favicon = require('serve-favicon')
const serialize = require('serialize-javascript')