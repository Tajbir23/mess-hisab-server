const { Schema, model } = require("mongoose");

const notificationSchema = new Schema({
    message: {
        type: String,
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
},{timestamps: true})

const notificationModel = model('notifications', notificationSchema)

module.exports = notificationModel