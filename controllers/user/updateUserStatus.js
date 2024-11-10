const userModel = require("../../models/userSchema")

const updateUserStatus = async(req, res) => {
    const {id} = req.params
    const {status} = req.body
    console.log("updateUserStatus 6", req.body)
    try {
        await userModel.findByIdAndUpdate(id, {status})
        res.status(200).send({message: "User status updated successfully"})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
module.exports = updateUserStatus