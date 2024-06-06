const express = require('express')
const route = express.Router()
const api = require('./api')
const basApi = process.env.BASE_API_URL

route.use(basApi,api)

// 404 route error
route.use("*",(req,res,next)=>{
    res.send('404 route is not found')
    next()
})


module.exports = route