const { Schema, model } = require("mongoose");

const mealSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    breakfast: {
        type: Number,
        default: 0
    },
    dinner: {
        type: Number,
        default: 0
    },
    extraCost: {
        type: Number,
        default: 0
    },
    report: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: "none"
    },
    reportMessage: {
        type: String,
    },
    date: {
        type: String,
        default: new Date().toISOString().slice(0,10)
    }
},
    {
        timestamps: true
    })

const mealModel = model('meals', mealSchema)

module.exports = mealModel