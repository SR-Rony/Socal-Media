const express = require('express')
const route = express.Router()
const api = require('./api')
const basApi = "/api/v1"

// api url:http://localhost/api/v1
route.use(basApi,api)

// 404 route error
// route.use("/",(req,res,)=>{
//     res.send('welcome')
// })


module.exports = route