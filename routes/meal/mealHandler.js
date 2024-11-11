const express = require('express')
const verifyJwt = require('../../controllers/validation/verifyJwt')
const postMeal = require('../../controllers/meal/postMeal')
const mealRouter = express.Router()

mealRouter.post('/add_meal', verifyJwt, postMeal)

module.exports = mealRouter