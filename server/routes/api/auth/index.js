const { getUser, registerUser } = require('../../../controllers/authController')

const auth = require('express').Router()

auth.post("/register",registerUser)
auth.get("/user",getUser)


module.exports = auth