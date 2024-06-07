const express = require('express')
const route = require('./routes')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
// api route
app.use(route)

module.exports = app