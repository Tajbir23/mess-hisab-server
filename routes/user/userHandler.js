const express = require('express')
const signUp = require('../../controllers/user/signUp')
const verifyJwt = require('../../controllers/validation/verifyJwt')
const getUserData = require('../../controllers/user/getUserData')
const login = require('../../controllers/user/login')
const getAllUserData = require('../../controllers/user/getAllUserData')
const updateUserStatus = require('../../controllers/user/updateUserStatus')
const updateUserRole = require('../../controllers/user/updateUserRole')
const updateWallet = require('../../controllers/user/updateWallet')

const userRouter = express.Router()

userRouter.post('/signup', signUp)
userRouter.post('/login', login)
userRouter.get('/user', verifyJwt, getUserData)
userRouter.get('/users', verifyJwt, getAllUserData)
userRouter.patch('/update-status/:id', verifyJwt, updateUserStatus)
userRouter.patch('/update-role/:id', verifyJwt, updateUserRole)
userRouter.patch('/update-wallet/:userId', verifyJwt, updateWallet)

module.exports = userRouter