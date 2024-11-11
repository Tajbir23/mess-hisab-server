const userModel = require("../../models/userSchema")

const resetDailyMeal = async() => {
    await userModel.updateMany({todayBreakfast: false, todayDinner: false, todayExtraCost: false})
}
module.exports = resetDailyMeal