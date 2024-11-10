const userModel = require("../../models/userSchema")

const updateUserRole = async (req, res) => {
    const { id } = req.params
    const { role } = req.body
    try {
        if(role === "manager"){
            await userModel.findOneAndUpdate({role: "manager"}, {role: "user"})
        }
        const user = await userModel.findByIdAndUpdate(id, {role}, {new: true})
        if(user){
            return res.status(200).send({message: "User role updated", user})
        } else {
            return res.status(400).send({message: "User not found"})
        }
    } catch (error) {
        res.send(error)
        console.error(error)
    }
}
module.exports = updateUserRole