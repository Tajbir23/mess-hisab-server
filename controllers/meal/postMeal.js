const mealModel = require("../../models/mealSchema")
const userModel = require("../../models/userSchema")

const postMeal = async(req, res) => {
    const body = req.body
    const {id} = req.user
    const date = new Date().toISOString().slice(0,10)
    try {

        if(body.breakfast){
            await mealModel.updateOne({user: id, date}, {$set : {breakfast: body.breakfast}, $setOnInsert: {user: id, date}},{upsert: true, new: true})
            await userModel.findByIdAndUpdate(id, {$set: {todayBreakfast: true}, $inc: {mealBalance: -body.breakfast, rice: -0.25}})
        }
        if(body.dinner){
            await mealModel.updateOne({user: id, date: date}, {$set: {dinner: body.dinner}, $setOnInsert: {user: id, date}},{upsert: true, new: true})
            await userModel.findByIdAndUpdate(id, {$set: {todayDinner: true}, $inc: {mealBalance: -body.dinner, rice: -0.25}})
        }
        if(body.extraCost){
            await mealModel.updateOne({user: id, date: date}, {$set: {extraCost: body.extraCost}, $setOnInsert: {user: id, date}},{upsert: true, new: true})
            await userModel.findByIdAndUpdate(id, {$set: {todayExtraCost: true}, $inc: {mealBalance: -body.extraCost}})
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