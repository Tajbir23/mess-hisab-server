const express = require('express')
const signUp = require('../../controllers/user/signUp')

const app = express()
const userRouter = express.Router()

userRouter.post('/signup', signUp)

module.exports = userRouter