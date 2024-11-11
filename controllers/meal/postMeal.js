const mealModel = require("../../models/mealSchema")
const userModel = require("../../models/userSchema")

const postMeal = async(req, res) => {
    const body = req.body
    const {id} = req.user
    const date = new Date().toISOString().slice(0,10)
    try {
        if(body.breakfast){
            await mealModel.updateOne({user: id, date}, {$set : {breakfast: body.breakfast}, $setOnInsert: {user: id, date}},{upsert: true, new: true})
            await userModel.findByIdAndUpdate(id, {todayBreakfast: true})
        }
        if(body.dinner){
            await mealModel.updateOne({user: id, date: date}, {$set: {dinner: body.dinner}, $setOnInsert: {user: id, date}},{upsert: true, new: true})
            await userModel.findByIdAndUpdate(id, {todayDinner: true})
        }
        if(body.extraCost){
            await mealModel.updateOne({user: id, date: date}, {$set: {extraCost: body.extraCost}, $setOnInsert: {user: id, date}},{upsert: true, new: true})
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