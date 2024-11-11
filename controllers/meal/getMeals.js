const mealModel = require("../../models/mealSchema");

const getMeals = async (req, res) => {
    const { fromDate, toDate } = req.query;
    
    let query = {};

    if (fromDate && toDate) {
        query.date = { $gte: fromDate, $lte: toDate };
    } else {
        const dateTenDaysAgo = new Date();
        dateTenDaysAgo.setDate(dateTenDaysAgo.getDate() - 10);
        const dateTenDaysAgoString = dateTenDaysAgo.toISOString().slice(0, 10);
        query.date = { $gte: dateTenDaysAgoString };
    }

    try {
        
        const meals = await mealModel
            .find(query)
            .populate("user", "-password")
            .sort({ date: -1 });

        res.status(200).send(meals);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Server Error"
        });
    }
};

module.exports = getMeals;
