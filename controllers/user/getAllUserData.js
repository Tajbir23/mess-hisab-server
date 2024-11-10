const userModel = require("../../models/userSchema")

const getAllUserData = async(req, res) => {
    try {
        const users = await userModel.find().select("-password")
        
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
module.exports = getAllUserData