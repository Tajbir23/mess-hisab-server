const userModel = require("../../models/userSchema")

const getUserData = async(req, res) => {
    const { id } = req.user
    try {
        const user = await userModel.findById(id).select('-password')
        if(user){
            return res.status(200).send({message: "User data", user})
        } else {
            return res.status(400).send({message: "User not found"})
        }
    } catch (error) {
        res.send(error)
        console.error(error)
    }
}

module.exports = getUserData