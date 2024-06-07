const express = require('express')
const route =express.Router()
const authRoute = require('./auth')

// api url:http://localhost/api/v1/auth
route.use('/auth',authRoute)

route.get("/",(req,res)=>{
    res.send('welcome to my server')
})

module.exports = route