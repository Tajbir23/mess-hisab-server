const mealModel = require("../../models/mealSchema")
const userModel = require("../../models/userSchema")

const postMeal = async(req, res) => {
    const body = req.body
    const {id} = req.user
    const date = new Date().toISOString().slice(0,10)
    try {
        if(body.breakfast){
            await mealModel.create({user: id, date: date, breakfast: body.breakfast})
            await userModel.findByIdAndUpdate(id, {todayBreakfast: true})
        }
        if(body.dinner){
            await mealModel.create({user: id, date: date, dinner: body.dinner})
            await userModel.findByIdAndUpdate(id, {todayDinner: true})
        }
        if(body.extraCost){
            await mealModel.create({user: id, date: date, extraCost: body.extraCost})
            await userModel.findByIdAndUpdate(id, {todayExtraCost: true})
        }
        res.status(200).send({
            message: "Meal added successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Something went wrong"
        })
    }
}
module.exports = postMeal