const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    todayBreakfast: {
        type: Boolean,
        default: false
    },
    todayDinner: {
        type: Boolean,
        default: false
    },
    todayExtraCost: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

const userModel = model('users', userSchema)

module.exports = userModel