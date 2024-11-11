const express = require('express')
const verifyJwt = require('../../controllers/validation/verifyJwt')
const postMeal = require('../../controllers/meal/postMeal')
const getMeals = require('../../controllers/meal/getMeals')
const mealRouter = express.Router()

mealRouter.post('/add_meal', verifyJwt, postMeal)
mealRouter.get("/meals", getMeals)
module.exports = mealRouter