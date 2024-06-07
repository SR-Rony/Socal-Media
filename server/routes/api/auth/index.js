const auth = require('express').Router()
const { getUser, registerUser } = require('../../../controllers/userController')


auth.post("/register",registerUser)
auth.get("/user",getUser)


module.exports = auth