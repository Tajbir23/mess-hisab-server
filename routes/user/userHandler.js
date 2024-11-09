const express = require('express')
const signUp = require('../../controllers/user/signUp')
const verifyJwt = require('../../controllers/validation/verifyJwt')
const getUserData = require('../../controllers/user/getUserData')
const login = require('../../controllers/user/login')

const userRouter = express.Router()

userRouter.post('/signup', signUp)
userRouter.post('/login', login)
userRouter.get('/user', verifyJwt, getUserData)

module.exports = userRouter