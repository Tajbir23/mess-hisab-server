const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: [true, "Please enter your phone number"],
        unique: true,
        validate: {
            validator: function (v) {
                return /^(?:\+880|880)?1[3-9]\d{8}$/.test(v); 
            },
            message: "Please enter a valid phone number"
        }
    },
    password: {
        type: String,
        required: [true, "Please enter your password"]
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
    },
    status: {
        type: String,
        default: "pending"
    },
    role: {
        type: String,
        default: "user"
    }
},
    {
        timestamps: true
    })

// userSchema.index({ phone: 1 }, { unique: true })

const userModel = model('users', userSchema)

module.exports = userModel